class ScrollToLoadMore {
    constructor() {
        document.addEventListener('scroll', this.scroll);
    }

    scroll(e) {
        // document.querySelector('.log').textContent = window.scrollY + ' ' + document.documentElement.scrollTop + ' ' + document.body.scrollTop + ' ' + document.documentElement.scrollHeight + ' ' + document.documentElement.clientHeight + ' ' + document.body.scrollHeight + ' ' + (window.scrollY + window.innerHeight >= document.body.scrollHeight) + ' ' + (window.scrollY + document.body.clientHeight) + ' ' + document.body.scrollHeight + ' ' + window.innerHeight + ' ' + screen.height;

        if (document.body.classList.contains('moreToLoad') && !document.body.classList.contains('conversationsMenu') && !document.body.classList.contains('conversationMenu') && !document.body.classList.contains('loading-more') && window.scrollY + window.innerHeight >= document.body.scrollHeight - 75) {
            document.body.classList.add('loading-more');
            setTimeout(() => {
                MessagesLoadingService.loadMore().then(() => {
                    document.body.classList.remove('loading-more');
                });
            }, 1000);
        }
    }
}

const scrollToLoadMore = new ScrollToLoadMore();
