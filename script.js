(function () {
    "use strict";

    function setupNavigation() {
        var toggle = document.querySelector(".menu-toggle");
        var nav = document.querySelector(".site-nav");
        var header = document.querySelector(".site-header");

        if (!toggle || !nav || !header) return;

        function closeMenu() {
            toggle.setAttribute("aria-expanded", "false");
            nav.classList.remove("is-open");
        }

        toggle.addEventListener("click", function () {
            var isOpen = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!isOpen));
            nav.classList.toggle("is-open", !isOpen);
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("scroll", function () {
            header.classList.toggle("is-scrolled", window.scrollY > 20);
        }, { passive: true });
    }

    function setupLatestNews() {
        var section = document.querySelector(".latest-news");
        var config = window.SITE_CONTENT && window.SITE_CONTENT.latestNews;
        if (!section) return;

        if (!config || config.enabled === false) {
            section.hidden = true;
            return;
        }

        var title = section.querySelector("[data-news-title]");
        var description = section.querySelector("[data-news-description]");
        var badge = section.querySelector("[data-news-badge]");
        var image = section.querySelector("[data-news-image]");
        var caption = section.querySelector("figcaption");

        if (title && config.title) title.textContent = config.title;
        if (description && config.description) description.textContent = config.description;
        if (badge && config.badge) badge.textContent = config.badge;
        if (caption && config.footnote) caption.textContent = config.footnote;

        if (image && config.imagePath) {
            image.src = config.imagePath;
            image.alt = config.imageAlt || config.title || "情趣時光最新消息";
            image.addEventListener("error", function () {
                section.hidden = true;
            }, { once: true });
        }
    }

    function setupLightbox() {
        var dialog = document.querySelector(".lightbox");
        if (!dialog) return;

        var image = dialog.querySelector("figure img");
        var caption = dialog.querySelector("figcaption");
        var closeButton = dialog.querySelector(".lightbox-close");
        var prevButton = dialog.querySelector(".lightbox-prev");
        var nextButton = dialog.querySelector(".lightbox-next");
        var triggers = Array.from(document.querySelectorAll("[data-gallery-src]"));
        var currentIndex = 0;
        var activeTrigger = null;

        function render(index) {
            currentIndex = (index + triggers.length) % triggers.length;
            var trigger = triggers[currentIndex];
            image.src = trigger.getAttribute("data-gallery-src");
            image.alt = trigger.getAttribute("data-gallery-caption") || "門市圖片";
            caption.textContent = image.alt;
        }

        function open(index, trigger) {
            activeTrigger = trigger;
            render(index);
            dialog.hidden = false;
            document.body.classList.add("dialog-open");
            closeButton.focus();
        }

        function close() {
            dialog.hidden = true;
            document.body.classList.remove("dialog-open");
            image.src = "";
            if (activeTrigger) activeTrigger.focus();
        }

        triggers.forEach(function (trigger, index) {
            trigger.addEventListener("click", function () { open(index, trigger); });
        });

        closeButton.addEventListener("click", close);
        prevButton.addEventListener("click", function () { render(currentIndex - 1); });
        nextButton.addEventListener("click", function () { render(currentIndex + 1); });

        dialog.addEventListener("click", function (event) {
            if (event.target === dialog) close();
        });

        dialog.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") render(currentIndex - 1);
            if (event.key === "ArrowRight") render(currentIndex + 1);
            if (event.key === "Escape") close();
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        setupNavigation();
        setupLatestNews();
        setupLightbox();
    });
})();
