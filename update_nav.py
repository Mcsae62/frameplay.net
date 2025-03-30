import os
import re

def update_nav_menu(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 新的导航菜单HTML
    new_nav = '''
                    <div class="nav-content">
                        <a href="../pages/puzzle.html" class="dropdown-item" data-category="puzzle">Puzzle</a>
                        <a href="../pages/quiz.html" class="dropdown-item" data-category="quiz">Quiz</a>
                        <a href="../pages/cards.html" class="dropdown-item" data-category="cards">Cards</a>
                        <a href="../pages/casual.html" class="dropdown-item" data-category="casual">Casual</a>
                        <a href="../pages/match3.html" class="dropdown-item" data-category="match3">Match 3</a>
                        <a href="../pages/bubble-shooter.html" class="dropdown-item" data-category="bubble-shooter">Bubble Shooter</a>
                        <a href="../pages/clicker.html" class="dropdown-item" data-category="clicker">Clicker</a>
                        <a href="../pages/beauty.html" class="dropdown-item" data-category="beauty">Beauty</a>
                        <a href="../pages/jump-run.html" class="dropdown-item" data-category="jump-run">Jump & Run</a>
                        <a href="../pages/racing.html" class="dropdown-item" data-category="racing">Racing</a>
                        <a href="../pages/sport.html" class="dropdown-item" data-category="sport">Sport</a>
                        <a href="../pages/horror.html" class="dropdown-item" data-category="horror">Horror</a>
                        <a href="../pages/multiplayer.html" class="dropdown-item" data-category="multiplayer">Multiplayer</a>
                    </div>'''
    
    # 使用正则表达式查找并替换导航菜单
    pattern = r'<div class="nav-content">\s*<a href="[^"]*" class="dropdown-item"[^>]*>[^<]*</a>\s*<a href="[^"]*" class="dropdown-item"[^>]*>[^<]*</a>\s*<a href="[^"]*" class="dropdown-item"[^>]*>[^<]*</a>\s*</div>'
    new_content = re.sub(pattern, new_nav, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

def main():
    games_dir = 'games'
    for filename in os.listdir(games_dir):
        if filename.endswith('.html'):
            file_path = os.path.join(games_dir, filename)
            print(f'Updating {filename}...')
            update_nav_menu(file_path)
    
    print('更新完成!')

if __name__ == '__main__':
    main() 