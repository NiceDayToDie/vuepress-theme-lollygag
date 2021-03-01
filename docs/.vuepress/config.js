const path = require("path");

const postPerPage = 5;

const categories = [
    {text: "all", link: "/all/"},
    {text: "guide", link: "/guide/"},
    {text: "deploy", link: "/deploy/"},
    {text: "issues", link: "/issues/"},
    {text: "articles", link: "/articles/"},
    {text: "example_game", link: "/example_game/"},
    {text: "example_movie", link: "/example_movie/"},
    {text: "example_book", link: "/example_book/"},
    {text: "example_music", link: "/example_music/"}
];

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

const blogConfig = [
    "@vuepress/blog",
    {
        comment: {
            service: "vssue",
            // fill your own information below
            owner: "NiceDayToDie",
            repo: "vuepress-theme-lollygag",
            clientId: "811e5c4171199f1c5ddb",
            clientSecret: "201f488b884c6b366a36194bcc3dfff97a502d68"
        },
        globalPagination: {
            lengthPerPage: postPerPage
        },
        directories: categories.filter(item => item.text !==  "all").map(item => {
            let name = item.text;
            return {
                id: name,
                dirname: `_posts/${name}`,
                path: `/${name}/`,
                itemPermalink: `/${name}/:year/:month/:day/:slug`
            }
        }),
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

module.exports = {
    base: "/vuepress-theme-lollygag/",
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
        categories: categories,
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
                    text: "Powered by Vuepress",
                },
                {
                    text: `Copyright © 2020-${new Date().getFullYear()} Lollygag`
                }
            ]
        }
    }
}
