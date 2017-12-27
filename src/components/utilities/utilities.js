const config = require('../../../config.jaxee');

let currentConfig = null;

export const getConfig = () => {
    if (!currentConfig) {
        currentConfig = config;
    }
    return currentConfig;
};
