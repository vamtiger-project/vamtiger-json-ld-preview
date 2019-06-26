import { ObservedAttribute } from './types';
export declare const name = "vamtiger-json-ld-viewer";
export default class VamtigerJsonLdViewer extends HTMLElement {
    constructor();
    static readonly observedAttributes: "data-json-ld"[];
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string): void;
}
