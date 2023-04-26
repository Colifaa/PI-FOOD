import axios from "axios";

export function getRecipes(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/recipe",{});
        return dispatch({
        type:'GET_RECIPES',
        payload: json.data
        })
    }
}

export function filterByDiets(payload){
    return ({
        type: 'FILTER_BY_DIETS',
        payload
    })
}

export function orderByName(payload){
    return ({
        type: 'SORT_BY_NAME',
        payload
    })
}

export function orderByHS(payload){
    return ({
        type: 'SORT_BY_HS',
        payload
    })
}

export function getNameRecipe(payload){
    return async function (dispatch){
        try {
            var json= await axios.get('http://localhost:3001/recipe?name=' + payload)
            return dispatch({
                type: "GET_NAME_RECIPE",
                payload: json.data
            })
        } catch (error) {
            alert("No se encontró la receta")
        }
    }
}
export function getDiets(){
    return async function(dispatch){
        var json = await axios.get ("http://localhost:3001/diet",{});
        return dispatch({
            type:'GET_DIETS',
            payload: json.data
        })
    }
}

export function getRecipebyID(id){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/recipe/${id}`,{});
        return dispatch({
            type: 'GET_RECIPE_BY_ID',
            payload:json.data
        })
    }
}

export function postRecipes(payload){
    return async function(dispatch){
        var json = await axios.post("http://localhost:3001/recipe",payload);
        return dispatch({
            type: 'POST_RECIPE',
            payload:json.data
        })
    }
}

    
export function Loading(){
    return{type:'LOADER'};
}



export function filterByHs(payload){
   console.log(payload)
    return ({
        type: 'FILTER_BY_HS',
        payload
    })
}
 
export function resetState(payload){
    return ({
        type: 'RESET_STATE',
        payload
    })

    

}
export function resetError(payload){
    return ({
        type: 'RESET_ERROR',
        payload
    })
}










// EN REDUCER ARMO LA LOGICA DE FILTER



/* La operación dispatch, recibe y envía un objeto que describe los cambios que queremos hacer,
 a estos objetos descriptores de cambios los llamamos Actions, o acciones.
 Todos los actions contienen una propiedad type,
  que identifica el tipo de evento que se realizará.*/

