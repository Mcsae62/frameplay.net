// 排行榜组件
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否已经创建了排行榜
    if (document.getElementById('leaderboard-container')) {
        return;
    }
    
    // 在页面右侧创建排行榜容器
    const leaderboardHTML = `
    <div id="leaderboard-container" class="leaderboard-container">
        <div class="leaderboard-header">
            <span class="leaderboard-title">Leaderboard</span>
            <div class="leaderboard-controls">
                <button id="leaderboard-toggle" class="leaderboard-toggle">-</button>
            </div>
        </div>
        <div id="leaderboard-body" class="leaderboard-body">
            <div class="leaderboard-tabs">
                <button class="tab-btn active" data-tab="all-time">All Time</button>
                <button class="tab-btn" data-tab="today">Today</button>
            </div>
            <div id="leaderboard-content" class="leaderboard-content"></div>
        </div>
    </div>
    `;
    
    // 创建样式
    const styleElement = document.createElement('style');
    styleElement.textContent = `
    /* 排行榜样式 */
    .leaderboard-container {
        position: fixed;
        top: 100px;
        right: 20px;
        width: 300px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        z-index: 900;
        overflow: hidden;
        transition: width 0.3s ease, height 0.3s ease, transform 0.3s ease;
    }
    
    .leaderboard-container.minimized {
        width: 50px;
        height: 40px;
        overflow: hidden;
    }
    
    .leaderboard-header {
        background-color: #FF6F00;
        color: white;
        padding: 10px 15px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .leaderboard-title {
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .leaderboard-controls {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .leaderboard-toggle {
        background: none;
        border: none;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        padding: 0 5px;
    }
    
    .leaderboard-body {
        padding: 10px;
        transition: height 0.3s ease;
    }
    
    .leaderboard-container.minimized .leaderboard-body {
        display: none;
    }
    
    .leaderboard-tabs {
        display: flex;
        gap: 5px;
        margin-bottom: 10px;
    }
    
    .tab-btn {
        flex: 1;
        padding: 5px;
        border: none;
        background: #f0f0f0;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
    }
    
    .tab-btn.active {
        background: #FF6F00;
        color: white;
    }
    
    .leaderboard-content {
        max-height: 300px;
        overflow-y: auto;
    }
    
    .leaderboard-item {
        padding: 8px;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .player-avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    
    .leaderboard-rank {
        font-weight: bold;
        color: #FF6F00;
        min-width: 24px;
    }
    
    .leaderboard-name {
        flex-grow: 1;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .leaderboard-score {
        font-weight: bold;
        color: #0277BD;
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
        .leaderboard-container {
            top: auto;
            bottom: 80px;
            right: 10px;
            width: 280px;
            transform-origin: bottom right;
        }
        
        .leaderboard-container.minimized {
            transform: scale(0.8);
            width: 40px;
            height: 40px;
        }
        
        .leaderboard-content {
            max-height: 200px;
        }
        
        .discord-login-btn {
            padding: 4px 8px;
            font-size: 10px;
        }
    }
    
    /* 弹出框样式 */
    .score-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    
    .score-modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        width: 300px;
        text-align: center;
    }
    
    .score-modal-title {
        color: #FF6F00;
        margin-bottom: 15px;
    }
    
    .player-name-input {
        width: 100%;
        padding: 8px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .submit-score-btn {
        background-color: #FF6F00;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    
    .submit-score-btn:hover {
        background-color: #F57C00;
    }
    
    .leaderboard-date {
        font-size: 11px;
        color: #666;
        margin-left: auto;
        padding-left: 8px;
    }
    
    .leaderboard-empty {
        text-align: center;
        padding: 20px;
        color: #666;
        font-style: italic;
    }
    `;
    
    // 将HTML和样式添加到页面
    document.head.appendChild(styleElement);
    document.body.insertAdjacentHTML('beforeend', leaderboardHTML);
    
    // 创建记分弹窗
    const scoreModalHTML = `
    <div id="score-modal" class="score-modal">
        <div class="score-modal-content">
            <div class="score-modal-title">Congratulations on your high score!</div>
            <p>Please enter your name for the leaderboard:</p>
            <input type="text" id="player-name" class="score-modal-input" placeholder="Your name" maxlength="10">
            <div class="score-modal-buttons">
                <button id="score-submit" class="score-modal-submit">Submit</button>
                <button id="score-cancel" class="score-modal-cancel">Cancel</button>
            </div>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', scoreModalHTML);
    
    // 初始化标签页切换
    const tabButtons = document.querySelectorAll('.tab-btn');
    const leaderboardContent = document.getElementById('leaderboard-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            // 切换内容
            loadLeaderboard(this.dataset.tab);
        });
    });
    
    // 初始化排行榜
    initLeaderboard();
    
    // 设置实时更新
    setInterval(() => {
        const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
        loadLeaderboard(activeTab);
    }, 30000); // 每30秒更新一次
});

// 加载排行榜
function loadLeaderboard(type) {
    const leaderboardContent = document.getElementById('leaderboard-content');
    const gameType = getCurrentGameType();
    
    // 获取所有记录
    const allRecords = getLeaderboard(gameType);
    
    // 根据类型筛选数据
    let displayRecords = [];
    if (type === 'today') {
        const today = new Date().toLocaleDateString();
        displayRecords = allRecords.filter(record => 
            new Date(record.date).toLocaleDateString() === today
        );
    } else {
        // all-time显示所有记录
        displayRecords = allRecords;
    }
    
    // 显示记录
    leaderboardContent.innerHTML = displayRecords.length > 0 ? 
        displayRecords.map((entry, index) => `
            <div class="leaderboard-item">
                <div class="leaderboard-rank">#${index + 1}</div>
                <div class="leaderboard-name">${entry.name}</div>
                <div class="leaderboard-score">${entry.score}</div>
                <div class="leaderboard-date">${entry.displayDate || new Date(entry.date).toLocaleDateString()}</div>
            </div>
        `).join('') :
        '<div class="leaderboard-empty">No records yet</div>';
}

// 初始化排行榜
function initLeaderboard() {
    // 获取当前游戏类型
    const gameType = getCurrentGameType();
    if (!gameType) return;
    
    // 显示排行榜数据
    displayLeaderboard(gameType);
    
    // 设置游戏监听器
    setupGameListener(gameType);
    
    // 设置提交按钮事件
    document.getElementById('score-submit').addEventListener('click', function() {
        const playerName = document.getElementById('player-name').value.trim();
        if (playerName) {
            submitScore(gameType, playerName, window.currentScore);
            closeScoreModal();
        }
    });
    
    // 设置取消按钮事件
    document.getElementById('score-cancel').addEventListener('click', closeScoreModal);
}

// 获取当前游戏类型
function getCurrentGameType() {
    const path = window.location.pathname;
    if (path.includes('chess')) return 'chess';
    if (path.includes('2048')) return '2048';
    if (path.includes('snake')) return 'snake';
    if (path.includes('tetris')) return 'tetris';
    if (path.includes('pacman')) return 'pacman';
    if (path.includes('connect3')) return 'connect3';
    if (path.includes('adarkroom')) return 'adarkroom';
    return null;
}

// 显示排行榜
function displayLeaderboard(gameType) {
    const leaderboardContent = document.getElementById('leaderboard-content');
    const leaderboard = getLeaderboard(gameType);
    
    let html = '';
    if (leaderboard.length === 0) {
        html = '<div class="leaderboard-empty">No records yet</div>';
    } else {
        leaderboard.forEach((item, index) => {
            html += `
            <div class="leaderboard-item">
                <span class="leaderboard-rank">#${index + 1}</span>
                <span class="leaderboard-name">${item.name}</span>
                <span class="leaderboard-score">${item.score}</span>
            </div>
            `;
        });
    }
    
    leaderboardContent.innerHTML = html;
}

// 获取排行榜数据
function getLeaderboard(gameType) {
    const key = `leaderboard_${gameType}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// 保存排行榜数据
function saveLeaderboard(gameType, leaderboard) {
    const key = `leaderboard_${gameType}`;
    localStorage.setItem(key, JSON.stringify(leaderboard));
}

// 提交分数
function submitScore(gameType, playerName, score) {
    if (!score || !playerName) return;
    
    let leaderboard = getLeaderboard(gameType);
    const timestamp = new Date().toISOString();
    
    // 添加新分数
    leaderboard.push({
        name: playerName,
        score: score,
        date: timestamp,
        displayDate: new Date(timestamp).toLocaleDateString()
    });
    
    // 按分数排序（降序）
    leaderboard.sort((a, b) => b.score - a.score);
    
    // 只保留前10名
    if (leaderboard.length > 10) {
        leaderboard = leaderboard.slice(0, 10);
    }
    
    // 保存并更新显示
    saveLeaderboard(gameType, leaderboard);
    displayLeaderboard(gameType);
    
    // 显示成功消息
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Score submitted successfully!';
    successMessage.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 4px;
        animation: fadeOut 2s forwards;
        z-index: 1000;
    `;
    document.body.appendChild(successMessage);
    setTimeout(() => successMessage.remove(), 2000);
}

// 设置游戏监听器
function setupGameListener(gameType) {
    const gameFrame = document.querySelector('.game-container iframe');
    if (!gameFrame) return;
    
    // 由于跨域限制，我们不能直接访问iframe内容
    // 这里我们使用一个定时器来检测游戏状态变化
    // 实际项目中，更好的方式是使用postMessage通信
    
    // 模拟检测游戏分数
    // 注意：这只是一个示例，实际项目中需要与具体游戏集成
    window.gameScoreChecker = setInterval(function() {
        // 模拟随机获得高分的情况
        // 实际项目中，这里应该从游戏中获取真实分数
        if (Math.random() < 0.0005) { // 小概率事件
            const randomScore = Math.floor(Math.random() * 1000) + 100;
            checkHighScore(gameType, randomScore);
        }
    }, 1000);
}

// 检查是否为高分
function checkHighScore(gameType, score) {
    window.currentScore = score; // 保存当前分数
    
    const leaderboard = getLeaderboard(gameType);
    
    // 如果排行榜不满5个，或者分数高于排行榜最低分，则显示弹窗
    if (leaderboard.length < 5 || score > leaderboard[leaderboard.length - 1].score) {
        showScoreModal(score);
        return true;
    }
    
    return false;
}

// 显示分数提交弹窗
function showScoreModal(score) {
    const modal = document.getElementById('score-modal');
    const modalTitle = modal.querySelector('.score-modal-title');
    modalTitle.textContent = `Congratulations on your high score: ${score}!`;
    
    modal.style.display = 'flex';
    document.getElementById('player-name').focus();
}

// 关闭分数提交弹窗
function closeScoreModal() {
    document.getElementById('score-modal').style.display = 'none';
    document.getElementById('player-name').value = '';
}

// 搜索功能
function performSearch(term) {
    if (term) {
        window.location.href = `search-results.html?q=${encodeURIComponent(term)}`;
    }
}

// 搜索按钮点击事件
document.getElementById('search-button').addEventListener('click', function() {
    const term = document.getElementById('search-input').value.trim();
    performSearch(term);
});

// 回车键搜索
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const term = this.value.trim();
        performSearch(term);
    }
}); 