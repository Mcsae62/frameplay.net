// 防止组件覆盖的JavaScript代码
document.addEventListener('DOMContentLoaded', function() {
    // 等待组件加载完成
    setTimeout(function() {
        // 获取组件元素
        const chatContainer = document.getElementById('chat-container');
        const leaderboardContainer = document.getElementById('leaderboard-container');
        
        if (!chatContainer || !leaderboardContainer) return;
        
        // 防止组件遮挡游戏内容的函数
        function preventOverlap() {
            // 获取主要内容区域
            const mainContent = document.querySelector('.games-grid');
            if (!mainContent) return;
            
            const mainRect = mainContent.getBoundingClientRect();
            const chatRect = chatContainer.getBoundingClientRect();
            const leaderboardRect = leaderboardContainer.getBoundingClientRect();
            
            // 检查聊天框是否与主内容重叠
            const chatOverlapsMain = !(
                chatRect.left > mainRect.right || 
                chatRect.right < mainRect.left || 
                chatRect.top > mainRect.bottom || 
                chatRect.bottom < mainRect.top
            );
            
            // 检查排行榜是否与主内容重叠
            const leaderboardOverlapsMain = !(
                leaderboardRect.left > mainRect.right || 
                leaderboardRect.right < mainRect.left || 
                leaderboardRect.top > mainRect.bottom || 
                leaderboardRect.bottom < mainRect.top
            );
            
            // 如果在小屏幕上且有重叠，确保组件最小化
            if (window.innerWidth <= 768) {
                // 处理聊天框
                if (chatOverlapsMain && !chatContainer.classList.contains('minimized')) {
                    // 尝试调用原有最小化方法
                    const minimizeBtn = chatContainer.querySelector('#chat-minimize');
                    if (minimizeBtn) minimizeBtn.click();
                    // 备用方案 - 直接添加最小化类
                    else chatContainer.classList.add('minimized');
                }
                
                // 处理排行榜
                if (leaderboardOverlapsMain && !leaderboardContainer.classList.contains('minimized')) {
                    // 尝试调用原有最小化方法
                    const toggleBtn = leaderboardContainer.querySelector('#leaderboard-toggle');
                    if (toggleBtn) toggleBtn.click();
                    // 备用方案 - 直接添加最小化类
                    else leaderboardContainer.classList.add('minimized');
                }
            }
        }
        
        // 滚动或窗口调整大小时检查
        window.addEventListener('scroll', preventOverlap);
        window.addEventListener('resize', preventOverlap);
        
        // 初始检查
        preventOverlap();
        
        // 游戏卡片交互时也检查一次
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            card.addEventListener('mouseenter', preventOverlap);
        });
    }, 1000); // 给组件足够的加载时间
});
