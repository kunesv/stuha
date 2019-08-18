class Menu {
    show(button) {
        console.log(button.dataset.menuId)
        MenuSlider.slide(button.dataset.menuId);
    }
}

