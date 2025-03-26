const allGames = [
    // Casual Games
    {
        title: "TNT Bomb",
        description: "Place and detonate bombs strategically!",
        image: "resized_images/TNT Bomb-demo.jpeg",
        link: "games/tnt-bomb.html",
        category: "casual"
    },
    {
        title: "Onet Connect Classic",
        description: "Test your memory in this classic matching game!",
        image: "resized_images/Onet Connect Classic-demo.jpeg",
        link: "games/onet-connect-classic.html",
        category: "casual"
    },
    {
        title: "Fruit Party",
        description: "Match and collect delicious fruits in this fun game!",
        image: "resized_images/Fruit Party-demo.jpeg",
        link: "games/fruit-party.html",
        category: "casual"
    },
    {
        title: "Zoo Boom",
        description: "Match cute animals in this adorable puzzle adventure!",
        image: "resized_images/Zoo Boom-demo.jpeg",
        link: "games/zoo-boom.html",
        category: "casual"
    },
    {
        title: "Bubble Woods",
        description: "Pop bubbles in this forest adventure!",
        image: "resized_images/Bubble Woods-demo.jpeg",
        link: "games/bubble-woods.html",
        category: "casual"
    },
    {
        title: "Garden Bloom",
        description: "Create your dream garden in this magical puzzle!",
        image: "resized_images/Garden Bloom-demo.jpeg",
        link: "games/garden-bloom.html",
        category: "casual"
    },
    {
        title: "Diamond Rush 2",
        description: "Collect diamonds in this exciting adventure!",
        image: "resized_images/Diamond Rush 2-demo.jpeg",
        link: "games/diamond-rush-2.html",
        category: "casual"
    },
    {
        title: "Candy Bubble",
        description: "Match and pop colorful candy bubbles!",
        image: "resized_images/Candy Bubble-demo.jpeg",
        link: "games/candy-bubble.html",
        category: "casual"
    },
    {
        title: "Kitchen Mahjong",
        description: "Match kitchen-themed tiles in this mahjong game!",
        image: "resized_images/Kitchen Mahjong-demo.jpeg",
        link: "games/kitchen-mahjong.html",
        category: "casual"
    },
    {
        title: "Bubble Tower 3D",
        description: "Experience bubble shooting in a new dimension!",
        image: "resized_images/Bubble Tower 3D-demo.jpeg",
        link: "games/bubble-tower-3d.html",
        category: "casual"
    },
    {
        title: "Cannon Balls 3D",
        description: "Shoot cannon balls in this 3D adventure!",
        image: "resized_images/Cannon Balls 3D-demo.jpeg",
        link: "games/cannon-balls-3d.html",
        category: "casual"
    },
    {
        title: "Pirates Of Islets",
        description: "Embark on a pirate adventure across islands!",
        image: "resized_images/Pirates Of Islets-demo.jpeg",
        link: "games/pirates-of-islets.html",
        category: "casual"
    },
    {
        title: "Zoo Pinball",
        description: "Play pinball with zoo animals!",
        image: "resized_images/Zoo Pinball-demo.jpeg",
        link: "games/zoo-pinball.html",
        category: "casual"
    },
    {
        title: "Pets Rush",
        description: "Help pets race to the finish line!",
        image: "resized_images/Pets Rush-demo.jpeg",
        link: "games/pets-rush.html",
        category: "casual"
    },
    {
        title: "3 Mice",
        description: "Help three mice find their way home!",
        image: "resized_images/3 Mice-demo.jpeg",
        link: "games/3-mice.html",
        category: "casual"
    },
    {
        title: "Gold Miner Tom",
        description: "Mine for gold in this exciting adventure!",
        image: "resized_images/Gold Miner Tom-demo.jpeg",
        link: "games/gold-miner-tom.html",
        category: "casual"
    },
    {
        title: "Gold Mine",
        description: "Dig deep for gold in this mining game!",
        image: "resized_images/Gold Mine-demo.jpeg",
        link: "games/gold-mine.html",
        category: "casual"
    },
    {
        title: "Totemia Cursed Marbels",
        description: "Shoot marbles in this mystical totem challenge!",
        image: "resized_images/Totemia Cursed Marbles-demo.jpeg",
        link: "games/totemia-cursed-marbels.html",
        category: "casual"
    },
    {
        title: "Love Tester",
        description: "Test your love compatibility!",
        image: "resized_images/Love Tester-demo.jpeg",
        link: "games/love-tester.html",
        category: "casual"
    },
    {
        title: "Wedding Lily",
        description: "Help Lily prepare for her perfect wedding!",
        image: "resized_images/Wedding Lily-demo.jpeg",
        link: "games/wedding-lily.html",
        category: "casual"
    },
    {
        title: "Pirate Cards",
        description: "Embark on a pirate-themed card adventure!",
        image: "resized_images/Pirate Cards-demo.jpeg",
        link: "games/pirate-cards.html",
        category: "casual"
    },
    {
        title: "Pizza Realife Cooking",
        description: "Cook delicious pizzas in this cooking game!",
        image: "resized_images/Pizza Realife Cooking-demo.jpeg",
        link: "games/pizza-realife-cooking.html",
        category: "casual"
    },
    {
        title: "Pie Realife Cooking",
        description: "Bake delicious pies in this cooking adventure!",
        image: "resized_images/Pie Realife Cooking-demo.jpeg",
        link: "games/pie-realife-cooking.html",
        category: "casual"
    },
    {
        title: "Emily's New Beginning",
        description: "Help Emily start her new life!",
        image: "resized_images/Emily's New Beginning-demo.jpeg",
        link: "games/emilys-new-beginning.html",
        category: "casual"
    },
    {
        title: "Train Miner",
        description: "Mine resources and build your train empire!",
        image: "resized_images/Train Miner-demo.jpeg",
        link: "games/train-miner.html",
        category: "casual"
    },
    {
        title: "Wanderlust",
        description: "Explore the world in this adventure game!",
        image: "resized_images/Wanderlust-demo.jpeg",
        link: "games/wanderlust.html",
        category: "casual"
    },
    {
        title: "Hippo Pizza Chef",
        description: "Help the hippo make delicious pizzas!",
        image: "resized_images/Hippo Pizza Chef-demo.jpeg",
        link: "games/hippo-pizza-chef.html",
        category: "casual"
    },
    {
        title: "Pocket RPG",
        description: "Embark on an epic RPG adventure!",
        image: "resized_images/Pocket RPG-demo.jpeg",
        link: "games/pocket-rpg.html",
        category: "casual"
    },
    {
        title: "Matching Card Heroes",
        description: "Match cards and collect heroes!",
        image: "resized_images/Matching Card Heroes-demo.jpeg",
        link: "games/matching-card-heroes.html",
        category: "casual"
    },
    {
        title: "Civilizations Wars",
        description: "Build your civilization and conquer!",
        image: "resized_images/Civilizations Wars-demo.jpeg",
        link: "games/civilizations-wars.html",
        category: "casual"
    },
    {
        title: "Color Pixel Art",
        description: "Create beautiful pixel art!",
        image: "resized_images/Color Pixel Art-demo.jpeg",
        link: "games/color-pixel-art.html",
        category: "casual"
    },
    {
        title: "A Dark Room",
        description: "Survive in this mysterious dark room!",
        image: "resized_images/A Dark Room-demo.jpeg",
        link: "games/a-dark-room.html",
        category: "casual"
    },
    {
        title: "Connect 3",
        description: "Match three or more items to clear the board!",
        image: "resized_images/Connect 3-demo.jpeg",
        link: "games/connect-3.html",
        category: "casual"
    },
    {
        title: "Snake",
        description: "Classic snake game with modern graphics!",
        image: "resized_images/Snake-demo.jpeg",
        link: "games/snake.html",
        category: "casual"
    },
    // Brain Games
    {
        title: "Reversi",
        description: "Classic board game of strategy and tactics!",
        image: "resized_images/Reversi-demo.jpeg",
        link: "games/reversi.html",
        category: "brain"
    },
    {
        title: "3D Chess",
        description: "Play chess in three dimensions!",
        image: "resized_images/3D Chess-demo.jpeg",
        link: "games/3d-chess.html",
        category: "brain"
    },
    {
        title: "Backgammon",
        description: "Classic backgammon board game!",
        image: "resized_images/Backgammon-demo.jpeg",
        link: "games/backgammon.html",
        category: "brain"
    },
    {
        title: "Cross Over 21",
        description: "Test your math skills in this card game!",
        image: "resized_images/Cross Over 21-demo.jpeg",
        link: "games/cross-over-21.html",
        category: "brain"
    },
    {
        title: "Gin Rummy Plus",
        description: "Play the classic card game Gin Rummy!",
        image: "resized_images/Gin Rummy Plus-demo.jpeg",
        link: "games/gin-rummy-plus.html",
        category: "brain"
    },
    {
        title: "Blocks Puzzle Zoo",
        description: "Arrange blocks to create zoo animals!",
        image: "resized_images/Blocks Puzzle Zoo-demo.jpeg",
        link: "games/blocks-puzzle-zoo.html",
        category: "brain"
    },
    {
        title: "Sudoku Classic",
        description: "Classic number puzzle that challenges your logic!",
        image: "resized_images/Sudoku Classic-demo.jpeg",
        link: "games/sudoku-classic.html",
        category: "brain"
    },
    {
        title: "Miner Block",
        description: "Mine blocks and solve puzzles!",
        image: "resized_images/Miner Block-demo.jpeg",
        link: "games/miner-block.html",
        category: "brain"
    },
    {
        title: "Little Shop Of Treasures",
        description: "Find hidden treasures in this puzzle game!",
        image: "resized_images/Little Shop Of Treasures-demo.jpeg",
        link: "games/little-shop-of-treasures.html",
        category: "brain"
    },
    {
        title: "Words of Wonders",
        description: "Find words in this word puzzle game!",
        image: "resized_images/Words of Wonders-demo.jpeg",
        link: "games/words-of-wonders.html",
        category: "brain"
    },
    {
        title: "Cut The Rope",
        description: "Cut ropes to feed the hungry monster!",
        image: "resized_images/Cut The Rope-demo.jpeg",
        link: "games/cut-the-rope.html",
        category: "brain"
    },
    {
        title: "Spot The Cat",
        description: "Find the hidden cat in each level!",
        image: "resized_images/Spot The Cat-demo.jpeg",
        link: "games/spot-the-cat.html",
        category: "brain"
    },
    {
        title: "Kiba & Kumba Jigsaw Puzzle",
        description: "Solve jigsaw puzzles with cute animals!",
        image: "resized_images/Kiba & Kumba Jigsaw Puzzle-demo.jpeg",
        link: "games/kiba-kumba-jigsaw-puzzle.html",
        category: "brain"
    },
    {
        title: "Jigsaw Puzzle Classic",
        description: "Classic jigsaw puzzle game!",
        image: "resized_images/Jigsaw Puzzle Classic-demo.jpeg",
        link: "games/jigsaw-puzzle-classic.html",
        category: "brain"
    },
    {
        title: "Puzzletag",
        description: "Arrange puzzle pieces to create pictures!",
        image: "resized_images/Puzzletag-demo.jpeg",
        link: "games/puzzletag.html",
        category: "brain"
    },
    {
        title: "Jigsaw Puzzle Deluxe",
        description: "Deluxe version of the classic jigsaw puzzle!",
        image: "resized_images/Jigsaw Puzzle Deluxe-demo.jpeg",
        link: "games/jigsaw-puzzle-deluxe.html",
        category: "brain"
    },
    {
        title: "Color Water Sort 3D",
        description: "Sort colored water in this 3D puzzle!",
        image: "resized_images/Color Water Sort 3D-demo.jpeg",
        link: "games/color-water-sort-3d.html",
        category: "brain"
    },
    {
        title: "Toilet Run",
        description: "Help the character reach the toilet in time!",
        image: "resized_images/Toilet Run-demo.jpeg",
        link: "games/toilet-run.html",
        category: "brain"
    },
    {
        title: "Sort It",
        description: "Sort items in this puzzle game!",
        image: "resized_images/Sort It-demo.jpeg",
        link: "games/sort-it.html",
        category: "brain"
    },
    {
        title: "Cube Match",
        description: "Match cubes in this puzzle game!",
        image: "resized_images/Cube Match-demo.jpeg",
        link: "games/cube-match.html",
        category: "brain"
    },
    {
        title: "Parking Jam",
        description: "Help cars find their parking spots!",
        image: "resized_images/Parking Jam-demo.jpeg",
        link: "games/parking-jam.html",
        category: "brain"
    },
    {
        title: "Tile Journey",
        description: "Arrange tiles to create a path!",
        image: "resized_images/Tile Journey-demo.jpeg",
        link: "games/tile-journey.html",
        category: "brain"
    },
    {
        title: "Train 2048",
        description: "2048 puzzle with trains!",
        image: "resized_images/Train 2048-demo.jpeg",
        link: "games/train-2048.html",
        category: "brain"
    },
    {
        title: "Giant 2048",
        description: "Giant version of the 2048 puzzle!",
        image: "resized_images/Giant 2048-demo.jpeg",
        link: "games/giant-2048.html",
        category: "brain"
    },
    {
        title: "Brain Trainer",
        description: "Train your brain with various puzzles!",
        image: "resized_images/Brain Trainer-demo.jpeg",
        link: "games/brain-trainer.html",
        category: "brain"
    },
    {
        title: "Word Search Classic",
        description: "Find hidden words in this word puzzle!",
        image: "resized_images/Word Search Classic-demo.jpeg",
        link: "games/word-search-classic.html",
        category: "brain"
    },
    {
        title: "7 Words",
        description: "Find seven words in this word puzzle!",
        image: "resized_images/7 Words-demo.jpeg",
        link: "games/7-words.html",
        category: "brain"
    },
    {
        title: "Jungle Roller",
        description: "Roll through the jungle in this puzzle!",
        image: "resized_images/Jungle Roller-demo.jpeg",
        link: "games/jungle-roller.html",
        category: "brain"
    },
    {
        title: "Find In Mind",
        description: "Find hidden objects in this memory game!",
        image: "resized_images/Find In Mind-demo.jpeg",
        link: "games/find-in-mind.html",
        category: "brain"
    },
    {
        title: "Solitaire Classic",
        description: "Classic solitaire card game!",
        image: "resized_images/Solitaire Classic-demo.jpeg",
        link: "games/solitaire-classic.html",
        category: "brain"
    },
    {
        title: "Hiddentastic Mansion",
        description: "Find hidden objects in this mansion!",
        image: "resized_images/Hiddentastic Mansion-demo.jpeg",
        link: "games/hiddentastic-mansion.html",
        category: "brain"
    },
    {
        title: "Monster Snack Time",
        description: "Feed monsters in this puzzle game!",
        image: "resized_images/Monster Snack Time-demo.jpeg",
        link: "games/monster-snack-time.html",
        category: "brain"
    },
    {
        title: "Spider Solitaire",
        description: "Classic spider solitaire card game!",
        image: "resized_images/Spider Solitaire-demo.jpeg",
        link: "games/spider-solitaire.html",
        category: "brain"
    },
    {
        title: "Mahjong World",
        description: "Play mahjong with beautiful tiles!",
        image: "resized_images/Mahjong World-demo.jpeg",
        link: "games/mahjong-world.html",
        category: "brain"
    },
    {
        title: "Pull Pins",
        description: "Pull pins to solve puzzles!",
        image: "resized_images/Pull Pins-demo.jpeg",
        link: "games/pull-pins.html",
        category: "brain"
    },
    {
        title: "Gold Rush",
        description: "Find gold in this puzzle adventure!",
        image: "resized_images/Gold Rush-demo.jpeg",
        link: "games/gold-rush.html",
        category: "brain"
    },
    {
        title: "Wordguess 2 Heavy",
        description: "Guess words in this word game!",
        image: "resized_images/Wordguess 2 Heavy-demo.jpeg",
        link: "games/wordguess-2-heavy.html",
        category: "brain"
    },
    {
        title: "Guess Their Answer",
        description: "Guess what others are thinking!",
        image: "resized_images/Guess Their Answer-demo.jpeg",
        link: "games/guess-their-answer.html",
        category: "brain"
    },
    {
        title: "Shards",
        description: "Arrange shards to create pictures!",
        image: "resized_images/Shards-demo.jpeg",
        link: "games/shards.html",
        category: "brain"
    },
    {
        title: "8 Ball Billiards",
        description: "Play pool in this billiards game!",
        image: "resized_images/8 Ball Billiards-demo.jpeg",
        link: "games/8-ball-billiards.html",
        category: "brain"
    },
    {
        title: "Find 500 Differences",
        description: "Find differences between pictures!",
        image: "resized_images/Find 500 Differences-demo.jpeg",
        link: "games/find-500-differences.html",
        category: "brain"
    },
    {
        title: "Solitaire Klondike",
        description: "Classic solitaire with a modern twist!",
        image: "resized_images/Solitaire Klondike-demo.jpeg",
        link: "games/solitaire-klondike.html",
        category: "brain"
    },
    {
        title: "2048",
        description: "Classic 2048 number puzzle!",
        image: "resized_images/2048-demo.jpeg",
        link: "games/2048.html",
        category: "brain"
    },
    {
        title: "Chess",
        description: "Classic chess game!",
        image: "resized_images/Chess-demo.jpeg",
        link: "games/chess.html",
        category: "brain"
    },
    // Fast-Paced Games
    {
        title: "Om Nom Run",
        description: "Run and collect candies in this exciting adventure!",
        image: "resized_images/Om Nom Run-demo.jpeg",
        link: "games/om-nom-run.html",
        category: "fast-paced"
    },
    {
        title: "Speed Master",
        description: "Test your speed in this racing game!",
        image: "resized_images/Speed Master-demo.jpeg",
        link: "games/speed-master.html",
        category: "fast-paced"
    },
    {
        title: "Neon Rider",
        description: "Ride through neon-lit tracks!",
        image: "resized_images/Neon Rider-demo.jpeg",
        link: "games/neon-rider.html",
        category: "fast-paced"
    },
    {
        title: "Traffic Tom",
        description: "Navigate through traffic in this driving game!",
        image: "resized_images/Traffic Tom-demo.jpeg",
        link: "games/traffic-tom.html",
        category: "fast-paced"
    },
    {
        title: "Perfect Piano",
        description: "Test your rhythm in this musical challenge!",
        image: "resized_images/Perfect Piano-demo.jpeg",
        link: "games/perfect-piano.html",
        category: "fast-paced"
    },
    {
        title: "Burnin Rubber",
        description: "Burn rubber in this racing game!",
        image: "resized_images/Burnin Rubber-demo.jpeg",
        link: "games/burnin-rubber.html",
        category: "fast-paced"
    },
    {
        title: "Bus Parking 3D",
        description: "Park buses in this 3D driving game!",
        image: "resized_images/Bus Parking 3D-demo.jpeg",
        link: "games/bus-parking-3d.html",
        category: "fast-paced"
    },
    {
        title: "Soccer Champ 2018",
        description: "Play soccer in this sports game!",
        image: "resized_images/Soccer Champ 2018-demo.jpeg",
        link: "games/soccer-champ-2018.html",
        category: "fast-paced"
    },
    {
        title: "Crowd Run 3D",
        description: "Run through crowds in this 3D game!",
        image: "resized_images/Crowd Run 3D-demo.jpeg",
        link: "games/crowd-run-3d.html",
        category: "fast-paced"
    },
    {
        title: "Wiggle",
        description: "Wiggle through obstacles in this fun game!",
        image: "resized_images/Wiggle-demo.jpeg",
        link: "games/wiggle.html",
        category: "fast-paced"
    },
    {
        title: "Doggy Dive",
        description: "Dive with dogs in this water game!",
        image: "resized_images/Doggy Dive-demo.jpeg",
        link: "games/doggy-dive.html",
        category: "fast-paced"
    },
    {
        title: "Aliens Attack",
        description: "Defend against alien attacks!",
        image: "resized_images/Aliens Attack-demo.jpeg",
        link: "games/aliens-attack.html",
        category: "fast-paced"
    },
    {
        title: "Sushi Roll",
        description: "Roll sushi in this cooking game!",
        image: "resized_images/Sushi Roll-demo.jpeg",
        link: "games/sushi-roll.html",
        category: "fast-paced"
    },
    {
        title: "Endless Truck",
        description: "Drive endlessly in this truck game!",
        image: "resized_images/Endless Truck-demo.jpeg",
        link: "games/endless-truck.html",
        category: "fast-paced"
    },
    {
        title: "Racing Cars",
        description: "Race cars in this exciting game!",
        image: "resized_images/Racing Cars-demo.jpeg",
        link: "games/racing-cars.html",
        category: "fast-paced"
    },
    {
        title: "Pizza Ninja 3",
        description: "Slice pizzas in this ninja game!",
        image: "resized_images/Pizza Ninja 3-demo.jpeg",
        link: "games/pizza-ninja-3.html",
        category: "fast-paced"
    },
    {
        title: "Table Tennis World Tour",
        description: "Play table tennis in this sports game!",
        image: "original_images/Table Tennis World Tour-demo.jpeg",
        link: "games/table-tennis-world-tour.html",
        category: "fast-paced"
    },
    {
        title: "High Hills",
        description: "Climb high hills in this adventure!",
        image: "resized_images/High Hills-demo.jpeg",
        link: "games/high-hills.html",
        category: "fast-paced"
    },
    {
        title: "Snowball World",
        description: "Throw snowballs in this winter game!",
        image: "resized_images/Snowball World-demo.jpeg",
        link: "games/snowball-world.html",
        category: "fast-paced"
    },
    {
        title: "3D Bowling",
        description: "Play bowling in 3D!",
        image: "resized_images/3D Bowling-demo.jpeg",
        link: "games/3d-bowling.html",
        category: "fast-paced"
    },
    {
        title: "Highway Rider Extreme",
        description: "Ride motorcycles on the highway!",
        image: "resized_images/Highway Rider Extreme-demo.jpeg",
        link: "games/highway-rider-extreme.html",
        category: "fast-paced"
    },
    {
        title: "Archery World Tour",
        description: "Shoot arrows in this archery game!",
        image: "resized_images/Archery World Tour-demo.jpeg",
        link: "games/archery-world-tour.html",
        category: "fast-paced"
    },
    {
        title: "Knife Rain",
        description: "Dodge falling knives in this game!",
        image: "resized_images/Knife Rain-demo.jpeg",
        link: "games/knife-rain.html",
        category: "fast-paced"
    },
    {
        title: "Angry Flappy Wings",
        description: "Flap wings in this bird game!",
        image: "resized_images/Angry Flappy Wings-demo.jpeg",
        link: "games/angry-flappy-wings.html",
        category: "fast-paced"
    },
    {
        title: "Curve Ball 3D",
        description: "Throw curve balls in this 3D game!",
        image: "resized_images/Curve Ball 3D-demo.jpeg",
        link: "games/curve-ball-3d.html",
        category: "fast-paced"
    },
    {
        title: "Street Ball Star",
        description: "Play street basketball in this game!",
        image: "resized_images/Street Ball Star-demo.jpeg",
        link: "games/street-ball-star.html",
        category: "fast-paced"
    },
    {
        title: "Boss Level Shootout",
        description: "Fight bosses in this shooting game!",
        image: "resized_images/Boss Level Shootout-demo.jpeg",
        link: "games/boss-level-shootout.html",
        category: "fast-paced"
    },
    {
        title: "3D Air Hockey",
        description: "Play air hockey in 3D!",
        image: "resized_images/3D Air Hockey-demo.jpeg",
        link: "games/3d-air-hockey.html",
        category: "fast-paced"
    },
    {
        title: "Truck Trials",
        description: "Drive trucks through challenging trials!",
        image: "resized_images/Truck Trials-demo.jpeg",
        link: "games/truck-trials.html",
        category: "fast-paced"
    },
    {
        title: "3D Free Kick",
        description: "Take free kicks in this 3D soccer game!",
        image: "resized_images/3D Free Kick-demo.jpeg",
        link: "games/3d-free-kick.html",
        category: "fast-paced"
    },
    {
        title: "Pacman",
        description: "Classic Pacman arcade game!",
        image: "resized_images/Pacman-demo.jpeg",
        link: "games/pacman.html",
        category: "fast-paced"
    },
    {
        title: "Tetris",
        description: "Classic Tetris block-stacking game!",
        image: "resized_images/Tetris-demo.jpeg",
        link: "games/tetris.html",
        category: "fast-paced"
    }
]; 