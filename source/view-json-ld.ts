import {
    IViewJsonLd
} from './types';
import getTableArticle from './get-table-article';

const { VamtigerBrowserMethod } = self;
const { getData } = VamtigerBrowserMethod;

const { requestIdleCallback } = self;

export default async function(params: IViewJsonLd) {return new Promise((resolve, reject) => {
    if (requestIdleCallback) {
        requestIdleCallback(() => viewJsonLd(params).then(resolve))
    } else {
        setTimeout(() => viewJsonLd(params).then(resolve), 0)
    }
})}

async function viewJsonLd({ element, newValue: jsonLdUrl }: IViewJsonLd) {
    const { jsonLd = [] } = await getData({jsonLd: jsonLdUrl});
    const tableArticles = await Promise.all(jsonLd.map(currentJsonLd => getTableArticle({jsonLd: currentJsonLd})));

    tableArticles.forEach(tableArticle => {
        if (tableArticle) {
            element.appendChild(tableArticle);
        }
    });
}