from PIL import Image
import os

def verify_image_size(image_path):
    img = Image.open(image_path)
    print(f'{os.path.basename(image_path)} 尺寸: {img.size}')

# 验证处理后的图片
images_to_verify = [
    'Miner Block-demo_resized.jpeg'
]

for image_name in images_to_verify:
    image_path = os.path.join('resized_images', image_name)
    if os.path.exists(image_path):
        verify_image_size(image_path)
    else:
        print(f'找不到文件: {image_path}') 