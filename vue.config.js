const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    pages: {
        index: {
            // 入口文件，相当于单页面的 main.js
            entry: './src/pages/index/main.js',
            // 模板文件
            template: './public/index.html',
            // 编译后 dist 目录下输出的文件，可以包含子目录
            filename: 'index.html'
        },
        about: {
            entry: './src/pages/about/main.js',
            template: './public/index.html',
            filename: 'about.html'
        },
        login: {
            entry: './src/pages/login/main.js',
            template: './public/index.html',
            filename: 'login.html'
        },
        friends: {
            entry: './src/pages/friends/main.js',
            template: './public/index.html',
            filename: 'friends.html'
        }
    }
}