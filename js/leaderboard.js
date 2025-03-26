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
                <button id="discord-login" class="discord-login-btn">
                    <img src="../images/discord-icon.png" alt="Discord" class="discord-icon">
                    Login with Discord
                </button>
                <button id="leaderboard-toggle" class="leaderboard-toggle">-</button>
            </div>
        </div>
        <div id="leaderboard-body" class="leaderboard-body">
            <div class="leaderboard-tabs">
                <button class="tab-btn active" data-tab="global">Global</button>
                <button class="tab-btn" data-tab="friends">Friends</button>
                <button class="tab-btn" data-tab="achievements">Achievements</button>
            </div>
            <div id="leaderboard-content" class="leaderboard-content"></div>
            <div id="achievements-content" class="achievements-content" style="display: none;"></div>
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
    
    .discord-login-btn {
        background-color: #7289DA;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 12px;
        transition: background-color 0.2s;
    }
    
    .discord-login-btn:hover {
        background-color: #5b6eae;
    }
    
    .discord-icon {
        width: 16px;
        height: 16px;
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
    
    .achievements-content {
        max-height: 300px;
        overflow-y: auto;
    }
    
    .achievement-item {
        padding: 8px;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .achievement-icon {
        width: 32px;
        height: 32px;
        border-radius: 4px;
    }
    
    .achievement-info {
        flex-grow: 1;
    }
    
    .achievement-title {
        font-weight: bold;
        color: #FF6F00;
    }
    
    .achievement-description {
        font-size: 12px;
        color: #666;
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
        
        .leaderboard-content,
        .achievements-content {
            max-height: 200px;
        }
        
        .discord-login-btn {
            padding: 4px 8px;
            font-size: 10px;
        }
    }
    
    /* 弹出框样式 */
    .score-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        justify-content: center;
        align-items: center;
    }
    
    .score-modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        width: 300px;
        max-width: 90%;
        text-align: center;
    }
    
    .score-modal-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
        color: #FF6F00;
    }
    
    .score-modal-input {
        width: 100%;
        padding: 8px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .score-modal-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    
    .score-modal-submit, .score-modal-cancel {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    .score-modal-submit {
        background-color: #4CAF50;
        color: white;
    }
    
    .score-modal-cancel {
        background-color: #f44336;
        color: white;
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
    
    // 初始化Discord登录
    const discordLoginBtn = document.getElementById('discord-login');
    discordLoginBtn.addEventListener('click', function() {
        // 重定向到Discord OAuth2登录页面
        window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20email';
    });
    
    // 初始化标签页切换
    const tabButtons = document.querySelectorAll('.tab-btn');
    const leaderboardContent = document.getElementById('leaderboard-content');
    const achievementsContent = document.getElementById('achievements-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            // 切换内容
            if (this.dataset.tab === 'achievements') {
                leaderboardContent.style.display = 'none';
                achievementsContent.style.display = 'block';
                loadAchievements();
            } else {
                leaderboardContent.style.display = 'block';
                achievementsContent.style.display = 'none';
                loadLeaderboard(this.dataset.tab);
            }
        });
    });
    
    // 初始化排行榜
    initLeaderboard();
    
    // 设置实时更新
    setInterval(() => {
        const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
        if (activeTab !== 'achievements') {
            loadLeaderboard(activeTab);
        }
    }, 30000); // 每30秒更新一次
});

// 加载成就
function loadAchievements() {
    const achievementsContent = document.getElementById('achievements-content');
    const gameType = getCurrentGameType();
    
    // 这里应该从服务器获取成就数据
    const achievements = [
        {
            id: 'first_win',
            title: 'First Victory',
            description: 'Win your first game',
            icon: '../images/achievements/first-win.png',
            unlocked: true
        },
        {
            id: 'high_score',
            title: 'High Score Master',
            description: 'Reach the top 10 on the leaderboard',
            icon: '../images/achievements/high-score.png',
            unlocked: false
        },
        // 添加更多成就...
    ];
    
    achievementsContent.innerHTML = achievements.map(achievement => `
        <div class="achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}">
            <img src="${achievement.icon}" alt="${achievement.title}" class="achievement-icon">
            <div class="achievement-info">
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-description">${achievement.description}</div>
            </div>
        </div>
    `).join('');
}

// 加载排行榜
function loadLeaderboard(type) {
    const leaderboardContent = document.getElementById('leaderboard-content');
    const gameType = getCurrentGameType();
    
    // 这里应该从服务器获取排行榜数据
    const leaderboard = getLeaderboard(gameType);
    
    leaderboardContent.innerHTML = leaderboard.map((entry, index) => `
        <div class="leaderboard-item">
            <div class="leaderboard-rank">#${index + 1}</div>
            <img src="${entry.avatar || '../images/default-avatar.png'}" alt="${entry.name}" class="player-avatar">
            <div class="leaderboard-name">${entry.name}</div>
            <div class="leaderboard-score">${entry.score}</div>
        </div>
    `).join('');
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
    if (!score) return;
    
    let leaderboard = getLeaderboard(gameType);
    
    // 添加新分数
    leaderboard.push({
        name: playerName,
        score: score,
        date: new Date().toISOString()
    });
    
    // 按分数排序（降序）
    leaderboard.sort((a, b) => b.score - a.score);
    
    // 只保留前5名
    if (leaderboard.length > 5) {
        leaderboard = leaderboard.slice(0, 5);
    }
    
    // 保存并更新显示
    saveLeaderboard(gameType, leaderboard);
    displayLeaderboard(gameType);
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