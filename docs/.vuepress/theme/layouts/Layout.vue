<template>
    <div>
        {{ pages }}
    </div>
</template>


<script>
    export default {
        name: "Layout",

        data() {
            return {}
        },

        computed: {
            pages() {
                return this.$route.path === "/" ? this.$site.pages.filter(i => i.hasOwnProperty("title")) : this.$pagination.pages;
            }
        },

        watch: {},

        mounted() {},

        methods: {}
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

</style>
