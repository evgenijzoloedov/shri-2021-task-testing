const PAGES = {
  MAIN: "http://localhost:3000/hw/store/",
  CATALOG: "http://localhost:3000/hw/store/catalog",
  DELIVERY: "http://localhost:3000/hw/store/delivery",
  CONTACTS: "http://localhost:3000/hw/store/contacts",
  CART: "http://localhost:3000/hw/store/cart",
};



async function openCatalogPage ({ testId, browser }) {
  await browser.url(PAGES.CATALOG);
  const productCard = await browser.$(`.ProductItem[data-testid="${testId}"]`);
  await productCard.waitForExist();
  const productLink = await productCard.$(".ProductItem-DetailsLink");
  await productLink.waitForExist();
  await productLink.click();
}

async function getProductName (browser) {
  const productTitle = await browser.$(".ProductDetails-Name");
  await productTitle.waitForExist();
  return await productTitle.getText();
}

async function addProductToCart (browser) {
  const getPageHTMLsButton = await browser.$(".ProductDetails-AddToCart");
  await getPageHTMLsButton.waitForExist();
  await getPageHTMLsButton.click();
}

async function getProductPrice (browser)  {
  const productPriceNode = await browser.$(".ProductDetails-Price");
  await productPriceNode.waitForExist();
  const price = await productPriceNode.getText();
  return +price.slice(1)
}

async function getCartItem ({ browser, testId }) {
  const cartItem = await browser.$(`tr[data-testid="${testId}"]`);
  await cartItem.waitForExist();
  return cartItem;
}

async function getCartItemText  (cartItem) {
  const cartItemTitleNode = await cartItem.$(".Cart-Name");
  await cartItemTitleNode.waitForExist();
  return await cartItemTitleNode.getText();
}

async function getCartItemCount  (cartItem) {
  const cartItemCountNode = await cartItem.$(".Cart-Count");
  await cartItemCountNode.waitForExist();
  const count = await cartItemCountNode.getText();
  return +count;
}

async function getCartItemPrice (cartItem) {
  const cartItemPriceNode = await cartItem.$(".Cart-Price");
  await cartItemPriceNode.waitForExist();
  const price = await cartItemPriceNode.getText();
  return +price.slice(1)
}

async function getCartItemTotal (cartItem)  {
  const cartItemTotalNode = await cartItem.$(".Cart-Total");
  await cartItemTotalNode.waitForExist();
  const total = await cartItemTotalNode.getText();
  return +total.slice(1);
}

async function clearCart  (browser)  {
  await browser.execute(() => {
    localStorage.removeItem("example-store-cart");
  }, []);
}

async function reloadPage  (browser) {
  await browser.execute(() => document.location.reload(), []);
}

async function isUrlExists  ({ browser, url }) {
  await browser.url(url);
  const app = await browser.$(".Application");
  await app.waitForExist();

  return await app.isDisplayed();
}

async function getPageHTML ({ browser, url, timeout = 5000 }) {
  await browser.url(url);
  const app = await browser.$(".Application");
  await app.waitForExist();

  const appHtmlBeforePause = await app.getHTML();
  await browser.pause(timeout);
  const appHtmlAfterPause = await app.getHTML();

  return [appHtmlBeforePause, appHtmlAfterPause]
}


async function isHasHorizontalScroll({ browser, width }) {
  await browser.setWindowSize(width, 1280);
  await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000,
        timeoutMsg: "Browser did not load in 60s",
      }
  );
  return await browser.execute(
      () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      []
  );
}


module.exports = {
  PAGES,
  openCatalogPage,
  getProductName,
  addProductToCart,
  getProductPrice,
  getCartItem,
  getCartItemText,
  getCartItemCount,
  getCartItemPrice,
  getCartItemTotal,
  clearCart,
  reloadPage,
  isUrlExists,
  getPageHTML,
  isHasHorizontalScroll
}