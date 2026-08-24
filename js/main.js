if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 700,
        easing: "ease-out",
        once: true,
        offset: 60,
        disable: function () {
            return window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
        }
    });
}