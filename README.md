# 使用vue制作的简历项目

> 基于 Vue2.0 构建的项目
> [项目预览](https://jasonyqwang.github.io/vue-resume/dist/index.html)

## 构建步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 简历模板

* 预置了 php,web,node 的简历模板, 位于 src/assets 
* 更多程序员简历模板见 [ResumeSample](https://github.com/geekcompany/ResumeSample)
* 程序展示简历模板信息， 需修改 ResumeContent.vue 文件
  


## 部署方法

1. 编辑 config/index.js，修改第 10 行的 assetsPublicPath，值为 `/项目名/dist`。

2. 编译、上传
    ``` bash
    npm run build
    git add .
    git commit -m "update"
    git push
    ```
