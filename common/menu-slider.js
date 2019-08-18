class MenuSlider {
    static slide(menuId) {
        document.body.classList.toggle(menuId);
        window.scrollTo(0, 0);
    }
}