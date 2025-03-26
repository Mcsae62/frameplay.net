const fs = require('fs');
const path = require('path');

// 要更新的样式
const newStyles = `
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
                width: 100%;
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
                margin-top: 5px;
            }
            
            .language-content a {
                text-align: center;
                font-size: 14px;
            }
            
            .dropdown {
                width: 100%;
                margin: 5px 0;
            }
            
            .dropdown .dropdown-button {
                width: 100%;
                text-align: center;
                padding: 6px 12px;
                font-size: 14px;
            }
            
            .dropdown-content {
                width: 100%;
                position: static;
                box-shadow: none;
                margin-top: 5px;
            }
            
            .dropdown-content a {
                text-align: center;
                font-size: 14px;
            }
            
            .logo {
                font-size: 20px;
                text-align: center;
                width: 100%;
            }
            
            .game-container {
                height: 500px;
            }
            
            .info-container {
                grid-template-columns: 1fr;
                gap: 15px;
                padding: 0 10px;
            }
            
            .info-box {
                margin: 0;
            }
            
            .back-button {
                margin-left: 10px;
                margin-right: 10px;
            }
        }
`;

// 要更新的HTML内容
const newDropdownContent = `
                <div class="language-dropdown">
                    <button class="dropdown-button">Language</button>
                    <div class="language-content">
                        <a href="#" data-lang="en">English</a>
                        <a href="#" data-lang="de">Deutsch</a>
                        <a href="#" data-lang="es">Español</a>
                        <a href="#" data-lang="zh">简体中文</a>
                    </div>
                </div>
                
                <div class="dropdown">
                    <button class="dropdown-button">Game Navigation</button>
                    <div class="dropdown-content">
                        <a href="../pages/casual.html">Casual</a>
                        <a href="../pages/brain.html">Brain</a>
                        <a href="../pages/fast-paced.html">Fast-Paced</a>
                    </div>
                </div>
`;

// 获取所有游戏页面文件
const gamesDir = path.join(__dirname, 'games');
const gameFiles = fs.readdirSync(gamesDir).filter(file => file.endsWith('.html'));

// 更新每个游戏页面的样式和内容
gameFiles.forEach(file => {
    const filePath = path.join(gamesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 查找并替换样式部分
    const styleRegex = /<style>[\s\S]*?<\/style>/;
    content = content.replace(styleRegex, `<style>${newStyles}</style>`);
    
    // 查找并替换下拉菜单内容
    const dropdownRegex = /<div class="language-dropdown">[\s\S]*?<\/div>\s*<div class="dropdown">[\s\S]*?<\/div>/;
    content = content.replace(dropdownRegex, newDropdownContent);
    
    // 保存更新后的内容
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`已更新 ${file} 的样式和内容`);
});

console.log('所有游戏页面的样式和内容已更新完成！'); 