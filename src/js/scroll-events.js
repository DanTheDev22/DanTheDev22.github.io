import {
    OverlayScrollbars,
    ScrollbarsHidingPlugin,
    SizeObserverPlugin,
    ClickScrollPlugin
} from 'overlayscrollbars';
import 'overlayscrollbars/overlayscrollbars.css';

document.addEventListener("DOMContentLoaded", async () => {

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
});

window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled", window.scrollY > 50);
});