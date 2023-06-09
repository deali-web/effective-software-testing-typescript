import type { CartItem } from './CartItem.ts';

export class ShoppingCart {
	private items: Array<CartItem> = [];

	add(item: CartItem) {
		this.items.push(item);
	}

	totalPrice() {
		let totalPrice = 0;
		for (const item of this.items) {
			totalPrice += item.getUnitPrice() * item.getQuantity();
		}
		return totalPrice;
	}
}
