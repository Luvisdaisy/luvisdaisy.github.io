# 个人主页重构 - 需求规格说明书

## 1. 项目概述

### 1.1 项目背景
对现有个人主页进行全面重构，从 React SPA 迁移至 Next.js 14+ App Router，提升性能、SEO 表现和可维护性。

### 1.2 项目目标
- 构建现代化、高性能的个人作品展示网站
- 支持中英文国际化
- 提供流畅的用户体验和优雅的动画效果
- 便于内容维护（博客、项目的 Markdown 管理）

---

## 2. 技术架构

### 2.1 技术栈

| 类别 | 技术选型 | 版本要求 |
|------|----------|----------|
| 框架 | Next.js | 14+ (App Router) |
| 语言 | TypeScript | 5.x |
| 样式 | Tailwind CSS | v4 |
| 组件库 | shadcn/ui | 最新 |
| 动画 | Framer Motion | 最新 |
| 国际化 | next-intl | 4.x |
| 部署平台 | Vercel | - |

### 2.2 项目结构 (App Router)

```
├── app/
│   ├── [locale]/                    # 国际化路由组
│   │   ├── layout.tsx              # 根布局 (Provider 包裹)
│   │   ├── page.tsx                # 首页 (/)
│   │   ├── experience/
│   │   │   └── page.tsx            # 经历页面 (/experience)
│   │   ├── projects/
│   │   │   ├── page.tsx            # 项目列表 (/projects)
│   │   │   └── [slug]/page.tsx     # 项目详情 (/projects/:slug)
│   │   ├── blog/
│   │   │   ├── page.tsx            # 博客列表 (/blog)
│   │   │   └── [slug]/page.tsx     # 博客详情 (/blog/:slug)
│   │   ├── about/
│   │   │   └── page.tsx            # 关于我 (/about)
│   │   └── contact/
│   │       └── page.tsx            # 联系我 (/contact)
│   ├── api/                        # API 路由 (邮件发送)
│   └── globals.css                 # 全局样式
├── components/
│   ├── ui/                        # shadcn/ui 组件
│   ├── layout/
│   │   ├── Header.tsx             # 导航栏
│   │   ├── Footer.tsx             # 页脚
│   │   └── ThemeProvider.tsx      # 主题 Provider
│   └── ...
├── lib/
│   ├── utils.ts                   # 工具函数
│   └── constants.ts               # 常量定义
├── content/                       # Markdown 内容
│   ├── blog/                     # 技术博客
│   │   ├── tech/
│   │   └── life/
│   └── projects/                 # 项目文档
├── messages/                     # 国际化文案
│   ├── en.json
│   └── zh.json
├── public/
│   ├── images/                    # 静态图片
│   └── resume.pdf                 # 简历 PDF
├── next.config.js
├── tailwind.config.ts
├── components.json                # shadcn/ui 配置
└── package.json
```

### 2.3 核心依赖

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "next-intl": "^4.0.0",
    "next-themes": "^0.4.0",
    "gray-matter": "^4.0.0",
    "remark": "^15.0.0",
    "remark-html": "^16.0.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-dropdown-menu": "^2.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.4.0",
    "lucide-react": "^0.460.0"
  }
}
```

---

## 3. 页面详细设计

### 3.1 页面结构总览

| 路由 | 页面 | 描述 |
|------|------|------|
| `/` | 首页 | 个人简介 + 联系方式 + 头像 |
| `/experience` | 经历 | 教育 + 工作经历卡片 |
| `/projects` | 项目展示 | 项目卡片列表 |
| `/projects/[slug]` | 项目详情 | 完整项目信息 |
| `/blog` | 博客列表 | 技术博客 + 生活日志 |
| `/blog/[slug]` | 博客详情 | Markdown 渲染 |
| `/about` | 关于我 | 个人兴趣卡片入口 |
| `/contact` | 联系我 | 联系方式 + 邮件表单 |

### 3.2 首页 (Home)

**路由**: `/` 或 `/:locale`

**布局结构**:
```
┌─────────────────────────────────────────────┐
│  Header (固定顶部)                          │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────────┐     ┌──────────────────┐ │
│  │              │     │                  │ │
│  │  左侧信息区  │     │    右侧头像      │ │
│  │  - 姓名      │     │                  │ │
│  │  - 职位      │     │   (肖像图片)     │ │
│  │  - 一句话简介│     │                  │ │
│  │  - 联系方式  │     │                  │ │
│  │    (社交Logo)│     │                  │ │
│  │              │     │                  │ │
│  └──────────────┘     └──────────────────┘ │
│                                             │
├─────────────────────────────────────────────┤
│  Footer                                     │
└─────────────────────────────────────────────┘
```

**组件说明**:
- `HeroSection`: 主展示区，左侧文字 + 右侧头像
- `SocialLinks`: GitHub, LinkedIn, Email, Twitter 图标链接
- `ContactIcons`: 联系方式图标组件

**视觉设计**:
- 背景: 简约纯色或微妙渐变，支持深色模式
- 头像: 圆形或圆角矩形，带微阴影
- 文字: 姓名大字突出，职位次之
- 动画: 页面加载时渐入效果

### 3.3 经历页面 (Experience)

**路由**: `/experience` 或 `/:locale/experience`

**布局**: 垂直时间线 + 卡片

**卡片结构**:
```tsx
// ExperienceCard
- 时间范围 (e.g., "2023 - 现在")
- 机构名称
- 职位/学历
- 简短描述 (2-3 行)
- 标签 (技术栈/关键词)
- 点击 → 展开详情 (Dialog)
```

**数据模型**:
```typescript
interface Experience {
  id: string;
  type: 'education' | 'work';
  title: string;           // 职位/学位
  organization: string;   // 学校/公司
  location: string;
  startDate: string;
  endDate: string | 'now';
  description: string;    // 简短描述
  details: string;        // 详细描述 (Markdown)
  tags: string[];
  logo?: string;          // 机构 Logo
}
```

### 3.4 项目页面 (Projects)

**路由**: `/projects` 或 `/:locale/projects`

**布局**: 卡片网格 (响应式: 1/2/3 列)

**卡片结构**:
```tsx
// ProjectCard
- 项目封面图
- 项目名称
- 简短描述 (1-2 行)
- 技术标签 (最多 4 个)
- 链接: 演示 / GitHub
- 点击 → 跳转详情页
```

**项目详情页**: `/projects/[slug]`
```tsx
// ProjectDetailPage
- 封面大图
- 项目名称
- 项目描述 (完整 Markdown)
- 技术栈列表
- 演示链接 + GitHub 链接
- 相关截图/截图轮播
```

**数据模型**:
```typescript
interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;  // Markdown
  coverImage: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}
```

### 3.5 博客系统 (Blog)

**路由**: `/blog` 或 `/:locale/blog`

**布局**:
- 顶部: 分类标签切换 (全部/技术/生活)
- 中部: 文章卡片列表
- 列表项: 标题 + 日期 + 分类 + 摘要

**分类**:
1. **技术博客** (`tech`) - 技术文章、教程、踩坑记录
2. **生活日志** (`life`) - 生活随笔、户外、电影

**博客详情页**: `/blog/[slug]`
```tsx
// BlogDetailPage
- 标题
- 发布日期 + 阅读时间
- 分类标签
- 正文 (Markdown 渲染)
- 目录 (右侧可选)
- 上下篇导航
```

**Markdown 处理**:
- 使用 `gray-matter` 解析 Frontmatter
- 使用 `remark` + `remark-html` 转换为 HTML
- 代码高亮: `rehype-highlight` 或 `rehype-pretty-code`

**数据模型**:
```typescript
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;          // Markdown
  category: 'tech' | 'life';
  tags: string[];
  date: string;
  readingTime: string;      // 计算得出
  author: string;
  coverImage?: string;
}
```

### 3.6 关于我页面 (About)

**路由**: `/about` 或 `/:locale/about`

**布局**: 卡片入口网格

**卡片内容**:
1. **CS2 (游戏)**
   - 游戏截图/战绩
   - 简短描述
2. **户外徒步**
   - 徒步照片
   - 路线/经历简述
3. **电影**
   - 喜欢的电影海报/截图
   - 简短影评/观影偏好

**组件结构**:
```tsx
// AboutPage
- 个人简介文字
- InterestCard[] (3 个)
  - 图标/图片
  - 标题
  - 简短描述
  - 点击展开详情 (Sheet/Dialog)
```

### 3.7 联系我页面 (Contact)

**路由**: `/contact` 或 `/:locale/contact`

**布局**: 左侧联系方式 + 右侧邮件表单

**联系方式** (左侧):
- Email
- GitHub
- LinkedIn
- Twitter/X
- 微信 (二维码)

**邮件表单** (右侧):
```tsx
// ContactForm (使用 shadcn/ui Form)
- Name (必填)
- Email (必填)
- Subject (必填)
- Message (必填, 多行)
- Submit 按钮
- 发送状态反馈 (成功/失败)
```

**邮件发送方案**:
- **推荐: Formspree**
  - 免费额度: 50 表单提交/月
  - 配置简单，无需后端
  - 使用方式: POST 到 `https://formspree.io/f/{form_id}`

- **备选: EmailJS**
  - 免费额度: 200 邮件/月
  - 更灵活，可自定义邮件模板

---

## 4. 功能规格

### 4.1 国际化 (i18n)

**方案**: `next-intl` v4

**支持语言**:
- `zh` - 简体中文
- `en` - English

**路由结构**:
```
/              → 重定向到 /zh
/en            → English
/zh            → 中文
/zh/projects   → 项目页 (中文)
```

**配置**:
```typescript
// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../messages/${locale}.json`)).default
}));
```

**切换机制**:
- URL path 自动携带 locale
- Header 提供语言切换下拉菜单
- 存储用户偏好到 localStorage

### 4.2 深色模式

**方案**: `next-themes` + Tailwind CSS `dark:` 前缀

**功能**:
- 手动切换: Header 主题开关按钮
- 系统跟随: 检测 `prefers-color-scheme`
- 持久化: 存储到 localStorage
- 切换动画: 平滑过渡

**实现**:
```tsx
// components/ThemeProvider.tsx
'use client';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

export function ThemeProvider({children, ...props}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**Tailwind 配置**:
```css
/* app/globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

### 4.3 导航结构

**Header 组件**:
```tsx
// components/layout/Header.tsx
- Logo/个人头像 (链接到首页)
- 导航链接: 首页 | 经历 | 项目 | 博客 | 关于 | 联系
- 主题切换按钮
- 语言切换下拉菜单
- 移动端: Hamburger menu → Drawer 侧边栏
```

**响应式断点**:
- Mobile: < 640px - 隐藏导航，显示 Hamburger
- Tablet: 640px - 1024px
- Desktop: > 1024px - 完整导航

### 4.4 SEO 元数据

**使用 Next.js Metadata API**:

```typescript
// app/[locale]/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Haotian - 个人主页',
    en: 'Haotian - Personal Portfolio',
  },
  description: {
    zh: '前端开发者，热爱技术和户外徒步',
    en: 'Frontend Developer, passionate about tech and hiking',
  },
  authors: [{name: 'Haotian'}],
  openGraph: {
    title: 'Haotian - 个人主页',
    description: '前端开发者作品集',
    images: ['/og-image.jpg'],
  },
};
```

### 4.5 动画效果

**使用 Framer Motion**:

- **页面切换**: `AnimatePresence` + `motion.div`
- **入场动画**: `initial`, `animate`, `transition` 组合
- **悬停效果**: 卡片放大、阴影增强
- **滚动动画**: `whileInView` 触发元素入场

**示例**:
```tsx
<motion.div
  initial={{opacity: 0, y: 20}}
  animate={{opacity: 1, y: 0}}
  transition={{duration: 0.5}}
>
  {children}
</motion.div>
```

---

## 5. 数据管理

### 5.1 静态数据存储

**方案**: Markdown 文件 + `gray-matter`

**目录结构**:
```
content/
├── blog/
│   ├── tech/
│   │   ├── my-first-post.md
│   │   └── react-hooks-guide.md
│   └── life/
│       └── hiking-trip-2024.md
└── projects/
    ├── project-1.md
    └── project-2.md
```

**Markdown Frontmatter**:
```markdown
---
title: 我的第一篇博客
description: 这是博客描述
date: 2024-01-15
category: tech
tags: [React, Next.js]
---

博客正文内容...
```

**读取函数**:
```typescript
// lib/posts.ts
import fs from 'fs';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

export async function getPostBySlug(slug: string, category: string) {
  const filePath = path.join(process.cwd(), 'content/blog', category, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const {data, content} = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {slug, contentHtml, ...data};
}
```

---

## 6. 非功能性需求

### 6.1 性能要求

| 指标 | 目标值 |
|------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint (FCP) | < 1.8s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Time to Interactive (TTI) | < 3.8s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total Bundle Size | < 200KB (JS) |

**优化策略**:
- Next.js App Router 默认 Server Components，减少客户端 JS
- 图片使用 `next/image` 自动优化
- 动态导入非首屏组件
- 静态生成 (SSG) 博客和项目页面

### 6.2 可访问性 (基础)

- **语义化 HTML**: 使用 `<header>`, `<main>`, `<footer>`, `<article>`
- **键盘导航**: 所有交互元素可 Tab 聚焦
- **ARIA 标签**: 图标按钮添加 `aria-label`
- **颜色对比**: 文本与背景对比度符合 WCAG AA
- **焦点指示**: 自定义 focus ring 样式

### 6.3 浏览器支持

- Chrome (最新 2 个版本)
- Firefox (最新 2 个版本)
- Safari (最新 2 个版本)
- Edge (最新 2 个版本)

---

## 7. shadcn/ui 组件使用

### 7.1 需安装的组件

```bash
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add label
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add avatar
npx shadcn@latest add navigation-menu
npx shadcn@latest add scroll-area
npx shadcn@latest add skeleton
```

### 7.2 主题定制

**颜色变量** (`app/globals.css`):
```css
@theme {
  /* 黄色系暖色调 - 主色 */
  --color-primary: oklch(0.7 0.15 75);        /* 暖黄色 */
  --color-primary-hover: oklch(0.65 0.18 70); /* 悬停时加深 */
  --color-primary-light: oklch(0.85 0.1 80);  /* 浅黄色背景 */

  /* 渐变色 */
  --gradient-warm-start: oklch(0.75 0.12 85);  /* 浅暖黄 */
  --gradient-warm-end: oklch(0.6 0.2 45);      /* 暖橙色 */

  /* 文字颜色 */
  --color-primary-foreground: oklch(0.15 0.02 60);  /* 深棕色文字 */

  /* 辅助色 */
  --color-secondary: oklch(0.95 0.02 85);     /* 米白色 */
  --color-muted: oklch(0.97 0.01 90);        /* 浅米色 */
  --color-accent: oklch(0.65 0.18 55);       /* 橙色强调 */
  --color-destructive: oklch(0.6 0.2 25);      /* 红色(保留) */

  /* 背景色 */
  --color-background: oklch(0.98 0.01 85);    /* 暖白 */
  --color-background-dark: oklch(0.15 0.02 40); /* 深棕黑 */
}
```

**浅色模式示例**:
```css
/* 背景渐变 */
.bg-warm-gradient {
  background: linear-gradient(135deg,
    oklch(0.85 0.1 80) 0%,
    oklch(0.75 0.12 70) 50%,
    oklch(0.65 0.15 55) 100%
  );
}
```

**深色模式示例**:
```css
/* 深色模式调整为暖色调 */
.dark {
  --color-primary: oklch(0.75 0.15 70);       /* 保持暖黄色 */
  --color-background: oklch(0.12 0.02 35);   /* 暖深棕 */
  --color-muted: oklch(0.2 0.02 40);         /* 暖灰棕 */
}
```

---

## 8. 待确认事项

### 8.1 需要进一步讨论

| 项目 | 选项 | 建议 |
|------|------|------|
| 博客搜索功能 | 需要 / 不需要 | 初期不需要，后续可加 |
| RSS 订阅 | 需要 / 不需要 | 初期不需要 |
| 评论系统 | 需要 / 不需要 | 暂不考虑 |
| 访客统计 | 需要 / 不需要 | 可后续集成 |

### 8.2 后续可扩展功能

1. **博客搜索**: 使用 Fuse.js 客户端搜索
2. **RSS Feed**: `feed` 包生成 RSS
3. **评论**: Giscus (GitHub Discussions)
4. **分析**: Vercel Analytics 或 Umami

---

## 9. 实施建议

### 9.1 重构优先级

1. **Phase 1**: 项目初始化 + 基础布局 (Header/Footer/Theme)
2. **Phase 2**: 首页 + 经历页面
3. **Phase 3**: 项目展示 (列表 + 详情)
4. **Phase 4**: 博客系统
5. **Phase 5**: 关于我 + 联系我
6. **Phase 6**: 国际化完善 + SEO 优化
7. **Phase 7**: 部署 + 性能优化

### 9.2 数据迁移

- 将 `public/projects/summary.json` 转换为 Markdown 文件
- 保留现有图片资源到 `public/images/`
- 现有文案提取到 `messages/zh.json` 和 `messages/en.json`

---

## 10. 技术选型总结

| 需求 | 推荐方案 | 理由 |
|------|----------|------|
| 框架 | Next.js 14+ App Router | SSR/SSG 支持，SEO 友好，性能优秀 |
| 组件库 | shadcn/ui | Radix UI 原生，无样式，定制灵活 |
| 样式 | Tailwind CSS v4 | 原子化 CSS，与 shadcn 完美集成 |
| 动画 | Framer Motion | React 生态最成熟，API 友好 |
| 国际化 | next-intl | Next.js 官方推荐，与 App Router 深度集成 |
| 主题 | next-themes | 轻量，支持系统跟随，无闪烁 |
| 博客内容 | Markdown + gray-matter | 简单，Git 友好，便于维护 |
| 邮件表单 | Formspree | 免费额度够用，无需后端 |
| 部署 | Vercel | Next.js 原生支持，免费额度充足 |

---

*文档版本: 1.0*
*最后更新: 2024*
