import { describe, it, expect } from 'vitest';

import { ShoppingCartFunc } from '../main/ShoppingCart';
import { CartItem } from '../main/CartItem.ts';

describe('2.15', () => {
	const cart = ShoppingCartFunc();

	it('noItems', () => {
		expect(cart.totalPrice()).toEqual(0);
	});

	it('itemsInTheCart', () => {
		cart.add(new CartItem('TV', 1, 120));
		expect(cart.totalPrice()).toEqual(120);
		cart.add(new CartItem('Chocolate', 2, 2.5));
		expect(cart.totalPrice()).toEqual(120 + 2 * 2.5);
	});
});
