class MessagesLoadingService {
    static loadLatest() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // input: app.userSession.current
                // + move the 'unread' timestamp


                // REMOVE UNREAD
                let unreadArticles = document.querySelectorAll('main article.unread');
                for (let i = 0; i < unreadArticles.length; i++) {
                    unreadArticles[i].classList.remove('unread');
                }

                // output
                let response = TestResponsesFull['aa2'];

                ConversationsService.reset();
                ConversationsService.publish(response.conversations);

                MessagesService.publish(response.messages.messages, 'top');

                Buttons.initAll();

                resolve();
            }, 1000);
        });
    }

    static loadCurrent() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // input:
                // app.userSession.current
                // output
                let response = TestResponsesFull['aa'];

                ConversationsService.reset();
                ConversationsService.setTitle(response.conversations);
                ConversationsService.publish(response.conversations);

                document.body.classList.toggle('moreToLoad', response.messages.moreToLoad);

                MessagesService.publish(response.messages.messages, 'top');

                Buttons.initAll();

                resolve();
            }, 1000);
        });
    }

    static loadMore() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                let messages = TestResponsesMessagesOnly['aa'];

                document.body.classList.toggle('moreToLoad', messages.moreToLoad);
                MessagesService.publish(messages.messages, 'bottom');

                Buttons.initAll();

                resolve();
            }, 1000);
        });

    }

    static reset() {
        document.querySelector('main').innerHTML = '';
        document.querySelector('.conversationName').textContent = '';
        document.body.classList.remove('moreToLoad');
    }

    static save(message) {

    }
}