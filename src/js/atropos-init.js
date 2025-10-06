import "atropos/css/min";

document.addEventListener("DOMContentLoaded", async () => {

    const brandEl = document.querySelector('.brand-atropos');
    // const imageEl = document.querySelector('.image-atropos');

    if (brandEl) {
        import('atropos').then(({ default: Atropos }) => {
            function initAtropos(selector) {
                Atropos({
                    el: selector,
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
            }
            if (brandEl) initAtropos('.brand-atropos');
        });
    }
});