import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import { createMockStore } from "./utils";
import { Application } from "../../src/client/Application";
import * as React from "react";

describe("Application navigation ", () => {
  beforeEach(()=>{
    const mockStore = createMockStore({ cart: {} });

    render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Application />
          </BrowserRouter>
        </Provider>
    );
  })
  describe("Exist all links in header ", () => {

    it('Catalog link', () => {
      expect(screen.getByRole("link", { name: /catalog/i })).not.toBeNull();
    })
    it('Delivery link', () => {
      expect(screen.getByRole("link", { name: /delivery/i })).not.toBeNull();
    })
    it('Contact link', () => {
      expect(screen.getByRole("link", { name: /contacts/i })).not.toBeNull();
    })
    it('Card link', () => {
      expect(screen.getByRole("link", { name: /cart/i })).not.toBeNull();
    })
  })

  it("Main logo is link to main page", () => {
    const homeLink = screen.getByRole("link", { name: /example store/i });
    expect(homeLink.getAttribute("href")).toBe("/");
  });
});