class Buttons {
    static init(buttons) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', (e) => {
                e.preventDefault();

                let name = e.target.dataset.click;
                let names = name.split('.');

                let fn = app;
                for (let j = 0; j < names.length; j++) {
                    fn = fn[names[j]];
                }

                fn(e.target);

                let url = e.target.dataset.href;
                if (url) {
                    url = url.replace('{conversation}', app.conversations.currentConversation.name);
                    location.hash = (url.startsWith('#/') ? '' : '#/') + url;
                }
            });
        }
    }
}
