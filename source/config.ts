import {
    ObservedAttributes,
    ObservedAttribute,
    Fonts,
    FontKey
} from './types'

export const shadowRoot = {
    mode: 'open'
} as ShadowRootInit;

export const observedAttributes = Object.keys(ObservedAttributes) as ObservedAttribute[];

export const fontParams = (Object.keys(Fonts) as FontKey[])
    .map(key => ({name: Fonts[key], href: Fonts[key]}));

export const dependencies = [
    'https://vamtiger-project.github.io/vamtiger-response-svg/build/vamtiger-responsive-svg.js.json.js'
];