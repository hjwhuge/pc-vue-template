## 项目简介

1. 基于 [vitesse](https://github.com/antfu/vitesse)
2. 只涉及项目初始化必要配置，布局，第三方 UI 框架需自行引入

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 📦 完善的代码规范配置；eslint + prettierrc + editorconfig + husky

- [axios 基础封装](https://github.com/axios/axios)

- [Mock 支持](https://github.com/vbenjs/vite-plugin-mock)

- [TypeScript 支持](https://github.com/microsoft/TypeScript)

- 结合 [GitHub Actions](https://github.com/features/actions)，使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试, [Cypress](https://cypress.io/) 进行 E2E 测试

### 插件

- [Vue Router](https://github.com/vuejs/vue-router)
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 Vite 的单元测试框架
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [Netlify](https://www.netlify.com/) - 零配置的部署

## 使用

## 安装依赖

```
pnpm i
```

### 启动项目

```
pnpm dev
```

### 构建

```
pnpm build
```

### 代码格式化

```
pnpm lint
```
