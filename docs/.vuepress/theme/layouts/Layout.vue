<template>
    <div>
        <div class="logo"></div>
        <Content></Content>
        <el-button type="primary" @click="onClick">{{ btnText }}</el-button>
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
    @import "~@/styles/index.scss";

    .logo {
        @include size(128px, 128px);
        @include bg-img("~@/assets/xx.png");
    }
</style>
