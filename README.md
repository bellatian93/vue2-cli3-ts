# vue2-cli3-ts

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


* 项目学习参考
https://juejin.cn/post/6844904046352941064#heading-14

├─ public/             # 模板文件
├─ dist/               # build 生成的生产环境下的项目
├─ src/                # 源码目录（开发都在这里进行）
│   ├─ api/            # 服务（SERVICE，统一Api管理）
│   ├─ assets/         # 静态资源文件
│   ├─ components/     # 组件
│   ├─ filters/        # 全局过滤器
│   ├─ icons/          # svg转ts格式的icon
│   ├─ lang/           # 国际化语言
│   ├─ layout/         # 架构布局
│   ├─ router/         # 路由（ROUTE）
│   ├─ store/          # 模块化状态管理vuex
│   ├─ styles/         # 公共样式
│   ├─ utils/          # 工具库
│   ├─ views/          # 视图页（pages）
│   ├─ App.vue         # 启动文件
│   ├─ main.ts         # 主入口页
│   ├─ permission.ts   # 路由鉴权
│   ├─ shims-tsx.d.ts   # 相关 tsx 模块注入
│   ├─ shims-vue.d.ts   # Vue 模块注入
│   ├─ .env.development  # 开发环境默认API属性配置
│   ├─ .env.production   # 线上环境默认API属性配置
│   ├─ babel.config.js   # babel配置


主要涉及 shims-tsx.d.ts 和 shims-vue.d.ts 两个文件

shims-tsx.d.ts ，允许你以 .tsx 结尾的文件，在 Vue 项目中编写 jsx 代码
shims-vue.d.ts 主要用于 TypeScript 识别 .vue 文件， ts 默认并不支持导入 .vue 文件，这个文件告诉 ts 导入 .vue 文件都按 VueConstructor<Vue> 处理。

