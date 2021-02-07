<template>
    <div class="mark-wrapper">
        <div class="bg-wrapper">
            <div class="bg" :style="bg ? `background-color: #000000; background-image: url(${bg}); background-repeat: no-repeat; background-size: auto 100%; background-position: right top;` : ''"></div>
        </div>
        <div class="cover">
            <img :src="cover" alt="">
        </div>
        <div class="info">

        </div>
        <div class="grade">

        </div>
        <!--<div>{{title}}</div>-->
        <!--<div>{{subtitle}}</div>-->
        <!--<div>{{grade}}</div>-->
        <!--<div>{{link}}</div>-->
    </div>
</template>

<script>
    export default {
        name: "Mark",

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
            }
        },

        data() {
            return {}
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
    }
</style>
