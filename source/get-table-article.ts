import {
    IGetTableArticle,
    Selector,
    StringConstant
} from './types';
import getTemplate from './get-template';

const { requestIdleCallback, VamtigerBrowserMethod } = self;
const { getJsonLdArray } = VamtigerBrowserMethod;
const { nothing } = StringConstant

export default async function (params: IGetTableArticle) {return new Promise((resolve: (tableArticle: HTMLElement | null) => void, reject) => {
    if (requestIdleCallback) {
        requestIdleCallback(() => getTableArticle(params).then(resolve))
    } else {
        getTableArticle(params).then(resolve)
    }
})}

async function getTableArticle(params: IGetTableArticle) {
    const { jsonLd } = params;
    const jsonLdArray = await getJsonLdArray({ jsonLd }) || [];
    const {
        name: headingText,
        description: subheadingText
    } = jsonLd;
    const tableArticle = getTemplate({
        selector: Selector.tableArticle
    });
    const heading = tableArticle && tableArticle.querySelector<HTMLHeadingElement>(Selector.heading);
    const subheading = tableArticle && tableArticle.querySelector<HTMLHeadingElement>(Selector.subheading);
    const table = tableArticle && tableArticle.querySelector<HTMLElement>(Selector.table);
    const tableHtml = table && jsonLdArray
        .map(([header, copy]) => [
            `<div data-row>`,
                `<div data-cell data-row-heading>`,
                    `<h3 data-cell-content data-uppercase>${header}</h3>`,
                `</div>`,
                `<div data-cell data-row-copy>`,
                    `<p data-cell-content>${copy}</p>`,
                `</div>`,
            `</div>`
        ].join(nothing))
        .join(nothing);

    if (heading && headingText) {
        heading.innerHTML = headingText;
    }

    if (subheading && subheadingText) {
        subheading.innerHTML = subheadingText;
    }

    if (table && tableHtml) {
        table.innerHTML = tableHtml;
    }

    return tableArticle;
}