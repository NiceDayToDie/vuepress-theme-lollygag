<template>
    <div class="pagination">
        <span @click="onPrevClick"
              :class="['pagination-item', index === 1 ? 'disabled' : '']">«</span>
        <span @click="onPageClick(i)"
              :class="['pagination-item', i === index ? 'selected' : '']"
              v-for="i in 5">{{ i }}</span>
        <span @click="onNextClick"
              :class="['pagination-item', index === total ? 'disabled' : '']">»</span>
    </div>
</template>

<script>
    export default {
        name: "Pagination",

        props: {
            total: {
                type: Number,
                required: true
            },

            index: {
                type: Number,
                required: true
            }
        },

        data() {
            return {}
        },

        computed: {},

        methods: {
            onPageClick(index) {
                this.$emit("update:index", index);
                this.$emit("on-page");
            },

            onPrevClick() {
                if (this.index === 1) return;
                this.$emit("on-prev");
            },

            onNextClick() {
                if (this.index === this.total) return;
                this.$emit("on-next");
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @require "~@/styles/mixins.styl"

    .pagination {
        width: 100%;
        font-family: "Open Sans";
        text-align: center;
        padding: 20px 0;

        .pagination-item {
            cursor: pointer;
            box-sizing: border-box;
            font-size: 0.8rem;
            width: 40px;
            height: 40px;
            background-color: transparent;
            color: $textColor;
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

            &.disabled {
                opacity 0.7
                cursor not-allowed
                color: $textColor;
                background-color: transparent;
                border-color: #ddd;
            }
        }
    }

    @media (max-width: $MQMobile)
        .pagination {
            .pagination-item {
                width: 35px;
                height: 35px;
                line-height: 30px;
            }
        }

</style>
