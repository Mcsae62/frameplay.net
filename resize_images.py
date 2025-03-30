from PIL import Image
import os

def get_target_size():
    # 获取目标图片的尺寸
    target_path = "resized_images/3D Chess-demo.jpeg"
    with Image.open(target_path) as img:
        return img.size

def resize_image(source_path, target_path, target_size):
    # 打开图片
    with Image.open(source_path) as img:
        # 计算缩放比例，保持宽高比
        ratio = max(target_size[0] / img.size[0], target_size[1] / img.size[1])
        new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
        
        # 调整图片大小
        resized_img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # 创建新的图片，使用白色背景
        new_img = Image.new('RGB', target_size, (255, 255, 255))
        
        # 计算居中位置
        position = ((target_size[0] - new_size[0]) // 2,
                   (target_size[1] - new_size[1]) // 2)
        
        # 将调整后的图片粘贴到新图片上
        new_img.paste(resized_img, position)
        
        # 保存图片
        new_img.save(target_path, 'JPEG', quality=95)

def main():
    # 获取目标尺寸
    target_size = get_target_size()
    print(f"目标尺寸: {target_size}")
    
    # 需要处理的图片列表
    images = [
        "Pets Rush-demo.jpeg"
    ]
    
    # 处理每张图片
    for image_name in images:
        source_path = f"original_images/{image_name}"
        target_path = f"resized_images/{image_name}"
        
        if os.path.exists(source_path):
            print(f"处理图片: {image_name}")
            resize_image(source_path, target_path, target_size)
        else:
            print(f"找不到源图片: {image_name}")

if __name__ == "__main__":
    main() 