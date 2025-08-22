window.initParticlesJS = () => {
    particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
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
            speed: 2,
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
})};

