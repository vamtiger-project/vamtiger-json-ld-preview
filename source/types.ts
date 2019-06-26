import { IAnyObject } from 'vamtiger-browser-method/build/types';
import VamtigerJsonLdPreview from './element';

export enum StringConstant {
    nothing = ''
}

export enum Selector {
    style = 'style',
    cards = '[data-cards]',
    tables = '[data-tables]',
    tableArticle = '[slot="vamtiger-json-ld-viewer-tables"]',
    heading = '[data-heading]',
    subheading = '[data-subheading]',
    table = '[data-table]'
}

export enum ObservedAttributes {
    'data-json-ld' = 'data-json-ld'
}

export enum SlotName {
    cards = 'vamtiger-json-ld-viewer-cards',
    tables = 'vamtiger-json-ld-viewer-tables'
}

export enum Fonts {
    openSans = 'https://fonts.googleapis.com/css?family=Open+Sans'
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

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type FontKey = keyof typeof Fonts;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.cards
        | Selector.tables
        | Selector.tableArticle
        ? HTMLElement :
    null;