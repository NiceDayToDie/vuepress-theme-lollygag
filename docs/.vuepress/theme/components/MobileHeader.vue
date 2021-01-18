<template>
    <div id="mobile-header">
        <div class="mobile-header-bar">
            <div id="blog-title">
                <NavLink link="/all/" class="home-link" :data-text="$site.title">{{ $site.title }}</NavLink>
                <component class="menu-btn" :is="isOpen ? 'XIcon' : 'MenuIcon'" @click="$emit('toggle-sidebar')"/>
            </div>
            <div class="mobile-menu-wrapper" :class="{ open: isOpen }">
                <hr class="menu-divider"/>
                <ul v-if="navigators.length" class="mobile-nav">
                    <li
                        v-for="item in navigators"
                        :key="item.text"
                        class="mobile-nav-item"
                    >
                        <NavLink :link="item.link">{{ item.text }}</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { MenuIcon, XIcon } from 'vue-feather-icons';

    export default {
        components: {
            MenuIcon,
            XIcon
        },

        props: {
            isOpen: {
                type: Boolean,
                required: true,
            },
        },

        computed: {
            navigators() {
                let categories = this.$themeConfig.categories || [];
                let nav = this.$themeConfig.nav.filter(i => {
                    return !categories.map(c => c.link).includes(i.link)
                });
                return [...categories, ...nav];
            }
        },
    }
</script>

<style lang="stylus">
    .mobile-header-bar
        z-index 12
        position fixed
        top 0
        width 100vw
        box-sizing border-box
        background-color $headerBgColor
        margin auto
        box-shadow 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05)
        transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)

        .menu-btn {
            color #FFFFFF
        }

    #mobile-header
        #blog-title
            display flex
            align-items center
            justify-content space-between
            padding 1.2rem

    .mobile-nav-item
        padding 10px 0
        list-style none

        a
            width 100%
            display inline-block
            text-decoration none

    .menu-divider
        margin 0
        border-top: 1px solid rgba(255, 255, 255, 0.1);

    .mobile-menu-wrapper
        max-height 0
        overflow hidden
        transition 0.3s ease
        background-color $headerBgColor

    .mobile-menu-wrapper.open
        max-height 450px
        transition 0.3s ease

    @media (min-width: $MQMobile)
        #mobile-header
            display none
</style>
