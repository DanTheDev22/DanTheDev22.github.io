document.addEventListener("DOMContentLoaded", () => {
  import('medium-zoom').then(({ default: mediumZoom }) => {
    mediumZoom('[data-zoomable]', {
      margin: 24,
      background: '#1c1f26',
      scrollOffset: 0,
    });
  });
});
