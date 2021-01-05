<template>
    <article>
        <div>
            <ul v-if="$themeConfig.categories" class="nav">
                <li v-for="item in $themeConfig.categories"
                    :key="item.text"
                    class="nav-item">
                    <NavLink :link="item.link">{{ item.text | upperCase }}</NavLink>
                </li>
            </ul>
        </div>
        <div style="margin-top: 20px">
            {{ pages }}
        </div>
    </article>
</template>


<script>
    export default {
        name: "Archives",

        data() {
            return {}
        },

        computed: {
            pages() {
                return this.$site.pages.filter(i => i.hasOwnProperty("title") & i.path !== "/");
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
