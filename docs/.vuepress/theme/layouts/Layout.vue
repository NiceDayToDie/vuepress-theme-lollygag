<template>
    <div>
        <div class="logo"></div>
        <Content></Content>
        <button @click="onClick">{{ btnText }}</button>
    </div>
</template>

<script>
    export default {
        name: "Layout",

        data() {
            return {
                btnText: "111"
            }
        },

        mounted() {
            console.log("mounted");
        },

        methods: {
            onClick() {
                this.btnText = "222";
            }
        }
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

    .logo
        size(128px, 128px)
        bg-img("~@/assets/xx.png")
</style>
