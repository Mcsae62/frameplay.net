const fs = require('fs');
const path = require('path');

// 搜索功能的代码模板
const searchCode = `
    <script src="../js/games-data.js"></script>
    <script>
        function performSearch(term) {
            if (!term) return;
            // 从games目录跳转到主页
            window.location.href = '../index.html?search=' + encodeURIComponent(term);
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
    </script>`;

// 更新单个文件
function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 检查是否已经包含搜索功能
        if (content.includes('games-data.js')) {
            console.log(`跳过 ${filePath} - 已包含搜索功能`);
            return;
        }
        
        // 在body标签结束前插入搜索功能代码
        content = content.replace('</body>', `${searchCode}\n</body>`);
        
        // 写入更新后的内容
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`已更新 ${filePath}`);
    } catch (error) {
        console.error(`更新 ${filePath} 时出错:`, error);
    }
}

// 更新目录中的所有HTML文件
function updateDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isFile() && file.endsWith('.html')) {
            updateFile(filePath);
        }
    });
}

// 开始更新
const gamesDir = path.join(__dirname, 'games');
console.log('开始更新游戏页面的搜索功能...');
updateDirectory(gamesDir);
console.log('更新完成！'); 