from PIL import Image

def verify_sizes():
    # 检查原始参考图片尺寸
    chess_img = Image.open('resized_images/3D Chess-demo.jpeg')
    print(f'3D Chess-demo尺寸: {chess_img.size}')
    
    # 检查新生成的图片尺寸
    bubbles_img = Image.open('resized_images/Om Nom Bubbles-demo_resized.jpeg')
    print(f'Om Nom Bubbles-demo_resized尺寸: {bubbles_img.size}')

if __name__ == "__main__":
    verify_sizes() 