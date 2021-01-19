<template>
    <div class="pagination">
        <a href="#">«</a>
        <a href="#" class="selected">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">»</a>
    </div>
</template>

<script>
    export default {
        name: "Pagination",

        props: {
            // isOpen: {
            //     type: Boolean,
            //     required: true,
            // },
        },

        data() {
            return {}
        },

        computed: {},

        methods: {},
    }
</script>

<style lang="stylus" scoped>
    @require "~@/styles/mixins.styl"

    .pagination {
        font-family: "Open Sans";
        text-align: center;
        padding: 20px 0;

        a {
            box-sizing: border-box;
            font-size: 0.8rem;
            width: 40px;
            height: 40px;
            background-color: transparent;
            color: #222;
            border: 2px solid #ddd;
            display: inline-block;
            vertical-align: middle;
            line-height: 35px;
            text-decoration: none;
            border-radius: 50%;
            font-weight: bold;
            margin: 4px;
            transition: all 0.2s linear;

            &:hover {
                color: #fff;
                background-color: rgba($accentColor, 0.7);
                border-color: rgba($accentColor, 0);
            }

            &.selected {
                color: #fff;
                background-color: $accentColor;
                border-color: $accentColor;
            }
        }
    }

    @media (max-width: $MQMobile)
        .pagination {
            a {
                width: 35px;
                height: 35px;
                line-height: 30px;
            }
        }

</style>
