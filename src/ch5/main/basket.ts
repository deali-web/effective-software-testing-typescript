import { IProduct } from './types.ts';

const Basket = () => {
	let totalValue = 0;

	const basket: Map<IProduct, number> = new Map();

	const invariant = () => totalValue >= 0;

	const add = (product: IProduct, qtyToAdd: number) => {
		if (qtyToAdd <= 0) throw new Error('Quantity has to be greater than zero');

		const oldTotalValue = totalValue;

		const existingQuantity = basket.get(product) ?? 0;

		const newQuantity = existingQuantity + qtyToAdd;

		basket.set(product, newQuantity);

		const valueAlreadyInTheCart = product.getPrice() * existingQuantity;

		const newFinalValueForTheIProduct = product.getPrice() * newQuantity;

		totalValue =
			totalValue - valueAlreadyInTheCart + newFinalValueForTheIProduct;

		if (!basket.has(product))
			throw new Error('IProduct was not inserted in the basket');
		else if (totalValue <= oldTotalValue)
			throw new Error(
				'Total Value should be greater than previous total value',
			);
		else if (!invariant()) throw new Error('Invariant does not hold');
	};

	const remove = (product: IProduct) => {
		if (!product) throw new Error("Product can't be null");
		else if (!basket.has(product))
			throw new Error('Product must already be in the basket');

		const qty = basket.get(product) as number;

		totalValue = totalValue - product.getPrice() * qty;

		basket.delete(product);

		if (basket.has(product)) throw new Error('Product is still in the basket');
		else if (!invariant()) throw new Error('Invariant does not hold');
	};

	const getTotalValue = () => totalValue;

	const quantityOf = (product: IProduct) => {
		if (!basket.has(product))
			throw new Error('Product not found in the basket');

		return basket.get(product) as number;
	};

	const products = () => Array.from(basket.keys());

	const toString = () =>
		`BasketCase{totalValue=${totalValue}, basket=${basket}}`;

	return {
		add,
		remove,
		getTotalValue,
		quantityOf,
		products,
		toString,
	};
};

export default Basket;
