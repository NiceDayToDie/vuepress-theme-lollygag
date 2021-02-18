<template>
    <article id="fade-wrapper" class="article-wrapper">
        <span class="current-tag" v-if="!isArchives && $currentTags">
            {{ $currentTags.key | upperCase }}
        </span>
        <div id="card-wrapper" class="card-wrapper">
            <div v-for="(item, index) in pages"
                 :key="item.key"
                 class="card animate__faster"
                 @click="onCardClick(item.path)"
                 @mouseover="onCardHover(index)"
                 @mouseleave="onCardLeave(index)">
                <div class="card-thumb">
                    <img v-if="item.frontmatter.cover" style="object-fit: cover" :src="item.frontmatter.cover" alt="">
                    <css-doodle v-else>
                        :doodle {
                            @size: 100%;
                            @grid: 5;
                        }

                        margin: -.5px;
                        transform: rotate(@r(0deg, 360deg, 90));
                        border-width: 1px;
                        border-style: @p(double, dotted, dashed, solid);
                        border-color: transparent;

                        @random {
                            border-top-color: @p(#60569e, #e6437d, #ebbf4d);
                        }
                        @random {
                            border-left-color: @p(#60569e, #e6437d, #ebbf4d);
                        }
                        @random {
                            border-width: @p(3px, 4px);
                            border-style: double;
                        }
                        @random {
                            border-radius: @p('0 0 0 100%', '100% 0 0 0', 0, 0);
                        }
                        :nth-child(19n):after {
                            content: '~~~';
                            color: transparent;
                            line-height: 0;
                            position: absolute;
                            transform: scale(@r(.5, .7)) rotate(@r(360deg));
                            text-decoration: line-through wavy
                            @p(#60569e, #e6437d, #ebbf4d);
                        }
                        @random {
                            :after {
                                content: '';
                                background: @p(#60569e, #e6437d, #ebbf4d);
                                transform: rotate(@r(360deg));
                                @size: 30%;
                                @shape: @p(
                                circle, diamond, star,
                                triangle, pentagon, rhombus
                            );
                            }
                        }
                    </css-doodle>
                </div>
                <div class="card-content">
                    <div style="width: 0; flex: 1;">
                        <div class="title" :title="item.title">{{ item.title }}</div>
                        <span class="card-date">{{ item.frontmatter.date | dateFormat }}</span>
                        <p class="abstract">{{ item.frontmatter.abstract }}</p>
                        <div class="tags-wrapper">
                            <div class="tag"
                                 @click.stop="$router.push(`/tags/${tag}`).catch(err => {})"
                                 v-for="tag in resolveTags(item.frontmatter.tags)"
                                 :key="tag">
                                {{ tag | upperCase }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination
            v-if="totalPage > 1"
            :total="totalPage"
            :index.sync="pageIndex">
        </Pagination>
    </article>
</template>


<script>
    import dayjs from "dayjs";
    import Pagination from "../components/Pagination";

    export default {
        name: "Layout",

        components: {
            Pagination
        },

        data() {
            return {
                pageIndex: 1
            }
        },

        computed: {
            isArchives() {
                return this.$page.frontmatter.layout === "Layout" && this.$themeConfig.categories.some(i => this.$route.path.startsWith(i.link));
            },

            isAll() {
                return this.$route.path === "/all/";
            },

            totalPage() {
                const pageSize = this.$themeConfig.post.postPerPage;
                return this.isAll ? Math.ceil(this.allPages.length / pageSize) : this.$pagination.length;
            },

            allPages() {
                return this.$site.pages.filter(i => i.id).sort((a, b) => {
                    return dayjs(a.frontmatter.date).isAfter(dayjs(b.frontmatter.date)) ? -1 : 1;
                });
            },

            pages() {
                let list = [];
                if (this.isAll) {
                    list = JSON.parse(JSON.stringify(this.allPages));
                    const pageSize = this.$themeConfig.post.postPerPage;
                    let start = (this.pageIndex - 1) * pageSize;
                    list = list.splice(start, pageSize);
                } else {
                    list = this.$pagination.pages;
                }
                return list;
            }
        },

        watch: {
            "$route": {
                deep: true,
                handler(nv, ov) {
                    this.init();
                }
            }
        },

        mounted() {
            import("css-doodle");
            this.init();
        },

        methods: {
            init() {
                this.pageIndex = this.isAll ? +this.$route.query.page || 1 : this.$pagination.paginationIndex + 1;
                if (this.pageIndex > this.totalPage && this.isAll) {
                    this.pageIndex = this.totalPage;
                    this.$router.push(`?page=${this.totalPage}`);
                }
            },

            onCardClick(path) {
                this.$router.push(path);
            },

            onCardHover(index) {
                const ele = document.querySelectorAll(".card")[index];
                let animate = ele.getAttribute("data-animate") === "true";
                if (!animate) {
                    ele.classList.add("animate__animated", "animate__pulse");
                    ele.setAttribute("data-animate", "true");
                }
                ele.addEventListener('animationend', () => {
                    ele.classList.remove("animate__animated", "animate__pulse");
                });
            },

            onCardLeave(index) {
                const ele = document.querySelectorAll(".card")[index];
                ele.setAttribute("data-animate", "false");
            },

            resolveTags(tags) {
                return tags ? (Array.isArray(tags) ? tags : [tags]) : [];
            }
        }
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

    .article-wrapper {
        position: relative;
        u-flex: column, flex-start, center
    }

    .current-tag {
        position: absolute;
        top: -60px;
        font-weight: bold;
        cursor: pointer;
        padding: 8px 16px;
        text-decoration: none;
        white-space: nowrap;
        color: #f22f27;
        border-radius: 4px;
        background-color: rgba(242,47,39,0.1);

        @media (max-width: $MQMobile) {
            position: static;
            margin-bottom: 20px;
        }
    }

    .card-wrapper {
        width: 100%;

        .card {
            cursor default
            max-width: $contentWidth;
            margin: 0 auto 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;

            .card-thumb {
                cursor pointer
                size: 200px 200px;
                border-radius: 20px;
                background-color: $headerBgColor;
                overflow: hidden;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                z-index: 2;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .card-content {
                box-sizing: border-box;
                width: 100%;
                min-height: 250px;
                display: flex;
                align-items: center;
                padding: 20px;
                padding-left: 180px;
                padding-bottom: 10px;
                margin-left: -140px;
                background-color: #ffffff;
                z-index: 1;
                border-radius: 20px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

                .title {
                    cursor pointer
                    font-size 1.65rem
                    padding-bottom .3rem
                    font-weight: 600;
                    line-height: 1.25;
                    margin-bottom 0.5rem
                    ellipsis()
                }

                .abstract {
                    cursor pointer
                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }

                .tags-wrapper {
                    u-flex row, flex-end, center
                    flex-wrap wrap

                    .tag {
                        cursor pointer
                        margin-left 10px
                        margin-bottom 10px
                        font-size 0.8rem
                        font-weight bold
                        padding 4px 10px
                        border-radius 1em
                        color: $accentColor;
                        background rgba($accentColor, 0.1)

                        &:hover {
                            background rgba($accentColor, 0.2)
                        }
                    }
                }

                @media (max-width: $MQMobile) {
                    width: 100%;
                    padding-left: 20px;
                    padding-top: 160px;
                    margin-left: 0;
                    margin-top: -140px;
                    text-align: center;
                }
            }

            .card-date {
                font-size: 0.85rem;
                font-weight: bold;
            }

            @media (max-width: $MQMobile) {
                flex-direction: column;
            }
        }
    }
</style>
