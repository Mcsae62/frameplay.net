import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { allGames } from './games-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取所有游戏链接
const gameLinks = allGames.map(game => game.link);

// 为每个游戏页面创建或更新评分系统
gameLinks.forEach(link => {
    const gamePath = path.join(__dirname, '..', link);
    
    // 检查文件是否存在
    if (!fs.existsSync(gamePath)) {
        console.log(`Skipping ${link} - file does not exist`);
        return;
    }
    
    try {
        // 读取游戏页面内容
        let content = fs.readFileSync(gamePath, 'utf8');
        
        // 删除旧的评分系统代码
        content = content.replace(/<script>\s*\/\/ Rating system functionality[\s\S]*?<\/script>/g, '');
        
        // 添加新的评分系统引用
        content = content.replace(
            /<script src="\.\.\/js\/games-data\.js"><\/script>/,
            '<script src="../js/rating-system.js"></script>\n<script src="../js/games-data.js"></script>'
        );
        
        // 确保只有一个评分容器
        content = content.replace(
            /<div class="rating-container">[\s\S]*?<\/div>\s*<div class="rating-container">[\s\S]*?<\/div>/g,
            '<div class="rating-container">\n        <span class="rating-star" data-rating="1">❤</span>\n        <span class="rating-star" data-rating="2">❤</span>\n        <span class="rating-star" data-rating="3">❤</span>\n        <span class="rating-star" data-rating="4">❤</span>\n        <span class="rating-star" data-rating="5">❤</span>\n        <span class="rating-count">(0 ratings)</span>\n    </div>'
        );
        
        // 写入更新后的内容
        fs.writeFileSync(gamePath, content);
        console.log(`Updated rating system for ${link}`);
    } catch (error) {
        console.error(`Error updating ${link}:`, error.message);
    }
}); 