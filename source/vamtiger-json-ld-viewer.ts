import constructor, { name } from './element';
import {
    dependencies,
    fontParams
} from './config'

const { VamtigerBrowserMethod } = window;
const { defineCustomElement, loadScript } = VamtigerBrowserMethod;
const params = {
    name,
    constructor
};

async function load() {
    await Promise.all(fontParams.map(params => loadScript(params).catch(console.error)));

    await Promise.all(dependencies.map(src => loadScript({ src })));

    defineCustomElement(params);
}

load().catch(console.warn);