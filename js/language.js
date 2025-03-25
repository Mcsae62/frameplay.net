// 获取用户首选语言
function getPreferredLanguage() {
    return localStorage.getItem('preferred_language') || 'en';
}

// 更新语言按钮文本
function updateLanguageButton(lang) {
    const button = document.getElementById('language-button');
    button.textContent = translations[lang].language_button;
    const arrow = document.createElement('span');
    arrow.className = 'dropdown-arrow';
    button.appendChild(arrow);
}

// 更新游戏导航按钮文本
function updateGameNavButton(lang) {
    const button = document.getElementById('game-nav-button');
    button.childNodes[0].textContent = translations[lang].game_nav + ' ';
}

// 设置初始语言和导航
document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = getPreferredLanguage();
    changeLanguage(preferredLanguage);
    
    // 为语言选择项添加事件监听
    document.querySelectorAll('.language-content .dropdown-item').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // 关闭下拉菜单
            document.querySelector('.language-content').style.display = 'none';
            setTimeout(() => {
                document.querySelector('.language-content').style.display = '';
            }, 100);
        });
    });

    // 为游戏导航添加事件监听
    document.querySelectorAll('.nav-content .dropdown-item').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            const href = this.getAttribute('href');
            
            // 关闭下拉菜单
            document.querySelector('.nav-content').style.display = 'none';
            setTimeout(() => {
                window.location.href = href;
            }, 100);
        });
    });
});

// 语言切换函数
function changeLanguage(lang) {
    // 保存语言选择
    localStorage.setItem('preferred_language', lang);
    
    // 更新语言按钮文本
    updateLanguageButton(lang);
    
    // 更新游戏导航按钮和菜单
    updateGameNavButton(lang);
    document.querySelector('a[data-category="casual"]').textContent = translations[lang].nav_casual;
    document.querySelector('a[data-category="brain"]').textContent = translations[lang].nav_brain;
    document.querySelector('a[data-category="fast-paced"]').textContent = translations[lang].nav_fast_paced;
    
    // 更新主页链接
    document.querySelector('a[href="."]').textContent = translations[lang].nav_home;
    
    // 更新主标题和副标题
    document.querySelector('.main-title').textContent = translations[lang].main_title;
    document.querySelector('.subtitle').textContent = translations[lang].subtitle;
    
    // 更新搜索部分
    document.querySelector('.search-input').placeholder = translations[lang].search_placeholder;
    document.querySelector('.search-button').textContent = translations[lang].search_button;
    
    // 更新最佳游戏标题
    document.querySelector('.section-title').textContent = translations[lang].best_games;
    
    // 更新所有"Play Now"按钮
    document.querySelectorAll('.play-button').forEach(button => {
        button.textContent = translations[lang].play_now;
    });
    
    // 更新页脚链接
    document.querySelector('a[href="pages/privacy.html"]').textContent = translations[lang].footer_privacy;
    document.querySelector('a[href="pages/policy.html"]').textContent = translations[lang].footer_usage;
    document.querySelector('a[href="pages/terms.html"]').textContent = translations[lang].footer_terms;
    document.querySelector('a[href="pages/contact.html"]').textContent = translations[lang].footer_contact;
    
    // 根据语言调整字体和布局
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'zh') {
        document.body.style.fontFamily = "'Microsoft YaHei', 'PingFang SC', sans-serif";
    } else {
        document.body.style.fontFamily = "'Roboto', 'Arial', sans-serif";
    }
} 