// 通用评分系统
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.rating-star');
    const ratingCount = document.querySelector('.rating-count');
    
    // 从URL获取游戏ID
    const gameId = window.location.pathname.split('/').pop().replace('.html', '');
    const savedRatings = JSON.parse(localStorage.getItem(`ratings_${gameId}`) || '[]');
    const savedCount = savedRatings.length;
    
    if (savedCount > 0) {
        // 计算平均评分
        const averageRating = Math.round(savedRatings.reduce((a, b) => a + b, 0) / savedCount);
        updateRatingDisplay(averageRating);
        ratingCount.textContent = `(${savedCount} ratings)`;
    }
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            
            // 添加新评分到数组
            savedRatings.push(rating);
            localStorage.setItem(`ratings_${gameId}`, JSON.stringify(savedRatings));
            
            // 更新显示
            const newCount = savedRatings.length;
            const newAverage = Math.round(savedRatings.reduce((a, b) => a + b, 0) / newCount);
            ratingCount.textContent = `(${newCount} ratings)`;
            updateRatingDisplay(newAverage);
        });
    });
    
    function updateRatingDisplay(rating) {
        stars.forEach(star => {
            if (parseInt(star.dataset.rating) <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
}); 