import { describe, it, expect } from 'vitest';
import { CartItem } from '../main/CartItem.ts';
import { ShoppingCart } from '../main/ShoppingCart.ts';

describe('test 2-15', () => {
	const cart = new ShoppingCart();

	it('no items', () => {
		expect(cart.totalPrice()).toEqual(0);
	});

	it('items in the cart', () => {
		cart.add(new CartItem('TV', 1, 120));
		expect(cart.totalPrice()).toEqual(120);

		cart.add(new CartItem('DVD', 2, 2.5));
		expect(cart.totalPrice()).toEqual(120 + 2.5 * 2);
	});
});
