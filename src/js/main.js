import "../css/styles.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import "atropos/atropos.css"
import Atropos from "atropos";
import TypeIt from "typeit";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css'
import mediumZoom from 'medium-zoom'
import 'overlayscrollbars/overlayscrollbars.css';
import {
    OverlayScrollbars,
    ScrollbarsHidingPlugin,
    SizeObserverPlugin,
    ClickScrollPlugin
} from 'overlayscrollbars';

AOS.init();

mediumZoom('[data-zoomable]', {
    margin: 24,
    background: '#1c1f26',
    scrollOffset: 0,
})

window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled", window.scrollY > 50);
});


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

                // Oprește autoplay pe toate inner-swipers
                innerSwipers.forEach(sw => sw.autoplay.stop());

                if (innerSwipers[this.activeIndex]) {
                    innerSwipers[this.activeIndex].autoplay.start();
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
   

    new TypeIt("#type-effect", {
        speed: 125,
        loop: true,
        waitUntilVisible: true
    })
        .type("Java Software Engineer")
        .pause(2500)
        .delete()
        .type("Backend Engineer")
        .pause(2500)
        .delete()
        .type("REST API Developer")
        .pause(2500)
        .go();

    OverlayScrollbars.plugin([
        ScrollbarsHidingPlugin,
        SizeObserverPlugin,
        ClickScrollPlugin
    ]);

    const pluginOptions = {
        autoUpdate: true,
        autoUpdateInterval: 33,
        updateOnLoad: ['img'],
        scrollbars: {
            autoHide: 'always',
            autoHideDelay: 800,
            clickScrolling: true
        }
    };

    const osInstance = OverlayScrollbars(document.body);
    if (!osInstance) {
        OverlayScrollbars(document.body, pluginOptions);
    }


    // Initialize Atropos
    Atropos({
        el: '.brand-atropos',
        activeOffset: 50,
        shadowScale: 1.0,
        rotateXMax: 18,
        rotateYMax: 18,
        rotateTouch: true,
        duration: 250,
        easing: 'cubic-bezier(.1,.9,.3,1)',
        shadow: false,
        highlight: false,
    });

    Atropos({
        el: '.image-atropos',
        activeOffset: 50,
        shadowScale: 1.0,
        rotateXMax: 18,
        rotateYMax: 18,
        rotateTouch: true,
        duration: 250,
        easing: 'cubic-bezier(.1,.9,.3,1)',
        shadow: false,
        highlight: false,
    });

    const brand = document.querySelector(".my-atropos");
    if (brand) {
        brand.addEventListener("click", () => {
            brand.style.transition = "transform 0.2s ease";
            brand.style.transform = "scale(1.2)";
            setTimeout(() => brand.style.transform = "scale(1)", 200);
        });
    }
});


particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#00ff88"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.25,
            random: false
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#00ff88",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 100,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
})

document.querySelector('.contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const action = form.action;

    try {
        const response = await fetch(action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert("✅ Message sent successfully!");
            form.reset();
        } else {
            alert("❌ Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("⚠️ Network error. Please check your connection.");
    }
});