# Netlify 部署教程 - 手把手版

## 🎯 方法一：拖拽部署（最简单，推荐新手）

### 第一步：打开 Netlify Drop 页面

1. 打开浏览器（Chrome、Edge 都可以）
2. 访问：**https://app.netlify.com/drop**
3. 你会看到一个大大的拖拽区域，写着 "Drag & Drop your site folder here"

### 第二步：准备文件夹

1. 打开文件资源管理器
2. 找到你的项目文件夹：`F:\code_pro\反诈小游戏\`
3. **确保文件夹里包含**：
   - index.html
   - style.css
   - game.js
   - README.md
   - img 文件夹（里面有 map/background.jpeg）

### 第三步：拖拽上传

1. **把整个 `反诈小游戏` 文件夹拖到网页上**
2. 或者点击拖拽区域，选择文件夹
3. 上传开始！等待进度条完成（通常 10-30 秒）

### 第四步：获取网址

上传完成后，你会看到：
- ✅ "Your site is deployed!"
- 一个网址，类似：`https://random-name-123456.netlify.app`
- 点击这个网址，就能看到你的游戏了！

### 第五步：生成二维码

1. 复制你得到的网址
2. 访问：https://cli.im/ （草料二维码）
3. 粘贴网址
4. 点击生成
5. 下载二维码，分享给朋友！

**完成！就这么简单！** 🎉

---

## 🎯 方法二：注册账号部署（功能更多）

如果你想要修改网站名称、查看访问统计等功能，可以注册账号。

### 第一步：注册 Netlify 账号

1. 访问：https://app.netlify.com/signup
2. 选择注册方式（推荐用 GitHub）：
   - **GitHub**（推荐，后续可以自动部署）
   - **GitLab**
   - **Email**（邮箱注册）

#### 如果选择 GitHub：
1. 点击 "GitHub"
2. 会跳转到 GitHub 登录页面
3. 如果没有 GitHub 账号，先注册一个（免费）：https://github.com
4. 授权 Netlify 访问你的 GitHub

#### 如果选择 Email：
1. 输入你的邮箱
2. 设置密码
3. 点击注册
4. 去邮箱查收验证邮件，点击验证链接

### 第二步：部署网站

注册登录后，有两种方式：

#### 方式 A：直接拖拽（最简单）

1. 登录后，点击 **"Add new site"** → **"Deploy manually"**
2. 把 `反诈小游戏` 文件夹拖拽到页面上
3. 等待部署完成
4. 完成！

#### 方式 B：通过 GitHub 部署（高级，可自动更新）

**前置：需要先把代码上传到 GitHub**

1. 在 GitHub 创建一个新仓库（New repository）
2. 仓库名：`anti-fraud-game`
3. 选择 Public
4. 创建后，在你的项目文件夹打开命令行，执行：

```bash
git init
git add .
git commit -m "初始提交"
git branch -M main
git remote add origin https://github.com/你的用户名/anti-fraud-game.git
git push -u origin main
```

5. 回到 Netlify，点击 **"Add new site"** → **"Import an existing project"**
6. 选择 **"GitHub"**
7. 授权后，选择 `anti-fraud-game` 仓库
8. 直接点击 **"Deploy site"**
9. 等待部署完成

**优势**：以后修改代码，只要 push 到 GitHub，Netlify 会自动更新网站！

### 第三步：自定义网站名称（可选）

1. 部署完成后，进入网站设置
2. 点击 **"Site settings"**
3. 点击 **"Change site name"**
4. 输入你想要的名称，比如：`fanzha-game`
5. 保存
6. 你的网址变成：`https://fanzha-game.netlify.app`

### 第四步：查看网站信息

在 Netlify 控制台你可以看到：
- **访问量统计**
- **部署历史**
- **访问日志**
- **自定义域名**（如果你有自己的域名）

---

## 📱 生成二维码（重要）

### 方法1：草料二维码（推荐）

1. 访问：https://cli.im/
2. 在输入框粘贴你的 Netlify 网址
3. 点击 "生成二维码"
4. 可以自定义样式、颜色、加 Logo
5. 下载二维码图片

### 方法2：微微二维码

1. 访问：https://www.wwei.cn/
2. 输入网址
3. 生成并下载

### 方法3：二维码生成器（联图）

1. 访问：https://www.liantu.com/
2. 输入网址
3. 生成

---

## 🔄 如何更新网站

### 如果用的是拖拽部署：

1. 登录 Netlify
2. 进入你的网站
3. 点击 **"Deploys"** 标签
4. 把修改后的文件夹拖拽到页面
5. 自动更新！

### 如果用的是 GitHub 部署：

1. 修改本地代码
2. 提交到 GitHub：
```bash
git add .
git commit -m "更新游戏内容"
git push
```
3. Netlify 会自动检测并部署，无需手动操作！

---

## ❓ 常见问题

### Q1: 需要付费吗？
**A**: 完全免费！Netlify 的免费套餐包括：
- 100GB 流量/月（足够小游戏使用）
- 无限次部署
- 自动 HTTPS
- 自定义域名

### Q2: 网站会过期吗？
**A**: 不会！只要你的账号存在，网站就一直在线。

### Q3: 别人访问快吗？
**A**: 很快！Netlify 使用全球 CDN，国内外访问都很快。

### Q4: 可以看到有多少人访问吗？
**A**: 可以！在 Netlify 控制台的 "Analytics" 里可以看到访问统计（免费版有基础统计）。

### Q5: 能用自己的域名吗？
**A**: 可以！如果你有域名（如 yourdomain.com），可以在 Netlify 设置中绑定。

### Q6: 上传失败怎么办？
**A**: 检查：
- 网络是否正常
- 文件夹是否包含 index.html
- 文件大小是否超过限制（一般不会）

### Q7: 部署后页面空白？
**A**: 按 F12 打开开发者工具，查看 Console 是否有错误提示。通常是文件路径问题。

---

## 🎯 完整流程总结

### 最快捷方式（3分钟）：

```
1. 访问 https://app.netlify.com/drop
2. 拖拽 "反诈小游戏" 文件夹
3. 等待上传完成
4. 复制网址
5. 去草料二维码生成二维码
6. 完成！
```

### 专业方式（推荐学习）：

```
1. 注册 GitHub 账号
2. 上传代码到 GitHub
3. 注册 Netlify 账号（用 GitHub 登录）
4. 关联 GitHub 仓库部署
5. 以后修改代码，push 到 GitHub 即可自动更新
```

---

## 📞 需要帮助？

如果在部署过程中遇到任何问题：
1. 截图给我看
2. 告诉我你在哪一步卡住了
3. 我会帮你解决！

---

**祝你部署成功！** 🎉🎉🎉

