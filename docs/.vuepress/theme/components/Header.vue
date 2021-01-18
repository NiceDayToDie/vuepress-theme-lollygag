<template>
    <header>
        <div id="header">
            <div class="header-wrapper">
                <div id="blog-title">
                    <NavLink link="/all/" class="home-link" :data-text="$site.title">{{ $site.title }}</NavLink>
                </div>
                <div class="header-right-wrap">
                    <ul v-if="$themeConfig.nav" class="nav">
                        <li v-for="item in $themeConfig.nav"
                            :key="item.text"
                            class="nav-item">
                            <NavLink :link="item.link"
                                     :class="isArchives && item.link === '/all/' ? 'nav-link-active' : ''">
                                {{ item.text | upperCase }}
                            </NavLink>
                        </li>
                    </ul>
                    <SearchBox/>
                </div>
            </div>
        </div>
        <div class="nav-sections" v-show="isArchives">
            <div class="menu">
                <div v-for="(item, index) in $themeConfig.categories"
                     :key="item.text"
                     @click="onNavClick(item, index)"
                     :class="['menu-item-link', index === activeIndex ? 'active' : '']">
                    {{ item.text | upperCase }}
                </div>
                <div class="active-line"></div>
            </div>
        </div>
    </header>
</template>

<script>
    import SearchBox from "@SearchBox";

    export default {
        name: "Header",

        components: {
            SearchBox
        },

        data() {
            return {
                menu: null,
                links: null,
                activeLine: null,
                activeIndex: 0
            }
        },

        computed: {
            isArchives() {
                return this.$themeConfig.categories.some(i => this.$route.path.startsWith(i.link));
            }
        },

        watch: {
            "$route.path": function (nv, ov) {
                this.updateActiveLink(nv);
            }
        },

        mounted() {
            const nav = document.querySelector(".nav-sections");
            this.menu = nav.querySelector(".menu");
            this.links = nav.querySelectorAll(".menu-item-link");
            this.activeLine = nav.querySelector(".active-line");
            this.updateActiveLink(this.$route.path);
        },

        methods: {
            updateActiveLink(path) {
                let index = this.$themeConfig.categories.findIndex(i => path.indexOf(i.link) >= 0);
                if (index >= 0) this.handleActiveLinkUpdate(index);
            },

            checkMenuOverflow() {
                const activeLink = this.links[this.activeIndex].getBoundingClientRect();
                const mid = this.menu.offsetLeft + this.menu.clientWidth / 2;
                const blockMid = activeLink.left + activeLink.width / 2;
                const delta = blockMid - mid;
                this.menu.scrollTo({left: this.menu.scrollLeft + delta, behavior: "smooth"});
            },

            moveActiveLine() {
                const link = this.links[this.activeIndex];
                const linkX = link.getBoundingClientRect().x;
                const menuX = this.menu.getBoundingClientRect().x;

                this.activeLine.style.transform = `translateX(${(this.menu.scrollLeft - menuX) + linkX}px)`;
                this.activeLine.style.width = `${link.offsetWidth}px`;
            },

            handleActiveLinkUpdate(index) {
                this.activeIndex = index;
                this.checkMenuOverflow();
                setTimeout(() => {
                    this.moveActiveLine();
                }, 100);
            },

            onNavClick(item, index) {
                this.handleActiveLinkUpdate(index);
                this.$router.push(item.link);
            }
        }
    }
</script>

<style lang="stylus">
    @require "~@/styles/mixins.styl"

    #blog-title
        font-size 30px
        margin 0
        letter-spacing 2px
        display block
        text-transform uppercase

        random(a, b)
            return math(math(0, "random") * (b - a + 1) + a, "floor")

        @keyframes ani1 {
            $indent = 20
            for $index in 1..$indent {
                {$index*100/$indent + "%"} {
                    clip-path: inset(random(0, 100) * 1px 0 random(0, 100) * 1px 0)
                }
            }
        }

        @keyframes ani2 {
            $indent = 20
            for $index in 1..$indent {
                {$index*100/$indent + "%"} {
                    clip-path: inset(random(0, 100) * 1px 0 random(0, 100) * 1px 0)
                }
            }
        }

        a
            color #FFFFFF
            font-weight bold
            text-decoration none

        .home-link
            position relative

            &:before {
                content: attr(data-text);
                position: absolute;
                text-shadow: 2px 0 red;
                left: -2px;
                clip-path: inset(0 0 0 0);
                animation: ani2 2s infinite linear alternate-reverse;
            }

            &:after {
                content: attr(data-text);
                position: absolute;
                text-shadow: -2px 0 blue;
                left: 2px;
                clip-path: inset(0 0 0 0);
                animation: ani1 2s infinite linear alternate-reverse;
            }

    #header
        top 0
        z-index 12
        width 100vw
        position fixed
        height $headerHeight
        box-sizing border-box
        background-color $headerBgColor
        padding 20px 0
        margin auto
        box-shadow 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05)
        transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)

        ol, ul
            list-style none
            margin 0
            padding 0

        &:hover
            box-shadow 0 5px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.1)

        .header-wrapper
            display flex
            line-height 40px
            size 1000px, 40px
            margin auto

            .header-right-wrap
                flex 1
                display flex
                justify-content flex-end
                align-items center

                .nav
                    flex 0 0 auto
                    display flex
                    margin 0

                    .nav-item
                        margin-left 20px

                        a
                            font-size 20px
                            text-decoration none
                            transition color 0.3s

                .search-box
                    margin-left 20px

                    input
                        border-radius 5px
                        transition all 0.5s
                        border 1px solid #cecece

                        &:hover
                            border 1px solid $accentColor
                            box-shadow 0 0 5px $accentColor

                    .suggestions
                        border 1px solid $darkBorderColor
                        top 40px
                        right 0

                        a
                            color $darkTextColor
                            text-decoration none

                            &.focused
                                color $accentColor

    .nav-sections {
        $ease = cubic-bezier(0.23, 1, 0.32, 1);
        $duration = 350ms;

        z-index 5
        position: fixed;
        top: $headerHeight;
        left 0
        width 100%
        background #FFFFFF
        u-flex row, center, center
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);

        .menu {
            font-weight bold
            max-width: $contentWidth;
            u-flex row, flex-start, center
            position: relative;
            overflow: scroll;
            overscroll-behavior: none;
            scrollbar-width: none;
            -ms-overflow-style: none;
            transform: translateZ(0);
            transition: transform $ease $duration;

            &::-webkit-scrollbar {
                display: none;
            }

            .menu-item-link {
                cursor pointer
                display: block;
                padding: 12px 16px;
                text-decoration: none;
                white-space: nowrap;
                color: $textColor;
                transition: color $ease $duration;

                &.active {
                    color: $accentColor;
                }
            }

            .active-line {
                cursor pointer
                position: absolute;
                bottom: 10%;
                left: 0;
                height: 80%;
                border-radius: 4px;
                background-color: $accentColor;
                opacity: 10%;
                transition: width $ease $duration, transform $ease $duration;
            }
        }
    }

    @media (max-width: $MQMobile)
        header
            display none

        .header-wrapper
            flex-direction column

        .header-right-wrap
            display none
</style>
