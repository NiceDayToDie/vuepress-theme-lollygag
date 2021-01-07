<template>
    <header id="header">
        <div class="header-wrapper">
            <div class="title">
                <NavLink link="/" class="home-link" :data-text="$site.title">{{ $site.title }}</NavLink>
            </div>
            <div class="header-right-wrap">
                <ul v-if="$themeConfig.nav" class="nav">
                    <li v-for="item in $themeConfig.nav"
                        :key="item.text"
                        class="nav-item">
                        <NavLink :link="item.link">{{ item.text | upperCase }}</NavLink>
                    </li>
                </ul>
                <SearchBox/>
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
        }
    }
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

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

            .title
                font-size 30px
                margin 0
                letter-spacing 2px
                display block
                text-transform uppercase

                random(a, b)
                    return math(math(0, "random")*(b - a + 1) + a, "floor")

                @keyframes ani1 {
                    $indent=20
                    for $index in 1..$indent {
                        {$index*100/$indent + "%"} {
                            clip-path: inset(random(0, 100)*1px 0 random(0, 100)*1px 0)
                        }
                    }
                }

                @keyframes ani2 {
                    $indent=20
                    for $index in 1..$indent {
                        {$index*100/$indent + "%"} {
                            clip-path: inset(random(0, 100)*1px 0 random(0, 100)*1px 0)
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


    @media (max-width: $MQMobile)
        #header
            display none

        .header-wrapper
            flex-direction column

        .header-right-wrap
            display none
</style>
