// Global app controller

import Search from "./modules/Search.js";
import { clearLoader, elements,renderLoader } from "./views/base.js";
import * as searchView  from "./views/searchView.js";


/* 
serch object
Current recipe object
Shoping list object
liked recipe
*/
const state = {};

/* serch controler */


const controlSearch = async (e) => {
    e.prevenDefault()

    const query = searchView.getInput();

    if(query){
        // 2. new serch oject result
        state.search = new Search(query);

        //3. prepear UI for result
        searchView.clearInput()
        searchView.clearResult()
        renderLoader(elements.searchResList)


        try {
            // 4.Serch API
            await state.search.getResult()
        } catch (error) {
            alert("Search Error")
        }


        //5.RENDER RESULT ON UI
       

        searchView.renderResult(state.search.result)
        clearLoader()
        console.log(state)
    }


   
}

// 1) get query from view

// 2) 


elements.searchForm.addEventListener("submit", controlSearch)

elements.searchResPage.addEventListener("click", e=>{
    const btn = e.target.closest(".btn-inline");

    if(btn){
        const goto = +btn.dataset.goto;
        searchView.clearResult()
        
        searchView.renderResult(state.search.result, goto)
    }
})
