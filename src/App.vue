<template>
    <div id="app">
        <!-- header -->

        <!-- container -->
        <!--
        <swiper ref="swiper" @transtionend="getNum" v-if="list.length>0" :autoPlay="true">
            <swiper-item v-for="(item,index) in list" :key="index">
                <img :src="item.img" />
            </swiper-item>
        </swiper>-->
        <!-- <div style="width: 100%;height: 100px;background: red"></div>
        <div class="button button2" @click="prevSlideClick">上一张</div>
        <div class="button" @click="nextSlideClick">下一张</div>
        <div class="button" @click="slideToClick">跳到第三张</div>-->
        <!-- swiper -->
        <div>
            <swiper :options="swiperOption" class="swiper-box">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
                <swiper-slide>Slide 10</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div> -->
            </swiper>
        </div>
        <!-- ........数据......... -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
            </div>
        </div>

        <!-- tabbar -->
        <tabbars>
            <tabbar-item>
                <template v-slot:item-text>{{text.write}}</template>
            </tabbar-item>
            <tabbar-item>
                <template v-slot:item-icon>分類</template>
            </tabbar-item>
        </tabbars>
    </div>
</template>

<style lang="scss">
@import "./assets/css/base.css";
.swiper-box {
    width: 500px;
    height: 300px;
    margin: 20px auto;
}
img {
    width: 100%;
}

.button {
    margin-top: 30px;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    line-height: 2.33333333;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    border-width: 0;
    width: 50%;
    padding: 0 30px 0 30px;
    outline: 0;
    -webkit-appearance: none;
    background-color: #26a2ff;
}

.button:active {
    opacity: 0.5;
    color: #333;
}

.button2 {
    margin-top: 100px;
}
</style>
<script>
import Tabbars from "components/common/tabbar/tabbar";
import TabbarItem from "components/common/tabbar/tabbar-item";
// import { Swiper, SwiperItem } from "components/common/swiper/index";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
    components: {
        Tabbars,
        TabbarItem,
        swiper,
        swiperSlide
    },
    methods: {
        getNum(i) {
            this.$toast(`==当前滑到了第${i}个`, 400);
        },
        prevSlideClick() {
            this.$refs.swiper.prevSlide();
        },
        nextSlideClick() {
            this.$refs.swiper.nextSlide();
        },
        slideToClick() {
            this.$refs.swiper.slideTo(2);
        }
    },
    data() {
        return {
            swiperOption: {
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            text: {
                write: "good",
                sing: "verygood"
            },

            list: [
                {
                    img:
                        "https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360"
                },
                {
                    img:
                        "https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360"
                },
                {
                    img:
                        "https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360"
                }
            ]
        };
    },
    created() {}
};
</script>
