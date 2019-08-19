class ConversationsService {
    static publish(conversations) {
        for (let i = 0; i < conversations.length; i++) {
            let item = DOMUtils.addTemplate(conversationMenuItemTemplate);
            item.querySelector('.conversationName span').textContent = conversations[i].name;
            item.querySelector('.conversationName').dataset.conversationId = conversations[i].id;
            item.querySelector('.conversationName').style.backgroundImage = `url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle fill="%23${conversations[i].color}" cx="50" cy="50" r="40"/></svg>')`

            document.querySelector('.conversations ul').append(item);
        }
    }



    static reset() {
        document.querySelector('.conversations ul').innerHTML = '';
    }

    static select(button) {
        console.log('load', button.dataset.conversationId);
        app.userSession.current.conversationId = button.dataset.conversationId;
        MessagesService.reset();
        MessagesLoadingService.loadCurrent();

        app.slideClose();
    }
}