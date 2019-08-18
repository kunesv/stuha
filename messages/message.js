class Message {
    constructor(text, parameters = {}) {
        this.text = text;
        this.parameters = parameters || {};
    }
}