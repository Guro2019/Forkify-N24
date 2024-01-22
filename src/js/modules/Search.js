/* import axios from "axios" */

export default class Search {
    constructor(query){
        this.query = query
    }

    async getResults(){
        try {
            const result = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${this.query}`);
            const res = await result.json()
            this.result = res.recipes;
        } catch (error) {
            alert("Search Error")
        }

        
    }
}