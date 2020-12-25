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
            "@vuepress/search",
            {
                searchMaxSuggestions: 10
            }
        ],
        [
            "@vuepress/register-components",
            {
                componentsDir: "./theme/global-components/"
            }
        ],
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
        ],
        [
            "vuepress-plugin-container",
            {
                type: "fold",
                defaultTitle: "折叠内容",
                before: info => `<div class="fold-wrapper">
                                    <input type="checkbox"/>
                                    <p class="fold-header">
                                        <span class="arrow">▶</span>
                                        <span class="title">${info}</span>
                                    </p>
                                    <div class="fold-content">
                                `,
                after: "</div></div>",
            }
        ]
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/' },
            { text: 'Config', link: '/config/' },
        ]
    }
}
