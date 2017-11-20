# vue
vue学习、vue入门

# vue 环境搭建

## 设置 npm 镜像

直连 npm 速度慢，使用淘宝提供的镜像加快 npm 包的下载速度，安装全局 cnpm ，除了这个 npm 命令外，之后所有 npm install 命令都可改为 cnpm install 来执行。
```bat
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 创建一个基于 webpack 的 vue 项目
```bat
::: 全局安装 vue-cli
npm install --global vue-cli
::: 创建一个基于 webpack 模板的新项目
vue init webpack my-project
::: 之后所有 npm 命令都在 my-project 目录下执行
cd my-project
::: 安装依赖
npm install
::: 安装 iview
npm install iview --save
::: 启动
npm run dev
start http://localhost:8080
```

## 引入 iview
```js
// my-project\src\main.js
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
```

## 配置代理
```js
// my-project\config\index.js
proxyTable: {
  '/server': {
    target: 'http://localhost:3000',
    changeOrigin: true
  }
}
```

## 构建
```bat
::: 将工程打包至 my-project/dist 目录，用于生产环境
npm run build
```

总的来说 vue 主要参考了 Angular 部分语法，借鉴了 React 的虚拟 DOM 与组件机制，同时实现了类似于 Flux、Redux 的功能，并简化了使用方式（vuex），并有整合的 webpack 脚手架，可以说是一个前端的集大成者。
## 参考文献
- [iview](https://www.iviewui.com/docs/guide/install)
- [webpack](https://doc.webpack-china.org/concepts/)
- [react](https://reactjs.org/docs/installation.html)
- [flux](http://facebook.github.io/flux/docs/in-depth-overview.html)
- [redux](http://www.redux.org.cn/)
- [proxyTable](https://segmentfault.com/q/1010000007697635?_ea=1425764)

## 其它
- [git 下载](https://git-for-windows.github.io/)
- [tortoiseGit 下载](https://tortoisegit.org/download/)
- [git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
