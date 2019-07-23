class ConversationsMenu {
    constructor() {

    }

    show() {
        document.body.classList.toggle('conversationsMenu')
    }
}


const app = {
    conversationsMenu: new ConversationsMenu()
};

