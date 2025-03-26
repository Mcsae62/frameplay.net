import os
import re

def clean_chat_code(file_path):
    try:
        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 删除chat-component.js的引用
        content = re.sub(r'\s*<script src="\.\./js/chat-component\.js"></script>', '', content)
        
        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"已清理: {file_path}")
    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {str(e)}")

def main():
    # 获取games目录下的所有HTML文件
    games_dir = "games"
    for filename in os.listdir(games_dir):
        if filename.endswith(".html"):
            file_path = os.path.join(games_dir, filename)
            clean_chat_code(file_path)

if __name__ == "__main__":
    main()
    print("清理完成!") 