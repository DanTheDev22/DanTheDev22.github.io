import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener("DOMContentLoaded", async () => {

    Swiper.use([Navigation, Pagination]);

    const previewSwiper = new Swiper(".project-preview", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination", clickable: true },
        allowTouchMove: false
    });

    const infoSwiper = new Swiper(".project-info", {
        cssMode: true,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        on: {
            slideChange: function () {
                previewSwiper.slideTo(this.activeIndex);
                innerSwipers.forEach(sw => sw.autoplay.stop());
                pauseAllVideos();

                const currentInnerSwiper = innerSwipers[this.activeIndex];
                if (currentInnerSwiper) {
                    currentInnerSwiper.autoplay.start();
                    playActiveVideo(currentInnerSwiper);
                }
            }
        },
        mousewheel: true,
        keyboard: true
    });

    const innerSwipers = [];
    document.querySelectorAll(".inner-preview").forEach((el, index) => {
        innerSwipers.push(new Swiper(el, {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            pagination: {
                el: el.querySelector(".swiper-pagination"),
                clickable: true
            }
        }));
    });
});