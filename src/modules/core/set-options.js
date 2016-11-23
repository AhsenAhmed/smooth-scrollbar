import {
    getPrivateProp,
} from '../namespace/';

/**
 * Extend scrollbar options
 * @public
 * @api
 * @param {object} [opts]
 */
export function setOptions(opts = {}) {
    const {
        options,
    } = this::getPrivateProp();

    Reflect.ownKeys(opts).forEach((prop) => {
        if (!options.hasOwnProperty(prop) || opts[prop] === undefined) return;

        options[prop] = opts[prop];
    });
};
