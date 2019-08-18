class MessagesService {
    static publish(messages, position = 'top') {
        MessagesService.addMessagesToDOM(
            MessagesService.createMessagesBlock(messages),
            position);

    }

    static createMessagesBlock(messages) {
        let articles = document.createElement('div');

        for (let i = 0; i < messages.length; i++) {
            articles.append(MessageService.createMessage(messages[i]));
        }

        return articles;
    }

    static addMessagesToDOM(articles, position) {
        if (position === 'top') {
            document.querySelector('main').prepend(articles);
        } else {
            document.querySelector('main').append(articles);
        }

        setTimeout(() => {
            let articlesLoading = document.querySelectorAll('main article.loading');
            for (let i = 0; i < articlesLoading.length; i++) {
                articlesLoading[i].classList.remove('loading');
            }
        }, 50);
    }
}



