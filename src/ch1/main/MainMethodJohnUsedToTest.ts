import { Estimate } from './Estimate.js';
import { PlanningPoker } from './PlanningPockerByJohn.js';

const MainMethodJohnUsedToTest = () => {
	const test1 = () => {
		const developers = PlanningPoker([
			Estimate('Mauricio', 16),
			Estimate('Frank', 8),
			Estimate('Arie', 2),
			Estimate('Andy', 4),
		]);

		console.log(developers.toString());
	};

	const test2 = () => {
		const developers = PlanningPoker([
			Estimate('Mauricio', 2),
			Estimate('Frank', 4),
			Estimate('Arie', 8),
			Estimate('Andy', 16),
		]);

		console.log(developers.toString());
	};

	test1();
	test2();
};

MainMethodJohnUsedToTest();
