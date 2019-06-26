"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_table_article_1 = require("./get-table-article");
const { VamtigerBrowserMethod } = self;
const { getData } = VamtigerBrowserMethod;
const { requestIdleCallback } = self;
async function default_1(params) {
    return new Promise((resolve, reject) => {
        if (requestIdleCallback) {
            requestIdleCallback(() => viewJsonLd(params).then(resolve));
        }
        else {
            viewJsonLd(params).then(resolve);
        }
    });
}
exports.default = default_1;
async function viewJsonLd({ element, newValue: jsonLdUrl }) {
    const { jsonLd = [] } = await getData({ jsonLd: jsonLdUrl });
    const tableArticles = await Promise.all(jsonLd.map(currentJsonLd => get_table_article_1.default({ jsonLd: currentJsonLd })));
    tableArticles.forEach(tableArticle => {
        if (tableArticle) {
            element.appendChild(tableArticle);
        }
    });
}
//# sourceMappingURL=view-json-ld.js.map