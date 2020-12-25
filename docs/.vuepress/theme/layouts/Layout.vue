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

<style scoped lang="scss">
    @import "~@/styles/utils/index.scss";

    .logo {
        @include size(128px, 128px);
        @include bg-img("~@/assets/xx.png");
    }
</style>
