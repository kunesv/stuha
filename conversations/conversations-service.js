class ConversationsService {
    static publish(conversations) {
        for (let i = 0; i < conversations.length; i++) {
            let item = DOMUtils.addTemplate(conversationMenuItemTemplate);
            item.querySelector('.conversationName').textContent = conversations[i].name;
            item.querySelector('.conversationName').dataset.conversationId = conversations[i].id;
            item.querySelector('.conversationName').style.backgroundImage = `url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle fill="%23${conversations[i].color}" cx="50" cy="50" r="40"/></svg>')`

            document.querySelector('.conversations').append(item);
        }
    }

    static setTitle(conversations) {
        for (let i = 0; i < conversations.length; i++) {
            if (conversations[i].active) {
                document.querySelector('.conversationName').textContent = conversations[i].name;
            }
        }
    }

    static reset() {
        document.querySelector('.conversations').innerHTML = '';
    }

    static select(button) {
        console.log('load', button.dataset.conversationId);
        app.userSession.current.conversationId = button.dataset.conversationId;
        MessagesLoadingService.reset();
        MessagesLoadingService.loadCurrent();

        app.slideConversations();
    }
}