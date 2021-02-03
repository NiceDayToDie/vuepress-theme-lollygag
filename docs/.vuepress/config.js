const path = require("path");

const postPerPage = 6;

const searchConfig = [
    "@vuepress/search",
    {
        searchMaxSuggestions: 10
    }
];

const registerComponentsConfig = [
    "@vuepress/register-components",
    {
        componentsDir: "./theme/global-components/"
    }
];

const containerConfig = [
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
];

const blogConfig = [
    "@vuepress/blog",
    {
        comment: {
            service: "vssue",
            owner: "",
            repo: "",
            clientId: "",
            clientSecret: "",
        },
        globalPagination: {
            lengthPerPage: postPerPage
        },
        directories: [
            {
                id: "code",
                dirname: "_posts/code",
                path: "/code/",
                itemPermalink: "/code/:year/:month/:day/:slug",
            },
            {
                id: "game",
                dirname: "_posts/game",
                path: "/game/",
                itemPermalink: "/game/:year/:month/:day/:slug",
            },
            {
                id: "life",
                dirname: "_posts/life",
                path: "/life/",
                itemPermalink: "/life/:year/:month/:day/:slug",
            },
            {
                id: "movie",
                dirname: "_posts/movie",
                path: "/movie/",
                itemPermalink: "/movie/:year/:month/:day/:slug",
            },
            {
                id: "music",
                dirname: "_posts/music",
                path: "/music/",
                itemPermalink: "/music/:year/:month/:day/:slug",
            }
        ],
        frontmatters: [
            {
                id: "archives",
                keys: [],
                path: "/all/",
                layout: "Layout"
            },
            {
                id: "tags",
                keys: ["tags"],
                path: "/tags/",
                layout: "Tags",
                scopeLayout: "Layout"
            }
        ]
    }
];

const mediumZoomConfig = [
    "vuepress-plugin-medium-zoom",
    {
        selector: ".content__default img",
        delay: 1000,
        options: {
            margin: 32,
            background: "#000000",
            scrollOffset: 0,
        },
    },
];

module.exports = {
    title: "Lollygag",
    locales: {
        "/": {
            lang: "zh-CN"
        }
    },
    head: [
        ["link", {rel: "icon", href: "/favicon.ico"}],
    ],
    markdown: {
        anchor: {
            level: 2
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
        "@vuepress/back-to-top",
        "vuepress-plugin-smooth-scroll",
        searchConfig,
        registerComponentsConfig,
        ...containerConfig,
        blogConfig,
        mediumZoomConfig
    ],
    themeConfig: {
        nav: [
            {text: "archives", link: "/all/"},
            {text: "tags", link: "/tags/"}
        ],
        categories: [
            {text: "all", link: "/all/"},
            {text: "life", link: "/life/"},
            {text: "code", link: "/code/"},
            {text: "game", link: "/game/"},
            {text: "movie", link: "/movie/"},
            {text: "music", link: "/music/"}
        ],
        post: {
            postPerPage: postPerPage
        },
        footer: {
            contact: [
                {
                    type: "github",
                    link: "https://github.com/NiceDayToDie/vuepress-theme-lollygag",
                },
                {
                    type: "mail",
                    link: "mailto:zane295384295@gmail.com",
                }
            ],
            copyright: [
                {
                    text: "湘ICP备18022099号-1",
                    link: "https://beian.miit.gov.cn/#/Integrated/index",
                },
                {
                    text: "Powered by Vuepress",
                },
                {
                    text: `Copyright © 2020-${new Date().getFullYear()} Lollygag`
                }
            ]
        }
    }
}
