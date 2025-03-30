import os
import re

# 评分系统的HTML代码
rating_html = '''
    <div class="rating-container">
        <span class="rating-star" data-rating="1">❤</span>
        <span class="rating-star" data-rating="2">❤</span>
        <span class="rating-star" data-rating="3">❤</span>
        <span class="rating-star" data-rating="4">❤</span>
        <span class="rating-star" data-rating="5">❤</span>
        <span class="rating-count">(0 ratings)</span>
    </div>
'''

# 评分系统的CSS样式
rating_css = '''
    /* Rating system styles */
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
    }
'''

# 评分系统的JavaScript代码
rating_js = '''
    <script>
        // Rating system functionality
        document.addEventListener('DOMContentLoaded', function() {
            const stars = document.querySelectorAll('.rating-star');
            const ratingCount = document.querySelector('.rating-count');
            
            // Get game ID from filename
            const gameId = window.location.pathname.split('/').pop().replace('.html', '');
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
                    
                    // Update rating count
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
        });
    </script>
'''

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 添加CSS样式
    content = content.replace('</style>', rating_css + '</style>')
    
    # 在游戏标题后添加评分HTML
    content = content.replace('</h1>', '</h1>' + rating_html)
    
    # 添加JavaScript代码
    content = content.replace('</body>', rating_js + '</body>')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 处理games目录下的所有HTML文件
games_dir = 'games'
for filename in os.listdir(games_dir):
    if filename.endswith('.html'):
        file_path = os.path.join(games_dir, filename)
        process_file(file_path)
        print(f'Processed {filename}') 