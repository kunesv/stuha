class ScrollToLoadMore {
    constructor() {
        document.addEventListener('scroll', this.scroll);
    }

    scroll(e) {
        console.log(document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            document.body.classList.add('loading-more');
            setTimeout(()=> {
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Jakpak se mas. ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');
                Messages.addMessage(new Message('Ahoj ' + new Date()), 'bottom');

                document.body.classList.remove('loading-more');
            },1000);
        }
    }
}

const scrollToLoadMore = new ScrollToLoadMore();