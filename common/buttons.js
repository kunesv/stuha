class Buttons {
    static initAll() {
        Buttons.init(document.querySelectorAll('[data-click]'));
    }

    static init(buttons) {
        for (let i = 0; i < buttons.length; i++) {
            if (!buttons[i].classList.contains('initialized')) {
                buttons[i].classList.add('initialized');
                buttons[i].addEventListener('click', (e) => {
                    e.preventDefault();

                    let name = e.target.dataset.click || e.target.parentNode.dataset.click;
                    let names = name.split('.');

                    let fn = app;
                    for (let j = 0; j < names.length; j++) {
                        fn = fn[names[j]];
                    }

                    fn(e.target);

                    // let url = e.target.dataset.href;
                    // if (url) {
                    //     url = url.replace('{conversation}', app.conversations.currentConversation.name);
                    //     location.hash = (url.startsWith('#/') ? '' : '#/') + url;
                    // }
                });
            }
        }
    }
}
