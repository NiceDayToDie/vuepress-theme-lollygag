<template>
    <div id="fade-wrapper" class="tags-list">
        <router-link class="tag-item" v-for="tag in tags" :key="tag.name" :to="tag.path">
            {{ tag.name | upperCase }} ({{ tag.pages.length }})
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Tags",

        data() {
            return {}
        },

        computed: {
            tags() {
                return this.$frontmatterKey.list.sort((a, b) => {
                    return a.pages.length > b.pages.length ? -1 : 1;
                });
            }
        },

        watch: {},

        mounted() {},

        methods: {}
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

    @keyframes shake-bottom {
        0%, 100% {
            transform: rotate(0deg);
            transform-origin: 50% 100%;
        }
        10% {
            transform: rotate(2deg);
        }
        20%, 40%, 60% {
            transform: rotate(-4deg);
        }
        30%, 50%, 70% {
            transform: rotate(4deg);
        }
        80% {
            transform: rotate(-2deg);
        }
        90% {
            transform: rotate(2deg);
        }
    }

    .tags-list {
        display: flex;
        flex-flow: row wrap;

        .tag-item {
            font-weight: bold;
            flex: 1 auto;
            margin: 0.5rem;
            text-align: center;
            display: block;
            text-decoration: none;
            padding: 0.8rem 1rem;
            border-radius: 3px;
            color: $accentColor;
            background: rgba($accentColor, 0.1);

            &:hover {
                background rgba($accentColor, 0.2)
                animation: shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
            }
        }
    }
</style>
