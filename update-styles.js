const fs = require('fs');
const path = require('path');

// 要更新的样式
const newStyles = `
        /* Base colors and styles */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #E0F7FA; /* 浅蓝色背景 */
            color: #333333;
            margin: 0;
            padding: 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }
        
        /* Header styles */
        header {
            background-color: #4FC3F7;
            padding: 15px 0;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            color: white;
            font-size: 24px;
            font-weight: bold;
            text-decoration: none;
        }
        
        /* Search bar */
        .search-container {
            display: flex;
            margin: 0 auto;  /* 修改为auto实现居中 */
            flex: 1;        /* 添加flex:1使其占据剩余空间 */
            max-width: 500px;  /* 增加最大宽度 */
        }
        
        .search-input {
            padding: 8px 12px;
            border: none;
            border-radius: 4px 0 0 4px;
            width: 100%;    /* 修改为100%填充容器 */
            font-family: 'Arial', sans-serif;
            font-size: 14px;
        }
        
        .search-button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            font-weight: 600;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
            transition: background-color 0.2s;
        }
        
        .search-button:hover {
            background-color: #388E3C;
        }
        
        /* Language dropdown */
        .language-dropdown {
            position: relative;
            display: inline-block;
            margin-right: 5px;
        }
        
        .language-dropdown .dropdown-button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: background-color 0.2s;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
        }
        
        .language-dropdown .dropdown-button:hover {
            background-color: #388E3C;
        }
        
        .language-content {
            display: none;
            position: absolute;
            right: 0;
            background-color: white;
            min-width: 180px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 1000;
            border-radius: 4px;
            border: 1px solid #ddd;
        }
        
        .language-dropdown:hover .language-content {
            display: block;
        }
        
        .language-content a {
            color: #333;
            padding: 8px 12px;
            text-decoration: none;
            display: block;
            transition: background-color 0.2s, color 0.2s;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
        }
        
        .language-content a:hover {
            background-color: #E0F7FA;
            color: #FF6F00;
        }
        
        /* Game navigation dropdown */
        .dropdown {
            position: relative;
            display: inline-block;
            margin-left: 10px;
        }
        
        .dropdown .dropdown-button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: background-color 0.2s;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
        }
        
        .dropdown .dropdown-button:hover {
            background-color: #388E3C;
        }
        
        .dropdown-content {
            display: none;
            position: absolute;
            right: 0;
            background-color: white;
            min-width: 180px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 1000;
            border-radius: 4px;
            border: 1px solid #ddd;
        }
        
        .dropdown:hover .dropdown-content {
            display: block;
        }
        
        .dropdown-content a {
            color: #333;
            padding: 8px 12px;
            text-decoration: none;
            display: block;
            transition: background-color 0.2s, color 0.2s;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
        }
        
        .dropdown-content a:hover {
            background-color: #E0F7FA;
            color: #FF6F00;
        }
        
        .dropdown-content a.active {
            background-color: #E0F7FA;
            color: #FF6F00;
            font-weight: bold;
        }

        /* Back button */
        .back-button {
            background-color: #0277BD;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            margin: 20px 0;
            max-width: 1200px;
            margin-left: calc((100% - 1200px) / 2);
        }
        
        .back-button:hover {
            background-color: #01579B;
        }
        
        /* Game title */
        .game-title {
            color: #FF6F00; /* 经典暖色标题 */
            text-align: center;
            margin: 30px 0;
            font-size: 32px;
        }
        
        /* Game container */
        .game-container {
            margin: 20px auto;
            max-width: 900px;
            height: 700px;
            border: 2px solid #B3E5FC;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .game-container iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        }
        
        /* Game information sections */
        .info-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 30px auto;
            max-width: 1200px;  /* 修改为与container相同的宽度 */
            padding: 0 15px;
        }
        
        .info-box {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            max-width: 580px;  /* 增加最大宽度 */
        }
        
        .info-title {
            color: #FF6F00; /* 经典暖色标题 */
            font-size: 20px;
            margin-bottom: 15px;
        }
        
        /* Footer */
        footer {
            background-color: #4FC3F7;
            color: white;
            text-align: center;
            padding: 20px 0;
            margin-top: 50px;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        
        .footer-links a {
            color: white;
            text-decoration: none;
        }
        
        .footer-links a:hover {
            text-decoration: underline;
        }
        
        .list-item {
            margin-bottom: 8px;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 15px;
            }
            
            .search-container {
                margin: 15px 0;
                width: 100%;
            }
            
            .search-input {
                width: 100%;
            }
            
            .info-container {
                grid-template-columns: 1fr;
            }
            
            .game-container {
                height: 550px;
            }
            
            .footer-links {
                flex-direction: column;
                gap: 10px;
            }
        }

        /* Discord invite link style */
        .discord-invite {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 14px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .discord-invite:hover {
            background-color: #388E3C;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        /* 移动端优化 */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 10px;
                padding: 10px 0;
            }
            
            .search-container {
                width: 100%;
                margin: 5px 0;
            }
            
            .search-input {
                font-size: 14px;
                padding: 6px 10px;
            }
            
            .search-button {
                padding: 6px 12px;
                font-size: 14px;
            }
            
            .language-dropdown {
                width: 100%;
                margin: 5px 0;
            }
            
            .language-dropdown .dropdown-button {
                width: 100%;
                text-align: center;
                padding: 6px 12px;
                font-size: 14px;
            }
            
            .language-content {
                width: 100%;
                position: static;
                box-shadow: none;
                border: 1px solid #ddd;
                margin-top: 5px;
                display: none;
            }
            
            .language-dropdown:hover .language-content {
                display: block;
            }
        }`;

const newScripts = `
    <script src="../js/games-data.js"></script>
    <script>
        function performSearch(term) {
            if (!term) return;
            // 修正路径，从games目录跳转到主页
            window.location.href = '../../index.html?search=' + encodeURIComponent(term);
        }

        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeSearch);
        } else {
            initializeSearch();
        }

        function initializeSearch() {
            const searchForm = document.querySelector('.search-form');
            const searchInput = document.querySelector('.search-input');
            const searchButton = document.querySelector('.search-button');
            
            // 添加表单提交事件
            if (searchForm) {
                searchForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    performSearch(searchInput.value.trim());
                });
            }
            
            // 添加按钮点击事件
            if (searchButton) {
                searchButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    performSearch(searchInput.value.trim());
                });
            }
            
            // 添加输入框回车事件
            if (searchInput) {
                searchInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        performSearch(this.value.trim());
                    }
                });
            }
        }
    </script>
`;

// 读取并更新文件
function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 找到样式开始和结束的位置
        const styleStart = content.indexOf('<style>');
        const styleEnd = content.indexOf('</style>');
        
        // 更新导航链接
        content = content.replace(
            /href="\/pages\/(casual|brain|fast-paced)\.html"/g,
            'href="../pages/$1.html"'
        );
        
        // 更新语言选项
        content = content.replace(
            /<div class="language-content">[\s\S]*?<\/div>/,
            `<div class="language-content">
                        <a href="#" data-lang="en">English</a>
                        <a href="#" data-lang="de">Deutsch</a>
                        <a href="#" data-lang="es">Español</a>
                        <a href="#" data-lang="zh">简体中文</a>
                    </div>`
        );
        
        // 更新搜索功能
        if (!content.includes('performSearch')) {
            content = content.replace(
                /<\/body>/,
                newScripts + '</body>'
            );
        }
        
        if (styleStart !== -1 && styleEnd !== -1) {
            // 获取原始内容中的游戏特定样式
            const originalContent = content.substring(styleStart + 7, styleEnd);
            const gameSpecificStyles = originalContent.match(/\/\* Game specific styles \*\/[\s\S]*?(?=\/\*|$)/);
            
            // 替换样式部分，保留游戏特定样式
            content = content.substring(0, styleStart) + '<style>' + newStyles + 
                     (gameSpecificStyles ? gameSpecificStyles[0] : '') + 
                     '</style>' + content.substring(styleEnd + 8);
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated styles in ${filePath}`);
        } else {
            console.log(`No style section found in ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

// 处理games目录下的所有HTML文件
const gamesDir = path.join(__dirname, 'games');
fs.readdir(gamesDir, (err, files) => {
    if (err) {
        console.error('Error reading games directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.endsWith('.html') && file !== '2048.html' && file !== 'tetris.html') {
            updateFile(path.join(gamesDir, file));
        }
    });
}); 