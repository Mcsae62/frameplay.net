import os
import re

def update_navigation(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找Game Navigation部分
    pattern = r'<div class="dropdown">\s*<button class="dropdown-button">Game Navigation</button>\s*<div class="dropdown-content">\s*<a href="../pages/casual.html">Casual Games</a>\s*<a href="../pages/brain.html">Brain Games</a>\s*<a href="../pages/fast-paced.html">Fast-Paced Games</a>\s*</div>\s*</div>'
    
    # 新的Game Navigation内容
    new_navigation = '''                <div class="dropdown">
                    <button class="dropdown-button">Game Navigation</button>
                    <div class="dropdown-content">
                        <a href="../pages/puzzle.html">Puzzle</a>
                        <a href="../pages/quiz.html">Quiz</a>
                        <a href="../pages/cards.html">Cards</a>
                        <a href="../pages/casual.html">Casual</a>
                        <a href="../pages/match3.html">Match 3</a>
                        <a href="../pages/bubble-shooter.html">Bubble Shooter</a>
                        <a href="../pages/clicker.html">Clicker</a>
                        <a href="../pages/beauty.html">Beauty</a>
                        <a href="../pages/jump-run.html">Jump & Run</a>
                        <a href="../pages/racing.html">Racing</a>
                        <a href="../pages/sport.html">Sport</a>
                        <a href="../pages/horror.html">Horror</a>
                        <a href="../pages/multiplayer.html">Multiplayer</a>
                    </div>
                </div>'''
    
    # 替换内容
    new_content = re.sub(pattern, new_navigation, content)
    
    # 如果内容有变化，则写入文件
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

def main():
    games_dir = "games"
    for filename in os.listdir(games_dir):
        if filename.endswith(".html"):
            file_path = os.path.join(games_dir, filename)
            update_navigation(file_path)

if __name__ == "__main__":
    main() 