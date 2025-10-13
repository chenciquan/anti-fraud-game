# 阿里云 OSS + CDN 部署教程

## 📋 准备工作
- 注册阿里云账号：https://www.aliyun.com/
- 完成实名认证（个人认证即可）
- 准备好银行卡（需要绑定支付方式，但可以使用免费额度）

## 💰 费用说明
**新用户优惠：**
- OSS 标准存储包（40GB/1年）：9元
- CDN 流量包（100GB/1年）：20元左右
- **或使用按量付费**（小项目几乎免费）

---

## 🚀 部署步骤

### 第一步：创建 OSS 存储桶

#### 1. 进入 OSS 控制台
- 访问：https://oss.console.aliyun.com/
- 或登录阿里云后搜索 "对象存储 OSS"

#### 2. 创建 Bucket（存储桶）
1. 点击左侧"Bucket 列表" → "创建 Bucket"
2. 填写配置：
   ```
   Bucket 名称：fanzha-game（全局唯一，可自定义）
   地域：选择离您最近的，如"华东1（杭州）"
   存储类型：标准存储
   存储冗余类型：本地冗余存储
   读写权限：公共读（重要！）
   ```
3. 其他选项保持默认
4. 点击"确定"创建

#### 3. 上传网站文件
1. 进入刚创建的 Bucket
2. 点击"文件管理"
3. 上传以下文件：
   - 直接上传 `index.html`
   - 直接上传 `game.js`
   - 直接上传 `style.css`
   - 创建文件夹 `img`，进入后上传 img 文件夹下的所有内容
     - 创建子文件夹 `map`
     - 上传所有地图图片

**文件结构应该是：**
```
Bucket根目录/
├── index.html
├── game.js
├── style.css
└── img/
    └── map/
        ├── background.jpeg
        ├── chenyiguangchang.png
        ├── jieshu.png
        ├── tianbaoge.png
        ├── tiyugaun.png
        ├── tushuguan.png
        └── xiaomen.png
```

---

### 第二步：配置静态网站托管

#### 1. 开启静态网站功能
1. 在 Bucket 详情页，点击左侧"基础设置"
2. 找到"静态页面"
3. 点击"设置"
4. 配置：
   ```
   默认首页：index.html
   默认 404 页：index.html（可选）
   子目录首页：开启
   ```
5. 点击"保存"

#### 2. 获取外网访问地址
1. 在 Bucket 页面，点击左侧"基础设置"
2. 找到"静态页面"区域
3. 复制"静态网站域名"（不是普通的外网访问域名！），格式如：
   ```
   http://fanzha-game.oss-cn-hangzhou.aliyuncs.com.oss-website-cn-hangzhou.aliyuncs.com
   ```
4. 访问测试：用静态网站域名访问（不要加 /index.html）
   
**⚠️ 重要提示：**
- 如果用普通 OSS 域名访问会直接下载文件
- 必须使用静态网站托管域名才能正常显示网页

---

### 第三步：配置 CDN 加速（推荐，提升访问速度）

#### 1. 开通 CDN 服务
- 访问：https://cdn.console.aliyun.com/
- 如果未开通，点击"立即开通"
- 选择"按量付费"

#### 2. 添加加速域名
1. 在 CDN 控制台，点击"域名管理" → "添加域名"
2. 填写配置：
   ```
   加速域名：需要已备案的域名（如 game.yourdomain.com）
             或使用测试域名（有访问限制）
   
   业务类型：图片小文件
   源站信息：OSS 域名
   端口：80 端口（或 443 支持 HTTPS）
   加速区域：仅中国内地（如已备案）
             或全球（需要域名）
   ```
3. 点击"下一步"

#### 3. 选择 OSS 源站
1. 回源协议：HTTP 或 HTTPS
2. 选择对应的 OSS Bucket
3. 完成配置

#### 4. 配置 CNAME（如使用自定义域名）
1. CDN 会分配一个 CNAME 域名
2. 到您的域名服务商（如阿里云域名）
3. 添加 CNAME 记录：
   ```
   记录类型：CNAME
   主机记录：game（子域名）
   记录值：CDN 分配的 CNAME 地址
   TTL：10分钟
   ```

---

### 第四步：解决微信拦截问题

#### 方案A：使用已备案域名（推荐）
1. 购买域名（阿里云、腾讯云等）
2. 完成 ICP 备案（15-20天）
3. 绑定到 OSS/CDN
4. 备案后的域名微信基本不拦截

#### 方案B：申请微信白名单
如果有微信公众号：
1. 登录微信公众平台：https://mp.weixin.qq.com/
2. "设置与开发" → "公众号设置" → "功能设置"
3. "JS 接口安全域名"中添加您的域名
4. 需要企业认证（300元/年）

#### 方案C：使用中转页面（临时方案）
添加检测微信环境的代码，提示用户用浏览器打开

---

## 📦 命令行工具部署（可选，适合频繁更新）

### 使用 ossutil 工具

#### 1. 下载安装 ossutil
Windows 用户：
```powershell
# 下载
Invoke-WebRequest https://gosspublic.alicdn.com/ossutil/install.bat -OutFile install.bat

# 运行安装
.\install.bat
```

或直接下载：https://gosspublic.alicdn.com/ossutil/ossutilx64.zip

#### 2. 配置 ossutil
```bash
# 配置（会要求输入 AccessKey）
ossutil config

# 填写：
# endpoint: 如 oss-cn-hangzhou.aliyuncs.com
# accessKeyID: 在阿里云控制台获取
# accessKeySecret: 在阿里云控制台获取
```

**获取 AccessKey：**
1. 登录阿里云控制台
2. 鼠标悬停右上角头像 → "AccessKey 管理"
3. 创建 AccessKey（建议创建子账号 RAM 用户）

#### 3. 上传文件
```bash
# 上传单个文件
ossutil cp index.html oss://fanzha-game/

# 上传整个目录（推荐）
ossutil cp -r ./ oss://fanzha-game/ --exclude "*.md" --exclude ".git/*"

# 同步文件（删除远程多余文件）
ossutil sync ./ oss://fanzha-game/ --delete --exclude "*.md"
```

---

## 🔄 自动部署（使用 GitHub Actions）

创建 `.github/workflows/deploy-aliyun.yml`：

```yaml
name: Deploy to Aliyun OSS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
    
    - name: Setup ossutil
      run: |
        wget http://gosspublic.alicdn.com/ossutil/1.7.15/ossutil64
        chmod 755 ossutil64
        ./ossutil64 config -e ${{ secrets.OSS_ENDPOINT }} \
          -i ${{ secrets.ACCESS_KEY_ID }} \
          -k ${{ secrets.ACCESS_KEY_SECRET }}
    
    - name: Upload to OSS
      run: |
        ./ossutil64 rm oss://fanzha-game/ -r -f
        ./ossutil64 cp -r ./ oss://fanzha-game/ \
          --exclude "*.md" \
          --exclude ".git/*" \
          --exclude ".github/*"
    
    - name: Refresh CDN (optional)
      run: |
        # 安装阿里云 CLI 并刷新 CDN 缓存
        # 需要额外配置
```

**在 GitHub 设置 Secrets：**
- `OSS_ENDPOINT`: 如 `oss-cn-hangzhou.aliyuncs.com`
- `ACCESS_KEY_ID`: 您的 AccessKey ID
- `ACCESS_KEY_SECRET`: 您的 AccessKey Secret

---

## ⚙️ 高级配置

### 1. 设置缓存策略
在 OSS Bucket 设置中：
1. "基础设置" → "HTTP 头"
2. 添加 Cache-Control：
   ```
   文件类型         缓存时间
   *.html          no-cache（不缓存，确保更新）
   *.js            max-age=31536000（1年）
   *.css           max-age=31536000（1年）
   *.png/*.jpg     max-age=31536000（1年）
   ```

### 2. 开启 HTTPS
1. 在 CDN 域名配置中
2. "HTTPS 配置" → "HTTPS 证书"
3. 选择免费证书或上传自己的证书

### 3. 配置防盗链
1. "访问控制" → "防盗链"
2. 添加白名单域名（允许访问的来源）

---

## ✅ 验证部署

### 1. 测试访问
- OSS 直连：`https://你的bucket名.oss-cn-xxx.aliyuncs.com/index.html`
- CDN 加速：`https://你的加速域名/index.html`

### 2. 检查文件
```bash
# 列出 OSS 文件
ossutil ls oss://fanzha-game/ -r

# 查看文件信息
ossutil stat oss://fanzha-game/index.html
```

### 3. 性能测试
- 使用浏览器 DevTools 查看加载速度
- CDN 命中率查看（CDN 控制台）

---

## 🎯 快速开始（5分钟部署）

1. **创建 OSS Bucket**（2分钟）
   - 名称：fanzha-game
   - 权限：公共读

2. **上传文件**（2分钟）
   - 拖拽所有文件到 OSS 控制台

3. **配置静态网站**（1分钟）
   - 默认首页：index.html

4. **访问测试**
   - 复制外网域名访问

---

## 📞 常见问题

**Q: 微信还是提示风险？**
A: OSS 域名也可能被拦截，建议：
- 使用备案域名 + CDN
- 或添加浏览器打开提示

**Q: 文件更新后没变化？**
A: 清除 CDN 缓存：
- CDN 控制台 → "刷新预热" → "刷新缓存"

**Q: AccessKey 在哪获取？**
A: 控制台右上角头像 → "AccessKey 管理"

**Q: 费用大概多少？**
A: 小项目（<1000访问/天）：
- OSS：0.1元/月
- CDN：1-5元/月

---

## 📚 参考文档
- OSS 文档：https://help.aliyun.com/product/31815.html
- CDN 文档：https://help.aliyun.com/product/27099.html
- ossutil 工具：https://help.aliyun.com/document_detail/120075.html

---

**建议流程：先 OSS 基础部署 → 测试 → 再加 CDN → 最后配置自动化**

