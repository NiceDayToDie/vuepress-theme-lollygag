<template>
    <span class="spoiler"><slot></slot></span>
</template>

<script>
    export default {
        name: "Spoiler"
    }
</script>

<style scoped lang="stylus">
    .spoiler
        color #000;
        cursor pointer;
        background #000;

        &:hover
            color #FFFFFF;
</style>
