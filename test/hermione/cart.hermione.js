const { assert } = require("chai");
const {
  clearCart,
  getCartItem,
  getCartItemText,
  getCartItemPrice,
  getCartItemTotal,
  reloadPage,
    getProductName,
    getProductPrice,
    openCatalogPage, addProductToCart, PAGES,
} = require("./utils");

describe("Cart", () => {

  beforeEach(async ({browser})=>{
    await openCatalogPage({ testId: 0, browser });
    await clearCart(browser);
  })

  it("In header show number of unrepeated products", async ({
    browser,
  }) => {
    await addProductToCart(browser);

    await openCatalogPage({ testId: 1, browser });
    await addProductToCart(browser);

    const cartLink = await browser.$('.navbar-nav [href="/hw/store/cart"]');
    await cartLink.waitForExist();
    const cartLinkText = await cartLink.getText();
    assert.equal(cartLinkText, "Cart (2)");
  });

  it("Cart show all added items", async ({
    browser,
  }) => {

    const firstProductName = await getProductName(browser);
    const firstProductPrice = await getProductPrice(browser);
    await addProductToCart(browser);

    await openCatalogPage({ testId: 1, browser });
    const secondProductName = await getProductName(browser);
    const secondProductPrice = await getProductPrice(browser);
    await addProductToCart(browser);

    await browser.url(PAGES.CART);

    const firstItem = await getCartItem({ browser, testId: 0 });
    assert.isTrue(await firstItem.isDisplayed());
    const firstItemText = await getCartItemText(firstItem);
    assert.equal(firstItemText, firstProductName);
    const firstCartItemPrice = await getCartItemPrice(firstItem);
    assert.equal(firstCartItemPrice, firstProductPrice);
    const firstCartItemTotal = await getCartItemTotal(firstItem);
    assert.equal(firstCartItemTotal, firstProductPrice);

    const secondItem = await getCartItem({ browser, testId: 1 });
    assert.isTrue(await secondItem.isDisplayed());
    const secondItemText = await getCartItemText(secondItem);
    assert.equal(secondItemText, secondProductName);
    const secondItemPrice = await getCartItemPrice(secondItem);
    assert.equal(secondItemPrice, secondProductPrice);
    const secondItemTotal = await getCartItemTotal(secondItem);
    assert.equal(secondItemTotal, secondProductPrice);
  });

  it('Add item to cart, click on clear button, empty cart list', async ({
    browser,
  }) => {
    await addProductToCart(browser);

    await browser.url(PAGES.CART);
    let cartItem = await getCartItem({ browser, testId: 0 });

    const cartClearButton = await browser.$(".Cart-Clear");
    await cartClearButton.waitForExist();

    await cartClearButton.click();
    assert.isFalse(await cartItem.isDisplayed());
  });

  it("Cart is empty show link to catalog page", async ({
    browser,
  }) => {
    await browser.url(PAGES.CART);
    await clearCart(browser);
    await reloadPage(browser);

    const catalogLink = await browser.$('.Cart a[href="/hw/store/catalog"]');
    await catalogLink.waitForExist();
    assert.isTrue(await catalogLink.isDisplayed());
  });
});
