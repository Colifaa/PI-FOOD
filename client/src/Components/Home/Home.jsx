
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, filterByDiets, getDiets, orderByName, orderByHS, Loading, filterByHs, resetState, resetError } from '../../actions';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css'

export default function Home() {

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)
    
    const errorMsg = useSelector((state) => state.error)
    const diets = useSelector((state) => state.diets)
    const loader = useSelector(state => state.loader)
    const copia = useSelector (state => state.recipes2)

    const [currentPage, setCurrentPage] = useState(1)
    const [orden, setOrden] = useState('')

   
    const [healthS ,setHealthS] = useState(0)


    const recipesPerPage = 9;
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
   

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect( () => {
        dispatch(Loading());
        dispatch(getRecipes());
        dispatch(getDiets());
        dispatch(Loading());
    }, [dispatch])



    function handleCLick(e) {
        e.preventDefault();
        dispatch(Loading());
        setCurrentPage(1);
        dispatch(getRecipes());
        dispatch(Loading());
    }

  function handleFilterDiets(e) {
        e.preventDefault();
        if(e.target.value === "Todos los tipos de receta"){
         dispatch(resetState(copia));
        }else{
            let result = copia.filter(r => r.diets?.some((d) => d === e.target.value))
            dispatch(filterByDiets(result))
            setCurrentPage(1);
        

        }
       /* function handleDelete(e){
            e.preventDefault();
            dispatch(borrar)
        }
        */
       
        
    }
     function handleFilterHs(e) {
       
        e.preventDefault();
        if(e.target.value == 0){
            dispatch(resetState(copia))
        }else{
           dispatch(filterByHs(healthS))

        }
    }
    if (errorMsg !== "") {window.alert(errorMsg)
    dispatch(resetError())}
    
    



    function handleSortName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setOrden(`Ordenado ${orden}`)
    }

    function handleSortHS(e) {
        e.preventDefault();
        dispatch(orderByHS(e.target.value))
        setOrden(`Ordenado ${orden}`)
    }
    if (loader === true) {
        return (
            <div className='main'>
                <div className="buttontopcont">
                    <Link to='/createrecipe'><button >Crear Receta</button></Link>
                    <button className='buttonrecet' onClick={e => { handleCLick(e) }}>
                        Restablecer
                    </button>
                </div>
                <div className='searchbarcontainer'>
                    <SearchBar 
                    paginado={paginado}/>
                </div>
                <div className='filterselects'>
                    <select className='classic' onChange={e => handleSortName(e)}>
                        <option value="">Orden Alfabético</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                    <select className='classic' onChange={e => handleFilterDiets(e)}>
                        <option value="Todos los tipos de receta">Todos los tipos de receta</option>
                        {diets?.map((e) => {
                            return (
                                <option value={e.name}
                                 key={e.id}
                                 >{e.name}
                                 </option>)
                        })}
                    </select>
                    <select className='classic' onChange={e => handleSortHS(e)}>
                        <option value="">Orden por HS</option>
                        <option value="hasc">HS Ascendente</option>
                        <option value="hdesc">HS Descendente</option>
                    </select>
        
                 
                   <form onSubmit={handleFilterHs}>
                    <input className='HS' min={0} max={60} type="number" onChange={(e) => setHealthS(e.target.value)}/>
                    <button className='classicHS' type='submit'>filtrarHS</button>

                   </form>
                   


                        {/* {allRecipes?.map((e) => { 
                            return (
                                <option value={e.healthscore}

                                 >{e.healthscore}
                                 </option>)
                        })} */}
            
                   
                </div>
                <Paginado className="numspags"
                    currentPage={currentPage}
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado} />

                <div className='cards'>
                    {currentRecipes?.map(e => {
                        return (
                            <Card id={e.id}
                             name={e.name} 
                             image={e.image}
                            diets={e.diets}
                            key={e.id}
                            healthscore={e.healthscore} />
                        )
                    })}

                </div>
                <Paginado className="numspags"
                    currentPage={currentPage}
                    recipesPerPage={recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado} />
           
            </div>

        )
    } else {
        return (
            <Loader />
        )


    }
}


    


/* 
en el segundo DIV hago un filtrado
- Buscar recetas
- Filtrarlos / Ordenarlos
- Crear nuevas recetas propias

*/
