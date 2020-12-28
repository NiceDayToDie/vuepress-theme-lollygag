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
        ],
        [
            "@vuepress/blog",
            {
                directories: [
                    {
                        id: "code",
                        dirname: "_posts/code",
                        path: "/code",
                        itemPermalink: "/code/:year/:month/:day/:slug",
                    },
                    {
                        id: "game",
                        dirname: "_posts/game",
                        path: "/game",
                        itemPermalink: "/game/:year/:month/:day/:slug",
                    },
                    {
                        id: "life",
                        dirname: "_posts/life",
                        path: "/life",
                        itemPermalink: "/life/:year/:month/:day/:slug",
                    },
                    {
                        id: "movie",
                        dirname: "_posts/movie",
                        path: "/movie",
                        itemPermalink: "/movie/:year/:month/:day/:slug",
                    },
                    {
                        id: "music",
                        dirname: "_posts/music",
                        path: "/music",
                        itemPermalink: "/music/:year/:month/:day/:slug",
                    }
                ]
            }
        ]
    ],
    themeConfig: {
        nav: [
            {text: "life", link: "/life"},
            {text: "code", link: "/code"},
            {text: "game", link: "/game"},
            {text: "movie", link: "/movie"},
            {text: "music", link: "/music"}
        ]
    }
}
