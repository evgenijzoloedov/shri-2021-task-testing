const {assert} = require("chai");
const { PAGES, isHasHorizontalScroll} = require("./utils");

describe("General requirements", () => {
    beforeEach(async ({ browser }) => {
        await browser.url(PAGES.MAIN);
    });
    describe("Adaptive pages", () => {
        describe("Main page", () => {
            beforeEach(async ({browser}) => {
                await browser.url(PAGES.MAIN);
            });

            it("Adaptive on 1440px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 1440,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 992px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 992,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 768px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 768,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 576px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 576,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 360px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 360,
                });
                assert.isFalse(isScrollable);
            })
        })
        describe("Catalog page", () => {
            beforeEach(async ({browser}) => {
                await browser.url(PAGES.CATALOG);
            });

            it("Adaptive on 1440px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 1440,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 992px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 992,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 768px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 768,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 576px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 576,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 360px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 360,
                });
                assert.isFalse(isScrollable);
            })
        })
        describe("Cart page", () => {
            beforeEach(async ({browser}) => {
                await browser.url(PAGES.CART);
            });

            it("Adaptive on 1440px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 1440,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 992px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 992,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 768px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 768,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 576px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 576,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 360px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 360,
                });
                assert.isFalse(isScrollable);
            })
        })
        describe("Contacts page", () => {
            beforeEach(async ({browser}) => {
                await browser.url(PAGES.CONTACTS);
            });

            it("Adaptive on 1440px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 1440,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 992px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 992,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 768px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 768,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 576px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 576,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 360px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 360,
                });
                assert.isFalse(isScrollable);
            })
        })
        describe("Delivery page", () => {
            beforeEach(async ({browser}) => {
                await browser.url(PAGES.DELIVERY);
            });

            it("Adaptive on 1440px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 1440,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 992px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 992,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 768px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 768,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 576px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 576,
                });
                assert.isFalse(isScrollable);
            })
            it("Adaptive on 360px", async ({browser}) => {
                const isScrollable = await isHasHorizontalScroll({
                    browser,
                    width: 360,
                });
                assert.isFalse(isScrollable);
            })
        })
    })


    describe("Exist links in header ", () => {
        it('Catalog link', async ({browser}) => {
            const link = await browser.$(".nav-link[href='/hw/store/catalog']");
            await link.waitForExist();
            assert.isTrue(await link.isExisting());
        })
        it('Delivery link', async ({browser}) => {
            const link = await browser.$(".nav-link[href='/hw/store/delivery']");
            await link.waitForExist();
            assert.isTrue(await link.isExisting());
        })
        it('Contact link', async ({browser}) => {
            const link = await browser.$(".nav-link[href='/hw/store/contacts']");
            await link.waitForExist();
            assert.isTrue(await link.isExisting());
        })
        it('Card link', async ({browser}) => {
            const link = await browser.$(".nav-link[href='/hw/store/cart']");
            await link.waitForExist();
            assert.isTrue(await link.isExisting());
        })
    })


    it("Main logo is link to main page", async ({browser}) => {
        const title = await browser.$(".Application-Brand.navbar-brand");
        await title.waitForExist();

        assert.equal(await title.getAttribute("href"), "/hw/store/");
    });

    describe("Adaptive navbar transformation", () => {
        const height = 1280
        describe("Browser width more then or equal 576", () => {
            const width = 576

            it("Exist menu", async ({browser}) => {
                const menu = await browser.$(".Application-Menu.navbar-collapse");

                await browser.setWindowSize(width, height);

                assert.isFalse(await menu.isDisplayed());
            })

            it("Not exist toggler", async ({browser}) => {
                const toggler = await browser.$(".Application-Toggler.navbar-toggler");

                await browser.setWindowSize(width, height);

                assert.isTrue(await toggler.isDisplayed());
            })

        })
        describe("Browser width less then 576", () => {
            const width = 575
            it("Not exist menu", async ({browser}) => {
                const menu = await browser.$(".Application-Menu.navbar-collapse");

                await browser.setWindowSize(width, height);

                assert.isFalse(await menu.isDisplayed());
            })

            it("Exist toggler", async ({browser}) => {
                browser.$
                const toggler = await browser.$(".Application-Toggler.navbar-toggler");

                await browser.setWindowSize(width, height);

                assert.isTrue(await toggler.isDisplayed());
            })

        })
    })

    it('Close hamburger after click on link', async ({browser}) => {
        await browser.setWindowSize(575, 1280);

        const menu = await browser.$(".Application-Menu.navnar-collapse");
        const link = await browser.$(
            ".navbar-nav a[href='/hw/store/catalog']"
        );
        const toggler = await browser.$(".Application-Toggler.navbar-toggler");

        await toggler.waitForExist();
        await toggler.waitForClickable();
        await toggler.click();

        await link.waitForExist();
        await link.waitForClickable();
        await link.click();

        assert.isFalse(await menu.isDisplayed());
    });
});
