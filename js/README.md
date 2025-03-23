# Frameplay.net Game Website

This repository contains a collection of classic web games with additional features including a chat box and leaderboard system.

## Features

### Games Collection
The website hosts several classic games including:
- 2048
- A Dark Room
- Chess
- Connect 3
- Pacman
- Snake
- Tetris

### Chat Box
The integrated chat box allows users to communicate with each other while playing games.

#### Chat Box Features:
- Real-time messaging
- Simple and intuitive interface
- Minimizable design
- Username display
- Timestamp for messages

#### Technical Implementation:
The chat box is implemented using:
- HTML/CSS for the interface
- JavaScript for functionality
- Local storage for maintaining chat history
- Basic validation to prevent empty messages

### Leaderboard System
The leaderboard tracks high scores across different games.

#### Leaderboard Features:
- Game-specific high scores
- Player rankings
- Date/time of score achievements
- Persistent storage of scores

#### Technical Implementation:
The leaderboard system uses:
- JavaScript for score tracking and display
- Local storage for maintaining score data between sessions
- Sorting algorithms to rank players
- Score validation to prevent cheating

## Setup and Installation

1. Clone the repository
2. The website can be served from any standard web server
3. No backend setup is required as the chat and leaderboard use client-side storage

## Usage

### Adding New Games
To add a new game:
1. Create a new HTML file in the `games` folder
2. Link the game from the main index.html page
3. Implement leaderboard integration in the game's JavaScript

### Modifying the Chat Box
The chat box can be customized by editing the chat.js file and the corresponding styles.

### Extending the Leaderboard
To add leaderboard support to new games:
1. Import the leaderboard.js script in your game file
2. Call the `updateLeaderboard(gameName, playerName, score)` function when a game ends

## File Structure

```
/
├── index.html              # Main homepage
├── css/                    # CSS styles
├── js/
│   ├── chat.js             # Chat box functionality
│   └── leaderboard.js      # Leaderboard system
├── games/
│   ├── 2048.html           # 2048 game
│   ├── adarkroom.html      # A Dark Room game
│   ├── chess.html          # Chess game
│   ├── connect3.html       # Connect 3 game
│   ├── pacman.html         # Pacman game
│   ├── snake.html          # Snake game
│   └── tetris.html         # Tetris game
└── images/                 # Game images and assets
```

## Browser Compatibility
The website and its features are compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements
- User account system
- Global leaderboards with backend storage
- Enhanced chat features including emojis and private messaging
- Mobile-responsive design improvements
