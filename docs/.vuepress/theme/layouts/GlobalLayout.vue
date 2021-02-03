<template>
    <div id="global-layout">
        <Header/>
        <MobileHeader
            :is-open="isMobileHeaderOpen"
            @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
        />
        <div class="content-wrapper" @click="isMobileHeaderOpen = false">
            <DefaultGlobalLayout/>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import GlobalLayout from "@app/components/GlobalLayout.vue"
    import Header from "@/components/Header.vue"
    import MobileHeader from "@/components/MobileHeader.vue"
    import Footer from "@/components/Footer.vue"
    import { replayAnimation } from "../components/util";

    export default {
        components: {
            DefaultGlobalLayout: GlobalLayout,
            Header,
            MobileHeader,
            Footer,
        },

        data() {
            return {
                isMobileHeaderOpen: false,
            }
        },

        watch: {
            "$route": {
                deep: true,
                handler(nv, ov) {
                    this.init();
                }
            }
        },

        mounted() {
            this.$router.afterEach(() => {
                this.isMobileHeaderOpen = false
            })
        },

        methods: {
            init() {
                const fadeWrapper = document.getElementById("fade-wrapper");
                replayAnimation(fadeWrapper);
            }
        }
    }
</script>

<style lang="stylus">
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

    #global-layout
        position relative
        word-wrap break-word

    .content-wrapper
        padding 160px 15px 78px 15px
        min-height calc(100vh - 80px - 60px - 160px)
        max-width $contentWidth
        margin 0 auto

        #fade-wrapper {
            animation: focus-in 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        }

        @media (max-width: $MQMobile)
            &
                padding 100px 15px 20px 15px
                min-height calc(100vh - 20px - 60px - 140px)
</style>
