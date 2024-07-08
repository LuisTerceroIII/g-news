import uuid from 'react-native-uuid';
import { Article } from './article';

export class ArticlesGroup {

	id: string
	name: string;
	description: string
	articles: Article[]

	constructor(id = "", name = "", description = "", articles = []) {
		this.id = String(uuid.v4())
		this.name = name
		this.description = description
		this.articles = articles
	}

	get getArticles() {
		return this.articles
	}

	hasArticle(articleId: string) {
		return this.articles?.find(article => article?.id === articleId) != null
	}
};