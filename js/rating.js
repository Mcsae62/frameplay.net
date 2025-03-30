// 评分系统样式
const ratingStyles = `
.rating-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 10px 0 20px 0;
}

.rating-star {
    font-size: 24px;
    cursor: pointer;
    color: #ddd;
    transition: color 0.2s;
}

.rating-star:hover,
.rating-star.active {
    color: #ff4081;
}

.rating-count {
    margin-left: 10px;
    color: #666;
    font-size: 14px;
}`;

// 评分系统HTML
function getRatingHTML(gameId) {
    return `
    <div class="rating-container">
        <span class="rating-star" data-rating="1">❤</span>
        <span class="rating-star" data-rating="2">❤</span>
        <span class="rating-star" data-rating="3">❤</span>
        <span class="rating-star" data-rating="4">❤</span>
        <span class="rating-star" data-rating="5">❤</span>
        <span class="rating-count">(0 ratings)</span>
    </div>`;
}

// 评分系统功能
function initRatingSystem(gameId) {
    const stars = document.querySelectorAll('.rating-star');
    const ratingCount = document.querySelector('.rating-count');
    
    // 从localStorage获取评分
    const savedRating = localStorage.getItem(`rating_${gameId}`);
    const savedCount = localStorage.getItem(`rating_count_${gameId}`);
    
    if (savedRating) {
        updateRatingDisplay(parseInt(savedRating));
    }
    
    if (savedCount) {
        ratingCount.textContent = `(${savedCount} ratings)`;
    }
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            localStorage.setItem(`rating_${gameId}`, rating);
            
            // 更新评分计数
            const currentCount = parseInt(savedCount || 0) + 1;
            localStorage.setItem(`rating_count_${gameId}`, currentCount);
            ratingCount.textContent = `(${currentCount} ratings)`;
            
            updateRatingDisplay(rating);
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
} 