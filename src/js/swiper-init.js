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


function pauseAllVideos() {
    document.querySelectorAll(".inner-preview video").forEach(video => {
        video.pause();
    });
}

function playActiveVideo(swiperInstance) {
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    if (!activeSlide) return;

    const video = activeSlide.querySelector("video");
    if (!video) return;

    const src = video.dataset.src;

    if (src && !video.src) {
        video.src = src;
        video.load();

        video.addEventListener("loadeddata", () => {
            video.currentTime = 0;
            video.play().catch(err => console.warn("Video autoplay failed", err));
        }, { once: true });
    } else {
        video.currentTime = 0;
        video.play().catch(err => console.warn("Video autoplay failed", err));
    }
}
