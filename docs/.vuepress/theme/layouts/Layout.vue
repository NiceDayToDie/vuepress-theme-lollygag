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
                return this.$pagination ?
                    this.$pagination.pages :
                    this.$site.pages.filter(i => i.hasOwnProperty("title") & i.path !== "/");
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
