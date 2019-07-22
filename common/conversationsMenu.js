class ConversationsMenu {
    constructor() {

    }

    show() {
        console.log('a')
        document.body.classList.toggle('conversationsMenu')
    }
}


const app = {
    conversationsMenu: new ConversationsMenu()
};

let clicks = document.querySelectorAll('[data-click]');
for (let i = 0; i < clicks.length; i++) {
    clicks[i].addEventListener('click', (e) => {
        e.preventDefault();

        let name = e.target.dataset.click;
        let names = name.split('.');

        let fn = app;
        for (let j = 0; j < names.length; j++) {
            fn = fn[names[j]];
        }
        fn(e.target);

    });
}