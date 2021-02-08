<template>
    <div class="grade-wrapper"
         :style="`--size: ${size}px; --width: ${width}; --total: ${total}; --dark: ${dark}; --color: ${color};`">
        <svg class="circle-wrapper">
            <circle class="bg" :cx="size / 2" :cy="size / 2" :r="radius"/>
            <circle class="meter" :cx="size / 2" :cy="size / 2" :r="radius"/>
        </svg>
        <div class="grade-text">{{ grade }}</div>
    </div>
</template>

<script>
    export default {
        name: "Grade",

        props: {
            size: {
                type: Number,
                default: 100
            },
            grade: {
                required: true,
                type: Number,
                default: 1
            }
        },

        data() {
            return {}
        },

        computed: {
            width() {
                return this.size / 10;
            },

            radius() {
                return (this.size - this.width) / 2;
            },

            total() {
                return Math.PI * 2 * this.radius;
            },

            dark() {
                let percent = (10 - this.grade) / 10;
                return this.total * percent;
            },

            color() {
                if (this.grade >= 8) {
                    return "#42b983"
                } else if (this.grade >= 6) {
                    return "#F3722C";
                } else
                    return "#F94144";
            }
        },

        mounted() {
        },

        methods: {}
    }
</script>

<style scoped>
    .grade-wrapper {
        --size: 100px;
        --width: 10;
        --total: 283;
        --dark: 28.3;
        --color: #ffffff;
        position: relative;
    }

    .grade-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        color: var(--color);
        font-size: calc(var(--size) * 0.45);
        font-family: "Comic Neue", cursive;
        box-sizing: border-box;
        font-weight: bold;
        text-shadow: 0 0 calc(var(--size) * 0.1) var(--color);
    }

    .circle-wrapper {
        width: var(--size);
        height: var(--size);
    }

    .bg {
        fill: rgba(0, 0, 0, 0.5);
        stroke-width: calc(var(--width) * 1px);
        stroke: #1A2C34;
    }

    .meter {
        fill: none;
        stroke-width: calc(var(--width) * 1px);
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        stroke: var(--color);
        stroke-dasharray: var(--total);
        stroke-dashoffset: var(--total);
        animation: progress 1s ease-out 0.7s both;
    }

    @keyframes progress {
        from {
            stroke-dashoffset: var(--total);
        }
        to {
            stroke-dashoffset: var(--dark);
        }
    }
</style>
