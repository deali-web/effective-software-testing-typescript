import { IProduct } from './types.ts';

const BasketSkeleton = () => {
	const totalValue = 0.0;

	const basket: Map<IProduct, number> = new Map();

	const invariant = () => totalValue >= 0;

	const add = (product: IProduct, qtyToAdd: number) => {
		if (!product) throw new Error('Product is required');
		else if (qtyToAdd <= 0)
			throw new Error('Quantity has to be greater than zero');

		const oldTotalValue = totalValue;

		if (!basket.has(product))
			throw new Error('Product was not inserted in the basket');
		else if (totalValue <= oldTotalValue)
			throw new Error(
				'Total value should be greater than previous total value',
			);
		else if (!invariant()) throw new Error('Invariant does not hold');
	};

	const remove = (product: IProduct) => {
		if (!product) throw new Error("Product can't be null");
		else if (!basket.has(product))
			throw new Error('Product must already be in the basket');

		if (basket.has(product)) throw new Error('Product is still in the basket');
		else if (!invariant()) throw new Error('Invariant does not hold');
	};

	return {
		add,
		remove,
	};
};

export default BasketSkeleton;
