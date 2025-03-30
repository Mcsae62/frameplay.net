from PIL import Image
import os

def resize_image(input_path, output_path, target_size=(800, 600)):
    # 打开图片
    img = Image.open(input_path)
    
    # 计算宽高比
    img_ratio = img.width / img.height
    target_ratio = target_size[0] / target_size[1]
    
    if img_ratio > target_ratio:
        # 图片更宽，以高度为基准
        new_height = target_size[1]
        new_width = int(new_height * img_ratio)
    else:
        # 图片更高，以宽度为基准
        new_width = target_size[0]
        new_height = int(new_width / img_ratio)
    
    # 调整图片大小
    resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # 创建新的图片
    new_img = Image.new('RGB', target_size, (0, 0, 0))
    
    # 计算粘贴位置（居中）
    paste_x = (target_size[0] - new_width) // 2
    paste_y = (target_size[1] - new_height) // 2
    
    # 粘贴调整后的图片
    new_img.paste(resized_img, (paste_x, paste_y))
    
    # 保存图片
    new_img.save(output_path, 'JPEG', quality=95)

# 处理两张图片
images_to_resize = [
    'resized_images/Alien Attack-demo.jpeg',
    'resized_images/Aliens Attack-demo.jpeg'
]

for img_path in images_to_resize:
    if os.path.exists(img_path):
        resize_image(img_path, img_path)
        print(f'已处理: {img_path}')
    else:
        print(f'文件不存在: {img_path}') 