class ConversationsService {
    constructor() {
        this.currentConversation = ConversationsService.initCurrentConversation();

    }

    static initCurrentConversation() {
        let conversation = {};
        conversation.name = window.localStorage.getItem('cc.name');
        conversation.id = window.localStorage.getItem('cc.id');

        if (!conversation.name || !conversation.id) {
            // TODO: load some from server

            conversation.name = 'stuha';
            window.localStorage.setItem('cc.name', conversation.name);
            conversation.id = 'hij';
            window.localStorage.setItem('cc.id', conversation.id);


        }

        return conversation;
    }

    static initConversations() {

    }
}