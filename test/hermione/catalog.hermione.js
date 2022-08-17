const { assert } = require("chai");
const {
  openCatalogPage,
    getProductName,
    getProductPrice,
  getCartItem,
  getCartItemText,
  clearCart,
  reloadPage,
  getCartItemCount,
  PAGES, addProductToCart,
} = require("./utils");

describe("Catalog -", () => {
  it("Product already add to cart and on page of product show message about it", async ({
    browser,
  }) => {

    await openCatalogPage({ testId: 0, browser });
    const productName = await getProductName(browser);
    await clearCart(browser);

    await addProductToCart(browser)
    await getProductPrice(browser);

    const itemAddedBadge = await browser.$(".CartBadge");
    await itemAddedBadge.waitForExist();
    assert.isTrue(await itemAddedBadge.isDisplayed());

    await browser.url(PAGES.CART);

    const cartItem = await getCartItem({ browser, testId: 0 });
    assert.isTrue(await cartItem.isDisplayed());

    const cartItemText = await getCartItemText(cartItem);
    assert.equal(cartItemText, productName);
  });

  it('If product has already been added to card, button add must increment count of products', async ({
    browser,
  }) => {
    await openCatalogPage({ testId: 0, browser });

    const productName = await getProductName(browser);

    await clearCart(browser);

    await addProductToCart(browser)

    await browser.url(PAGES.CART);

    let cartItem = await getCartItem({ browser, testId: 0 });
    assert.isTrue(await cartItem.isDisplayed());

    let cartItemText = await getCartItemText(cartItem);
    assert.equal(cartItemText, productName);

    let cartItemCount = await getCartItemCount(cartItem);
    assert.equal(cartItemCount, 1);

    await openCatalogPage({ testId: 0, browser });
    await addProductToCart(browser);
    await browser.url(PAGES.CART);

    cartItem = await getCartItem({ browser, testId: 0 });
    assert.isTrue(await cartItem.isDisplayed());

    cartItemText = await getCartItemText(cartItem);
    assert.equal(cartItemText, productName);

    cartItemCount = await getCartItemCount(cartItem);
    assert.equal(cartItemCount, 2);
  });

  it("Content of page need to saved between reload pages", async ({
    browser,
  }) => {
    await openCatalogPage({ testId: 0, browser });
    const productName = await getProductName(browser);
    await clearCart(browser);
    await addProductToCart(browser);

    await browser.url(PAGES.CART);
    let cartItem = await getCartItem({ browser, testId: 0 });
    assert.isTrue(await cartItem.isDisplayed());

    let cartItemText = await getCartItemText(cartItem);
    assert.equal(cartItemText, productName);

    let cartItemCount = await getCartItemCount(cartItem);
    assert.equal(cartItemCount, 1);

    await reloadPage(browser);

    cartItem = await getCartItem({ browser, testId: 0 });
    assert.isTrue(await cartItem.isDisplayed());

    cartItemText = await getCartItemText(cartItem);
    assert.equal(cartItemText, productName);

    cartItemCount = await getCartItemCount(cartItem);
    assert.equal(cartItemCount, 1);
  });
});
