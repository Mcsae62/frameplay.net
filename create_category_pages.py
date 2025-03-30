import os

def create_category_page(category_name, games):
    # 读取模板文件
    with open('templates/category_template.html', 'r', encoding='utf-8') as f:
        template = f.read()
    
    # 替换页面标题和描述
    page_content = template.replace('{{category_name}}', category_name)
    
    # 生成游戏列表HTML
    games_html = ''
    for game in games:
        games_html += f'''
                    <a href="../games/{game["filename"]}" class="game-card">
                        <img src="../resized_images/{game["image"]}" alt="{game["title"]}" class="game-image">
                        <div class="game-content">
                            <h2 class="game-title">{game["title"]}</h2>
                            <p class="game-description">{game["description"]}</p>
                        </div>
                        <span class="play-badge">Play Now</span>
                    </a>'''
    
    # 替换游戏列表
    page_content = page_content.replace('{{games_list}}', games_html)
    
    # 创建pages目录（如果不存在）
    if not os.path.exists('pages'):
        os.makedirs('pages')
    
    # 写入文件
    with open(f'pages/{category_name.lower()}.html', 'w', encoding='utf-8') as f:
        f.write(page_content)

def main():
    # 定义每个分类的游戏
    categories = {
        'puzzle': [
            {'title': 'Reversi', 'filename': 'reversi.html', 'image': 'Reversi-demo.jpeg', 'description': 'Classic board game of strategy and tactics!'},
            {'title': '3D Chess', 'filename': '3d-chess.html', 'image': '3D Chess-demo.jpeg', 'description': 'Play chess in 3D!'},
            {'title': 'Backgammon', 'filename': 'backgammon.html', 'image': 'Backgammon-demo.jpeg', 'description': 'Classic backgammon game!'},
            {'title': 'Cut The Rope', 'filename': 'cut-the-rope.html', 'image': 'Cut The Rope-demo.jpeg', 'description': 'Cut the rope to feed the monster!'},
            {'title': 'Spot The Cat', 'filename': 'spot-the-cat.html', 'image': 'Spot The Cat-demo.jpeg', 'description': 'Find the hidden cat in each level!'},
            {'title': 'Kiba & Kumba Jigsaw Puzzle', 'filename': 'kk-jigsaw-puzzle.html', 'image': 'Kiba & Kumba Jigsaw Puzzle-demo.jpeg', 'description': 'Solve jigsaw puzzles with cute characters!'},
            {'title': 'Onet Connect Classic', 'filename': 'onet-connect-classic.html', 'image': 'Onet Connect Classic-demo.jpeg', 'description': 'Match pairs of tiles!'},
            {'title': 'Kitchen Mahjong Classic', 'filename': 'kitchen-mahjong.html', 'image': 'Kitchen Mahjong-demo.jpeg', 'description': 'Match kitchen-themed tiles!'},
            {'title': 'Blocks Puzzle Zoo', 'filename': 'blocks-puzzle-zoo.html', 'image': 'Blocks Puzzle Zoo-demo.jpeg', 'description': 'Arrange blocks to create zoo animals!'},
            {'title': 'Jigsaw Puzzle Classic', 'filename': 'jigsaw-puzzle-classic.html', 'image': 'Jigsaw Puzzle Classic-demo.jpeg', 'description': 'Classic jigsaw puzzle game!'},
            {'title': 'Puzzletag', 'filename': 'puzzletag.html', 'image': 'Puzzletag-demo.jpeg', 'description': 'Match and connect puzzle pieces!'},
            {'title': 'Jigsaw Puzzle Deluxe', 'filename': 'jigsaw-puzzle-deluxe.html', 'image': 'Jigsaw Puzzle Deluxe-demo.jpeg', 'description': 'Enhanced jigsaw puzzle experience!'},
            {'title': 'Color Water Sort 3D', 'filename': 'color-water-sort-3d.html', 'image': 'Color Water Sort 3D-demo.jpeg', 'description': 'Sort colored water in tubes!'},
            {'title': 'Toilet Run', 'filename': 'toilet-run.html', 'image': 'Toilet Run-demo.jpeg', 'description': 'Run and collect toilet paper!'},
            {'title': 'Sort It', 'filename': 'sort-it.html', 'image': 'Sort It-demo.jpeg', 'description': 'Sort items into their correct categories!'},
            {'title': 'Parking Jam', 'filename': 'parking-jam.html', 'image': 'Parking Jam-demo.jpeg', 'description': 'Help cars get out of the parking lot!'},
            {'title': 'Miner Block', 'filename': 'miner-block.html', 'image': 'Miner Block-demo.jpeg', 'description': 'Mine blocks and collect resources!'},
            {'title': 'Little Shop Of Treasures', 'filename': 'little-shop-of-treasures.html', 'image': 'Little Shop Of Treasures-demo.jpeg', 'description': 'Find hidden treasures in the shop!'},
            {'title': 'Cube Match', 'filename': 'cube-match.html', 'image': 'Cube Match-demo.jpeg', 'description': 'Match and merge cubes!'},
            {'title': 'Train 2048', 'filename': 'train-2048.html', 'image': 'Train 2048-demo.jpeg', 'description': '2048 with train-themed tiles!'},
            {'title': 'Giant 2048', 'filename': 'giant-2048.html', 'image': 'Giant 2048-demo.jpeg', 'description': 'Bigger version of 2048!'},
            {'title': 'Jungle Roller', 'filename': 'jungle-roller.html', 'image': 'Jungle Roller-demo.jpeg', 'description': 'Roll through the jungle!'},
            {'title': 'Hiddentastic Mansion', 'filename': 'hiddentastic-mansion.html', 'image': 'Hiddentastic Mansion-demo.jpeg', 'description': 'Find hidden objects in the mansion!'},
            {'title': 'Pull Pins', 'filename': 'pull-pins.html', 'image': 'Pull Pins-demo.jpeg', 'description': 'Pull pins to solve puzzles!'},
            {'title': 'Find 500 Differences', 'filename': 'find-500-differences.html', 'image': 'Find 500 Differences-demo.jpeg', 'description': 'Find differences between images!'},
            {'title': '2048', 'filename': '2048.html', 'image': '2048-demo.jpeg', 'description': 'Classic 2048 number puzzle!'},
            {'title': 'Chess', 'filename': 'chess.html', 'image': 'Chess-demo.jpeg', 'description': 'Classic chess game!'}
        ],
        'quiz': [
            {'title': 'Words of Wonders', 'filename': 'words-of-wonders.html', 'image': 'Words of Wonders-demo.jpeg', 'description': 'Find words in the grid!'},
            {'title': 'Sudoku Classic', 'filename': 'sudoku-classic.html', 'image': 'Sudoku Classic-demo.jpeg', 'description': 'Classic Sudoku puzzle!'},
            {'title': 'Wordguess 2 Heavy', 'filename': 'wordguess-2-heavy.html', 'image': 'Wordguess 2 Heavy-demo.jpeg', 'description': 'Guess the word!'},
            {'title': 'Guess Their Answer', 'filename': 'guess-their-answer.html', 'image': 'Guess Their Answer-demo.jpeg', 'description': 'Guess what others are thinking!'},
            {'title': 'Brain Trainer', 'filename': 'brain-trainer.html', 'image': 'Brain Trainer-demo.jpeg', 'description': 'Train your brain with puzzles!'},
            {'title': 'Word Search Classic', 'filename': 'word-search-classic.html', 'image': 'Word Search Classic-demo.jpeg', 'description': 'Find words in the grid!'},
            {'title': '7 Words', 'filename': '7-words.html', 'image': '7 Words-demo.jpeg', 'description': 'Solve word puzzles!'}
        ],
        'cards': [
            {'title': 'Cross Over 21', 'filename': 'crossover-21.html', 'image': 'Cross Over 21-demo.jpeg', 'description': 'Card game with 21!'},
            {'title': 'Gin Rummy Plus', 'filename': 'gin-rummy-plus.html', 'image': 'Gin Rummy Plus-demo.jpeg', 'description': 'Classic Gin Rummy card game!'},
            {'title': 'Solitaire Classic', 'filename': 'solitaire-classic.html', 'image': 'Solitaire Classic-demo.jpeg', 'description': 'Classic Solitaire card game!'},
            {'title': 'Spider Solitaire', 'filename': 'spider-solitaire.html', 'image': 'Spider Solitaire-demo.jpeg', 'description': 'Spider variant of Solitaire!'},
            {'title': 'Solitaire Klondike', 'filename': 'solitaire-klondike.html', 'image': 'Solitaire Klondike-demo.jpeg', 'description': 'Classic Klondike Solitaire!'}
        ],
        'casual': [
            {'title': 'Train Miner', 'filename': 'train-miner.html', 'image': 'Train Miner-demo.jpeg', 'description': 'Mine resources with a train!'},
            {'title': 'Cannon Balls 3D', 'filename': 'cannon-balls-3d.html', 'image': 'Cannon Balls 3D-demo.jpeg', 'description': 'Shoot cannon balls in 3D!'},
            {'title': 'Gold Miner Tom', 'filename': 'gold-miner-tom.html', 'image': 'Gold Miner Tom-demo.jpeg', 'description': 'Mine for gold!'},
            {'title': 'TNT Bomb', 'filename': 'tnt-bomb.html', 'image': 'TNT Bomb-demo.jpeg', 'description': 'Use TNT to destroy blocks!'},
            {'title': 'Fruit Party', 'filename': 'fruit-party.html', 'image': 'Fruit Party-demo.jpeg', 'description': 'Match and collect fruits!'},
            {'title': 'Pirate Cards', 'filename': 'pirate-cards.html', 'image': 'Pirate Cards-demo.jpeg', 'description': 'Pirate-themed card game!'},
            {'title': 'Pocket RPG', 'filename': 'pocket-rpg.html', 'image': 'Pocket RPG-demo.jpeg', 'description': 'Mini RPG adventure!'},
            {'title': 'Matching Card Heroes', 'filename': 'matching-card-heroes.html', 'image': 'Matching Card Heroes-demo.jpeg', 'description': 'Match hero cards!'},
            {'title': 'Civilizations Wars', 'filename': 'civilizations-wars.html', 'image': 'Civilizations Wars-demo.jpeg', 'description': 'Battle between civilizations!'},
            {'title': 'Wanderlust', 'filename': 'wanderlust.html', 'image': 'Wanderlust-demo.jpeg', 'description': 'Explore the world!'},
            {'title': 'Hippo Pizza Chef', 'filename': 'hippo-pizza-chef.html', 'image': 'Hippo Pizza Chef-demo.jpeg', 'description': 'Make pizzas with a hippo!'},
            {'title': 'Monster Snack Time', 'filename': 'monster-snack-time.html', 'image': 'Monster Snack Time-demo.jpeg', 'description': 'Feed hungry monsters!'},
            {'title': 'Perfect Piano', 'filename': 'perfect-piano.html', 'image': 'Perfect Piano-demo.jpeg', 'description': 'Play piano with perfect timing!'},
            {'title': 'Bus Parking 3D', 'filename': 'bus-parking-3d.html', 'image': 'Bus Parking 3D-demo.jpeg', 'description': 'Park buses in 3D!'},
            {'title': 'Crowd Run 3D', 'filename': 'crowd-run-3d.html', 'image': 'Crowd Run 3D-demo.jpeg', 'description': 'Run through crowds in 3D!'},
            {'title': 'Wiggle', 'filename': 'wiggle.html', 'image': 'Wiggle-demo.jpeg', 'description': 'Wiggle through obstacles!'},
            {'title': 'Pizza Ninja 3', 'filename': 'pizza-ninja-3.html', 'image': 'Pizza Ninja 3-demo.jpeg', 'description': 'Slice pizzas as a ninja!'},
            {'title': 'Doggy Dive', 'filename': 'doggy-dive.html', 'image': 'Doggy Dive-demo.jpeg', 'description': 'Dive with a cute dog!'},
            {'title': 'Aliens Attack', 'filename': 'aliens-attack.html', 'image': 'Aliens Attack-demo.jpeg', 'description': 'Defend against alien attacks!'},
            {'title': 'Pizza Realife Cooking', 'filename': 'pizza-realife-cooking.html', 'image': 'Pizza Realife Cooking-demo.jpeg', 'description': 'Cook pizzas in real life!'},
            {'title': 'Pie Realife Cooking', 'filename': 'pie-realife-cooking.html', 'image': 'Pie Realife Cooking-demo.jpeg', 'description': 'Cook pies in real life!'},
            {'title': 'Emily\'s New Beginning', 'filename': 'emilys-new-beginning.html', 'image': 'Emily\'s New Beginning-demo.jpeg', 'description': 'Help Emily start fresh!'},
            {'title': 'Zoo Pinball', 'filename': 'zoo-pinball.html', 'image': 'Zoo Pinball-demo.jpeg', 'description': 'Play pinball with zoo animals!'},
            {'title': 'Love Tester', 'filename': 'love-tester.html', 'image': 'Love Tester-demo.jpeg', 'description': 'Test your love compatibility!'},
            {'title': '3 Mice', 'filename': '3-mice.html', 'image': '3 Mice-demo.jpeg', 'description': 'Help three mice escape!'},
            {'title': 'Pacman', 'filename': 'pacman.html', 'image': 'Pacman-demo.jpeg', 'description': 'Classic Pacman game!'},
            {'title': 'Tetris', 'filename': 'tetris.html', 'image': 'Tetris-demo.jpeg', 'description': 'Classic Tetris game!'},
            {'title': 'Snake', 'filename': 'snake.html', 'image': 'Snake-demo.jpeg', 'description': 'Classic Snake game!'}
        ],
        'match3': [
            {'title': 'Zoo Boom', 'filename': 'zoo-boom.html', 'image': 'Zoo Boom-demo.jpeg', 'description': 'Match zoo animals!'},
            {'title': 'Bubble Woods', 'filename': 'bubble-woods.html', 'image': 'Bubble Woods-demo.jpeg', 'description': 'Match bubbles in the woods!'},
            {'title': 'Garden Bloom', 'filename': 'garden-bloom.html', 'image': 'Garden Bloom-demo.jpeg', 'description': 'Match flowers in the garden!'},
            {'title': 'Diamond Rush 2', 'filename': 'diamond-rush-2.html', 'image': 'Diamond Rush 2-demo.jpeg', 'description': 'Match diamonds!'},
            {'title': 'Totemia Cursed Marbles', 'filename': 'totemia-cursed-marbles.html', 'image': 'Totemia Cursed Marbles-demo.jpeg', 'description': 'Match cursed marbles!'},
            {'title': 'Gold Rush', 'filename': 'gold-rush.html', 'image': 'Gold Rush-demo.jpeg', 'description': 'Match gold pieces!'},
            {'title': 'Mahjong World', 'filename': 'mahjong-world.html', 'image': 'Mahjong World-demo.jpeg', 'description': 'Match mahjong tiles!'},
            {'title': 'Tile Journey', 'filename': 'tile-journey.html', 'image': 'Tile Journey-demo.jpeg', 'description': 'Match tiles on a journey!'},
            {'title': 'Gold Mine', 'filename': 'gold-mine.html', 'image': 'Gold Mine-demo.jpeg', 'description': 'Match gold in the mine!'},
            {'title': 'Pets Rush', 'filename': 'pets-rush.html', 'image': 'Pets Rush-demo.jpeg', 'description': 'Match cute pets!'},
            {'title': 'Connect3', 'filename': 'connect3.html', 'image': 'Connect3-demo.jpeg', 'description': 'Match three in a row!'}
        ],
        'bubble-shooter': [
            {'title': 'Bubble Tower 3D', 'filename': 'bubble-tower-3d.html', 'image': 'Bubble Tower 3D-demo.jpeg', 'description': 'Shoot bubbles in 3D!'},
            {'title': 'Candy Bubble', 'filename': 'candy-bubble.html', 'image': 'Candy Bubble-demo.jpeg', 'description': 'Shoot candy bubbles!'},
            {'title': 'Shards', 'filename': 'shards.html', 'image': 'Shards-demo.jpeg', 'description': 'Shoot crystal shards!'}
        ],
        'clicker': [
            {'title': 'A Dark Room', 'filename': 'adarkroom.html', 'image': 'A Dark Room-demo.jpeg', 'description': 'Click your way through a dark room!'}
        ],
        'beauty': [
            {'title': 'Color Pixel Art', 'filename': 'color-pixel-art.html', 'image': 'Color Pixel Art-demo.jpeg', 'description': 'Create beautiful pixel art!'},
            {'title': 'Wedding Lily', 'filename': 'wedding-lily.html', 'image': 'Wedding Lily-demo.jpeg', 'description': 'Design wedding flowers!'}
        ],
        'jump-run': [
            {'title': 'Om Nom Run', 'filename': 'om-nom-run.html', 'image': 'Om Nom Run-demo.jpeg', 'description': 'Run and collect candies!'},
            {'title': 'Sushi Roll', 'filename': 'sushi-roll.html', 'image': 'Sushi Rol-demo.jpeg', 'description': 'Roll through sushi obstacles!'},
            {'title': 'Snowball World', 'filename': 'snowball-world.html', 'image': 'Snowball World-demo.jpeg', 'description': 'Roll through snow!'},
            {'title': 'Angry Flappy Wings', 'filename': 'angry-flappy-wings.html', 'image': 'Angry Flappy Wings-demo.jpeg', 'description': 'Flap through obstacles!'},
            {'title': 'Boss Level Shootout', 'filename': 'boss-level-shootout.html', 'image': 'Boss Level Shootout-demo.jpeg', 'description': 'Shoot your way through boss levels!'},
            {'title': 'Truck Trials', 'filename': 'truck-trials.html', 'image': 'Truck Trials-demo.jpeg', 'description': 'Drive through challenging trials!'},
            {'title': 'Pirates Of Islets', 'filename': 'pirates-of-islets.html', 'image': 'Pirates Of Islets-demo.jpeg', 'description': 'Jump through pirate islands!'}
        ],
        'racing': [
            {'title': 'Speed Master', 'filename': 'speed-master.html', 'image': 'Speed Master-demo.jpeg', 'description': 'Race at high speeds!'},
            {'title': 'Neon Rider', 'filename': 'neon-rider.html', 'image': 'Neon Rider-demo.jpeg', 'description': 'Ride through neon tracks!'},
            {'title': 'Burnin Rubber', 'filename': 'burnin-rubber.html', 'image': 'Burnin Rubber-demo.jpeg', 'description': 'Burn rubber on the track!'},
            {'title': 'Endless Truck', 'filename': 'endless-truck.html', 'image': 'Endless Truck-demo.jpeg', 'description': 'Drive an endless truck!'},
            {'title': 'Racing Cars', 'filename': 'racing-cars.html', 'image': 'Racing Cars-demo.jpeg', 'description': 'Race with fast cars!'},
            {'title': 'Traffic Tom', 'filename': 'traffic-tom.html', 'image': 'Traffic Tom-demo.jpeg', 'description': 'Navigate through traffic!'}
        ],
        'sport': [
            {'title': '8 Ball Billiards', 'filename': '8-ball-billiards.html', 'image': '8 Ball Billiards-demo.jpeg', 'description': 'Play pool!'},
            {'title': 'Soccer Champ 2018', 'filename': 'soccer-champ-2018.html', 'image': 'Soccer Champ 2018.jpeg', 'description': 'Play soccer!'},
            {'title': 'Table Tennis World Tour', 'filename': 'table-tennis-world-tour.html', 'image': 'able Tennis World Tour-demo.jpeg', 'description': 'Play table tennis!'},
            {'title': 'High Hills', 'filename': 'high-hills.html', 'image': 'High Hills-demo.jpeg', 'description': 'Ski down high hills!'},
            {'title': 'Highway Rider Extreme', 'filename': 'highway-rider-extreme.html', 'image': 'Highway Rider Extreme-demo.jpeg', 'description': 'Ride on the highway!'},
            {'title': 'Archery World Tour', 'filename': 'archery-world-tour.html', 'image': 'Archery World Tour-demo.jpeg', 'description': 'Shoot arrows!'},
            {'title': 'Knife Rain', 'filename': 'knife-rain.html', 'image': 'Knife Rain-demo.jpeg', 'description': 'Throw knives!'},
            {'title': 'Street Ball Star', 'filename': 'street-ball-star.html', 'image': 'Street Ball Star-demo.jpeg', 'description': 'Play street basketball!'},
            {'title': 'Curve Ball 3D', 'filename': 'curve-ball-3d.html', 'image': 'Curve Ball 3D-demo.jpeg', 'description': 'Throw curve balls!'},
            {'title': '3D Air Hockey', 'filename': '3d-air-hockey.html', 'image': '3D Air Hockey-demo.jpeg', 'description': 'Play air hockey in 3D!'},
            {'title': '3D Free Kick', 'filename': '3d-free-kick.html', 'image': '3D Free Kick-demo.jpeg', 'description': 'Take free kicks in 3D!'},
            {'title': '3D Bowling', 'filename': '3d-bowling.html', 'image': '3D Bowling-demo.jpeg', 'description': 'Play bowling in 3D!'}
        ],
        'horror': [],
        'multiplayer': []
    }
    
    # 创建分类页面
    for category, games in categories.items():
        print(f'Creating {category} page...')
        create_category_page(category, games)
    
    print('所有分类页面创建完成!')

if __name__ == '__main__':
    main() 