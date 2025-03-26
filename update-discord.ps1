# Discord invite link style
$discordStyle = @"
/* Discord invite link style */
.discord-invite {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 14px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 6px;
}

.discord-invite:hover {
    background-color: #388E3C;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
"@

# Discord invite link HTML
$discordLink = @"
    <!-- Discord invite link -->
    <a href="https://discord.gg/cNqwCq4q7y" class="discord-invite" target="_blank">
        👉 Join Discord
    </a>
"@

# 获取游戏目录中的所有 HTML 文件
$gamesDir = Join-Path $PSScriptRoot "games"
$files = Get-ChildItem -Path $gamesDir -Filter "*.html"

# 更新每个文件
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # 更新 Discord 样式
    if ($content.Contains(".discord-invite")) {
        # 使用正则表达式替换现有的 Discord 样式
        $content = $content -replace '(?s)/\* Discord invite link style \*/\s*\.discord-invite\s*{[^}]*}\s*\.discord-invite:hover\s*{[^}]*}', $discordStyle
    } else {
        # 在 style 标签结束前添加样式
        $content = $content.Replace("</style>", "$discordStyle`n</style>")
    }
    
    # 更新 Discord 链接
    if ($content.Contains('class="discord-invite"')) {
        # 使用正则表达式替换现有的 Discord 链接
        $content = $content -replace '(?s)<!-- Discord invite link -->\s*<a href="[^"]*" class="discord-invite"[^>]*>[^<]*</a>', $discordLink
    } else {
        # 在 body 标签结束前添加链接
        $content = $content.Replace("</body>", "$discordLink`n</body>")
    }
    
    # 保存更新后的内容
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Updated $($file.Name)"
} 