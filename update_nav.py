import os
import re

def update_nav_menu(file_path):
    try:
        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 新的导航菜单HTML
        new_nav = '''<div class="dropdown">
            <button class="dropdown-button">Game Navigation</button>
            <div class="dropdown-content">
                <a href="../pages/casual.html">Casual</a>
                <a href="../pages/brain.html">Brain</a>
                <a href="../pages/fast-paced.html">Fast-Paced</a>
            </div>
        </div>'''
        
        # 查找header部分
        header_pattern = r'<header>.*?</header>'
        header_match = re.search(header_pattern, content, re.DOTALL)
        
        if header_match:
            header_content = header_match.group(0)
            # 在header中查找并替换dropdown部分
            new_header = re.sub(
                r'<div class="dropdown">.*?</div>\s*</div>\s*</header>',
                new_nav + '\n            </div>\n        </header>',
                header_content,
                flags=re.DOTALL
            )
            # 替换整个header
            content = content.replace(header_content, new_header)
            
            # 写回文件
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
                
            print(f"已更新: {file_path}")
        else:
            print(f"未找到header部分: {file_path}")
            
    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {str(e)}")

def main():
    # 需要更新的游戏页面列表
    games = ['chess.html', 'pacman.html', 'connect3.html', 'snake.html', 'adarkroom.html']
    
    # 更新每个游戏页面
    for game in games:
        file_path = os.path.join('games', game)
        if os.path.exists(file_path):
            update_nav_menu(file_path)

if __name__ == "__main__":
    main()
    print("更新完成!") 