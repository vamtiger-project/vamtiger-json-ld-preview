"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
        });
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