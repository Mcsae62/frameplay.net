from PIL import Image
import os

def resize_image(input_path, output_path, target_size=(800, 600)):
    try:
        # 打开图片
        with Image.open(input_path) as img:
            # 调整图片大小，使用LANCZOS重采样方法以保持质量
            resized_img = img.resize(target_size, Image.Resampling.LANCZOS)
            # 保存调整后的图片
            resized_img.save(output_path, quality=95)
            print(f"Successfully resized {input_path} to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {str(e)}")

def process_directory(input_dir, output_dir):
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 处理目录中的所有图片
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, filename)
            resize_image(input_path, output_path)

if __name__ == "__main__":
    # 设置输入和输出目录
    input_directory = "original_images"  # 存放原始图片的目录
    output_directory = "resized_images"  # 存放调整后图片的目录
    
    process_directory(input_directory, output_directory) 