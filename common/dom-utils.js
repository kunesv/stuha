class DOMUtils {
    static addTemplate(template) {
        return new DOMParser().parseFromString(template, 'text/html').head.firstElementChild.content;
    }
}