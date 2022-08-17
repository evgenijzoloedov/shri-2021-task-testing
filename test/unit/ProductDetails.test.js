import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ProductDetails } from "../../src/client/components/ProductDetails";
import { createMockStore, createProduct } from "./utils";
import * as React from "react";
import {BrowserRouter} from "react-router-dom/cjs/react-router-dom";
import {Application} from "../../src/client/Application";

describe("ProductDetails component", () => {
  const mockProduct = createProduct(0, true);
  const mockStore = createMockStore({ cart: {} });
  beforeEach(()=>{
    render(
        <Provider store={mockStore}>
          <ProductDetails product={mockProduct} />
        </Provider>
    );
  })

  describe('exist', function () {
    it("name", ()=>{
      expect(screen.queryByText(mockProduct.name)).not.toBeNull();
    })
    it("description", ()=>{
      expect(screen.queryByText(mockProduct.description)).not.toBeNull();
    })
    it("price", ()=>{
      expect(screen.queryByText(`$${mockProduct.price}`)).not.toBeNull();
    })
    it("color", ()=>{
      expect(screen.queryByText(mockProduct.color)).not.toBeNull();
    })
    it("material", ()=>{
      expect(screen.queryByText(mockProduct.material)).not.toBeNull();
    })
    it("button", ()=>{
      expect(screen.getByRole("button", { name: /add to cart/i })).not.toBeNull();
    })
  });


});
