const {assert} = require("chai");
const {isUrlExists, getPageHTML, PAGES} = require("./utils");

describe("Pages", () => {

    describe("Main page", () => {
        it("Is page exist", async ({browser}) => {
            const homePageExists = await isUrlExists({
                browser,
                url: PAGES.MAIN,
            });
            assert.isTrue(homePageExists);
        })
        it('Is have static content', async ({browser}) => {
            const mainPage = await getPageHTML({
                browser,
                url: PAGES.MAIN,
            });

            assert.equal(...mainPage);
        })
        it('Is save HTML structure', async ({browser}) => {
            await browser.url(PAGES.MAIN);
            await browser.assertView("snapshot-plain-main-page", "#root", {
                compositeImage: true,
            });
        })
    })

    describe("Catalog page", () => {
        it("Is page exist", async ({browser}) => {
            const homePageExists = await isUrlExists({
                browser,
                url: PAGES.CATALOG,
            });
            assert.isTrue(homePageExists);
        })
        it('Is have static content', async ({browser}) => {
            const catalogPage = await getPageHTML({
                browser,
                url: PAGES.CATALOG,
            });

            assert.equal(...catalogPage);
        })
    })

    describe("Delivery page", () => {
        it("Is page exist", async ({browser}) => {
            const homePageExists = await isUrlExists({
                browser,
                url: PAGES.DELIVERY,
            });
            assert.isTrue(homePageExists);
        })
        it('Is have static content', async ({browser}) => {
            const deliveryPage = await getPageHTML({
                browser,
                url: PAGES.DELIVERY,
            });

            assert.equal(...deliveryPage);
        })
        it('Is save HTML structure', async ({browser}) => {
            await browser.url(PAGES.DELIVERY);
            await browser.assertView("snapshot-plain-delivery-page", "#root", {
                compositeImage: true,
            });
        })
    })

    describe("Contacts page", () => {
        it("Is page exist", async ({browser}) => {
            const homePageExists = await isUrlExists({
                browser,
                url: PAGES.CONTACTS,
            });
            assert.isTrue(homePageExists);
        })
        it('Is have static content', async ({browser}) => {
            const deliveryPage = await getPageHTML({
                browser,
                url: PAGES.CONTACTS,
            });

            assert.equal(...deliveryPage);
        })
        it('Is save HTML structure', async ({browser}) => {
            await browser.url(PAGES.CONTACTS);
            await browser.assertView("snapshot-plain-contacts-page", "#root", {
                compositeImage: true,
            });
        })
    })

});
