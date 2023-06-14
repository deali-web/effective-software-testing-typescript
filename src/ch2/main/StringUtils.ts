export class StringUtils {
	private static readonly EMPTY_STRING_ARRAY: string[] = [];

	private static isEmpty = (str: string | Array<unknown>) => str.length === 0;

	static substringBetween(str: string, open: string, close: string) {
		// str 을 string 으로 타이핑 했으므로 str 애 댜헌 null 체크는 제외했습니다.
		if (this.isEmpty(open) || this.isEmpty(close)) {
			return null;
		}

		const strLen = str.length;
		if (strLen === 0) {
			return this.EMPTY_STRING_ARRAY;
		}

		const closeLen = close.length;
		const openLen = open.length;
		const list: string[] = [];

		let pos = 0;
		while (pos < strLen - closeLen) {
			let start = str.indexOf(open, pos);
			if (start < 0) {
				break;
			}
			start += openLen;

			const end = str.indexOf(close, start);
			if (end < 0) {
				break;
			}
			list.push(str.substring(start, end));
			pos = end + closeLen;
		}

		if (this.isEmpty(list)) {
			return null;
		}

		return list;
	}
}

export const StringUtilsFunc = () => {
	return {};
};

const EMPTY_STRING_ARRAY: string[] = [];
const isEmpty = (str: string | Array<unknown> | null): str is '' | null =>
	str?.length === 0 || str === null;

StringUtilsFunc.substringBetween = (
	str: string | null,
	open: string | null,
	close: string | null,
) => {
	if (str === null || isEmpty(open) || isEmpty(close)) {
		return null;
	}

	const strLen = str.length;
	if (strLen === 0) {
		return EMPTY_STRING_ARRAY;
	}

	const closeLen = close.length;
	const openLen = open.length;
	const list: string[] = [];

	let pos = 0;
	while (pos < strLen - closeLen) {
		let start = str.indexOf(open, pos);
		if (start < 0) {
			break;
		}
		start += openLen;

		const end = str.indexOf(close, start);
		if (end < 0) {
			break;
		}
		list.push(str.substring(start, end));
		pos = end + closeLen;
	}

	if (isEmpty(list)) {
		return null;
	}

	return list;
};
