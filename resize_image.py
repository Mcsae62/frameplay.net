from PIL import Image
import os

def resize_and_crop(input_path, output_path, target_size=(800, 600)):
    # 打开图片
    with Image.open(input_path) as img:
        # 计算宽高比
        target_ratio = target_size[0] / target_size[1]
        img_ratio = img.size[0] / img.size[1]
        
        if img_ratio > target_ratio:
            # 图片更宽，需要裁剪宽度
            new_width = int(img.size[1] * target_ratio)
            left = (img.size[0] - new_width) // 2
            img = img.crop((left, 0, left + new_width, img.size[1]))
        else:
            # 图片更高，需要裁剪高度
            new_height = int(img.size[0] / target_ratio)
            top = (img.size[1] - new_height) // 2
            img = img.crop((0, top, img.size[0], top + new_height))
        
        # 调整到目标尺寸
        img = img.resize(target_size, Image.Resampling.LANCZOS)
        
        # 保存图片
        img.save(output_path, 'JPEG', quality=95)

# 处理图片
input_path = 'resized_images/Tap Tap Dunk-demo.jpeg'
output_path = 'resized_images/Tap Tap Dunk-demo.jpeg'
resize_and_crop(input_path, output_path) 