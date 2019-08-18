class MessagesLoadingService {
    static loadLatest(conversationId) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                let messages = TestConversationsLatest[conversationId];

                let unreadArticles = document.querySelectorAll('main article.unread');
                for (let i = 0; i < unreadArticles.length; i++) {
                    unreadArticles[i].classList.remove('unread');
                }

                MessagesService.publish(messages.messages, 'top');

                resolve('foo');
            }, 1000);
        });
    }

    static loadCurrent(conversationId) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                let messages = TestConversations[conversationId];

                document.body.classList.toggle('moreToLoad', messages.moreToLoad);
                MessagesService.publish(messages.messages, 'top');

                resolve('foo');
            }, 1000);
        });
    }

    static loadMore(conversationId) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                let messages = TestConversations[conversationId];

                document.body.classList.toggle('moreToLoad', messages.moreToLoad);
                MessagesService.publish(messages.messages, 'bottom');

                resolve('foo');
            }, 1000);
        });

    }
}