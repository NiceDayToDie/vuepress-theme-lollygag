<template>
    <div>
        <Content></Content>
        <Comment></Comment>
    </div>
</template>

<script>
    import { Comment } from "@vuepress/plugin-blog/lib/client/components";

    export default {
        name: "Post",

        components: {
            Comment,
        },

        data() {
            return {}
        },

        mounted() {},

        methods: {}
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"
</style>
