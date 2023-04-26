
const initialState = {
    recipes: [],
    recipes2: [],
    recipeByID: {},
    diets:[],
    loader: true,
    error:"",
}


function rootReducer(state = initialState, action) {
   console.log("aca el action" , action.payload)
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                recipes2: action.payload
            }
        case 'FILTER_BY_DIETS':
return {
    ...state,
    recipes: action.payload
}

           /* const result = state.recipes;
            if (action.payload === "all") {
                return {
                    ...state,
                    recipes: result,
                }
            } else {
                const ff = result.filter(r => r.diets?.some((d) => d === action.payload))
               
                return {
                    ...state,
                    recipes: ff,
                }
            }; */

            case 'FILTER_BY_HS':
                let estado = state.recipes2
    console.log("hola", typeof action.payload);
                console.log(estado.find(e => e.healthscore === Number (action.payload)));

                if(estado.find(e => e.healthscore === Number (action.payload))){
        
                    console.log("matche");
                    return {
                    ...state,
                    recipes: state.recipes2.filter(e => e.healthscore === Number (action.payload))
                }
                }else {
                
                    console.log("no matchea")
                    
                    return{
                   ...state,
                    recipes: state.recipes2, 
                    error: "hs no encontrado" 
                    }

                }
                 // el elemento.hs es igual al action payload

                 
               


            /*    const filterHs = state.recipes.healthscore
                //healthscore
                const statusFilter =
                action.payload === healthscore
                console.log(healthscore) 
                ? filterHs.filter((e) => e.recipes.healthscore.length <= 61)
                : filterHs
                return {
                    ...state,
                    recipes: statusFilter
                }*/
                

        case 'SORT_BY_NAME':
            let arrOrdenado = action.payload === "asc" ?
                state.recipes.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                }) : state.recipes.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                recipes: arrOrdenado
            }
        case 'SORT_BY_HS':
            let sortedHS = action.payload === "hasc" ?
                state.recipes.sort(function (a, b) {
                    if (a.healthscore > b.healthscore) {
                        return 1;
                        
                    }
                    if (b.healthscore > a.healthscore) {
                        return -1;
                    }
                    return 0;
                }) : state.recipes.sort(function (a, b) {
                    if (a.healthscore > b.healthscore) {
                        return -1;
                    }
                    if (b.healthscore > a.healthscore) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                recipes: sortedHS
            }
        case 'GET_RECIPE_BY_ID':
            return {
                ...state,
                recipeByID: action.payload
            }
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload
            }
        case 'GET_NAME_RECIPE':
            return {
                ...state,
                recipes: action.payload
            }
        case 'POST_RECIPE':
            return {
                ...state
            }
        case 'LOADER':
            const loader = state.loader
            if (loader === true) {
                return {
                    ...state,
                    loader: false,
                }
            } else {
                return {
                    ...state,
                    loader: true,
                }

            }
            case 'RESET_STATE': 
            return {
                ...state,
               recipes:action.payload
            }
            case 'RESET_ERROR':
                return{
                    ...state,
                    error:""
                }
            

        default:
            return state;
    }
}

export default rootReducer;




//El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.