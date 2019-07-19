/**
 * Based on solution by Andy Peatling, on https://github.com/apeatling/web-pull-to-refresh
 */

class PullToRefresh {

    constructor(content) {
        this.content = content || document.querySelector('body > main');

        this.pan = {
            enabled: false,
            distance: 0
        };

        this.options = {
            resistance: 6,
            distanceToRefresh: 25
        };

        let hammer = new Hammer(this.content);

        hammer.get('pan').set({direction: Hammer.DIRECTION_VERTICAL});


        hammer.on('panstart', (e) => {
            this.panStart(e);
        });
        hammer.on('pandown', (e) => {
            this.panDown(e);
        });
        hammer.on('panup', (e) => {
            this.panUp(e);
        });
        hammer.on('panend', (e) => {
            this.panEnd(e);
        });
    }

    panStart(e) {
        if (document.body.scrollTop === 0) {
            this.pan.enabled = true;
            this.content.classList.add('panning');
        }
    }


    panDown(e) {
        if (!this.pan.enabled) {
            return;
        }

        e.preventDefault();
        this.pan.distance = e.distance / this.options.resistance;

        this.setContentPan();
        this.setBodyClass();
    }

    panUp(e) {
        if (!this.pan.enabled || this.pan.distance === 0) {
            return;
        }

        e.preventDefault();

        if (this.pan.distance < e.distance / this.options.resistance) {
            this.pan.distance = 0;
        } else {
            this.pan.distance = e.distance / this.options.resistance;
        }

        this.setContentPan();
        this.setBodyClass();
    }

    panEnd(e) {
        if (!this.pan.enabled) {
            return;
        }

        e.preventDefault();

        this.content.style.transform = this.content.style.webkitTransform = '';

        if (this.content.classList.contains('to-be-refreshed')) {
            this.doLoading();
        } else {
            this.reset();
        }

        this.pan.distance = 0;
        this.pan.enabled = false;
    }

    setContentPan() {
        this.content.style.transform = this.content.style.webkitTransform = 'translate3d( 0, ' + this.pan.distance + 'px, 0 )';
    }

    // FIXME: Refactor
    setBodyClass() {
        if (this.pan.distance > this.options.distanceToRefresh) {
            this.content.classList.add('to-be-refreshed');
        } else {
            this.content.classList.remove('to-be-refreshed');
        }
    };

    // FIXME: Refactor
    doLoading() {
        this.content.classList.add('loading');

        console.log('loading ...')
        //this.options.loadingFunction().then(() => {
        //
        //});

        setTimeout(() => {
            this.reset();
        }, 1000)
    };

    reset() {
        this.content.classList.remove('loading');
        this.content.classList.remove('to-be-refreshed');
        this.content.classList.remove('panning');
        this.content.classList.add('resetting');

        console.log(this.content.classList, new Date())

        this.content.addEventListener('transitionend', function handler(parent, a, b, c) {
            console.log(parent.content.classList, new Date())
            parent.content.classList.remove('resetting');
            parent.content.removeEventListener('transitionend', handler, false);
            console.log(parent, a, b, c)
        }(this), false);
    };


}

try {
    const ptr = new PullToRefresh();
} catch (error) {
    alert(error);
}