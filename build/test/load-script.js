"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
exports.default = () => describe('vamtiger-json-ld-viewer', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-json-ld-viewer.js'
        });
    });
    it('load script', async function () {
        const script = document.head.querySelector('[src="vamtiger-json-ld-viewer.js"]');
        chai_1.expect(script instanceof HTMLScriptElement).to.be.true;
    });
});
//# sourceMappingURL=load-script.js.map