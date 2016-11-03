import { memoize } from '../helpers/';

// global environment
const getters = {
    MutationObserver() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    },
    TOUCH_SUPPORTED() {
        return 'ontouchstart' in document;
    },
    EASING_MULTIPLIER() {
        return navigator.userAgent.match(/Android/) ? 0.5 : 0.25;
    },
    WHEEL_EVENT() {
        // is standard `wheel` event supported check
        return 'onwheel' in window ? 'wheel' : 'mousewheel';
    },
};

export const GLOBAL_ENV = memoize(getters);
