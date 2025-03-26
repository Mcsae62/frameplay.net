# 移动端样式
$mobileStyle = @"
/* 统一按钮和下拉菜单样式 */
.language-dropdown .dropdown-button,
.dropdown .dropdown-button {
    background-color: #4CAF50 !important;
    color: white !important;
    border: none !important;
    border-radius: 4px !important;
    cursor: pointer !important;
    font-weight: 600 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 8px !important;
    padding: 8px 16px !important;
    transition: background-color 0.2s !important;
}

.language-dropdown .dropdown-button:hover,
.dropdown .dropdown-button:hover {
    background-color: #388E3C !important;
}

.language-content,
.dropdown-content {
    background-color: white !important;
    border: 1px solid #ddd !important;
    border-radius: 4px !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
    z-index: 1000 !important;
    min-width: 180px !important;
}

.language-content a,
.dropdown-content a {
    color: #333 !important;
    text-decoration: none !important;
    transition: background-color 0.2s, color 0.2s !important;
    padding: 8px 12px !important;
    display: block !important;
}

.language-content a:hover,
.dropdown-content a:hover {
    background-color: #E0F7FA !important;
    color: #FF6F00 !important;
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
        display: none;
    }
    
    .language-dropdown:hover .language-content {
        display: block;
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
"@

# 获取游戏目录中的所有 HTML 文件
$gamesDir = Join-Path $PSScriptRoot "games"
$files = Get-ChildItem -Path $gamesDir -Filter "*.html"

# 更新每个文件
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # 检查是否已经包含移动端样式
    if ($content -match '@media \(max-width: 768px\)') {
        # 使用正则表达式替换现有的移动端样式
        $content = $content -replace '(?s)/\* 移动端优化 \*/\s*@media \(max-width: 768px\)[^}]*}[^}]*}', $mobileStyle
    } else {
        # 在 style 标签结束前添加移动端样式
        $content = $content.Replace("</style>", "$mobileStyle`n</style>")
    }
    
    # 保存更新后的内容
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Updated $($file.Name)"
} 