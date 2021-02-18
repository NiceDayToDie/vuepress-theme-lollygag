<template>
    <div class="mark-wrapper">
        <div class="bg-wrapper">
            <div class="bg" :style="bg ? `background-color: #000000; background-image: url(${bg}); background-repeat: no-repeat; background-size: auto 100%; background-position: right top;` : ''"></div>
        </div>
        <div class="cover">
            <img :src="cover" alt="">
        </div>
        <div class="info">
            <div class="title-wrapper">
                <div class="title">{{title}}</div>
                <div class="subtitle">{{subtitle}}</div>
            </div>
            <div class="link-wrapper">
                <a v-for="key in linkKeys"
                   :key="key"
                   :href="link[key]"
                   :class="`link-icon ${key}`"
                   target="_blank"
                   rel="noopener noreferrer">
                </a>
            </div>
            <div class="review-wrapper">
                <div class="review-content">{{review}}</div>
            </div>
        </div>
        <div class="grade">
            <Grade :grade="grade" :size="100"></Grade>
        </div>
    </div>
</template>

<script>
    import Grade from "../components/Grade";

    export default {
        name: "Mark",

        components: {
            Grade
        },

        props: {
            title: {
                required: true,
                type: String
            },
            subtitle: {
                required: true,
                type: String
            },
            cover: {
                required: true,
                type: String
            },
            bg: {
                type: String
            },
            grade: {
                required: true,
                type: Number
            },
            link: {
                type: Object
            },
            review: {
                type: String
            }
        },

        data() {
            return {}
        },

        computed: {
            linkKeys() {
                return Object.keys(this.link);
            }
        },

        watch: {},

        mounted() {
        },

        methods: {}
    }
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

    .mark-wrapper {
        color: #FFFFFF;
        border-radius: 6px;
        margin: 30px 0;
        padding: 20px 24px;
        u-flex: row, flex-start, center;
        position: relative;
        height: 300px;

        .bg-wrapper {
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            size: 100%;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(80, 80, 80, 1));
            border-radius: 6px;

            .bg {
                size: 100%;
                border-radius: 6px;
                filter: blur(3px);
                mix-blend-mode overlay;
            }
        }

        .cover {
            size: 200px, 300px;

            img {
                size: 100%;
                border-radius: 6px;
                object-fit: cover;
            }
        }

        .info {
            flex: 1;
            size: 0, 100%;
            margin-left: 16px;
            u-flex: column, flex-start, flex-start;

            .title-wrapper {
                width 77%;

                .title {
                    font-size: 26px;
                    font-weight: bold;
                    margin-bottom: 8px;
                    ellipsis();
                }

                .subtitle {
                    color: #c4c4c4;
                    font-size: 18px;
                    margin-bottom: 12px;
                    ellipsis()
                }
            }

            .link-wrapper {
                u-flex: row, flex-start, center;

                .link-icon {
                    size 26px 26px;
                    margin-right 14px;
                    display inline-block;
                }

                .mc {
                    bg-img("~@/assets/icons/mc.svg");
                }

                .ign {
                    bg-img("~@/assets/icons/ign.svg");
                }

                .douban {
                    bg-img("~@/assets/icons/douban.svg");
                }

                .imdb {
                    bg-img("~@/assets/icons/imdb.svg");
                }

                .ps {
                    bg-img("~@/assets/icons/ps.svg");
                }

                .steam {
                    bg-img("~@/assets/icons/steam.svg");
                }

                .netease {
                    bg-img("~@/assets/icons/netease.svg");
                }

                .spotify {
                    bg-img("~@/assets/icons/spotify.svg");
                }
            }

            .review-wrapper {
                flex: 1;
                size: 100%, 0;
                margin-top: 16px;
                font-size: 18px;
                line-height: 1.5;
                overflow-y: scroll;
                u-flex: row, flex-start, center;

                &::-webkit-scrollbar {
                    display: none;
                }

                .review-content {
                    width: 100%;
                    padding: 16px 0;
                    max-height: 100%;
                    display: table-cell;
                    vertical-align: middle;
                    text-align center;
                }
            }
        }

        .grade {
            position: absolute;
            top: 20px;
            right: 24px;
        }
    }
</style>
