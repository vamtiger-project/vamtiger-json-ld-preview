"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const document_index_1 = require("./css/document-index");
const get_template_1 = require("./get-template");
const config_1 = require("./config");
const view_json_ld_1 = require("./view-json-ld");
const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
const handleObservedAttribute = {
    [types_1.ObservedAttributes['data-json-ld']]: view_json_ld_1.default
};
exports.name = 'vamtiger-json-ld-viewer';
document_index_1.default && loadScript({ name: exports.name, css: document_index_1.default })
    .catch(console.error);
class VamtigerJsonLdViewer extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow(config_1.shadowRoot);
        const stylesheet = get_template_1.default({
            selector: types_1.Selector.style
        });
        const cards = get_template_1.default({
            selector: types_1.Selector.cards,
            attributes: {
                name: types_1.SlotName.cards
            }
        });
        const tables = get_template_1.default({
            selector: types_1.Selector.tables,
            attributes: {
                name: types_1.SlotName.tables
            }
        });
        const elements = [
            stylesheet,
            cards,
            tables
        ];
        elements.forEach(element => element && shadowRoot.appendChild(element));
    }
    static get observedAttributes() {
        return config_1.observedAttributes;
    }
    async connectedCallback() {
    }
    attributeChangedCallback(name, oldValue, newValue) {
        handleObservedAttribute[name]({
            element: this,
            name,
            oldValue,
            newValue
        });
    }
}
exports.default = VamtigerJsonLdViewer;
//# sourceMappingURL=element.js.map