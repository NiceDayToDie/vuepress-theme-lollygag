<template>
    <div id="fade-wrapper" class="wrapper">
        <div class="text_group">
            <div class="text_404">404</div>
            <div class="text_lost">The page you are looking for <br/>has been lost in space.</div>
        </div>
        <div class="window_group">
            <div class="window_404">
                <div class="stars">
                    <div v-for="i in 100" :key="i" class="star"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "404",

        data() {
            return {}
        },

        watch: {},

        mounted() {
        },

        methods: {}
    };
</script>

<style scoped lang="scss">
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
        background: #FFFFFF;

        .text_group {
            flex: 1;
            align-items: flex-end;

            .text_404 {
                font-family: "Comic Neue", cursive;
                font-size: 10em;
                box-sizing: border-box;
                font-weight: bold;
                color: #363636;
            }

            .text_lost {
                font-family: "Comic Neue", cursive;
                font-size: 2em;
                line-height: 50px;
                box-sizing: border-box;
                color: #565656;
            }
        }

        .window_group {
            margin: 0 5%;

            .window_404 {
                width: 200px;
                height: 350px;
                border-radius: 100px;
                box-shadow: -3px -3px 0px 5px rgba(212, 212, 212, 1), 5px 5px 0px 2px rgba(255, 255, 255, 1);
                background: linear-gradient(310deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 107, 1) 0%, rgba(0, 0, 0, 1) 80%);
                position: relative;
                overflow: hidden;
                box-sizing: border-box;

                .stars {
                    width: 400px;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    animation: flyby 30s linear infinite;

                    .star {
                        border-radius: 50%;
                        background: #ffffff;
                        position: absolute;
                        @for $i from 1 through 100 {
                            $size: random(3) + px;
                            &:nth-of-type(#{$i}) {
                                width: $size;
                                height: $size;
                                left: random(400) + px;
                                top: random(350) + px;
                                animation: twinkle#{$i} random(8) + 5s linear infinite;
                                animation-delay: random(15) + 3s;

                                &:before {
                                    content: "";
                                    width: $size;
                                    height: $size;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    background: #fff;
                                    filter: blur(1px);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @for $k from 1 through 100 {
        @keyframes twinkle#{$k} {
            0% {
                transform: scale(1, 1);
            }
            10% {
                transform: scale(0.3, 0.3);
            }
            20% {
                transform: scale(1, 1);
            }
            30% {
                transform: scale(0.5, 0.5);
            }
            40% {
                transform: scale(1, 1);
            }
            100% {
                transform: scale(1, 1);
            }
        }
    }

    @keyframes flyby {
        from {
            left: 0;
        }
        to {
            left: -100%;
        }
    }

    @media (max-width: 769px) {
        .wrapper {
            flex-direction: column;

            .text_group {
                .text_404 {
                    font-size: 7em;
                }

                .text_lost {
                    font-size: 1.5em;
                    line-height: 30px;
                }
            }

            .window_group {
                margin: 7%;

                .window_404 {
                    width: 120px;
                    height: 210px;
                }
            }
        }
    }
</style>
