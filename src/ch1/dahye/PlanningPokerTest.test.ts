import { test, expect } from 'vitest';
import { Estimate } from '../main/Estimate.ts';
import { PlanningPoker } from '../main/PlanningPoker.ts';

test('reject empty list', () => {
	expect(() => new PlanningPoker().identifyExtremes([])).toThrowError(
		'There has to be more than 1 estimate in the list',
	);
});

test('reject single item list', () => {
	expect(() =>
		new PlanningPoker().identifyExtremes([new Estimate('dahye', 10)]),
	).toThrowError('There has to be more than 1 estimate in the list');
});

test('two Estimates', () => {
	expect(
		new PlanningPoker().identifyExtremes([
			new Estimate('marico', 10),
			new Estimate('frank', 5),
		]),
	).toEqual(['marico', 'frank']);
});

test('many Estimates', () => {
	expect(
		new PlanningPoker().identifyExtremes([
			new Estimate('frank', 5),
			new Estimate('aria', 7),
			new Estimate('marico', 10),
		]),
	).toEqual(['marico', 'frank']);
});

test('developers with same estimates', () => {
	expect(
		new PlanningPoker().identifyExtremes([
			new Estimate('frank1', 10),
			new Estimate('frank2', 5),
			new Estimate('frank3', 10),
			new Estimate('frank4', 7),
			new Estimate('frank5', 5),
		]),
	).toEqual(['frank1', 'frank2']);
});

test('all developers with the same estimates', () => {
	expect(
		new PlanningPoker().identifyExtremes([
			new Estimate('frank1', 10),
			new Estimate('frank2', 10),
			new Estimate('frank3', 10),
			new Estimate('frank4', 10),
			new Estimate('frank5', 10),
		]),
	).toEqual([]);
});

test('in any order', () => {
	let estimates = makeEstimates();
	estimates.push(new Estimate('MrLowEstimate', 100));
	estimates.push(new Estimate('MrHighEstimate', 1));
	estimates = shuffle(estimates);

	expect(new PlanningPoker().identifyExtremes(estimates)).toEqual([
		'MrLowEstimate',
		'MrHighEstimate',
	]);
});

function shuffle(array: Estimate[]) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

const makeEstimates = () => {
	const randInt = Math.floor(Math.random() * 100);
	const randInt2to99 = Math.floor(Math.random() * 98) + 2;
	return new Array(randInt).fill(0).map((_, i) => {
		return new Estimate(`frank${i}`, randInt2to99);
	});
};
