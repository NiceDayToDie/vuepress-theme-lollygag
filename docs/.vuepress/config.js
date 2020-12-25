const path = require("path");

module.exports = {
    title: "Lollygag",
    head: [
        ["link", {rel: "icon", href: "/favicon.ico"}],
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
    plugins: [
        [
            "vuepress-plugin-container",
            {
                type: "right",
                defaultTitle: "",
            }
        ],
        [
            "vuepress-plugin-container",
            {
                type: "theorem",
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: "</div>",
            }
        ]
    ]
}
