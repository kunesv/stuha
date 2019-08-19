class MenuSlider {
    static slide(menuId) {
        document.body.classList.add(menuId);
        window.scrollTo(0, 0);
    }

    static close() {
        for (let i = 0; i < document.body.classList.length; i++) {
            let className = document.body.classList.item(i);
            if (className.endsWith('Menu') || className.endsWith('Dialog')) {
                document.body.classList.remove(className);
            }
        }
        window.scrollTo(0, 0);
    }
}