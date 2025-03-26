const fs = require('fs');
const path = require('path');

// Discord invite link style
const discordStyle = `
/* Discord invite link style */
.discord-invite {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #7289DA;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 14px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 1000;
}

.discord-invite:hover {
    background-color: #5B73C7;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}`;

// Discord invite link HTML
const discordLink = `
    <!-- Discord invite link -->
    <a href="https://discord.gg/your-invite-code" class="discord-invite" target="_blank">
        Join Discord
    </a>`;

// 获取游戏目录中的所有 HTML 文件
const gamesDir = path.join(__dirname, '../games');
const files = fs.readdirSync(gamesDir).filter(file => file.endsWith('.html'));

// 更新每个文件
files.forEach(file => {
    const filePath = path.join(gamesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 检查是否已经包含 Discord 样式
    if (!content.includes('.discord-invite')) {
        // 在 style 标签结束前添加样式
        content = content.replace('</style>', `${discordStyle}\n</style>`);
    }
    
    // 检查是否已经包含 Discord 链接
    if (!content.includes('class="discord-invite"')) {
        // 在 body 标签结束前添加链接
        content = content.replace('</body>', `${discordLink}\n</body>`);
    }
    
    // 保存更新后的内容
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
}); 