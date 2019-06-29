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
const get_table_article_1 = require("./get-table-article");
const { VamtigerBrowserMethod } = self;
const { getData } = VamtigerBrowserMethod;
const { requestIdleCallback } = self;
function default_1(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (requestIdleCallback) {
                requestIdleCallback(() => viewJsonLd(params).then(resolve));
            }
            else {
                setTimeout(() => viewJsonLd(params).then(resolve), 0);
            }
        });
    });
}
exports.default = default_1;
function viewJsonLd({ element, newValue: jsonLdUrl }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { jsonLd = [] } = yield getData({ jsonLd: jsonLdUrl });
        const tableArticles = yield Promise.all(jsonLd.map(currentJsonLd => get_table_article_1.default({ jsonLd: currentJsonLd })));
        tableArticles.forEach(tableArticle => {
            if (tableArticle) {
                element.appendChild(tableArticle);
            }
        });
    });
}
//# sourceMappingURL=view-json-ld.js.map