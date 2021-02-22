<template>
    <section>
        <div class="banner">
            <svg id="banner-bg"></svg>
        </div>
        <Toc></Toc>
        <div id="fade-wrapper">
            <Content></Content>
            <Vssue :title="this.$page.title"/>
        </div>
        <component v-if="VueAPlayer && musicList.length"
                   :is="VueAPlayer"
                   class="music-player"
                   autoplay
                   listFolded
                   :volume="1"
                   repeat="list"
                   listMaxHeight="160px"
                   theme="#f99793"
                   :music="musicList[0]"
                   :list="musicList"/>
    </section>
</template>

<script>
    import Toc from "@/components/Toc.vue";
    import { Comment } from "@vuepress/plugin-blog/lib/client/components";

    import trianglify from "@victorioberra/trianglify-browser";

    export default {
        name: "Post",

        components: {
            Toc,
            Comment,
        },

        data() {
            return {
                VueAPlayer: null
            }
        },

        computed: {
            musicList() {
                return this.$frontmatter.bgm || [];
            }
        },

        mounted() {
            trianglify({
                width: window.innerWidth,
                height: 300
            }).toSVG(document.getElementById("banner-bg"));

            import("vue-aplayer").then(module => {
                this.VueAPlayer = module.default;
                this.VueAPlayer.disableVersionBadge = true;
            });
        },

        methods: {}
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

    .banner {
        width 100%
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(rgba(111, 111, 111, 1), rgba(255, 255, 255, 0));

        svg {
            filter: blur(1px);
            mix-blend-mode overlay;
        }
    }

    .music-player
        width 360px
        position fixed
        bottom $footerHeight
        left 0

        @media (max-width: $MQMobile)
            &
                position static
                width 100%
                margin 0
</style>
