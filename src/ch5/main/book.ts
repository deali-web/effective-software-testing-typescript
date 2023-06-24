class Book {
	readonly title: string;
	readonly author: string;
	readonly qtyOfPages: number;

	constructor(title: string, author: string, qtyOfPages: number) {
		this.title = title;
		this.author = author;
		this.qtyOfPages = qtyOfPages;
	}

	getTitle() {
		return this.title;
	}

	getAuthor() {
		return this.author;
	}

	getQtyOfPages() {
		return this.qtyOfPages;
	}

	toString() {
		return `Book={title='${this.title}', author='${this.author}', qtyOfPages=${this.qtyOfPages}}`;
	}
}

export default Book;
