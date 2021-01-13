<template>
    <section>
        <Toc></Toc>
        <VueAPlayer class="music-player"
                    autoplay
                    listFolded
                    :volume="1"
                    repeat="list"
                    listMaxHeight="160px"
                    theme="#f99793"
                    :music="musicList[0]"
                    :list="musicList"/>
        <Content></Content>
        <Comment></Comment>
    </section>
</template>

<script>
    import Toc from "@/components/Toc.vue";
    import {Comment} from "@vuepress/plugin-blog/lib/client/components";
    import VueAPlayer from "vue-aplayer";
    VueAPlayer.disableVersionBadge = true;

    export default {
        name: "Post",

        components: {
            Toc,
            VueAPlayer,
            Comment,
        },

        data() {
            return {}
        },

        computed: {
            musicList() {
                return this.$frontmatter.bgm;
            }
        },

        mounted() {},

        methods: {}
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

    .music-player
        width 360px
        position fixed
        bottom 0
        left 0

        @media (max-width: $MQMobile)
            &
                position static
                width 100%
                margin 0
</style>
