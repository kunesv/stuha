const USER_NAME = 'user.name';
const USER_TOKEN = 'user.token';
const CONVERSATION_ID = 'cc.id';
const CONVERSATIONS_AGE_FILTER = 'cs.ageFilter';

class ConversationsPersistence {
    static loadCurrent() {
        app.userSession.current = {
            username: window.localStorage.getItem(USER_NAME),
            token: window.localStorage.getItem(USER_TOKEN),

            conversationId: window.localStorage.getItem(CONVERSATION_ID),

            conversationsAgeFilter: window.localStorage.getItem(CONVERSATIONS_AGE_FILTER)
        };
    }

    static saveCurrent() {
        // FIXME
        conversation.name = 'stuha';
        window.localStorage.setItem('cc.name', conversation.name);
        conversation.id = 'hij';
        window.localStorage.setItem('cc.id', conversation.id);

    }

    static initConversations() {

    }
}