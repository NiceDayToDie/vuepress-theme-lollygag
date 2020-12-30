<template>
    <section>
        <Toc></Toc>
        <Content></Content>
        <Comment></Comment>
        <VueAPlayer class="music-player"
                    autoplay
                    listFolded
                    volume="1"
                    repeat="list"
                    listMaxHeight="160px"
                    theme="#f99793"
                    :music="musicList[0]"
                    :list="musicList"/>
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
            return {
                musicList: [
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                    {
                        title: "ROCKSTAR",
                        artist: "DaBaby / Roddy Ricch",
                        src: "http://music.163.com/song/media/outer/url?id=1441183869.mp3",
                        pic: "http://p1.music.126.net/FLoKNesjpaotmN-qGj9m_A==/109951164912637120.jpg?param=130y130"
                    },
                ]
            }
        },

        computed: {},

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
</style>
