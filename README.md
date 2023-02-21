### 使用步骤

> 推荐使用 yarn

- **Install：**

```text
yarn install
npm install
cnpm install

# npm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=https://registry.npm.taobao.org
```

- **Run：**

```text
npm run dev
npm run serve
```

- **Build：**

```text
# 开发环境
npm run build:dev

# 测试环境
npm run build:test

# 生产环境
npm run build:pro
```

- **Lint：**

```text
# eslint 检测代码
npm run lint:eslint

# prettier 格式化代码
npm run lint:prettier

# stylelint 格式化样式
lint:stylelint
```

- **commit：**

```text
# 提交代码（提交前会自动执行 lint:lint-staged 命令）
npm run commit
```

### 相关技术

- 技术栈：Vue 3.2 + TypeScript + Pinia + Vite3 + Element-Plus

- 代码规范文档：[STANDARD.md](./STANDARD.md)

### 文件资源目录

```text
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ directives          # 全局指令文件
│  ├─ enums               # 项目枚举
│  ├─ ├─ config           # 全局配置等
│  ├─ hooks               # 常用 Hooks
│  ├─ layouts             # 框架布局
│  ├─ mock                # mock 数据
│  ├─ plugins             # 插件、配置项等
│  ├─ ├─ dynamicRouter    # 基础组件测试路由mock
│  ├─ routers             # 路由管理
│  ├─ stores              # pinia store
│  ├─ styles              # 全局样式
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ ├─ test             # 基础组件测试页面
│  ├─ App.vue             # 入口页面
│  ├─ env.d.ts            # ts 识别 vue 文件
│  └─ main.ts             # 入口文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ lint-staged.config     # lint-staged 配置文件
├─ .npmrc                 # 依赖包源全局设置
├─ yarn.lock              # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ STANDARD.md            # 项目编码规范说明书
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```

### 浏览器支持

> 默认支持以下浏览器，vue3.2 不支持 IE 浏览器。更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)
>
> **请不要使用 QQ && 360 浏览器开发，不识别 某些 ES6 以上语法**

- Chrome ｜ last 2 versions
- Firefox ｜ last 2 versions
- Safari ｜ last 2 versions
- Edge ｜ last 2 versions

### 参考资料

- proTable 组件 ｜ Pro-Table 文档: https://juejin.cn/post/7166068828202336263
- vue3+ts+vite 项目 ｜ https://github.com/HalseySpicy/Geeker-Admin
