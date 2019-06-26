import { IAnyObject } from 'vamtiger-browser-method/build/types';
import VamtigerJsonLdPreview from './element';
export declare enum StringConstant {
    nothing = ""
}
export declare enum Selector {
    style = "style",
    cards = "[data-cards]",
    tables = "[data-tables]",
    tableArticle = "[slot=\"vamtiger-json-ld-viewer-tables\"]",
    heading = "[data-heading]",
    subheading = "[data-subheading]",
    table = "[data-table]"
}
export declare enum ObservedAttributes {
    'data-json-ld' = "data-json-ld"
}
export declare enum SlotName {
    cards = "vamtiger-json-ld-viewer-cards",
    tables = "vamtiger-json-ld-viewer-tables"
}
export declare enum Fonts {
    openSans = "https://fonts.googleapis.com/css?family=Open+Sans"
}
export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}
export interface IAttributes {
    id?: string;
    for?: string;
    name?: string;
}
export interface IGetTableArticle {
    jsonLd: IAnyObject;
}
export interface IProperties {
    innerHTML?: string;
}
export interface IViewJsonLd {
    element: VamtigerJsonLdPreview;
    name: ObservedAttribute;
    oldValue: string;
    newValue: string;
}
export declare type AttributesKey = keyof IAttributes;
export declare type ObservedAttribute = keyof typeof ObservedAttributes;
export declare type FontKey = keyof typeof Fonts;
export declare type GetTemplate<P extends IGetTemplate> = P['selector'] extends Selector.style ? HTMLStyleElement : P['selector'] extends Selector.cards | Selector.tables | Selector.tableArticle ? HTMLElement : null;
