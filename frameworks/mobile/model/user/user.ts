import { Auth } from "./auth";
import { Interactions } from "./interactions/interactions";

export class User {

    #fullName: string;
    #interactions: Interactions
    #auth: Auth

    constructor(fullName: string="", username: string="") {
        this.#fullName = fullName
        this.#interactions = new Interactions()
        this.#auth = new Auth(false)
    }

    get getFullName() {
        return this.#fullName
    }  

    get getUserInteractions(): Interactions {
        return this.#interactions
    }

    get getUserAuth() {
        return this.#auth
    }
}