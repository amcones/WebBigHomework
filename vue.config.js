const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
})

module.exports = {
    publicPath:'./',
    pages: {
        index: {
            // 入口文件，相当于单页面的 main.js
            entry: './src/pages/index/main.js',
            // 模板文件
            template: './public/index.html',
            // 编译后 dist 目录下输出的文件，可以包含子目录
            filename: 'index.html',
            title: '主页'
        },
        about: {
            entry: './src/pages/about/main.js',
            template: './public/index.html',
            filename: 'about.html',
            title:'关于我'
        },
        login: {
            entry: './src/pages/login/main.js',
            template: './public/index.html',
            filename: 'login.html',
            title:'登录'
        },
        friends: {
            entry: './src/pages/friends/main.js',
            template: './public/index.html',
            filename: 'friends.html',
            title:'友链'
        },
        article:{
            entry: './src/pages/article/main.js',
            template: './public/index.html',
            filename: 'article.html',
            title:'关于本站'
        },
        article1:{
            entry: './src/pages/article1/main.js',
            template: './public/index.html',
            filename: 'article1.html',
            title:'使用frp搭建个人办公网络'
        },
        article2:{
            entry: './src/pages/article2/main.js',
            template: './public/index.html',
            filename: 'article2.html',
            title:'博客的新用途'
        },
        article3:{
            entry: './src/pages/article3/main.js',
            template: './public/index.html',
            filename: 'article3.html',
            title:'使用frp搭建个人办公网络'
        },
    }
}