import { SavedArticles } from "./saved-articles"

//this class has all the interactions that use can have
export class Interactions {

    savedArticles: SavedArticles

    constructor() {
        this.savedArticles = new SavedArticles()
    }

    get getSavedArticles() {
        return this.savedArticles.getArticles
    }

}