# 移动端模板

项目启动

```
yarn install
```

### 开发环境运行
```
yarn dev
```

### 正式环境打包
```
yarn build
```

### 运行单元测试
```
yarn test:unit
```

### 运行端对端测试
```
yarn test:e2e
```

### 静态代码分析和修复文件
```
yarn lint
```
### 支持的功能

1. 默认Vant ui框架,Scss预编译,按需引入
2. 支持px自动转换rem
3. gzip压缩
4. 请求转发
5. 样式重置
6. 单页应用导航管理器
7. 分析打包文件
8. 默认显示打包时间

### 开发中的功能
- 页面返回上一级页面传值问题
- 内部滚动组件
- toast弹窗
- 确认框

### 文件目录
```
mobile
├── build 
├── public  # 公共文件
├── serve  # 服务器代码
├── src # 项目代码
│    ├── api  # 接口文件
│    ├── assets  # 静态资源
│    │      ├── css  # css文件
│    │      │    ├── reset.css  # 样式重置
│    │      │    └── global.css  # 全局样式
│    │      ├── img  # 图片资源
│    │      └── scss  # scss文件
│    │           └── mixins.scss  # 变量和动态样式
│    ├── components  # 公用组件
│    ├── router  # 路由
│    ├── store   # 状态管理
│    ├── views   # 页面
│    ├── App.vue # 根节点文件
│    ├── main.js # 项目入口文件
│    └── registerServiceWorker.js # pwa配置
├── tests # 单元测试
├── .env # 环境文件
├── .env.development # 开发环境文件
├── .env.production # 生产环境文件
├── .eslintrc.js # eslint配置文件
├── .gitignore # git忽略文件
├── babel.config.js # babel语法编译
├── cypress.json # cypress测试框架配置
├── jest.config.js # jest单元测试配置
├── package.json # 项目基本配置
├── postcss.config.js # postcss配置文件
├── README.md  # 项目介绍
└── vue.config.js # vue配置文件
```
