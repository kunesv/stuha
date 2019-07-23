class ConversationMenu {
    constructor() {

    }

    show() {
        document.body.classList.toggle('conversationMenu');
    }
}


app.conversationMenu = new ConversationMenu();