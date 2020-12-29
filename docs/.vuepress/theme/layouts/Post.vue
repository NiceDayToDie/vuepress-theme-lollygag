<template>
    <section>
        <Toc></Toc>
        <Content></Content>
        <Comment></Comment>
    </section>
</template>

<script>
    import Toc from "@/components/Toc.vue";
    import { Comment } from "@vuepress/plugin-blog/lib/client/components";

    export default {
        name: "Post",

        components: {
            Toc,
            Comment,
        },

        data() {
            return {}
        },

        computed: {},

        mounted() {},

        methods: {}
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"
</style>
