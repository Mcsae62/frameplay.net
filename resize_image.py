from PIL import Image
import os

def resize_and_crop(target_size_path, source_path, output_path):
    # 打开目标尺寸的图片
    target_img = Image.open(target_size_path)
    target_width, target_height = target_img.size
    
    # 打开需要调整的图片
    source_img = Image.open(source_path)
    
    # 计算宽高比
    target_ratio = target_width / target_height
    source_ratio = source_img.width / source_img.height
    
    if source_ratio > target_ratio:
        # 如果源图片更宽，按高度裁剪
        new_height = target_height
        new_width = int(new_height * source_ratio)
    else:
        # 如果源图片更高，按宽度裁剪
        new_width = target_width
        new_height = int(new_width / source_ratio)
    
    # 调整大小
    resized_img = source_img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # 计算裁剪区域
    left = (new_width - target_width) // 2
    top = (new_height - target_height) // 2
    right = left + target_width
    bottom = top + target_height
    
    # 裁剪图片
    cropped_img = resized_img.crop((left, top, right, bottom))
    
    # 保存结果
    cropped_img.save(output_path)

# 设置文件路径
target_size_path = "resized_images/3D Chess-demo.jpeg"
source_path = "resized_images/Western Sniper-demo.jpeg"
output_path = "resized_images/Western Sniper-demo.jpeg"

# 执行裁剪
resize_and_crop(target_size_path, source_path, output_path) 