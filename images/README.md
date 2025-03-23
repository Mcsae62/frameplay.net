# Images Directory

This directory contains all the image assets used throughout the Frameplay.net website.

## Contents

### Game Icons and Thumbnails
- Game preview images displayed on the homepage
- Icons used for navigation and game selection

### UI Elements
- Button images
- Background textures
- Banner graphics

### Game Assets
- Sprites used in various games
- Character images
- Game-specific graphics

## Image Formats

The images in this directory use the following formats:
- PNG: For graphics requiring transparency
- JPG: For photographs and complex images without transparency needs
- SVG: For scalable icons and simple graphics

## Usage Guidelines

When adding new images to this directory:

1. Use clear and descriptive filenames (e.g., `chess-icon.png`, `pacman-banner.jpg`)
2. Optimize images for web usage to reduce loading times
3. Maintain a consistent style with existing graphics
4. Consider adding images to appropriate subdirectories for better organization

## Referencing Images

To use these images in HTML files:

From the root directory (index.html):
```html
<img src="images/filename.png" alt="Description">
```

From game pages (games/gamename.html):
```html
<img src="../images/filename.png" alt="Description">
```

## Image Credits

- Game-specific graphics may be subject to their original licenses
- Custom UI elements created for Frameplay.net
- Some assets may be from open-source/free design resources

## Future Organization

As the project grows, consider organizing images into subdirectories:
```
/images
  /icons
  /backgrounds
  /games
    /chess
    /2048
    /tetris
    etc.
  /ui
```
