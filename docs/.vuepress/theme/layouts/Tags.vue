<template>
    <div>
        {{ pages }}
    </div>
</template>


<script>
    export default {
        name: "Tags",

        data() {
            return {}
        },

        computed: {
            pages() {
                return this.$frontmatterKey.list;
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
