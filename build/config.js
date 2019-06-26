"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.shadowRoot = {
    mode: 'open'
};
exports.observedAttributes = Object.keys(types_1.ObservedAttributes);
exports.fontParams = Object.keys(types_1.Fonts)
    .map(key => ({ name: types_1.Fonts[key], href: types_1.Fonts[key] }));
exports.dependencies = [
    'https://vamtiger-project.github.io/vamtiger-response-svg/build/vamtiger-responsive-svg.js.json.js'
];
//# sourceMappingURL=config.js.map