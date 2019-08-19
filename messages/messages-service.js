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

    static setTitle(conversations) {
        for (let i = 0; i < conversations.length; i++) {
            if (conversations[i].active) {
                document.querySelector('.conversationName').textContent = conversations[i].name;
                document.querySelector('.content > header').style.backgroundColor = `#${conversations[i].color}`;
            }
        }
        document.querySelector('.content > header').classList.remove('loading');
    }

    static reset() {
        document.querySelector('main').innerHTML = '';
        document.querySelector('.conversationName').textContent = '';
        document.body.classList.remove('moreToLoad');
        document.querySelector('.content > header').classList.add('loading');
        document.querySelector('.content > header').style.backgroundColor = 'transparent';
    }
}



