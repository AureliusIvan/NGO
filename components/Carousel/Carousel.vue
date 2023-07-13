<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>
  

<template>
    <div id="home">
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :pagination="{
    clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
            <!-- <swiper-slide v-for="item in 3" class="slide">
                <img class="Image" src="https://picsum.photos/200/301" />
            </swiper-slide> -->
            <swiper-slide class="slide">
                <CarouselContentOne />
            </swiper-slide>
            <swiper-slide class="slide">
                <CarouselContentTwo />
            </swiper-slide>
            <swiper-slide class="slide">
                <CarouselContentThree />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.mySwiper {
    width: 100%;
    aspect-ratio: 16/8;
    z-index: -1;
    transform: translateY(-var(--NavbarSize));
}

.slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background: white;

}
</style>
