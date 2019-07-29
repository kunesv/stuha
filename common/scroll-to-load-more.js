class ScrollToLoadMore {
    constructor() {
        document.addEventListener('scroll', this.scroll);
    }

    scroll(e) {
        document.querySelector('.log').textContent=window.scrollY + ' ' +document.documentElement.scrollTop + ' ' + document.body.scrollTop + ' ' + document.documentElement.scrollHeight + ' ' + document.documentElement.clientHeight;
        if (window.scrollY + document.body.clientHeight >= document.body.scrollHeight) {
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
