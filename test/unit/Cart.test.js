import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createMockStore, createProducts} from "./utils";
import {Cart} from "../../src/client/pages/Cart";
import * as React from "react";

describe("Cart page", () => {

    describe("Products items", () => {
        const mockProducts = createProducts(3).map((product) => ({
            ...product,
            count: product.id,
            total: product.price * product.id,
        }));
        const mockStore = createMockStore({
            cart: mockProducts.reduce((acc, product) => ({
                ...acc,
                [product.id]: product
            }), {}),
        });


        it('Correct show product attributes', () => {
            const {container} = render(
                <Provider store={mockStore}>
                    <Cart/>
                </Provider>
            );
            const cartItems = Array.from(
                container.querySelectorAll("table tr[data-testid]")
            );
            const cartItemsData = cartItems.map((cartItem) => ({
                id: +cartItem.getAttribute("data-testid"),
                count: +cartItem.querySelector(".Cart-Count").textContent,
                name: cartItem.querySelector(".Cart-Name").textContent,
                price: +cartItem.querySelector(".Cart-Price").textContent.slice(1),
                total: +cartItem.querySelector(".Cart-Total").textContent.slice(1),
            }));
            expect(cartItemsData).toEqual(mockProducts);
        })
        it('Total sum is correctly summed', () => {
            const {container} = render(
                <Provider store={mockStore}>
                    <Cart/>
                </Provider>
            );
            const orderPriceElement = container.querySelector(".Cart-OrderPrice");
            const totalPrice = +orderPriceElement.textContent.slice(1)
            const expectedPrice = mockProducts.reduce(
                (sum, product) => sum + product.total,
                0
            );

            expect(totalPrice).toEqual(expectedPrice);
        })
    })

});
