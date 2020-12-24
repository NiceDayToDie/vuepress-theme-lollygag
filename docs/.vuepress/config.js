const path = require("path");

module.exports = {
    title: "Lollygag",
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['script', {src: '/static/setting.js'}]
    ],
    markdown: {
        anchor: {
            permalink: false
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "theme")
            }
        }
    },
    plugins: [],
}
