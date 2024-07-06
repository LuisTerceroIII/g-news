import uuid from 'react-native-uuid';

export class Source {
	id: string;
	name: string;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}
}

export class Article {
	title: string;
	description: string;
	content: string;
	url: string;
	image: string;
	publishedAt: string;
	source: Source;

	constructor(
		title: string,
		description: string,
		content: string,
		url: string,
		image: string,
		publishedAt: string,
		source: Source
	) {
		this.title = title;
		this.description = description;
		this.content = content;
		this.url = url;
		this.image = image;
		this.publishedAt = publishedAt;
		this.source = source;
	}
}


export class ArticlesGroup {
	constructor(id = "", name = "", description = "", articles = []) {
		this.id = String(uuid.v4())
		this.name = name,
			this.description = description
		this.articles = articles
	}
	id: string
	name: string;
	description: string
	articles: Article[]
};