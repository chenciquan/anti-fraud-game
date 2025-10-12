# LeanCloud 配置说明

## 🚀 快速开始

### 第一步：注册 LeanCloud 账号

1. 访问 [LeanCloud 官网](https://console.leancloud.cn/)（国际版：https://console.leancloud.app/）
2. 点击"注册"创建账号（推荐使用国内版，速度更快）
3. 完成邮箱验证

---

### 第二步：创建应用

1. 登录后，点击"创建应用"
2. 输入应用名称（例如：反诈小游戏）
3. 选择"开发版"（免费，完全够用）
4. 点击创建

---

### 第三步：获取配置参数

1. 进入刚创建的应用
2. 点击左侧菜单 **"设置"** → **"应用凭证"**
3. 你会看到以下信息：
   - **AppID**（应用 ID）
   - **AppKey**（应用密钥）
   - **服务器地址**（ServerURL，仅国内版需要）

---

### 第四步：配置到代码中

打开 `game.js` 文件，找到开头的配置区域（第3-5行），替换成你的参数：

```javascript
// 国内版配置示例
const LEANCLOUD_APP_ID = 'xxxxx-gzGzoHsz';           // 替换为你的 App ID
const LEANCLOUD_APP_KEY = 'xxxxx-MdYXbMMI';          // 替换为你的 App Key
const LEANCLOUD_SERVER_URL = 'https://xxxxx.api.lncldglobal.com'; // 替换为你的服务器地址
```

**注意：**
- 国际版的 `LEANCLOUD_SERVER_URL` 可以留空或删除
- 国内版必须填写 `LEANCLOUD_SERVER_URL`

---

### 第五步：创建数据表

1. 在 LeanCloud 控制台，点击 **"数据存储"** → **"结构化数据"**
2. 点击"创建 Class"
3. **Class 名称**输入：`GameRecords`
4. **Class 访问权限设置**：
   - **create（创建）**：选择 ⭕ **所有用户**（允许游戏提交数据）
   - **find（查询）**：选择 ⭕ **所有用户**（保持默认即可）
   - **其他权限**（add_fields、delete、update、get）：保持默认的"所有用户"即可
5. **默认 ACL 权限**：
   - **read（读取）**：保持默认"所有用户"
   - **write（写入）**：保持默认"数据创建者（Owner）"
6. 点击右下角蓝色的 **"创建"** 按钮

**注意**：如果你想保护数据隐私，可以点击"限制读取"按钮，这样只有后台管理员能看到数据。

---

### 第六步：测试

1. 用浏览器打开 `index.html`
2. 完成游戏通关
3. 填写个人信息并提交
4. 如果提交成功，会显示"提交成功！"页面
5. 返回 LeanCloud 控制台 → 数据存储 → GameRecords，查看收集到的数据

---

## 📊 数据结构说明

每次提交会保存以下字段：

| 字段名 | 类型 | 说明 |
|--------|------|------|
| name | String | 学生姓名 |
| studentId | String | 学号 |
| className | String | 班级 |
| completedAt | Date | 完成时间 |
| gameVersion | String | 游戏版本（目前是1.0） |
| objectId | String | 自动生成的唯一ID |
| createdAt | Date | 自动生成的创建时间 |
| updatedAt | Date | 自动生成的更新时间 |

---

## 📥 导出数据

### 方法1：在线导出
1. 进入 LeanCloud 控制台
2. 数据存储 → GameRecords
3. 点击右上角"导出数据"
4. 选择 CSV 或 JSON 格式下载

### 方法2：使用 LeanCloud CLI
```bash
# 安装 CLI
npm install -g leancloud-cli

# 导出数据
lean data export --app-id YOUR_APP_ID --master-key YOUR_MASTER_KEY
```

---

## 🔒 数据安全建议

1. **不要把 AppKey 泄露**：避免将配置文件上传到公开的代码仓库
2. **设置合理的 ACL 权限**：只允许创建，不允许查询和修改
3. **定期备份数据**：LeanCloud 提供自动备份功能
4. **使用 HTTPS**：确保数据传输安全（已默认开启）

---

## 💰 免费额度

LeanCloud 开发版免费额度：
- **API 请求**：每天 30,000 次（完全够用）
- **数据存储**：5GB
- **文件存储**：1GB
- **流量**：每月 1GB

对于学校活动来说，这些免费额度绰绰有余！

---

## ❓ 常见问题

### 1. 提示"请先配置 LeanCloud 参数"
**原因**：没有正确配置 AppID、AppKey 或 ServerURL  
**解决**：检查 `game.js` 文件开头的配置是否正确替换

### 2. 提交失败，提示网络错误
**原因**：可能是网络问题或配置错误  
**解决**：
- 检查网络连接
- 确认 ServerURL 是否正确（国内版必填）
- 打开浏览器控制台（F12）查看详细错误信息

### 3. 数据没有显示在控制台
**原因**：可能创建了错误的 Class 名称  
**解决**：确保 Class 名称是 `GameRecords`（区分大小写）

### 4. 提示"Forbidden"或权限错误
**原因**：Class 的 ACL 权限设置不正确  
**解决**：将 add（新增）权限设置为"所有用户"

---

## 📞 获取帮助

- [LeanCloud 官方文档](https://docs.leancloud.cn/)
- [LeanCloud JavaScript SDK 指南](https://leancloud.cn/docs/sdk_setup-js.html)
- [LeanCloud 开发者社区](https://forum.leancloud.cn/)

---

## ✨ 完成！

配置完成后，你的反诈小游戏就可以自动收集学生信息了！所有数据都会安全地保存在 LeanCloud 云端，你可以随时在控制台查看和导出。

祝你使用愉快！🎉

