import "../css/styles.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import "atropos/atropos.css"
import Atropos from "atropos";
import TypeIt from "typeit";
import InfiniteMarquee from 'vanilla-infinite-marquee';

document.addEventListener("DOMContentLoaded", async () => {

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

    new InfiniteMarquee({
        element: '.row-1',
        speed: 25000,
        smoothEdges: true,
        pauseOnHover: true,
        direction: 'right',
        gap: '15px',
        duplicateCount: 2,
        mobileSettings: {
            direction: 'top',
            speed: 20000
        },
        on: {
            beforeInit: () => {
                console.log('Not Yet Initialized');
            },

            afterInit: () => {
                console.log('Initialized');
            }
        }
    });

    new InfiniteMarquee({
        element: '.row-2',
        speed: 25000,
        smoothEdges: true,
        pauseOnHover: true,
        direction: 'left',
        gap: '15px',
        duplicateCount: 1,
        mobileSettings: {
            direction: 'top',
            speed: 20000
        },
        on: {
            beforeInit: () => {
                console.log('Not Yet Initialized');
            },

            afterInit: () => {
                console.log('Initialized');
            }
        }
    });

    new InfiniteMarquee({
        element: '.row-3',
        speed: 15000,
        smoothEdges: true,
        pauseOnHover: true,
        direction: 'right',
        gap: '15px',
        duplicateCount: 1,
        mobileSettings: {
            direction: 'top',
            speed: 20000
        },
        on: {
            beforeInit: () => {
                console.log('Not Yet Initialized');
            },

            afterInit: () => {
                console.log('Initialized');
            }
        }
    });

    // Initialize Atropos
    Atropos({
        el: '.my-atropos',
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

    // Brand click animation
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
});
// document.querySelector('.contact-form').addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const form = e.target;
//     const data = new FormData(form);
//     const action = form.action;
//
//     try {
//       const response = await fetch(action, {
//         method: 'POST',
//         body: data,
//         headers: {
//           'Accept': 'application/json'
//         }
//       });
//
//       if (response.ok) {
//         alert("✅ Message sent successfully!");
//         form.reset();
//       } else {
//         alert("❌ Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       alert("⚠️ Network error. Please check your connection.");
//     }
//   });
//
//
//
//   const modal = document.getElementById('videoModal');
//   const video = document.getElementById('previewVideo');
//   const closeBtn = document.querySelector('.close-btn');
//
//   document.querySelectorAll('.btn-preview').forEach(button => {
//     button.addEventListener('click', () => {
//         video.src = button.getAttribute('data-video');
//       modal.style.display = 'block';
//     });
//   });
//
//   closeBtn.onclick = () => {
//     modal.style.display = 'none';
//     video.pause();
//     video.currentTime = 0;
//   };
//
//   window.onclick = e => {
//     if (e.target === modal) {
//       modal.style.display = 'none';
//       video.pause();
//       video.currentTime = 0;
//     }
//   };
