# SIRUDA Clone Website

![SIRUDA Clone](https://img.shields.io/badge/version-1.0.0-red)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-cyan)

這是一個基於 [SIRUDA 官方網站](https://www.siruda.com/zh-tw) 打造的高度還原克隆版本,使用現代化的前端技術棧構建,完整複製了原網站的設計、動畫和互動效果。

## 🌐 線上展示

- **GitHub Pages**: [https://yanchen184.github.io/siruda-clone/](https://yanchen184.github.io/siruda-clone/)
- **開發文檔**: [START.md](./START.md)

## ✨ 主要特色

### 🎨 設計完全還原
- ✅ 完整複製 SIRUDA 品牌色彩系統
- ✅ 精確還原版面佈局和元素間距
- ✅ 相同的視覺層次和設計語言
- ✅ 響應式設計支援桌面、平板、手機

### 🎬 流暢動畫效果
- ✅ Hero Section 全螢幕視頻背景
- ✅ Framer Motion 滾動觸發動畫
- ✅ GSAP 複雜動畫序列
- ✅ 平滑的元素淡入和移動效果
- ✅ Hover 互動回饋（縮放、陰影）

### 🧩 模組化組件架構
- ✅ Header - 固定導航列、下拉選單、語言切換、移動版漢堡選單
- ✅ HeroSection - 視頻背景、動態文字、滾動指示器
- ✅ AboutSection - 斜角背景設計、圖文內容
- ✅ ProductAdvantages - 6 個產品優勢卡片
- ✅ NewsSection - 最新消息卡片式佈局
- ✅ Footer - 聯絡資訊、社群媒體、浮動按鈕

### 🚀 自動化部署與測試
- ✅ GitHub Actions CI/CD 自動部署
- ✅ Playwright E2E 測試覆蓋所有功能
- ✅ 視覺回歸測試
- ✅ 跨瀏覽器測試（Chrome、Firefox、Safari）
- ✅ 移動端測試（Mobile Chrome、Mobile Safari）

## 🛠️ 技術棧

### 核心框架
- **React 19.2.0** - 前端框架
- **TypeScript 5.9.3** - 類型安全
- **Vite 7.2.4** - 建置工具（快速 HMR）

### UI 與樣式
- **Tailwind CSS 3.4.18** - 實用優先的 CSS 框架
- **PostCSS 8.5.6** - CSS 處理器
- **Autoprefixer 10.4.22** - 自動添加瀏覽器前綴

### 動畫庫
- **Framer Motion 12.23.24** - React 聲明式動畫
- **GSAP 3.13.0** - 高性能動畫引擎

### 測試工具
- **Playwright 1.56.1** - 端到端測試框架
- **@playwright/test** - Playwright 測試運行器

### 開發工具
- **ESLint 9.39.1** - 程式碼品質檢查
- **TypeScript ESLint 8.46.4** - TypeScript 規則
- **@vitejs/plugin-react 5.1.1** - Vite React 插件

## 📦 快速開始

### 前置要求
- Node.js 22.12.0 LTS 或更新版本
- npm 或 pnpm

### 安裝

```bash
# 克隆儲存庫
git clone https://github.com/yanchen184/siruda-clone.git
cd siruda-clone

# 安裝依賴
npm install
```

### 開發

```bash
# 啟動開發伺服器
npm run dev

# 開發伺服器將在 http://localhost:5173/siruda-clone/ 啟動
```

### 建置

```bash
# 建置生產版本
npm run build

# 預覽生產版本
npm run preview
```

### 測試

```bash
# 執行所有測試
npm run test

# UI 模式（可視覺化看到測試過程）
npm run test:ui

# 有頭模式（看到真實瀏覽器操作）
npm run test:headed

# 查看測試報告
npm run test:report
```

## 🧪 測試覆蓋

### E2E 測試項目
✅ 網站載入和基本功能
✅ 導航列和語言切換
✅ Hero Section 視覺和互動
✅ About Section 內容顯示
✅ 產品優勢區塊
✅ 新聞/活動區塊
✅ Footer 和社群媒體連結
✅ 響應式設計（桌面、平板、手機）
✅ 視覺回歸測試
✅ 效能測試
✅ Console 錯誤檢查

### 測試瀏覽器
- ✅ Chromium (Desktop Chrome)
- ✅ Firefox (Desktop Firefox)
- ✅ WebKit (Desktop Safari)
- ✅ Mobile Chrome (Pixel 5)
- ✅ Mobile Safari (iPhone 12)

## 🚀 部署

### 自動部署 (GitHub Actions)

本專案已配置 GitHub Actions 自動部署流程：

```bash
# 推送到 main 分支即可自動部署
git add .
git commit -m "feat: add new feature"
git push origin main

# 等待 2-3 分鐘，自動部署完成！
```

### 部署原理

```
推送到 main → GitHub Actions 建置 → 部署到 gh-pages → 網站上線
```

### 部署狀態

- 📊 [GitHub Actions](https://github.com/yanchen184/siruda-clone/actions)
- 🌐 [線上網站](https://yanchen184.github.io/siruda-clone/)

## 📁 專案結構

```
siruda-clone/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions 自動部署
├── e2e/
│   └── website.spec.ts             # Playwright E2E 測試
├── public/                         # 靜態資源
├── src/
│   ├── components/
│   │   ├── Header.tsx              # 導航列組件
│   │   ├── HeroSection.tsx         # Hero 區塊
│   │   ├── AboutSection.tsx        # 關於印田實業
│   │   ├── ProductAdvantages.tsx   # 產品優勢
│   │   ├── NewsSection.tsx         # 新聞/活動
│   │   └── Footer.tsx              # 頁尾
│   ├── App.tsx                     # 主要應用組件
│   ├── main.tsx                    # 應用入口
│   └── index.css                   # 全局樣式 (Tailwind)
├── .gitignore
├── index.html
├── package.json
├── playwright.config.ts            # Playwright 配置
├── postcss.config.js               # PostCSS 配置
├── tailwind.config.js              # Tailwind CSS 配置
├── tsconfig.json                   # TypeScript 配置
├── vite.config.ts                  # Vite 配置
├── START.md                        # 啟動指南
└── README.md                       # 本文件
```

## 🎨 設計系統

### 色彩配置

```javascript
colors: {
  primary: {
    DEFAULT: '#E30613',  // SIRUDA 品牌紅
    dark: '#B30410',     // 深紅（hover）
  },
  dark: {
    DEFAULT: '#2F2F2F',  // 主要深色
    light: '#999999',    // 淺灰色文字
  },
  light: {
    DEFAULT: '#FAFAFA',  // 淺色背景
    gray: '#F4F4F4',     // 灰色背景
  }
}
```

### 字體配置

```javascript
fontFamily: {
  sans: ['Arial', '微軟正黑體', 'sans-serif'],
  heading: ['SquadaOne', 'Arial', 'sans-serif'],
}
```

## 🔧 核心功能實作

### Hero Section - 視頻背景

```typescript
<video autoPlay muted loop playsInline>
  <source
    src="https://www.siruda.com/storage/system/video/index-siruda_2.mp4"
    type="video/mp4"
  />
</video>
```

### About Section - 斜角背景

```css
transform: skewY(-17deg);
```

使用 GSAP 動畫控制背景寬度：

```typescript
gsap.to(bgRef.current, {
  width: '100%',
  duration: 1.2,
  ease: 'power2.out',
});
```

### 產品優勢 - 延遲動畫

```typescript
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
```

## 📊 效能優化

- ✅ 程式碼分割 (Code Splitting)
- ✅ Lazy Loading 圖片
- ✅ 壓縮建置產物 (Terser)
- ✅ Tailwind CSS 生產優化（移除未使用樣式）
- ✅ React 19 效能提升

## 🐛 常見問題

### Q: 開發伺服器啟動後看不到頁面？

A: 檢查 Console 是否有錯誤，確認 base URL 配置正確（`/siruda-clone/`）。

### Q: Tailwind 樣式沒有生效？

A: 確認 `tailwind.config.js` 中的 `content` 路徑正確，並且已在 `index.css` 中引入 Tailwind directives。

### Q: 圖片無法顯示？

A: 本專案使用 SIRUDA 官方網站的圖片 URL，需要網路連線。建議本地開發時下載圖片到 `public/` 資料夾。

### Q: GitHub Actions 部署失敗？

A: 檢查 Repository Settings → Pages，確認 Source 為 "GitHub Actions"。查看 Actions 日誌了解具體錯誤。

### Q: Playwright 測試失敗？

A: 確保開發伺服器正在運行，或讓 Playwright 自動啟動（已配置在 `playwright.config.ts`）。

## 📝 版本紀錄

### v1.0.0 (2025-11-20)
- ✅ 初始版本發布
- ✅ 完整的 Hero、About、Product、News、Footer 區塊
- ✅ 響應式設計
- ✅ Framer Motion + GSAP 動畫
- ✅ GitHub Actions 自動部署
- ✅ Playwright E2E 測試覆蓋

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request！

1. Fork 本專案
2. 建立你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'feat: add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟一個 Pull Request

## 📧 聯絡方式

- **Email**: bobchen184@gmail.com
- **GitHub Issues**: [專案 Issues 頁面](https://github.com/yanchen184/siruda-clone/issues)

## ⚖️ 授權與聲明

本專案僅作為技術展示和學習用途，SIRUDA 品牌及商標歸原公司所有。

**MIT License**

---

**⚡ 由 Claude Code AI 協助開發** • **🚀 Powered by React + TypeScript + Vite + Tailwind CSS**

[![GitHub Pages](https://img.shields.io/badge/deployed%20on-GitHub%20Pages-blue)](https://yanchen184.github.io/siruda-clone/)
[![Build Status](https://github.com/yanchen184/siruda-clone/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/yanchen184/siruda-clone/actions)
