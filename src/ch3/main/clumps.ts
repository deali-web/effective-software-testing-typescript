const clumps = () => {
	const countClumps = (nums: number[]) => {
		if (!nums.length) return 0;
		let count = 0;
		let [prev] = nums;
		let inClump = false;
		for (let i = 1; i < nums.length; i++) {
			if (nums[i] === prev && !inClump) {
				inClump = true;
				count += 1;
			}
			if (nums[i] !== prev) {
				prev = nums[i];
				inClump = false;
			}
		}
		return count;
	};
	return {
		countClumps,
	};
};

export default clumps;
