import {
    Selector,
    ObservedAttribute,
    ObservedAttributes,
    SlotName,
} from './types';
import css from './css/document-index';
import getTemplate from './get-template';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import viewJsonLd from './view-json-ld';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
const handleObservedAttribute = {
    [ObservedAttributes['data-json-ld']]: viewJsonLd
}

export const name = 'vamtiger-json-ld-viewer';

css && loadScript({ name, css })
    .catch(console.error);

export default class VamtigerJsonLdViewer extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const cards = getTemplate({
            selector: Selector.cards,
            attributes: {
                name: SlotName.cards
            }
        });
        const tables = getTemplate({
            selector: Selector.tables,
            attributes: {
                name: SlotName.tables
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
        return observedAttributes;
    }

    async connectedCallback() {

    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {
        handleObservedAttribute[name]({
            element: this,
            name,
            oldValue,
            newValue
        });
    }
}