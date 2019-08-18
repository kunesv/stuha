class MessageService {
    static createMessage(message) {
        let article = DOMUtils.addTemplate(messageTemplate);
        article.querySelector('.messageText').textContent = message.text;
        if (message.parameters.medaile) {
            article.querySelector('article').classList.add('medaile');
        }

        if(message.parameters.unread) {
            article.querySelector('article').classList.add('unread');
        }

        if (message.parameters.my) {
            article.querySelector('article').classList.add('my');
        }

        return article;
    }
}