<template>
    <div class="pagination">
        <span @click="onPrevClick"
              :class="['pagination-item', index === 1 ? 'disabled' : '']">«</span>
        <span @click="onPageClick(base + i)"
              :class="['pagination-item', (base + i) === index ? 'selected' : '']"
              v-for="i in Math.min(total, 5)">{{ base + i }}</span>
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
            return {
                base: 0
            }
        },

        computed: {
            isAll() {
                return this.$route.path === "/all/";
            }
        },

        watch: {
            "index": function (nv, ov) {
                if (this.total > 5) {
                    let delta = this.index - 3;
                    if (delta < 0) {
                        this.base = 0
                    } else {
                        if (delta > this.total - 5) {
                            this.base = this.total - 5;
                        } else {
                            this.base = delta;
                        }
                    }
                }
            }
        },

        methods: {
            onPageClick(index) {
                this.$emit("update:index", index);
                if (this.isAll) this.$router.push(`?page=${index}`); else {
                    this.$router.push(this.$pagination.getSpecificPageLink(index - 1));
                }
            },

            onPrevClick() {
                if (this.index === 1) return;
                this.onPageClick(this.index - 1);
            },

            onNextClick() {
                if (this.index === this.total) return;
                this.onPageClick(this.index + 1);
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
