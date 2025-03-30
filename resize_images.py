from PIL import Image
import os

def resize_and_crop(image_path, target_size=(800, 600)):
    # 打开图片
    img = Image.open(image_path)
    
    # 计算宽高比
    img_ratio = img.width / img.height
    target_ratio = target_size[0] / target_size[1]
    
    if img_ratio > target_ratio:
        # 图片更宽，需要裁剪宽度
        new_width = int(img.height * target_ratio)
        left = (img.width - new_width) // 2
        img = img.crop((left, 0, left + new_width, img.height))
    else:
        # 图片更高，需要裁剪高度
        new_height = int(img.width / target_ratio)
        top = (img.height - new_height) // 2
        img = img.crop((0, top, img.width, top + new_height))
    
    # 调整到目标尺寸
    img = img.resize(target_size, Image.Resampling.LANCZOS)
    
    # 保存图片
    output_path = image_path.replace('.jpeg', '_resized.jpeg')
    img.save(output_path, quality=95)
    print(f'已处理: {image_path}')

def main():
    # 需要处理的图片列表
    images_to_process = [
        'Solitaire Classic-demo.jpeg',
        'Spider Solitaire-demo.jpeg'
    ]
    
    # 处理每张图片
    for image_name in images_to_process:
        image_path = os.path.join('resized_images', image_name)
        try:
            if os.path.exists(image_path):
                resize_and_crop(image_path)
            else:
                print(f'找不到文件: {image_path}')
        except Exception as e:
            print(f'处理 {image_path} 时出错: {str(e)}')

if __name__ == '__main__':
    main() 