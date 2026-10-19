(function(){"use strict";var o=`import math  # @ 提供角度、三角函数和几何计算。\r
import time  # @ 统计算法计算时间。\r
import numpy as np  # @ 用 NumPy 数组表示图像并执行矩阵运算。\r
\r
\r
def clamp(values):  # @ 将任意数值转换为可显示的八位像素。\r
    return np.clip(np.rint(values), 0, 255).astype(np.uint8)  # @ 四舍五入后限制在 0～255，再转为无符号整数。\r
\r
\r
def gray_values(source):  # @ 从 RGBA 图像提取浮点亮度矩阵。\r
    return source[..., :3].astype(float) @ np.array([0.299, 0.587, 0.114])  # @ 最后一维的 RGB 与亮度权重做内积。\r
\r
\r
def gray_image(values, normalize=False):  # @ 将二维实数矩阵转换为不透明 RGBA 灰度图。\r
    values = np.asarray(values, dtype=float)  # @ 保留中间计算的浮点精度。\r
    if normalize:  # @ 频谱与梯度可选择按数值范围归一化。\r
        low, high = float(values.min()), float(values.max())  # @ 查找显示范围两端。\r
        values = (values - low) * 255 / (high - low if high > low else 1)  # @ 将最小值映射到黑，最大值映射到白，常数矩阵避免除零。\r
    gray = clamp(values)  # @ 统一量化为 8 位灰度。\r
    return np.stack([gray, gray, gray, np.full_like(gray, 255)], axis=-1)  # @ 堆叠三个相同颜色通道和不透明 Alpha 通道。\r
\r
\r
def grayscale(source, params):  # @ 使用加权法或平均法进行灰度化。\r
    rgb = source[..., :3].astype(float)  # @ 读取全部 RGB 像素并转为浮点数。\r
    values = rgb.mean(axis=-1) if params['method'] == 'average' else gray_values(source)  # @ 平均法等权组合三个通道，加权法采用人眼亮度权重。\r
    output = gray_image(values)  # @ 把灰度矩阵转换为可显示图像。\r
    output[..., 3] = source[..., 3]  # @ 保留原图的透明度。\r
    return output  # @ 返回 RGBA 灰度图像。\r
\r
\r
def threshold(source, params):  # @ 按设定阈值将图像分成黑白两类。\r
    values = gray_values(source)  # @ 彩色输入先转换为加权灰度。\r
    return gray_image(np.where(values > params['threshold'], 255, 0))  # @ 严格大于阈值的像素取白色，其余取黑色。\r
\r
\r
def quantize(source, params):  # @ 将图像亮度量化为指定的灰度级数。\r
    levels = 2 ** int(params['bits'])  # @ n 位量化具有 2 的 n 次方个灰度级。\r
    bins = np.floor(gray_values(source) * (levels - 1) / 255 + 0.5)  # @ 将灰度映射到最近的离散级别。\r
    return gray_image(bins * 255 / (levels - 1))  # @ 将离散级别重新映射到显示亮度。\r
\r
\r
def brightness(source, params):  # @ 对每个颜色分量执行线性点运算。\r
    output = source.copy()  # @ 复制输入，避免覆盖原图。\r
    output[..., :3] = clamp(source[..., :3].astype(float) * params['gain'] + params['offset'])  # @ 增益调节幅度，偏移移动亮度，越界结果饱和截断。\r
    return output  # @ 返回亮度调整后的图像，Alpha 保持原值。\r
\r
\r
def rgb_to_hsv(rgb):  # @ 将整幅图像的 RGB 转换为归一化 HSV。\r
    rgb = np.asarray(rgb, dtype=float) / 255  # @ 将颜色值归一化到 0～1。\r
    maximum, minimum = rgb.max(axis=-1), rgb.min(axis=-1)  # @ 求每个像素的最大和最小通道。\r
    delta = maximum - minimum  # @ 通道差值衡量彩度。\r
    safe = np.where(delta == 0, 1, delta)  # @ 为灰色像素避免色相计算除零。\r
    red = ((rgb[..., 1] - rgb[..., 2]) / safe) % 6  # @ 红色主导时根据绿蓝差值确定色相。\r
    green = (rgb[..., 2] - rgb[..., 0]) / safe + 2  # @ 绿色主导时将色相移动到第二扇区。\r
    blue = (rgb[..., 0] - rgb[..., 1]) / safe + 4  # @ 蓝色主导时将色相移动到第三扇区。\r
    hue = np.where(maximum == rgb[..., 0], red, np.where(maximum == rgb[..., 1], green, blue)) / 6  # @ 按主导通道选择色相并归一化。\r
    hue = np.where(delta == 0, 0, hue)  # @ 无彩色的色相约定为零。\r
    saturation = np.divide(delta, maximum, out=np.zeros_like(delta), where=maximum != 0)  # @ 饱和度为彩度除以明度，黑色取零。\r
    return np.stack([hue, saturation, maximum], axis=-1)  # @ 按 H、S、V 顺序组织结果。\r
\r
\r
def hsv_to_rgb(hsv):  # @ 将归一化 HSV 矩阵恢复为 RGB。\r
    hue, saturation, value = np.moveaxis(np.asarray(hsv, dtype=float), -1, 0)  # @ 分离三个颜色分量。\r
    sector = np.mod(hue, 1) * 6  # @ 将色相换算为六个扇区的位置。\r
    chroma = value * saturation  # @ 彩度由明度和饱和度决定。\r
    cross = chroma * (1 - np.abs(sector % 2 - 1))  # @ 根据扇区内部位置计算第二颜色分量。\r
    zero = np.zeros_like(chroma)  # @ 准备六扇区中的零颜色分量。\r
    choices = np.stack([np.stack(v, axis=-1) for v in [(chroma, cross, zero), (cross, chroma, zero), (zero, chroma, cross), (zero, cross, chroma), (cross, zero, chroma), (chroma, zero, cross)]])  # @ 构造六个扇区对应的 RGB 组合。\r
    indices = np.floor(sector).astype(int)  # @ 得到每个像素所在的扇区编号。\r
    selected = np.take_along_axis(choices, indices[None, ..., None], axis=0)[0]  # @ 为每个像素选择其扇区的颜色组合。\r
    return clamp((selected + (value - chroma)[..., None]) * 255)  # @ 加回明度偏移并恢复 8 位 RGB。\r
\r
\r
def color_space_values(rgb, space):  # @ 计算选定颜色空间中的真实分量。\r
    rgb = np.asarray(rgb, dtype=float)  # @ 颜色矩阵以浮点表示。\r
    red, green, blue = np.moveaxis(rgb, -1, 0)  # @ 分离红、绿、蓝通道。\r
    if space == 'HSV':  # @ HSV 分离色相、饱和度和明度。\r
        return rgb_to_hsv(rgb)  # @ 使用统一的 HSV 变换。\r
    if space == 'HSI':  # @ HSI 用平均强度与色相、饱和度表示颜色。\r
        total = red + green + blue  # @ 三通道和用于计算平均强度。\r
        denominator = np.sqrt((red - green) ** 2 + (red - blue) * (green - blue))  # @ 计算色相余弦公式的分母。\r
        cosine = np.divide(red - (green + blue) / 2, denominator, out=np.ones_like(red), where=denominator != 0)  # @ 灰色像素约定余弦值为 1，避免除零。\r
        angle = np.arccos(np.clip(cosine, -1, 1))  # @ 限制反余弦输入以消除浮点误差。\r
        hue = np.where(blue > green, 2 * np.pi - angle, angle) / (2 * np.pi)  # @ 根据蓝绿关系确定色环的正确半周。\r
        saturation = 1 - np.divide(3 * rgb.min(axis=-1), total, out=np.ones_like(total), where=total != 0)  # @ 黑色的饱和度取零。\r
        return np.stack([hue, saturation, total / 765], axis=-1)  # @ 返回归一化的色相、饱和度和平均强度。\r
    if space == 'CMY':  # @ CMY 为归一化 RGB 的补色。\r
        return 1 - rgb / 255  # @ 分别对红绿蓝取补。\r
    matrices = {'YCbCr': [[0.299, 0.587, 0.114], [-0.168736, -0.331264, 0.5], [0.5, -0.418688, -0.081312]], 'YIQ': [[0.299, 0.587, 0.114], [0.596, -0.274, -0.322], [0.211, -0.523, 0.312]], 'YUV': [[0.299, 0.587, 0.114], [-0.14713, -0.28886, 0.436], [0.615, -0.51499, -0.10001]]}  # @ 三种亮度与色度空间使用各自的线性变换矩阵。\r
    if space in matrices:  # @ 处理线性色彩模型。\r
        result = rgb @ np.asarray(matrices[space]).T / 255  # @ 对每个像素做颜色矩阵乘法。\r
        if space == 'YCbCr':  # @ 全范围 YCbCr 的色度分量包含中心偏置。\r
            result[..., 1:] += 128 / 255  # @ 将 Cb、Cr 的中性值设置为 128。\r
        return result  # @ 返回真实的亮度和色度分量。\r
    normalized = rgb / 255  # @ 进入需要线性光强的 XYZ/Lab 分支。\r
    linear = np.where(normalized <= 0.04045, normalized / 12.92, ((normalized + 0.055) / 1.055) ** 2.4)  # @ 解除 sRGB 的非线性编码。\r
    xyz = linear @ np.array([[0.4124564, 0.3575761, 0.1804375], [0.2126729, 0.7151522, 0.072175], [0.0193339, 0.119192, 0.9503041]]).T  # @ 在 D65 白点约定下计算相对三刺激值。\r
    if space == 'XYZ':  # @ XYZ 分量可直接返回。\r
        return xyz  # @ 保留三刺激值的真实量纲。\r
    relative = xyz / np.array([0.95047, 1, 1.08883])  # @ 将 XYZ 除以 D65 参考白点。\r
    transformed = np.where(relative > 216 / 24389, np.cbrt(relative), relative * 841 / 108 + 4 / 29)  # @ 应用 CIELAB 分段函数。\r
    fx, fy, fz = np.moveaxis(transformed, -1, 0)  # @ 分离三个变换后的刺激值。\r
    return np.stack([116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)], axis=-1)  # @ 得到 L*、a*、b* 分量。\r
\r
\r
def color_space_inverse(values, space):  # @ 将指定空间的分量恢复到 RGB。\r
    values = np.asarray(values, dtype=float)  # @ 确保计算使用浮点矩阵。\r
    if space == 'HSV':  # @ HSV 使用六扇区恢复颜色。\r
        return hsv_to_rgb(values)  # @ 调用统一的 HSV 逆变换。\r
    if space == 'CMY':  # @ CMY 再次取补即可恢复颜色。\r
        return clamp((1 - values) * 255)  # @ 恢复 8 位 RGB。\r
    first, second, third = np.moveaxis(values, -1, 0)  # @ 分离三个输入分量。\r
    if space == 'HSI':  # @ HSI 按三个主色扇区恢复颜色。\r
        sector = np.floor(np.mod(first, 1) * 3).astype(int)  # @ 色环分为三个各占 120° 的扇区。\r
        angle = np.mod(first, 1) * 2 * np.pi - sector * 2 * np.pi / 3  # @ 求当前扇区内的相对角度。\r
        low = third * (1 - second)  # @ 最小通道由强度和饱和度确定。\r
        high = third * (1 + second * np.cos(angle) / np.cos(np.pi / 3 - angle))  # @ 主导通道通过色相关系恢复。\r
        middle = 3 * third - low - high  # @ 三通道之和应等于三倍平均强度。\r
        rgb = np.stack([np.where(sector == 0, high, np.where(sector == 1, low, middle)), np.where(sector == 0, middle, np.where(sector == 1, high, low)), np.where(sector == 0, low, np.where(sector == 1, middle, high))], axis=-1)  # @ 按所在扇区排列红、绿、蓝分量。\r
        return clamp(rgb * 255)  # @ 转为可显示的 RGB。\r
    matrices = {'YCbCr': [[0.299, 0.587, 0.114], [-0.168736, -0.331264, 0.5], [0.5, -0.418688, -0.081312]], 'YIQ': [[0.299, 0.587, 0.114], [0.596, -0.274, -0.322], [0.211, -0.523, 0.312]], 'YUV': [[0.299, 0.587, 0.114], [-0.14713, -0.28886, 0.436], [0.615, -0.51499, -0.10001]]}  # @ 使用与正变换相同的矩阵作为求逆依据。\r
    if space in matrices:  # @ 对线性空间执行矩阵逆变换。\r
        centered = values - np.array([0, 128 / 255, 128 / 255]) if space == 'YCbCr' else values  # @ YCbCr 需先去掉色度偏置。\r
        return clamp(centered @ np.linalg.inv(matrices[space]).T * 255)  # @ 使用精确逆矩阵减少往返误差。\r
    xyz = values  # @ XYZ 输入已经是三刺激值。\r
    if space == 'Lab':  # @ Lab 需先恢复参考白点下的 XYZ。\r
        fy = (first + 16) / 116  # @ 由 L* 恢复亮度变换值。\r
        transformed = np.stack([fy + second / 500, fy, fy - third / 200], axis=-1)  # @ 根据 a*、b* 恢复另外两个变换分量。\r
        xyz = np.where(transformed > 6 / 29, transformed ** 3, (transformed - 4 / 29) * 108 / 841) * [0.95047, 1, 1.08883]  # @ 应用分段逆函数并乘回 D65 白点。\r
    linear = xyz @ np.array([[3.2404542, -1.5371385, -0.4985314], [-0.969266, 1.8760108, 0.041556], [0.0556434, -0.2040259, 1.0572252]]).T  # @ 将三刺激值恢复为线性 RGB。\r
    encoded = np.where(linear <= 0.0031308, 12.92 * linear, 1.055 * np.maximum(linear, 0) ** (1 / 2.4) - 0.055)  # @ 恢复 sRGB 编码，负值分支不执行分数次幂。\r
    return clamp(encoded * 255)  # @ 限制显示色域并转换为八位颜色。\r
\r
\r
def color_space(source, params):  # @ 显示颜色空间分量或执行往返恢复。\r
    values = color_space_values(source[..., :3], params['space'])  # @ 从输入 RGB 计算目标空间坐标。\r
    channel = int(params['channel'])  # @ -1 表示往返重建，0～2 表示单独分量。\r
    if channel == -1:  # @ 重建需使用真实颜色空间数值。\r
        output = source.copy()  # @ 复制原始尺寸及 Alpha。\r
        output[..., :3] = color_space_inverse(values, params['space'])  # @ 将目标空间坐标逆变换为 RGB。\r
        return output  # @ 返回颜色往返结果。\r
    ranges = {'Lab': [(0, 100), (-128, 127), (-128, 127)], 'XYZ': [(0, 0.95047), (0, 1), (0, 1.08883)], 'YIQ': [(0, 1), (-0.596, 0.596), (-0.523, 0.523)], 'YUV': [(0, 1), (-0.436, 0.436), (-0.615, 0.615)]}  # @ 为不同量纲的分量设置显示范围。\r
    low, high = ranges.get(params['space'], [(0, 1)] * 3)[channel]  # @ HSV 等归一化空间使用 0～1。\r
    output = gray_image((values[..., channel] - low) / (high - low) * 255)  # @ 将目标分量映射到灰度显示。\r
    output[..., 3] = source[..., 3]  # @ 继承输入透明度。\r
    return output  # @ 返回颜色分量图。\r
\r
\r
def channel_view(source, params):  # @ 查看单个 RGB 通道或交换红蓝通道。\r
    output = source.copy()  # @ 创建不覆盖输入的结果。\r
    if params['channel'] == 'swap':  # @ 通道交换改变颜色组合。\r
        output[..., :3] = source[..., [2, 1, 0]]  # @ 把红蓝通道的位置互换。\r
    else:  # @ 单通道以灰度显示其强度。\r
        output[..., :3] = source[..., int(params['channel']), None]  # @ 将选定通道广播到三个颜色通道。\r
    return output  # @ 返回通道图或交换结果。\r
\r
\r
def recolor(source, params):  # @ 在 HSV 空间局部替换指定颜色。\r
    hsv = rgb_to_hsv(source[..., :3])  # @ 将图像转为便于按色相筛选的空间。\r
    distance = np.abs(hsv[..., 0] - params['hue'] / 360)  # @ 求像素与目标色相的直接距离。\r
    distance = np.minimum(distance, 1 - distance)  # @ 色相是圆周量，使用跨越零点的最短距离。\r
    mask = (distance <= params['tolerance'] / 360) & (hsv[..., 1] > 0.15)  # @ 筛选色相范围内且有足够饱和度的像素。\r
    hsv[..., 0][mask] = params['targetHue'] / 360  # @ 只修改色相，保留明度和饱和度。\r
    output = source.copy()  # @ 保留原尺寸及 Alpha 通道。\r
    output[..., :3] = hsv_to_rgb(hsv)  # @ 将修改后的 HSV 转回 RGB。\r
    return output  # @ 返回局部换色图像。\r
\r
\r
def pseudocolor(source, params):  # @ 通过分段查表或连续编码将灰度变为伪彩色。\r
    values = gray_values(source) / 255  # @ 提取归一化亮度。\r
    if params['palette'] == 'density':  # @ 密度分割为每段灰度指定一种颜色。\r
        palette = np.array([[30, 32, 30], [93, 193, 195], [180, 108, 186], [67, 119, 98], [210, 170, 90], [215, 95, 75], [245, 210, 155], [255, 255, 255]])  # @ 定义八段颜色查找表。\r
        rgb = palette[np.minimum(7, np.floor(values * 8).astype(int))]  # @ 按灰度所在区间查表。\r
    elif params['palette'] == 'heat':  # @ 热色编码依次提高红绿蓝亮度。\r
        rgb = clamp((values[..., None] * 3 - np.arange(3)) * 255)  # @ 用三个错开的分段线性函数生成热色。\r
    else:  # @ 连续彩虹映射从蓝色过渡到绿色与红色。\r
        rgb = hsv_to_rgb(np.stack([(1 - values) * 2 / 3, np.ones_like(values), np.ones_like(values)], axis=-1))  # @ 灰度控制色相，饱和度与明度固定为 1。\r
    return np.concatenate([clamp(rgb), source[..., 3:4]], axis=-1)  # @ 组合伪彩色和原图 Alpha。\r
\r
\r
def boundary_indices(indices, length, mode='replicate'):  # @ 将图像外的坐标映射为指定的边界延拓。\r
    valid = (indices >= 0) & (indices < length)  # @ 记录哪些坐标位于原图范围内。\r
    if mode == 'reflect':  # @ 对称反射在边缘位置重复一次像素。\r
        wrapped = np.mod(indices, 2 * length)  # @ 将任意正负坐标归入反射周期。\r
        indices = np.where(wrapped < length, wrapped, 2 * length - wrapped - 1)  # @ 把后半周期折回图像。\r
    else:  # @ 复制与零填充先取得合法的访问坐标。\r
        indices = np.clip(indices, 0, length - 1)  # @ 复制策略将坐标截到最近边缘。\r
    return indices.astype(int), valid if mode == 'zero' else np.ones_like(valid)  # @ 零填充额外返回有效掩膜，其余策略全部有效。\r
\r
\r
def cubic_weight(distance):  # @ 计算参数 a=-0.5 的 Keys 三次插值核。\r
    distance = np.abs(distance)  # @ 三次核关于原点对称。\r
    return np.where(distance <= 1, 1.5 * distance ** 3 - 2.5 * distance ** 2 + 1, np.where(distance < 2, -0.5 * distance ** 3 + 2.5 * distance ** 2 - 4 * distance + 2, 0))  # @ 在两个支撑区间内使用不同多项式，范围外权重为零。\r
\r
\r
def sample(source, x, y, method='bilinear', boundary='replicate'):  # @ 在整组非整数坐标上采样四个图像通道。\r
    if method == 'nearest':  # @ 最近邻只访问最接近的整数位置。\r
        xx, vx = boundary_indices(np.floor(x + 0.5), source.shape[1], boundary)  # @ 对水平坐标取整并处理边界。\r
        yy, vy = boundary_indices(np.floor(y + 0.5), source.shape[0], boundary)  # @ 对垂直坐标取整并处理边界。\r
        return source[yy, xx].astype(float) * (vx & vy)[..., None]  # @ 一次读取所有 RGBA 值，零边界按掩膜置零。\r
    x0, y0 = np.floor(x).astype(int), np.floor(y).astype(int)  # @ 找到每个采样点左上方的整数坐标。\r
    dx, dy = x - x0, y - y0  # @ 计算水平、垂直方向的小数距离。\r
    output = np.zeros(np.broadcast_shapes(x.shape, y.shape) + (4,), dtype=float)  # @ 为所有采样点分配浮点 RGBA 结果。\r
    offsets = range(2) if method == 'bilinear' else range(-1, 3)  # @ 双线性访问 2×2 邻域，双三次访问 4×4 邻域。\r
    for j in offsets:  # @ 遍历采样点附近的行。\r
        for i in offsets:  # @ 遍历采样点附近的列。\r
            xx, vx = boundary_indices(x0 + i, source.shape[1], boundary)  # @ 处理水平方向边界。\r
            yy, vy = boundary_indices(y0 + j, source.shape[0], boundary)  # @ 处理垂直方向边界。\r
            weight = (dx if i else 1 - dx) * (dy if j else 1 - dy) if method == 'bilinear' else cubic_weight(i - dx) * cubic_weight(j - dy)  # @ 计算可分离的二维插值权重。\r
            output += source[yy, xx] * (weight * vx * vy)[..., None]  # @ 按权重累加所有颜色及 Alpha 分量。\r
    return output  # @ 返回尚未截断的插值结果。\r
\r
\r
def resize(source, params):  # @ 通过像素中心对齐和后向映射缩放图像。\r
    height, width = source.shape[:2]  # @ 读取输入尺寸。\r
    target_width = int(params.get('width') or max(1, math.floor(width * params['scaleX'] + 0.5)))  # @ 指定宽度优先，否则按水平倍率计算。\r
    target_height = int(params.get('height') or max(1, math.floor(height * params['scaleY'] + 0.5)))  # @ 指定高度优先，否则按垂直倍率计算。\r
    if target_width * target_height > 4000000 or max(target_width, target_height) > 4096:  # @ 分配数组前限制输出内存与单边长度。\r
        raise ValueError('输出过大，请减小缩放比例。')  # @ 给出可操作的尺寸错误提示。\r
    y, x = np.indices((target_height, target_width), dtype=float)  # @ 创建目标像素网格。\r
    sx, sy = (x + 0.5) * width / target_width - 0.5, (y + 0.5) * height / target_height - 0.5  # @ 将目标像素中心反算到输入坐标。\r
    return clamp(sample(source, sx, sy, params.get('interpolation', 'bilinear')))  # @ 按选定插值采样并量化结果。\r
\r
\r
def geometry(source, params):  # @ 统一实现平移、旋转、镜像、错切和转置。\r
    height, width = source.shape[:2]  # @ 读取图像高宽。\r
    mode, angle = params['mode'], np.deg2rad(params.get('angle', 0))  # @ 读取类型并把旋转角换为弧度。\r
    matrix = np.eye(2)  # @ 初始线性变换为单位矩阵。\r
    if mode == 'rotate':  # @ 图像 y 轴向下，视觉逆时针采用这一符号约定。\r
        matrix = np.array([[np.cos(angle), np.sin(angle)], [-np.sin(angle), np.cos(angle)]])  # @ 生成二维旋转矩阵。\r
    elif mode == 'shear':  # @ 错切把一个方向的位置加入另一个方向。\r
        matrix = np.array([[1, params['shearX']], [params['shearY'], 1]])  # @ 设置水平与垂直错切系数。\r
    elif mode in ('horizontal', 'vertical'):  # @ 镜像将指定坐标方向取反。\r
        matrix = np.diag([-1, 1] if mode == 'horizontal' else [1, -1])  # @ 水平镜像反转 x，垂直镜像反转 y。\r
    elif mode == 'transpose':  # @ 转置交换坐标轴。\r
        matrix = np.array([[0, 1], [1, 0]])  # @ 用交换矩阵实现 x 与 y 互换。\r
    if abs(np.linalg.det(matrix)) < 1e-6:  # @ 后向映射需要矩阵可逆。\r
        raise ValueError('错切矩阵不可逆，请调整参数。')  # @ 拒绝奇异变换。\r
    center = np.array([(width - 1) / 2, (height - 1) / 2])  # @ 以图像像素中心的中点作为变换中心。\r
    shift = center - matrix @ center  # @ 先平移到中心，再变换并移回。\r
    if mode == 'translate':  # @ 平移额外加入两个方向的位移。\r
        shift += [params['dx'], params['dy']]  # @ 将水平和垂直位移写入偏移。\r
    corners = np.array([[-0.5, -0.5], [width - 0.5, -0.5], [-0.5, height - 0.5], [width - 0.5, height - 0.5]]) @ matrix.T + shift  # @ 变换像素外边界四角以确定完整画布。\r
    origin, target = np.zeros(2), np.array([width, height])  # @ 默认保持原画布。\r
    if params.get('expand') and mode not in ('horizontal', 'vertical'):  # @ 选择扩展时包含全部变换后内容。\r
        origin = corners.min(axis=0) + 0.5  # @ 新图第一个像素中心对齐到边界内半像素。\r
        target = np.maximum(1, np.ceil(np.ptp(corners, axis=0) - 1e-9)).astype(int)  # @ 通过边界跨度计算新尺寸，并消除浮点误差。\r
        if mode == 'translate':  # @ 平移画布同时包含原位置和新位置。\r
            origin, target = np.minimum(0, [params['dx'], params['dy']]), np.array([width + abs(params['dx']), height + abs(params['dy'])], dtype=int)  # @ 防止自动居中抵消平移效果。\r
    if np.prod(target) > 4000000:  # @ 避免异常参数造成过大的画布。\r
        raise ValueError('变换后的画布超过 400 万像素，请减小参数。')  # @ 提示用户缩小变换范围。\r
    y, x = np.indices((int(target[1]), int(target[0])), dtype=float)  # @ 创建输出坐标网格。\r
    mapped = (np.stack([x, y], axis=-1) + origin - shift) @ np.linalg.inv(matrix).T  # @ 通过逆矩阵查找输入位置。\r
    sx, sy = mapped[..., 0], mapped[..., 1]  # @ 分离输入水平和垂直坐标。\r
    inside = (sx >= -0.500001) & (sy >= -0.500001) & (sx < width - 0.499999) & (sy < height - 0.499999)  # @ 判断采样点是否位于输入覆盖范围内。\r
    values = sample(source, sx, sy, params.get('interpolation', 'bilinear'))  # @ 对有效位置执行指定插值。\r
    return clamp(np.where(inside[..., None], values, 255))  # @ 图像外区域填不透明白色，内部保留采样结果。\r
\r
\r
def neighborhood(source, params):  # @ 实现相关、卷积、均值与中值邻域运算。\r
    size = int(params.get('size', 3))  # @ 读取奇数邻域尺寸。\r
    radius = size // 2  # @ 窗口中心到边界的距离。\r
    mode = {'replicate': 'edge', 'reflect': 'symmetric', 'zero': 'constant'}[params['boundary']]  # @ 将教学边界策略对应到 NumPy 填充模式。\r
    padded = np.pad(source[..., :3].astype(float), ((radius, radius), (radius, radius), (0, 0)), mode=mode)  # @ 仅对 RGB 的空间边界扩展，通道维不扩展。\r
    windows = np.lib.stride_tricks.sliding_window_view(padded, (size, size), axis=(0, 1))  # @ 获取每个像素的邻域视图，不复制整幅邻域数据。\r
    if params['operation'] == 'median':  # @ 中值是排序统计，不是线性卷积。\r
        values = np.median(windows, axis=(-2, -1))  # @ 对每个颜色通道独立取邻域中位数。\r
    else:  # @ 相关、卷积和均值均可写为模板加权和。\r
        kernel = np.asarray(params.get('kernel', np.ones(size * size) / (size * size))).reshape(size, size)  # @ 自定义模板优先，默认生成均值模板。\r
        if params['operation'] == 'convolution':  # @ 卷积相对相关需要翻转模板。\r
            kernel = kernel[::-1, ::-1]  # @ 同时反转行列，实现旋转 180°。\r
        values = np.einsum('hwcij,ij->hwc', windows, kernel) + params.get('bias', 0)  # @ 对邻域乘模板并累加，偏移可显示有符号响应。\r
    output = source.copy()  # @ 保留输入尺寸与透明度。\r
    output[..., :3] = clamp(values)  # @ 将运算结果写入三个颜色通道。\r
    return output  # @ 返回邻域处理图像。\r
\r
\r
def sobel(source, params):  # @ 用两个方向的 Sobel 模板计算亮度梯度。\r
    mode = {'replicate': 'edge', 'reflect': 'symmetric', 'zero': 'constant'}[params['boundary']]  # @ 选择与其他邻域运算相同的边界约定。\r
    padded = np.pad(gray_values(source), 1, mode=mode)  # @ 灰度图四周补一个像素。\r
    windows = np.lib.stride_tricks.sliding_window_view(padded, (3, 3))  # @ 构造每个位置的 3×3 邻域。\r
    horizontal = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]])  # @ 水平方向 Sobel 差分模板。\r
    gx = np.einsum('hwij,ij->hw', windows, horizontal)  # @ 计算沿 x 方向的亮度变化。\r
    gy = np.einsum('hwij,ij->hw', windows, horizontal.T)  # @ 转置模板计算沿 y 方向的亮度变化。\r
    return gray_image(np.hypot(gx, gy), normalize=True)  # @ 两方向合成为梯度幅值，再归一化显示。\r
\r
\r
def histogram(source):  # @ 统计图像的 256 档灰度频数。\r
    values = clamp(gray_values(source))  # @ 将加权亮度四舍五入到灰度级。\r
    return np.bincount(values.ravel(), minlength=256)  # @ 展平矩阵后累计每个灰度级的像素数量。\r
\r
\r
def equalize(source, params=None):  # @ 通过累积分布函数均衡灰度直方图。\r
    bins = histogram(source)  # @ 统计原始灰度分布。\r
    cdf = np.cumsum(bins)  # @ 计算从暗到亮的累积频数。\r
    minimum, total = cdf[np.flatnonzero(bins)[0]], source.shape[0] * source.shape[1]  # @ 找到首个非空累积值与像素总数。\r
    if minimum == total:  # @ 常数图无法通过重分布增加对比度。\r
        return gray_image(gray_values(source))  # @ 保持常数图原有灰度。\r
    table = np.maximum(0, (cdf - minimum) * 255 / (total - minimum))  # @ 去掉最低累积偏置，得到 0～255 的映射表。\r
    return gray_image(table[clamp(gray_values(source))])  # @ 用灰度索引查表，生成均衡化结果。\r
\r
\r
def align_second(source, second):  # @ 把第二幅图像对齐到主图的像素网格。\r
    if second is None:  # @ 双图运算需要明确的第二输入。\r
        raise ValueError('请先上传第二幅图像。')  # @ 缺少输入时提示用户补充。\r
    return resize(second, {'width': source.shape[1], 'height': source.shape[0], 'interpolation': 'bilinear'})  # @ 使用双线性插值拉伸对齐，宽高比可能变化。\r
\r
\r
def arithmetic(source, params, second=None):  # @ 执行双图代数及八位按位逻辑运算。\r
    other = align_second(source, second)  # @ 先统一两幅图像的尺寸。\r
    first, last = source[..., :3].astype(float), other[..., :3].astype(float)  # @ 转为浮点，避免加减运算提前发生整数溢出。\r
    operation = params['operation']  # @ 读取选择的运算类型。\r
    if operation == 'add':  # @ 加法用于亮度叠加。\r
        values = first + last  # @ 先求和，输出时再饱和截断。\r
    elif operation == 'blend':  # @ 加权和用于图像融合。\r
        values = (1 - params['alpha']) * first + params['alpha'] * last  # @ alpha 控制第二幅图的贡献。\r
    elif operation == 'subtract':  # @ 普通差值区分变化方向。\r
        values = first - last  # @ 负值在输出时截断为零。\r
    elif operation == 'difference':  # @ 绝对差只保留变化幅度。\r
        values = np.abs(first - last)  # @ 对差值取绝对值。\r
    elif operation == 'multiply':  # @ 归一化乘法可作为灰度掩膜。\r
        values = first * last / 255  # @ 将第二幅图的颜色值视为 0～1 的权重。\r
    elif operation == 'divide':  # @ 归一化除法生成比率图。\r
        values = np.divide(first * 255, last, out=np.full_like(first, 255), where=last != 0)  # @ 零分母显式取最大灰度，避免无穷值。\r
    else:  # @ 逻辑分支按颜色分量的每个二进制位运算。\r
        functions = {'and': np.bitwise_and, 'or': np.bitwise_or, 'xor': np.bitwise_xor}  # @ 建立按位与、或、异或的分派表。\r
        values = functions[operation](source[..., :3], other[..., :3])  # @ 对两个 uint8 RGB 数组执行逐位逻辑操作。\r
    return np.concatenate([clamp(values), np.full(source.shape[:2] + (1,), 255, dtype=np.uint8)], axis=-1)  # @ 返回截断后的 RGB，并采用不透明输出。\r
\r
\r
def invert(source, params=None):  # @ 反转每个八位颜色分量。\r
    output = source.copy()  # @ 保留输入图像不变。\r
    output[..., :3] = 255 - source[..., :3]  # @ 八位按位非等价于用 255 减去原值。\r
    return output  # @ Alpha 不参与反色。\r
\r
\r
def noise_average(source, params):  # @ 模拟多个独立高斯噪声观测并求平均。\r
    random = np.random.default_rng(int(params['seed']))  # @ 固定种子使同参数实验可复现。\r
    accumulator = np.zeros(source.shape[:2] + (3,), dtype=float)  # @ 浮点累加避免中途截断带来偏差。\r
    for frame in range(int(params['frames'])):  # @ 生成设定数量的独立观测。\r
        accumulator += source[..., :3] + random.normal(0, params['sigma'], accumulator.shape)  # @ 每帧加入零均值、指定标准差的高斯噪声。\r
    output = source.copy()  # @ 保留原尺寸及透明度。\r
    output[..., :3] = clamp(accumulator / params['frames'])  # @ 平均后再量化，噪声标准差约缩小为原来的 1/√N。\r
    return output  # @ 返回多帧平均结果。\r
\r
\r
def sampling_convolution(source, params):  # @ 演示补零卷积上采样和卷积后抽取下采样。\r
    factor, up = int(params['factor']), params['direction'] == 'up'  # @ 读取整数倍率与采样方向。\r
    height, width = source.shape[:2]  # @ 读取原始网格尺寸。\r
    if up:  # @ 上采样先把原像素放到更稀疏的网格。\r
        if height * width * factor ** 2 > 4000000:  # @ 检查放大后的内存需求。\r
            raise ValueError('输出过大，请减小输入尺寸或采样因子。')  # @ 避免分配过大的补零数组。\r
        grid = np.zeros((height * factor, width * factor, 3), dtype=float)  # @ 创建补零后的 RGB 网格。\r
        weights = np.zeros(grid.shape[:2], dtype=float)  # @ 有效像素掩膜用于边缘归一化。\r
        grid[::factor, ::factor] = source[..., :3]  # @ 每隔 factor 个位置插入原图像素。\r
        weights[::factor, ::factor] = 1  # @ 标记原始像素在补零网格中的位置。\r
    else:  # @ 下采样先在原网格执行低通平滑。\r
        grid = source[..., :3].astype(float)  # @ 将原 RGB 网格作为卷积输入。\r
        weights = np.ones((height, width), dtype=float)  # @ 标记全部输入像素有效。\r
    radius = factor - 1  # @ 三角核在两个方向的支撑半径。\r
    kernel = factor - np.abs(np.arange(-radius, radius + 1))  # @ 一维三角核可分离地实现二维低通或重建。\r
    for axis in (0, 1):  # @ 先沿垂直方向再沿水平方向卷积。\r
        pads = [(0, 0)] * grid.ndim; pads[axis] = (radius, radius)  # @ 设置 RGB 网格当前方向的零填充。\r
        weight_pads = [(0, 0)] * weights.ndim; weight_pads[axis] = (radius, radius)  # @ 为有效掩膜采用相同填充范围。\r
        windows = np.lib.stride_tricks.sliding_window_view(np.pad(grid, pads), len(kernel), axis=axis)  # @ 提取一维卷积窗口。\r
        grid = np.tensordot(windows, kernel, axes=([-1], [0]))  # @ 对 RGB 窗口乘三角权重并累加。\r
        windows = np.lib.stride_tricks.sliding_window_view(np.pad(weights, weight_pads), len(kernel), axis=axis)  # @ 提取有效权重的相同窗口。\r
        weights = np.tensordot(windows, kernel, axes=([-1], [0]))  # @ 统计实际参与卷积的权重总和。\r
    values = grid / np.maximum(weights[..., None], 1)  # @ 归一化有效权重，保持常数图亮度。\r
    if not up:  # @ 平滑后的下采样按整数间隔抽取。\r
        values = values[::factor, ::factor]  # @ 每个方向保留每 factor 个位置中的一个。\r
    return np.concatenate([clamp(values), np.full(values.shape[:2] + (1,), 255, dtype=np.uint8)], axis=-1)  # @ 组合 RGB 与不透明 Alpha。\r
\r
\r
def composite(source, params, second=None):  # @ 综合随机几何变换、通道交换与透明度叠加。\r
    if second is None:  # @ 合成必须提供前景图像。\r
        raise ValueError('请上传前景图，建议使用有透明背景的 PNG。')  # @ 缺少前景时停止处理。\r
    random, output = np.random.default_rng(int(params['seed'])), source.copy()  # @ 采用固定种子生成可复现的随机布局。\r
    for item in range(int(params['count'])):  # @ 生成指定数量的前景副本。\r
        scale = (0.08 + random.random() * 0.15) * min(source.shape[:2]) / max(second.shape[:2])  # @ 按背景尺寸随机确定前景比例。\r
        small = resize(second, {'scaleX': scale, 'scaleY': scale, 'interpolation': 'bilinear'})  # @ 缩小前景以控制计算量。\r
        sprite = geometry(small, {'mode': 'rotate', 'angle': random.random() * 360, 'expand': True, 'interpolation': 'bilinear'})  # @ 随机旋转并扩展画布保留完整图像。\r
        y = int(random.random() * max(1, source.shape[0] - sprite.shape[0]))  # @ 随机选择前景的垂直位置。\r
        x = int(random.random() * max(1, source.shape[1] - sprite.shape[1]))  # @ 随机选择前景的水平位置。\r
        sprite = sprite[:source.shape[0] - y, :source.shape[1] - x].copy()  # @ 当背景过小时裁去超出的前景。\r
        if random.random() > 0.5:  # @ 随机执行课件中的通道交换。\r
            sprite[..., :3] = sprite[..., [2, 1, 0]]  # @ 交换红蓝通道，保留绿色。\r
        alpha = sprite[..., 3:4].astype(float) / 255  # @ 将前景透明度转为混合权重。\r
        if params.get('removeWhite'):  # @ 可选移除旋转画布及前景的近白色背景。\r
            alpha[np.all(sprite[..., :3] > 245, axis=-1)] = 0  # @ 近白色像素视为透明。\r
        region = output[y:y + sprite.shape[0], x:x + sprite.shape[1]]  # @ 取得对应背景区域的数组视图。\r
        beta = region[..., 3:4].astype(float) / 255  # @ 读取背景透明度。\r
        combined = alpha + beta * (1 - alpha)  # @ 计算 source-over 合成的总透明度。\r
        premultiplied = sprite[..., :3] * alpha + region[..., :3] * beta * (1 - alpha)  # @ 在预乘透明度空间混合颜色。\r
        region[..., :3] = clamp(np.divide(premultiplied, combined, out=np.zeros_like(premultiplied), where=combined != 0))  # @ 除回总透明度，得到直通道 RGB。\r
        region[..., 3:4] = clamp(combined * 255)  # @ 写入合成后的 Alpha。\r
    return output  # @ 返回多图合成结果。\r
\r
\r
def fourier(source, params):  # @ 执行二维 DFT、频谱显示与理想频域滤波。\r
    values = gray_values(source)  # @ 将彩色输入转换为亮度矩阵。\r
    coefficients = np.fft.fft2(values)  # @ 使用行列可分离的快速算法计算二维 DFT。\r
    if params['view'] == 'spectrum':  # @ 幅度谱需要中心搬移和动态范围压缩。\r
        return gray_image(np.log1p(np.abs(np.fft.fftshift(coefficients))), normalize=True)  # @ 直流移到中心，取 log(1+幅值) 后归一化。\r
    if params['view'] == 'phase':  # @ 相位谱采用固定角度范围显示。\r
        return gray_image((np.angle(np.fft.fftshift(coefficients)) + np.pi) / (2 * np.pi) * 255)  # @ 将 −π～π 的相位映射到 0～255。\r
    if params['view'] in ('lowpass', 'highpass'):  # @ 滤波通过保留或舍弃指定频率系数实现。\r
        height, width = values.shape  # @ 读取频率网格尺寸。\r
        fy, fx = np.fft.fftfreq(height) * height, np.fft.fftfreq(width) * width  # @ 构造以频率格点计量的周期频率坐标。\r
        mask = np.hypot(fy[:, None], fx[None, :]) <= params['cutoff']  # @ 欧氏半径不超过阈值的部分为低通通带。\r
        coefficients *= mask if params['view'] == 'lowpass' else ~mask  # @ 低通与高通采用互补掩膜。\r
    reconstructed = np.fft.ifft2(coefficients).real  # @ 对完整或滤波后的系数做逆变换并取实部。\r
    return gray_image(reconstructed, normalize=params['view'] == 'highpass')  # @ 高通有正负响应，归一化显示；完整重建保持原灰度尺度。\r
\r
\r
def dct_matrix(length):  # @ 构造正交归一化的 DCT-II 基矩阵。\r
    frequency, position = np.arange(length)[:, None], np.arange(length)[None, :]  # @ 行表示频率，列表示空间位置。\r
    basis = np.sqrt(2 / length) * np.cos(np.pi * (2 * position + 1) * frequency / (2 * length))  # @ 计算非直流基函数的归一化余弦值。\r
    basis[0] /= np.sqrt(2)  # @ 直流分量的归一化系数改为 √(1/N)。\r
    return basis  # @ 返回正交 DCT 基。\r
\r
\r
def cosine(source, params):  # @ 展示 DCT 系数或保留低频后重建。\r
    values = gray_values(source)  # @ 提取图像亮度。\r
    rows, columns = dct_matrix(values.shape[0]), dct_matrix(values.shape[1])  # @ 为高和宽分别生成正交基。\r
    coefficients = rows @ values @ columns.T  # @ 依次沿两个方向执行 DCT。\r
    if params['view'] == 'coefficients':  # @ 系数幅值差异较大，需要对数压缩。\r
        return gray_image(np.log1p(np.abs(coefficients)), normalize=True)  # @ 显示左上角低频能量集中现象。\r
    height, width = np.ceil(np.array(values.shape) * params['keep'] / 100).astype(int)  # @ 保留比例针对每个方向分别计算。\r
    coefficients[height:, :] = 0  # @ 去掉垂直方向较高频率。\r
    coefficients[:, width:] = 0  # @ 去掉水平方向较高频率。\r
    return gray_image(rows.T @ coefficients @ columns)  # @ 正交基的转置构成 IDCT，按原灰度尺度重建。\r
\r
\r
def pca(source, params):  # @ 以每行作为样本、每列作为特征执行 K-L/PCA。\r
    values = gray_values(source)  # @ 构造样本矩阵。\r
    mean = values.mean(axis=0)  # @ 沿样本维求每个特征的均值。\r
    centered = values - mean  # @ 中心化后再计算协方差。\r
    covariance = centered.T @ centered / max(1, values.shape[0] - 1)  # @ 用样本自由度归一化特征协方差矩阵。\r
    eigenvalues, eigenvectors = np.linalg.eigh(covariance)  # @ 对实对称矩阵进行稳定的特征分解。\r
    order = np.argsort(eigenvalues)[::-1]  # @ 按方差从大到小排列主成分。\r
    count = min(int(params['components']), values.shape[1])  # @ 保留数量不能超过特征维数。\r
    basis = eigenvectors[:, order[:count]]  # @ 选择最大特征值对应的单位特征向量。\r
    reconstructed = centered @ basis @ basis.T + mean  # @ 投影到低维后再投影回来，并加回均值。\r
    total = np.maximum(eigenvalues, 0).sum()  # @ 总方差忽略浮点负误差。\r
    contribution = 100 * np.maximum(eigenvalues[order[:count]], 0).sum() / total if total else 100  # @ 计算保留主成分的方差贡献率。\r
    return {'image': gray_image(reconstructed), 'note': f'保留 {count}/{values.shape[1]} 个主成分，方差贡献率 {contribution:.2f}%。每行是样本，每列是特征。'}  # @ 同时返回重建图和样本约定、贡献率。\r
\r
\r
def hadamard_1d(values):  # @ 对矩阵最后一维执行快速正交 Hadamard 变换。\r
    output = np.asarray(values, dtype=float).copy()  # @ 浮点副本避免原图被改动。\r
    length, step = output.shape[-1], 1  # @ 每一级蝶形跨度从 1 开始。\r
    while step < length:  # @ 每级合并的分组长度翻倍。\r
        blocks = output.reshape(*output.shape[:-1], -1, step * 2)  # @ 将最后一维划分为相邻蝶形组。\r
        first, second = blocks[..., :step].copy(), blocks[..., step:].copy()  # @ 暂存两半数据，防止原位写回覆盖输入。\r
        blocks[..., :step], blocks[..., step:] = first + second, first - second  # @ 蝶形核心只使用加法和减法。\r
        step *= 2  # @ 进入下一变换级。\r
    return output / np.sqrt(length)  # @ 正交归一化后相同变换可用于重建。\r
\r
\r
def hadamard_2d(values):  # @ 沿图像两个方向执行 Hadamard 变换。\r
    return hadamard_1d(hadamard_1d(values).T).T  # @ 先处理行，再转置处理列并转回。\r
\r
\r
def hadamard(source, params):  # @ 展示 Sylvester 自然顺序的系数或阈值重建。\r
    coefficients = hadamard_2d(gray_values(source))  # @ 将图像亮度变换为二维 Hadamard 系数。\r
    if params['view'] == 'coefficients':  # @ 幅值视图只用于观察系数分布。\r
        return gray_image(np.log1p(np.abs(coefficients)), normalize=True)  # @ 用对数压缩幅值后显示。\r
    keep = np.abs(coefficients) >= params['threshold']  # @ 按绝对幅值选择保留的系数。\r
    keep[0, 0] = True  # @ 始终保留直流亮度。\r
    return gray_image(hadamard_2d(coefficients * keep))  # @ 正交 Hadamard 自逆，再次变换即得到重建。\r
\r
\r
def haar_transform(values, levels, inverse=False):  # @ 实现多层正交 Haar 分解与逆变换。\r
    output = np.asarray(values, dtype=float).copy()  # @ 使用浮点副本保存系数。\r
    for step in range(int(levels)):  # @ 每一层只继续分解左上低频子区域。\r
        level = levels - 1 - step if inverse else step  # @ 逆变换按从小到大的顺序恢复。\r
        height, width = output.shape[0] >> level, output.shape[1] >> level  # @ 确定当前层的有效区域尺寸。\r
        region = output[:height, :width]  # @ 建立当前区域的可写视图。\r
        if not inverse:  # @ 正变换先沿行分解，再沿列分解。\r
            first, second = region[:, ::2].copy(), region[:, 1::2].copy()  # @ 取得水平方向相邻像素对。\r
            horizontal = np.concatenate([(first + second) / np.sqrt(2), (first - second) / np.sqrt(2)], axis=1)  # @ 左半区存和低频，右半区存差高频。\r
            first, second = horizontal[::2], horizontal[1::2]  # @ 取得垂直方向相邻的两行。\r
            region[:] = np.concatenate([(first + second) / np.sqrt(2), (first - second) / np.sqrt(2)], axis=0)  # @ 上下分解产生四个子带。\r
        else:  # @ 逆变换以相反顺序恢复列和行。\r
            low, high = region[:height // 2].copy(), region[height // 2:].copy()  # @ 分离垂直方向低频与高频。\r
            vertical = np.empty_like(region)  # @ 分配垂直重建的中间矩阵。\r
            vertical[::2], vertical[1::2] = (low + high) / np.sqrt(2), (low - high) / np.sqrt(2)  # @ 和差恢复原来相邻的两行。\r
            low, high = vertical[:, :width // 2], vertical[:, width // 2:]  # @ 分离水平方向低频与高频。\r
            region[:, ::2], region[:, 1::2] = (low + high) / np.sqrt(2), (low - high) / np.sqrt(2)  # @ 和差恢复原来相邻的两列。\r
    return output  # @ 返回小波系数或未量化重建值。\r
\r
\r
def wavelet(source, params, second=None):  # @ 通过 Haar 子带演示重建、降噪、边缘、增强、压缩和融合。\r
    levels, view = int(params['levels']), params['view']  # @ 读取分解层数和输出方式。\r
    coefficients = haar_transform(gray_values(source), levels)  # @ 执行正交多层分解。\r
    low_height, low_width = np.array(coefficients.shape) >> levels  # @ 最终低频近似位于左上角的小矩形。\r
    low = np.zeros_like(coefficients, dtype=bool)  # @ 构造最终低频区域掩膜。\r
    low[:low_height, :low_width] = True  # @ 标记最低频子带，其余位置为各层细节。\r
    if view == 'decomposition':  # @ 分解图需要区分原始亮度与有符号细节。\r
        return gray_image(np.where(low, coefficients / 2 ** levels, 128 + coefficients * 0.5))  # @ 低频按尺度还原，高频零点显示为中灰。\r
    if view == 'edges':  # @ 边缘对应高频局部变化。\r
        coefficients[low] = 0  # @ 去掉低频近似，只保留细节。\r
    elif view == 'denoise':  # @ 软阈值平滑收缩细节系数。\r
        coefficients[~low] = np.sign(coefficients[~low]) * np.maximum(0, np.abs(coefficients[~low]) - params['threshold'])  # @ 小于阈值的细节置零，其余幅值减去阈值。\r
    elif view == 'compress':  # @ 硬阈值压缩示意直接舍弃小细节系数。\r
        coefficients[(~low) & (np.abs(coefficients) < params['threshold'])] = 0  # @ 保持大系数不变，减少非零系数。\r
    elif view == 'enhance':  # @ 放大细节以增强局部对比度。\r
        coefficients[~low] *= params['gain']  # @ 低频不变，高频乘增强倍率。\r
    elif view == 'fusion':  # @ 在小波域合成两幅图像。\r
        other = haar_transform(gray_values(align_second(source, second)), levels)  # @ 第二幅图对齐后进行相同分解。\r
        coefficients = np.where(low, (coefficients + other) / 2, np.where(np.abs(coefficients) >= np.abs(other), coefficients, other))  # @ 低频平均，高频选择绝对值较大的系数。\r
    reconstructed = haar_transform(coefficients, levels, inverse=True)  # @ 对修改后的子带执行逆变换。\r
    return gray_image(np.abs(reconstructed) if view == 'edges' else reconstructed, normalize=view == 'edges')  # @ 边缘取幅值并归一化，其他输出按原亮度尺度显示。\r
\r
\r
def radon_projection(source, angles):  # @ 通过离散像素累加计算各方向的平行投影。\r
    values = gray_values(source)  # @ 投影对亮度矩阵进行积分近似。\r
    height, width = values.shape  # @ 读取原始尺寸。\r
    bins = math.ceil(math.hypot(width, height)) + 2  # @ 探测器范围覆盖对角线，留出线性分摊空间。\r
    sinogram = np.zeros((angles, bins), dtype=float)  # @ 行对应角度，列对应探测器位置。\r
    y, x = np.indices(values.shape, dtype=float)  # @ 创建图像坐标网格。\r
    x -= (width - 1) / 2; y -= (height - 1) / 2  # @ 将坐标原点移到图像中心。\r
    for index in range(angles):  # @ 在半周内均匀采样投影角度。\r
        angle = index * np.pi / angles  # @ 角度覆盖 0～180°，不重复末端。\r
        rho = x * np.cos(angle) + y * np.sin(angle) + (bins - 1) / 2  # @ 每个像素投影到探测器法向位置。\r
        left = np.floor(rho).astype(int)  # @ 确定探测器左邻点。\r
        fraction = rho - left  # @ 小数距离用于线性分摊。\r
        np.add.at(sinogram[index], left.ravel(), (values * (1 - fraction)).ravel())  # @ 把像素贡献加到左侧探测器位置。\r
        np.add.at(sinogram[index], (left + 1).ravel(), (values * fraction).ravel())  # @ 剩余贡献加到右侧位置。\r
    return sinogram  # @ 返回各角度构成的正弦图。\r
\r
\r
def filter_projections(sinogram):  # @ 在反投影之前应用带 Hann 窗的斜坡滤波器。\r
    length = 2 ** math.ceil(math.log2(sinogram.shape[1] * 2))  # @ 零填充到至少两倍探测器长度，减轻循环卷积影响。\r
    frequency = np.fft.rfftfreq(length)  # @ 获取实信号 FFT 的非负频率。\r
    ramp = 2 * frequency * (0.5 + 0.5 * np.cos(2 * np.pi * frequency))  # @ 斜坡强化高频，Hann 窗抑制高频噪声。\r
    spectrum = np.fft.rfft(sinogram, n=length, axis=1)  # @ 对每条投影沿探测器方向做 FFT。\r
    return np.fft.irfft(spectrum * ramp, n=length, axis=1)[:, :sinogram.shape[1]]  # @ 乘滤波器并逆变换，截取有效探测器范围。\r
\r
\r
def radon(source, params):  # @ 展示正弦图、普通反投影或滤波反投影。\r
    angles = int(params['angles'])  # @ 读取投影角度的采样数量。\r
    sinogram = radon_projection(source, angles)  # @ 从输入图像真实计算离散投影。\r
    if params['view'] == 'sinogram':  # @ 直接观察各方向投影。\r
        return gray_image(sinogram, normalize=True)  # @ 横轴为探测器位置，纵轴为角度。\r
    projections = filter_projections(sinogram) if params['view'] == 'filtered' else sinogram  # @ 区分滤波反投影和普通反投影。\r
    height, width = source.shape[:2]  # @ 重建图采用原工作尺寸。\r
    output = np.zeros((height, width), dtype=float)  # @ 为所有方向的反投影累加分配空间。\r
    y, x = np.indices((height, width), dtype=float)  # @ 创建重建像素位置。\r
    x -= (width - 1) / 2; y -= (height - 1) / 2  # @ 与正变换保持相同中心约定。\r
    for index in range(angles):  # @ 将每个方向的投影回填到图像中。\r
        angle = index * np.pi / angles  # @ 与正投影采用相同角度。\r
        rho = x * np.cos(angle) + y * np.sin(angle) + (sinogram.shape[1] - 1) / 2  # @ 求每个重建像素对应的探测器位置。\r
        output += np.interp(rho, np.arange(sinogram.shape[1]), projections[index], left=0, right=0)  # @ 线性插值投影值并累加到对应射线上的像素。\r
    return gray_image(output, normalize=True)  # @ 将教学重建归一化显示，有限角度与离散化会产生误差。\r
\r
\r
def unpack_image(frame):  # @ 将网页传入的扁平 RGBA 缓冲区变为 NumPy 图像。\r
    if not frame:  # @ Python None 与浏览器传入的空值均表示缺少第二图，交由双图实验检查。\r
        return None  # @ 保留缺失图像的明确状态。\r
    return np.frombuffer(frame['data'], dtype=np.uint8).reshape(int(frame['height']), int(frame['width']), 4).copy()  # @ 按高、宽、四通道解释字节，并复制到 Python 自有内存。\r
\r
\r
def pack_image(values):  # @ 将 NumPy 图像转为 Canvas 可接收的结构。\r
    values = np.ascontiguousarray(values, dtype=np.uint8)  # @ 确保 RGBA 数组连续存储。\r
    return {'width': values.shape[1], 'height': values.shape[0], 'data': values.tobytes()}  # @ 宽高配合 RGBA 字节返回给网页。\r
\r
\r
def run_course_example(working, second, lesson):  # @ 网页适配层：调用单独保存的课件转译函数，算法本体不混入 Canvas 通信。\r
    import course_examples as course  # @ 模块中的函数就是代码区展示的源文件。\r
    allowed = {'grayscale', 'binary', 'density_segmentation', 'lotus_recolor', 'point_brightness', 'translation', 'translation_expanded', 'mirror', 'rotation', 'scaling', 'shearing', 'transpose', 'addition', 'subtraction', 'multiplication', 'division', 'bitwise', 'ycbcr_palette', 'butterfly_composite', 'fourier', 'cosine', 'pca', 'hadamard', 'wavelet'}  # @ 固定允许的课件函数，拒绝任意程序文本。\r
    name = lesson['name']  # @ 从实验目录读取当前原例函数名。\r
    if name not in allowed:  # @ 防止越过明确注册的课程目录。\r
        raise ValueError('未找到课件示例。')  # @ 报告不可执行的示例。\r
    images = [working[:, :, :3].copy()]  # @ 课件处理 RGB，网页 RGBA 的透明度不混入颜色计算。\r
    if lesson['inputs'] == 2:  # @ 双图例子需要额外输入。\r
        if second is None:  # @ 明确检查缺少第二张图片的情况。\r
            raise ValueError('请先上传第二张图片。')  # @ 返回可读错误给网页。\r
        other = second if name == 'butterfly_composite' else align_second(working, second)  # @ 合成例保留前景独立尺寸，其余双图例对齐尺寸。\r
        images.append(other[:, :, :3].copy())  # @ 第二图也去除网页透明通道。\r
    result = getattr(course, name)(*images, *list(lesson['args']))  # @ 传入目录内的实际参数，直接执行可见 Python 函数。\r
    result = np.nan_to_num(result) * (255 if lesson['range'] == 'unit' else 1)  # @ 统一 MATLAB 浮点显示范围与八位图显示范围。\r
    if result.ndim == 2:  # @ 灰度或二值图转为三个相同颜色通道。\r
        result = np.repeat(result[:, :, None], 3, axis=2)  # @ 保持灰度数值不变。\r
    output = np.full((*result.shape[:2], 4), 255, dtype=np.uint8)  # @ 创建可供 Canvas 显示的不透明 RGBA 图。\r
    output[:, :, :3] = np.clip(np.floor(result + 0.5), 0, 255).astype(np.uint8)  # @ 与图像显示一致截断，不修改算法函数的原始数值。\r
    return output  # @ 只把显示适配后的像素传回网页。\r
\r
\r
def process_request(request):  # @ 运行实际 Python 实验，并返回输入、结果与统计信息。\r
    source, second = unpack_image(request['source']), unpack_image(request.get('second'))  # @ 解包两幅输入图像。\r
    params, function = dict(request['params']), request['function']  # @ 参数由网页验证，函数名来自固定实验目录。\r
    limit = int(request.get('limit') or 800)  # @ 普通实验最长边限制为 800 像素。\r
    ratio = min(1, limit / max(source.shape[:2]))  # @ 为大图计算等比工作倍率。\r
    height, width = [max(1, math.floor(value * ratio + 0.5)) for value in source.shape[:2]]  # @ 得到工作图高宽。\r
    if request.get('power'):  # @ FFT、Hadamard、Haar 使用 2 的幂次工作尺寸。\r
        height, width = [max(8, 2 ** math.floor(math.log2(value))) for value in (height, width)]  # @ 两个方向分别重采样到不大于目标的幂次。\r
    working = source if (height, width) == source.shape[:2] else resize(source, {'height': height, 'width': width, 'interpolation': 'bilinear'})  # @ Python 同时负责工作图准备，展示与运算使用同一图像。\r
    if function == 'wavelet':  # @ 小波层数不能超过短边允许的分解层数。\r
        params['levels'] = min(int(params['levels']), int(math.log2(min(height, width))))  # @ 限制低频子区尺寸至少为 1。\r
    allowed = {'grayscale', 'threshold', 'quantize', 'pseudocolor', 'channel_view', 'color_space', 'recolor', 'brightness', 'neighborhood', 'resize', 'geometry', 'arithmetic', 'invert', 'noise_average', 'sampling_convolution', 'composite', 'fourier', 'cosine', 'pca', 'radon', 'hadamard', 'wavelet', 'sobel', 'equalize'}  # @ 仅允许调用已经注册的实验函数。\r
    if function not in allowed:  # @ 防止任意字符串被当作 Python 程序运行。\r
        raise ValueError('未找到该实验。')  # @ 拒绝目录外函数。\r
    started = time.perf_counter()  # @ 单独统计算法时间，不含运行时首次加载。\r
    lesson = request.get('lesson')  # @ 课件原例由单独目录描述，未提供程序的选项仍明确作为补充实验。\r
    result = run_course_example(working, second, lesson) if lesson and lesson.get('name') else (globals()[function](working, params, second) if function in {'arithmetic', 'wavelet', 'composite'} else globals()[function](working, params))  # @ 优先实际执行当前代码区展示的课件转译函数。\r
    output = result['image'] if isinstance(result, dict) else result  # @ PCA 同时返回图像和方差说明。\r
    milliseconds = round((time.perf_counter() - started) * 1000)  # @ 把秒转换为毫秒。\r
    return {'input': pack_image(working), 'output': pack_image(output), 'note': result.get('note', '') if isinstance(result, dict) else '', 'milliseconds': milliseconds, 'changed': working.shape[:2] != source.shape[:2], 'engine': 'Python / NumPy'}  # @ 将实际 Python 运算结果传回界面。\r
`,p=`import numpy as np  # @ 对应 MATLAB 的数组、矩阵与逐元素运算。\r
\r
\r
def grayscale(Image, method='weighted'):  # @ 转译第 2 章第 80 页，保留 Image、r、g、b、Y、I 的原例命名。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应 im2double(imread(...))；网页上传代替文件读取。\r
    r = Image[:, :, 0]  # @ 对应 Image(:,:,1)，Python 的红通道下标从 0 开始。\r
    g = Image[:, :, 1]  # @ 对应 Image(:,:,2)，读取绿通道。\r
    b = Image[:, :, 2]  # @ 对应 Image(:,:,3)，读取蓝通道。\r
    Y = 0.299 * r + 0.587 * g + 0.114 * b  # @ 原样保留课件中的加权灰度公式。\r
    I = (r + g + b) / 3  # @ 原样保留课件中的三通道平均公式。\r
    return Y if method == 'weighted' else I  # @ 网页选项决定展示课件中的 Y 或 I。\r
\r
\r
def binary(Image, thresh=100, mode='gray'):  # @ 转译第 2 章第 79 页的灰度阈值与红蓝联合阈值两个例子。\r
    if mode == 'gray':  # @ 对应课件 coins.png 的灰度图例子。\r
        gray = np.rint(0.299 * Image[:, :, 0] + 0.587 * Image[:, :, 1] + 0.114 * Image[:, :, 2])  # @ 上传彩色图时补充灰度读取；原灰度图三个分量相同，数值保持不变。\r
        BW1 = np.zeros(gray.shape)  # @ 对应 BW1=zeros(size(gray))，创建全黑的二值图。\r
        BW1[gray > thresh] = 1  # @ 对应 BW1(gray>thresh)=1，严格使用大于号。\r
        return BW1  # @ 返回课件第一个例子的黑白结果。\r
    RGB = Image  # @ 对应课件读取 rose.jpg 得到的 RGB 图像。\r
    N, M, color = RGB.shape  # @ 对应 [N,M,color]=size(RGB)。\r
    BW2 = np.zeros((N, M))  # @ 对应 BW2=zeros(N,M)。\r
    pos1 = RGB[:, :, 0] > thresh  # @ 对应 RGB(:,:,1)>thresh，判断红通道。\r
    pos2 = RGB[:, :, 2] > thresh  # @ 对应 RGB(:,:,3)>thresh，判断蓝通道。\r
    pos = pos1 & pos2  # @ 原样保留课件的逻辑与条件。\r
    BW2[pos] = 1  # @ 对应 BW2(pos)=1，满足两个条件的像素设为白。\r
    return BW2  # @ 返回课件第二个例子的二值图。\r
\r
\r
def density_segmentation(Image):  # @ 转译第 2 章第 82 页的索引图调色板映射。\r
    from PIL import Image as PILImage  # @ Pillow 用于取得相当于 MATLAB 索引图的像素索引。\r
    Indexed = PILImage.fromarray(Image).quantize(colors=256)  # @ 网站接收 RGB 图片，先补充生成索引图；量化算法与 MATLAB rgb2ind 不完全相同。\r
    Image1 = np.asarray(Indexed)  # @ 对应课件读取 cartoon.bmp 得到的索引矩阵 Image1。\r
    MAP2 = np.zeros((256, 3))  # @ 对应 MAP2=zeros(256,3)。\r
    MAP2[0:32, :] = np.array([30, 32, 30]) / 256  # @ 对应 MATLAB 1:32，保留原例的除数 256。\r
    MAP2[32:64, :] = np.array([93, 193, 195]) / 256  # @ 对应 MATLAB 33:64，切片右端不包含 64。\r
    MAP2[64:96, :] = np.array([180, 108, 186]) / 256  # @ 对应 MATLAB 65:96 的三个颜色分量。\r
    MAP2[96:128, :] = np.array([67, 119, 98]) / 256  # @ 对应 MATLAB 97:128。\r
    MAP2[128:160, :] = np.array([95, 137, 110]) / 256  # @ 对应 MATLAB 129:160，恢复课件原来的颜色值。\r
    MAP2[160:192, :] = np.array([81, 173, 255]) / 256  # @ 对应 MATLAB 161:192，恢复课件原来的颜色值。\r
    MAP2[192:256, :] = np.array([256, 256, 256]) / 256  # @ 对应 MATLAB 193:256；原例最后 64 个索引均映射为白色。\r
    result = MAP2[Image1]  # @ 对应 imshow(Image1,MAP2)，由每个索引查出 RGB 颜色。\r
    return result  # @ 返回归一化的伪彩色图，网页负责显示。\r
\r
\r
def lotus_recolor(Image, tolerance=0.02, target_hue=4 / 6):  # @ 转译第 2 章第 91 页的荷花换色程序。\r
    import cv2 as cv  # @ OpenCV 提供 RGB 与 HSV 的转换。\r
    hsv = cv.cvtColor(Image.astype(np.float32) / 255, cv.COLOR_RGB2HSV)  # @ 对应 hsv=rgb2hsv(Image)，浮点 OpenCV 的 H 范围为 0～360。\r
    hsv[:, :, 0] = hsv[:, :, 0] / 360  # @ 把 H 转为 MATLAB 使用的 0～1 范围，S、V 无需改动。\r
    h = hsv[:, :, 0].copy()  # @ 对应 h=hsv(:,:,1)，复制色相通道。\r
    h[h > 5 / 6 + tolerance] = target_hue  # @ 保留课件第一段色相判断，默认替换为 4/6。\r
    h[h < 1 / 6 - tolerance] = target_hue  # @ 保留课件第二段色相判断，不额外添加饱和度筛选。\r
    hsv[:, :, 0] = h  # @ 对应 hsv(:,:,1)=h，把修改后的色相放回。\r
    hsv[:, :, 0] = hsv[:, :, 0] * 360  # @ 逆变换前将 H 恢复为 OpenCV 的角度单位。\r
    result = cv.cvtColor(hsv, cv.COLOR_HSV2RGB)  # @ 对应 result=hsv2rgb(hsv)，S 和 V 保持原值。\r
    return result  # @ 网页的前后对比替代课件的 subplot 和 imshow。\r
\r
\r
def point_brightness(Image, gain=4):  # @ 转译第 3 章第 3 页的点运算示例。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应 Image=im2double(imread('office.jpg'))。\r
    result = gain * Image  # @ 课件为 result=4*Image，默认 gain=4；右侧参数允许观察其他倍率。\r
    return result  # @ 数值不提前截断；与 MATLAB imshow 一样，显示时把超出 0～1 的值截断。\r
\r
\r
def translation(Image, deltax=20, deltay=20):  # @ 逐句转译第 3 章第 19–20 页的手写后向映射。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应 im2double(imread('bird.jpg'))。\r
    h, w, c = Image.shape  # @ 对应 [h,w,c]=size(Image)。\r
    NewImage = np.ones((h, w, c))  # @ 对应 NewImage=ones(h,w,c)，空白区域为白色。\r
    for x in range(w):  # @ 对应 for x=1:w；Python 从 0 到 w-1。\r
        for y in range(h):  # @ 对应 for y=1:h；Python 从 0 到 h-1。\r
            oldx = x - deltax  # @ 对应 oldx=x-deltax，反查原图横坐标。\r
            oldy = y - deltay  # @ 对应 oldy=y-deltay，反查原图纵坐标。\r
            if 0 <= oldx < w and 0 <= oldy < h:  # @ 将 MATLAB 的 1 基边界判断等价改为 Python 的 0 基判断。\r
                NewImage[y, x, :] = Image[oldy, oldx, :]  # @ 对应 NewImage(y,x,:)=Image(oldy,oldx,:)；行下标始终是 y。\r
    return NewImage  # @ 对应课件的平移结果，画布尺寸保持不变。\r
\r
\r
def translation_expanded(Image, deltax=20, deltay=20):  # @ 转译第 3 章第 21–22 页的扩大画布平移。\r
    import cv2 as cv  # @ 用 warpAffine 对应 affine2d 与 imwarp。\r
    h, w, c = Image.shape  # @ 对应 [h,w,c]=size(Image)。\r
    newh = h + abs(deltay)  # @ 对应 newh=h+abs(deltay)。\r
    neww = w + abs(deltax)  # @ 对应 neww=w+abs(deltax)。\r
    T = np.array([[1, 0, deltax], [0, 1, deltay]], dtype=float)  # @ MATLAB 行向量矩阵的平移量位于末行，OpenCV 列向量矩阵位于末列。\r
    T[:, 2] -= np.minimum([deltax, deltay], 0)  # @ 对应课件调整 xLimitsOut、yLimitsOut 的负位移处理。\r
    NewImage = cv.warpAffine(Image, T, (neww, newh), flags=cv.INTER_LINEAR, borderValue=(255, 255, 255))  # @ 对应 imwarp(...,'FillValue',255,'OutputView',R)。\r
    return NewImage  # @ 返回同时容纳原位置与平移位置的扩展画布。\r
\r
\r
def mirror(Image, direction='horizontal'):  # @ 转译第 3 章第 24 页的镜像及四格拼接示例。\r
    HImage = np.fliplr(Image)  # @ 对应 HImage=fliplr(Image)，左右翻转。\r
    VImage = np.flipud(Image)  # @ 对应 VImage=flipud(Image)，上下翻转。\r
    CImage = np.flip(HImage, axis=0)  # @ 对应 CImage=flip(HImage,1)；MATLAB 第 1 维对应 NumPy axis=0。\r
    mosaic = np.vstack([np.hstack([Image, HImage]), np.hstack([VImage, CImage])])  # @ 对应 mosaic=[Image HImage;VImage CImage]。\r
    if direction == 'horizontal':  # @ 网页允许单独观察课件中的水平镜像。\r
        return HImage  # @ 返回 HImage。\r
    if direction == 'vertical':  # @ 网页允许单独观察垂直镜像。\r
        return VImage  # @ 返回 VImage。\r
    return CImage if direction == 'diagonal' else mosaic  # @ 双轴镜像与转置不同；mosaic 显示课件四格拼接。\r
\r
\r
def warp_expanded(Image, T, fill=0):  # @ Python 接口适配：OpenCV 需显式指定 MATLAB imwarp 自动计算的输出边界。\r
    import cv2 as cv  # @ 使用 OpenCV 执行二维仿射变换。\r
    h, w = Image.shape[:2]  # @ 读取原图尺寸。\r
    corners = np.array([[0, 0, 1], [w - 1, 0, 1], [0, h - 1, 1], [w - 1, h - 1, 1]])  # @ 用四角齐次坐标确定变换后的边界。\r
    points = corners @ T.T  # @ 计算仿射变换后的四角位置。\r
    low, high = points.min(axis=0), points.max(axis=0)  # @ 分别取得横纵方向的最小和最大坐标。\r
    size = np.maximum(1, np.ceil(high - low + 1 - 1e-8)).astype(int)  # @ 计算包含所有像素中心的宽高，抑制整数变换的浮点误差。\r
    T = T.copy()  # @ 避免修改调用方的变换矩阵。\r
    T[:, 2] -= low  # @ 将新的坐标原点平移到输出画布左上角。\r
    return cv.warpAffine(Image, T, tuple(map(int, size)), flags=cv.INTER_LINEAR, borderValue=(fill, fill, fill))  # @ 对应 imwarp 的双线性重采样与填充。\r
\r
\r
def rotation(Image, angle=15, crop=False):  # @ 转译第 3 章第 34 页的非剪切与剪切旋转两个结果。\r
    import cv2 as cv  # @ 使用 OpenCV 对应 MATLAB 的 imrotate。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应原例 im2double。\r
    h, w = Image.shape[:2]  # @ OpenCV 旋转接口需要明确图像中心和输出尺寸。\r
    T = cv.getRotationMatrix2D(((w - 1) / 2, (h - 1) / 2), angle, 1.0)  # @ 以图像中心生成逆时针旋转矩阵。\r
    if not crop:  # @ 对应 NewImage1=imrotate(Image,15,'bilinear')。\r
        NewImage1 = warp_expanded(Image, T, fill=0)  # @ 扩展画布并使用黑色背景，保留整个旋转图像。\r
        return NewImage1  # @ 返回课件第一个旋转结果。\r
    RImage = 1 - Image  # @ 原样保留课件“先反色”的步骤。\r
    NewImage2 = cv.warpAffine(RImage, T, (w, h), flags=cv.INTER_LINEAR, borderValue=(0, 0, 0))  # @ 对应 imrotate(RImage,15,'bilinear','crop')，保持原尺寸。\r
    NewImage2 = 1 - NewImage2  # @ 原样保留再次反色的步骤，使旋转空白处成为白色。\r
    return NewImage2  # @ 返回课件第二个旋转结果。\r
\r
\r
def scaling(Image, scale_x=0.6, scale_y=0.6, method='bilinear'):  # @ 转译第 3 章第 37 页的 imresize 示例。\r
    import cv2 as cv  # @ 使用 resize 对应 MATLAB imresize。\r
    methods = {'nearest': cv.INTER_NEAREST, 'bilinear': cv.INTER_LINEAR, 'bicubic': cv.INTER_CUBIC}  # @ 将课件的三种插值方式映射到 OpenCV 常量。\r
    newh = max(1, int(np.ceil(Image.shape[0] * scale_y)))  # @ 与 MATLAB imresize 一样，非整数输出高度向上取整。\r
    neww = max(1, int(np.ceil(Image.shape[1] * scale_x)))  # @ 输出宽度也向上取整，避免极小图片缩为零。\r
    NewImage1 = cv.resize(Image, (neww, newh), interpolation=methods[method])  # @ 默认 0.6 倍双线性；原例第二种 Scale=[2.8,1.6] 对应纵向 2.8、横向 1.6。\r
    return NewImage1  # @ 保留宽高倍率的独立控制，返回缩放结果。\r
\r
\r
def shearing(Image, dx=0.5, dy=0.2, direction='both'):  # @ 转译第 3 章第 40 页的三个 affine2d 矩阵。\r
    tform1 = np.array([[1, 0, 0], [dx, 1, 0], [0, 0, 1]], dtype=float)  # @ 原样保留 MATLAB 水平错切的行向量矩阵。\r
    tform2 = np.array([[1, dy, 0], [0, 1, 0], [0, 0, 1]], dtype=float)  # @ 原样保留 MATLAB 垂直错切矩阵。\r
    tform3 = np.array([[1, dy, 0], [dx, 1, 0], [0, 0, 1]], dtype=float)  # @ 原样保留水平、垂直同时错切的矩阵。\r
    T = tform1 if direction == 'horizontal' else tform2 if direction == 'vertical' else tform3  # @ 网页选项选择课件中的 hImage、vImage 或 hvImage。\r
    if abs(np.linalg.det(T)) < 1e-6:  # @ 补充输入检查，奇异矩阵无法定义有效的二维重采样。\r
        raise ValueError('错切矩阵不可逆，请调整 dx 或 dy。')  # @ 提示用户使用可逆参数。\r
    return warp_expanded(Image, T.T[:2, :], fill=255)  # @ 转为 OpenCV 列向量矩阵；对应 imwarp(...,'FillValue',255)。\r
\r
\r
def transpose(Image):  # @ 逐句转译第 3 章第 42 页的按通道转置。\r
    Image = Image.astype(np.float64) / 255.0  # @ 对应 Image=im2double(imread('dog.jpg'))。\r
    height, width, color = Image.shape  # @ 对应 [height,width,color]=size(Image)。\r
    result = np.zeros((width, height, color))  # @ 对应 result=zeros(width,height,color)，交换输出宽高。\r
    for i in range(color):  # @ 对应 for i=1:color，Python 通道编号从 0 开始。\r
        result[:, :, i] = Image[:, :, i].T  # @ 对应 result(:,:,i)=Image(:,:,i)'，图像实数矩阵直接使用 .T。\r
    return result  # @ 返回逐通道转置结果。\r
\r
\r
def addition(Back, Foreground, alpha=0.6, weighted=True):  # @ 转译第 3 章第 45 页的 imadd 和 imlincomb。\r
    import cv2 as cv  # @ OpenCV 的八位加法同样执行饱和截断。\r
    result1 = cv.add(Back, Foreground)  # @ 对应 result1=imadd(Back,Foreground)，相加超过 255 时保留 255。\r
    result2 = (1 - alpha) * Back.astype(float) + alpha * Foreground.astype(float)  # @ 对应 imlincomb(1-alpha,Back,alpha,Foreground)，默认 alpha=0.6。\r
    return result2 if weighted else result1  # @ 根据网页选项显示课件中的加权和或截断和。\r
\r
\r
def subtraction(Back, Foreground, absolute=True):  # @ 转译第 3 章第 50 页的两种减法。\r
    import cv2 as cv  # @ absdiff 对应 MATLAB 的 imabsdiff。\r
    result1 = cv.absdiff(Back, Foreground)  # @ 对应 result1=imabsdiff(Back,Foreground)。\r
    result2 = Foreground.astype(float) / 255 - Back.astype(float) / 255  # @ 保留原例“前景减背景”的顺序及 im2double，而不是背景减前景。\r
    return result1 if absolute else result2  # @ 浮点差值中的负数由显示层截为黑色，不改写计算结果。\r
\r
\r
def multiplication(Back, Foreground):  # @ 对应第 3 章第 53 页的逐元素乘法和 immultiply 函数说明。\r
    import cv2 as cv  # @ 使用与 MATLAB 八位整数类似的饱和运算。\r
    result = cv.multiply(Back, Foreground)  # @ 直接逐元素相乘；没有擅自增加除以 255 的归一化步骤。\r
    return result  # @ 0/1 掩膜可直接提取图像，普通八位乘法会饱和。\r
\r
\r
def division(Back, Foreground):  # @ 按第 3 章第 54 页的 imdivide 与黑色分母处理说明实现。\r
    result = np.full(Back.shape, 255.0)  # @ 按课件“黑色部分设为较大值”，预置零分母位置为 255。\r
    np.divide(Back.astype(float), Foreground.astype(float), out=result, where=Foreground != 0)  # @ 对应逐元素 ./，保留原始数值比率，不额外乘以 255。\r
    return result  # @ 由网页按八位结果显示比率图。\r
\r
\r
def bitwise(Image, Mask=None, operation='not'):  # @ 对应第 3 章第 55 页列出的八位按位函数。\r
    if operation == 'not':  # @ 对应 C=bitcmp(A)。\r
        return np.bitwise_not(Image)  # @ 对每一位取反，不对图像做逻辑真假求非。\r
    if operation == 'and':  # @ 对应 C=bitand(A,B)。\r
        return np.bitwise_and(Image, Mask)  # @ 对应位均为 1 时结果为 1。\r
    if operation == 'or':  # @ 对应 C=bitor(A,B)。\r
        return np.bitwise_or(Image, Mask)  # @ 对应位至少一个为 1 时结果为 1。\r
    return np.bitwise_xor(Image, Mask)  # @ 对应 C=bitxor(A,B)，对应位不相同时为 1。\r
\r
\r
def ycbcr_palette(RGB, component=0, gain=1.5):  # @ 转译第 2 章第 88 页的“索引图—调色板—YCbCr”处理流程。\r
    from PIL import Image as PILImage  # @ Pillow 的量化图提供索引矩阵和调色板。\r
    Indexed = PILImage.fromarray(RGB).quantize(colors=256)  # @ 对应 rgb2ind(RGB,256)；不同库的调色板量化可能不同。\r
    Image = np.asarray(Indexed)  # @ 对应原例 Image，保存各像素的调色板索引。\r
    MAP = np.asarray(Indexed.getpalette(), dtype=float).reshape(-1, 3)[:256] / 255  # @ 对应原例 MAP，将调色板 RGB 归一化。\r
    T = np.array([[65.481, 128.553, 24.966], [-37.797, -74.203, 112], [112, -93.786, -18.214]]) / 255  # @ MATLAB rgb2ycbcr 对浮点 RGB 使用视频范围转换，而非 OpenCV 的全范围 YCrCb。\r
    offset = np.array([16, 128, 128]) / 255  # @ Y、Cb、Cr 的视频范围偏置。\r
    YCbCrMAP1 = MAP @ T.T + offset  # @ 对应 YCbCrMAP1=rgb2ycbcr(MAP)。\r
    YCbCrMAP2 = YCbCrMAP1.copy()  # @ 对应 YCbCrMAP2=YCbCrMAP1，Python 需复制以免共享同一数组。\r
    YCbCrMAP3 = YCbCrMAP1.copy()  # @ 对应 YCbCrMAP3=YCbCrMAP1。\r
    YCbCrMAP1[:, 0] *= gain  # @ 对应原例第一分量乘 1.5，即提高 Y。\r
    YCbCrMAP2[:, 1] *= gain  # @ 对应原例第二分量乘 1.5，即修改 Cb。\r
    YCbCrMAP3[:, 2] *= gain  # @ 对应原例第三分量乘 1.5，即修改 Cr。\r
    MAP1 = (YCbCrMAP1 - offset) @ np.linalg.inv(T).T  # @ 对应 MAP1=ycbcr2rgb(YCbCrMAP1)。\r
    MAP2 = (YCbCrMAP2 - offset) @ np.linalg.inv(T).T  # @ 对应 MAP2=ycbcr2rgb(YCbCrMAP2)。\r
    MAP3 = (YCbCrMAP3 - offset) @ np.linalg.inv(T).T  # @ 对应 MAP3=ycbcr2rgb(YCbCrMAP3)。\r
    return [MAP1, MAP2, MAP3][component][Image]  # @ 用原始索引重建选中的结果，网页替代 subplot 展示。\r
\r
\r
def butterfly_composite(Back, Image, population=20, num=3, seed=42, remove_black=True):  # @ 转译第 3 章第 63–68 页，保留每只蝴蝶连续进行 num 次随机变换的流程。\r
    import cv2 as cv  # @ OpenCV 分别对应 imresize、imrotate 与 imtransform。\r
    random = np.random.default_rng(seed)  # @ 网页补充固定种子便于复现；与 MATLAB 随机数序列不保证逐点相同。\r
    Back = Back.copy()  # @ 避免直接修改上传的背景原图。\r
    h, w, c = Back.shape  # @ 对应 [h,w,c]=size(Back)。\r
    for k in range(population):  # @ 对应 for k=1:population，默认生成 20 个前景。\r
        types = random.integers(1, 7, size=num)  # @ 对应 type=randi(6,1,num)，六类变换中独立抽取三次。\r
        NewImage = Image.copy()  # @ 对应 NewImage=Image，每个前景均从原图开始。\r
        for kind in types:  # @ 对应 for n=1:num 和 switch type(n)。\r
            if kind == 1:  # @ 对应 case 1 的随机缩放。\r
                scale = random.random()  # @ 对应 scale=rand()。\r
                neww = max(1, int(np.ceil(NewImage.shape[1] * scale)))  # @ 补充最小一像素保护，防止小图缩为零。\r
                newh = max(1, int(np.ceil(NewImage.shape[0] * scale)))  # @ 补充最小高度保护。\r
                NewImage = cv.resize(NewImage, (neww, newh), interpolation=cv.INTER_LINEAR)  # @ 对应 imresize(NewImage,scale,'bilinear')。\r
            elif kind == 2:  # @ 对应 case 2 的随机旋转。\r
                angle = round(random.random() * 100)  # @ 对应 angle=round(rand()*100)。\r
                center = ((NewImage.shape[1] - 1) / 2, (NewImage.shape[0] - 1) / 2)  # @ 为 OpenCV 显式设置图像中心。\r
                T = cv.getRotationMatrix2D(center, angle, 1)  # @ 生成与 imrotate 相同方向的旋转矩阵。\r
                NewImage = warp_expanded(NewImage, T, fill=0)  # @ 保留原例默认的黑色扩展背景。\r
            elif kind == 3:  # @ 对应 case 3 的两次错切。\r
                shear = random.random() / 2  # @ 对应 shear=rand()/2。\r
                tform1 = np.array([[1, 0, 0], [shear, 1, 0], [0, 0, 1]])  # @ 原样保留 MATLAB 第一错切矩阵。\r
                tform2 = np.array([[1, shear, 0], [0, 1, 0], [0, 0, 1]])  # @ 原样保留 MATLAB 第二错切矩阵。\r
                NewImage = warp_expanded(NewImage, tform1.T[:2], fill=0)  # @ 对应第一次 imtransform，注意行列向量约定转换。\r
                NewImage = warp_expanded(NewImage, tform2.T[:2], fill=0)  # @ 对应第二次 imtransform。\r
            elif kind == 4:  # @ 对应 case 4 的水平镜像。\r
                NewImage = np.flip(NewImage, axis=1)  # @ 对应 flipdim(NewImage,2)。\r
            elif kind == 5:  # @ 对应 case 5 的垂直镜像。\r
                NewImage = np.flip(NewImage, axis=0)  # @ 对应 flipdim(NewImage,1)。\r
            else:  # @ 对应 case 6，原例所谓“对角镜像”是连续左右、上下翻转。\r
                NewImage = np.flip(np.flip(NewImage, axis=1), axis=0)  # @ 保留原例两次 flipdim，而不是换成矩阵转置。\r
        newh, neww, newc = NewImage.shape  # @ 对应 [newh,neww,newc]=size(NewImage)。\r
        fit = min(1, max(1, (w - 1) // 2) / neww, max(1, (h - 1) // 2) / newh)  # @ 网页补充小背景保护，避免原例 randi 上界小于等于零。\r
        if fit < 1:  # @ 只有前景超出安全范围时才补充缩小。\r
            NewImage = cv.resize(NewImage, (max(1, int(neww * fit)), max(1, int(newh * fit))), interpolation=cv.INTER_LINEAR)  # @ 保持前景比例，保证可以放进背景。\r
        newh, neww = NewImage.shape[:2]  # @ 更新必要保护后的尺寸。\r
        positionx = int(random.integers(max(1, w - 2 * neww)))  # @ 对应 randi(w-2*neww)，将结果换成 Python 的 0 基坐标。\r
        positiony = int(random.integers(max(1, h - 2 * newh)))  # @ 对应 randi(h-2*newh)。\r
        temp = Back[positiony:positiony + newh, positionx:positionx + neww, :].copy()  # @ 对应取出背景中相同大小的矩形区域。\r
        colorchange = random.integers(0, 3, size=2)  # @ 对应 colorchange=randi(3,1,2)，Python 通道编号为 0～2。\r
        if colorchange[0] != colorchange[1]:  # @ 对应 if colorchange(1)~=colorchange(2)。\r
            color = NewImage[:, :, colorchange[0]].copy()  # @ 对应暂存第一个通道。\r
            NewImage[:, :, colorchange[0]] = NewImage[:, :, colorchange[1]]  # @ 对应把第二通道放到第一通道。\r
            NewImage[:, :, colorchange[1]] = color  # @ 对应把暂存通道放到第二通道。\r
        c = (NewImage[:, :, 0] != 0) & (NewImage[:, :, 1] != 0) & (NewImage[:, :, 2] != 0)  # @ 保留课件的逻辑与背景规则：任一通道为零则认为属于背景。\r
        if remove_black:  # @ 网页允许观察使用或停用原例背景规则的差异。\r
            NewImage[~c] = temp[~c]  # @ 等价替代 MATLAB find 与列优先线性索引的三次通道赋值。\r
        temp = NewImage  # @ 对应 temp=NewImage。\r
        Back[positiony:positiony + newh, positionx:positionx + neww, :] = temp  # @ 对应把处理后的前景写回背景区域。\r
    return Back  # @ 网页显示合成结果，对应课件 subplot(133),imshow(Back)。\r
\r
\r
def fourier(Image, view='spectrum', cutoff=20):  # @ 第 4 章第 21–22 页原本就是 Python/OpenCV，按原例整理，非 MATLAB 转译。\r
    import cv2 as cv  # @ 保留原例 cv.dft、cv.idft、cv.magnitude、cv.phase 的接口。\r
    grayI = cv.cvtColor(Image, cv.COLOR_RGB2GRAY)  # @ 对应原例按灰度读取 cameraman.tif；网页提供 RGB 输入。\r
    grayI = grayI.astype(np.float32)  # @ 保留原例单精度转换。\r
    DFT = cv.dft(grayI, flags=cv.DFT_COMPLEX_OUTPUT)  # @ 保留原例二维复数 DFT。\r
    ADFT = cv.magnitude(DFT[:, :, 0], DFT[:, :, 1])  # @ 保留原例由实部和虚部求幅值。\r
    top, bottom = np.max(ADFT), np.min(ADFT)  # @ 保留原例的幅值最大值与最小值。\r
    ADFT1 = (ADFT - bottom) / (top - bottom if top > bottom else 1) * 100  # @ 保留课件乘 100 的线性幅度显示，仅补充常数图除零保护。\r
    ADFT2 = np.fft.fftshift(ADFT1)  # @ 保留原例频谱搬移。\r
    phaseI = cv.phase(DFT[:, :, 0], DFT[:, :, 1])  # @ 保留原例 OpenCV 的 0～2π 相位约定，不擅自改成 −π～π。\r
    phaseI = phaseI / max(float(np.max(phaseI)), 1e-12)  # @ 保留原例按最大相位归一化，补充分母保护。\r
    if view == 'spectrum':  # @ 网页展示课件中的中心化线性幅度谱。\r
        return ADFT2  # @ 与 cv.imshow 的浮点显示一致，超过 1 的亮度在显示时截断。\r
    if view == 'phase':  # @ 原例相位图没有额外搬移。\r
        return phaseI  # @ 返回按原例约定归一化的相位。\r
    if view == 'log_spectrum':  # @ 此分支是明确标注的观察补充，原例未使用对数幅度。\r
        values = np.log1p(np.fft.fftshift(ADFT))  # @ 对数压缩便于观察较弱的高频。\r
        return (values - values.min()) / max(float(np.ptp(values)), 1e-12)  # @ 将补充显示归一化到 0～1。\r
    if view in ('lowpass', 'highpass'):  # @ 频域滤波对应第 37–38 页的原理，程序为补充。\r
        height, width = grayI.shape  # @ 获取频率网格尺寸。\r
        y, x = np.fft.fftfreq(height) * height, np.fft.fftfreq(width) * width  # @ 构造周期频率坐标。\r
        mask = np.hypot(y[:, None], x[None, :]) <= cutoff  # @ 以到直流的距离定义理想低通。\r
        DFT *= (mask if view == 'lowpass' else ~mask)[:, :, None]  # @ 掩膜同时作用于实部与虚部。\r
    recI = cv.idft(DFT, flags=cv.DFT_REAL_OUTPUT + cv.DFT_SCALE)  # @ 保留课件逆变换标志，包含必要的幅值缩放。\r
    if view == 'highpass':  # @ 高频有符号响应的显示为补充。\r
        return (recI - recI.min()) / max(float(np.ptp(recI)), 1e-12)  # @ 仅在高通观察时归一化。\r
    return np.clip(recI, 0, 255).astype(np.uint8)  # @ 按原例转回 uint8，补充截断以避免边界浮点误差回绕。\r
\r
\r
def cosine(Image, view='coefficients', keep=100):  # @ 整理第 4 章第 50–51 页已有 Python 程序，保留逐颜色通道处理。\r
    import cv2 as cv  # @ 原例使用 cv.dct 和 cv.idct。\r
    Image = Image.astype(np.float32)  # @ 保留原例单精度输入。\r
    original_height, original_width = Image.shape[:2]  # @ 网页补充记录原尺寸，以兼容任意上传图片。\r
    Image = np.pad(Image, ((0, Image.shape[0] % 2), (0, Image.shape[1] % 2), (0, 0)), mode='edge')  # @ OpenCV DCT 需偶数边长，奇数图片补一行或一列，原例偶数图不受影响。\r
    height, width, color = Image.shape  # @ 对应原例 np.shape(Image)。\r
    DCTs = np.zeros((height, width, color))  # @ 保留原例系数显示图。\r
    BGROut = np.zeros((height, width, color))  # @ 保留原例重建图变量名；网页输入使用 RGB 排列。\r
    for i in range(color):  # @ 保留原例对三个通道分别计算的循环。\r
        channel = Image[:, :, i]  # @ 保留原例的通道提取。\r
        DCT = cv.dct(channel)  # @ 保留原例二维 DCT。\r
        ADCT = np.log(np.abs(DCT) + 1)  # @ 保留原例对数幅值。\r
        top, bottom = np.max(ADCT), np.min(ADCT)  # @ 保留原例逐通道显示范围。\r
        DCTs[:, :, i] = (ADCT - bottom) / (top - bottom if top > bottom else 1)  # @ 保留原例归一化，补充常数通道除零保护。\r
        if keep < 100:  # @ 系数舍弃对应第 52 页应用原理，作为标明的补充选项；默认保留全部。\r
            DCT[int(np.ceil(height * keep / 100)):, :] = 0  # @ 补充：舍弃较高垂直频率。\r
            DCT[:, int(np.ceil(width * keep / 100)):] = 0  # @ 补充：舍弃较高水平频率。\r
        BGROut[:, :, i] = cv.idct(DCT)  # @ idct 本身已按 DCT 约定归一化，修正原例混入 DFT 标志的写法。\r
    BGROut = np.clip(BGROut, 0, 255).astype(np.uint8)  # @ 保留原例 uint8 输出并防止浮点误差回绕。\r
    result = DCTs if view == 'coefficients' else BGROut  # @ 网页选择原例的系数图或重建图。\r
    return result[:original_height, :original_width]  # @ 移除仅为接口兼容补出的边缘。\r
\r
\r
def pca(Image, components=8):  # @ 第 4 章第 54 页原有 Python 片段；图像样本构造和重建为补充。\r
    data = np.mean(Image, axis=2).astype(float)  # @ 补充：每行作为一个变量，每列作为一次观测，适配原例 np.cov(data)。\r
    mean = data.mean(axis=1, keepdims=True)  # @ 补充：保存每个变量的均值，用于重建。\r
    X = np.cov(data)  # @ 保留课件 X=np.cov(data)，默认每行是一个变量。\r
    val, vec = np.linalg.eig(X)  # @ 保留课件特征值、特征向量求解接口。\r
    idx = np.argsort(val)[::-1]  # @ 保留课件按特征值降序排列的步骤。\r
    basis = vec[:, idx[:components]].real  # @ 补充：取最大特征值对应的主成分。\r
    result = basis @ (basis.T @ (data - mean)) + mean  # @ 补充：投影到所选主成分，再重建灰度图。\r
    return result  # @ 返回按 0～255 亮度显示的补充图像实验。\r
\r
\r
def hadamard(Image, view='coefficients', threshold=0):  # @ 第 4 章第 56 页只生成 H=hadamard(8)，图像变换与重建为补充。\r
    from scipy.linalg import hadamard as make_hadamard  # @ 对应课件 from scipy.linalg import hadamard，仅为避免同名函数而改导入别名。\r
    data = np.mean(Image, axis=2).astype(float)  # @ 补充：将上传图像转为二维灰度数据。\r
    height, width = data.shape  # @ 补充：工作尺寸已由网页准备为 2 的幂。\r
    H = make_hadamard(height)  # @ 保留课件的 Sylvester 矩阵生成；图像尺寸替代原例固定的 8。\r
    W = make_hadamard(width)  # @ 补充：为可能不同的宽度生成第二个矩阵。\r
    D = H @ data @ W.T / np.sqrt(height * width)  # @ 补充：二维正交归一化 Hadamard 变换。\r
    if view == 'coefficients':  # @ 补充：网页提供系数观察。\r
        values = np.log1p(np.abs(D))  # @ 补充：压缩系数显示动态范围。\r
        return (values - values.min()) / max(float(np.ptp(values)), 1e-12)  # @ 补充：归一化系数图。\r
    D[np.abs(D) < threshold] = 0  # @ 补充：可选舍弃小系数，默认阈值为零。\r
    return H.T @ D @ W / np.sqrt(height * width)  # @ 补充：利用正交性质逆变换，返回 0～255 亮度。\r
\r
\r
def wavelet(Image, view='decomposition'):  # @ 第 4 章第 59 页已有 Python/PyWavelets 片段，此处保留单层 Haar 调用。\r
    import pywt  # @ 保留课件使用的 PyWavelets 库。\r
    img = np.mean(Image, axis=2).astype(float)  # @ 补充：课件未定义 img，这里由上传图片生成灰度输入。\r
    cA, (cH, cV, cD) = pywt.dwt2(img, 'haar')  # @ 原样保留课件的 Haar 二维小波分解接口。\r
    if view == 'reconstruct':  # @ 补充：课件片段未包含重建显示。\r
        return pywt.idwt2((cA, (cH, cV, cD)), 'haar')[:img.shape[0], :img.shape[1]]  # @ 补充：用相同基逆变换，裁去边界补齐。\r
    details = [0.5 + values / max(float(np.max(np.abs(values))), 1e-12) / 2 for values in (cH, cV, cD)]  # @ 补充：带符号细节映射到以 0.5 为零点的显示范围。\r
    return np.block([[cA / 510, details[0]], [details[1], details[2]]])  # @ 补充：按 cA、cH、cV、cD 排列子带图，与原调用的返回次序一致。\r
`;let s;function t(e){self.postMessage({type:"progress",message:e})}async function l(e){t("正在加载本地 Python 环境，首次运行需要几秒钟…");const{loadPyodide:a}=await import(`${e}pyodide.mjs`),r=await a({indexURL:e});return t("正在加载 NumPy 图像处理依赖…"),await r.loadPackage("numpy"),r.FS.writeFile("/home/pyodide/course_examples.py",p),await r.runPythonAsync(o),r}self.onmessage=async({data:e})=>{let a,r,n;try{s??=l(e.runtimeURL),n=await s,e.lesson?.packages?.length&&(t("正在加载本实验的 Python 图像库…"),await n.loadPackage(e.lesson.packages)),t("正在执行 Python 图像处理算法…"),a=n.toPy(e),n.globals.set("_request",a),r=await n.runPythonAsync("process_request(_request)");const i=r.toJs({dict_converter:Object.fromEntries});self.postMessage(i)}catch(i){const c=String(i.message||i).trim().split(`
`);self.postMessage({error:c.at(-1)||"Python 处理失败，请重试。"}),n||(s=void 0)}finally{n?.globals.delete("_request"),r?.destroy(),a?.destroy()}}})();
