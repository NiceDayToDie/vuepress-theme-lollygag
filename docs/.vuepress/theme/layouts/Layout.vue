<template>
    <article>
        <div>{{ $page.frontmatter.title }}</div>
        <div class="card-wrapper">
            <div v-for="i in 3" class="card animate__faster" @mouseover="onCardHover(i)" @mouseleave="onCardLeave(i)">
                <div class="card-thumb">
                    <img style="object-fit: cover" src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg' alt=''>
                </div>
                <div class="card-content">
                    <div>
                        <h2>TitleTitleTitleTitleTitleTitle</h2>
                        <span class="card-date">31 March 2019</span>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel repudiandae eos provident fugit aliquid atque architecto fugiat a nesciunt aut, ipsa sed tenetur sint eligendi veniam iusto autem numquam? Distinctio!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>{{pages}}</div>
    </article>
</template>


<script>
    export default {
        name: "Layout",

        data() {
            return {}
        },

        computed: {
            pages() {
                return this.$route.path === "/all/" ?this.$site.pages.filter(i => i.id) : this.$pagination.pages;
            }
        },

        watch: {},

        mounted() {},

        methods: {
            onCardHover(index) {
                const ele = document.querySelectorAll(".card")[index - 1];
                let animate = ele.getAttribute("data-animate") === "true";
                if (!animate) {
                    ele.classList.add("animate__animated", "animate__pulse");
                    ele.setAttribute("data-animate", "true");
                }
                ele.addEventListener('animationend', () => {
                    ele.classList.remove("animate__animated", "animate__pulse");
                });
            },

            onCardLeave(index) {
                const ele = document.querySelectorAll(".card")[index - 1];
                ele.setAttribute("data-animate", "false");
            }
        }
    };
</script>

<style scoped lang="stylus">
    @require "~@/styles/mixins.styl"

    @keyframes focus-in {
        0% {
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            filter: blur(0px);
            opacity: 1;
        }
    }

    .card-wrapper {
        animation: focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

        .card{
            cursor: pointer;
            max-width: $contentWidth;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;

            .card-thumb{
                size: 200px 200px;
                border-radius: 20px;
                background-color: #ffffff;
                overflow: hidden;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                z-index: 2;

                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .card-content{
                box-sizing: border-box;
                width: 100%;
                min-height: 250px;
                display: flex;
                align-items: center;
                padding: 20px;
                padding-left: 180px;
                margin-left: -140px;
                background-color: #ffffff;
                z-index: 1;
                border-radius: 20px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

                &:hover {
                    opacity 0.7
                }

                @media (max-width: $MQMobile){
                    width: 100%;
                    padding-left: 20px;
                    padding-top: 160px;
                    margin-left: 0;
                    margin-top: -140px;
                    text-align: center;
                }
            }

            .card-date{
                font-size: 0.85rem;
                font-weight: bold;
            }

            @media (max-width: $MQMobile){
                flex-direction: column;
            }
        }
    }
</style>
