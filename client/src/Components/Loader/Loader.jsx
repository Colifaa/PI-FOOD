 import React from "react";
import './Loader.css';

const curiosidad = [
    "El alcohol etílico (etanol) evapora a partir de 78,4ºC",
    "La nuez moscada es alucinógena, si consumes mucha, podrías sufrir los mismos efectos que el de una droga",
    "Mc Donald s vende 2,5 billones de hamburguesas cada año, esto son 80 hamburguesas cada segundo o 6,8 millones de hamburguesas al día",
    "El tomate tiene un 93% de agua",
    "En la cultura Azteca, los granos de cacao eran usados como moneda de cambio",
    "El color original de las zanahorias era púrpura",
    "El ser humano come carne desde hace 400 mil años",
    "Sin moscas no tendríamos chocolate",
    "La caída de los cocos mata más gente que los tiburones",
    "El arroz es el alimento más consumido del mundo",
    "Las manzanas te dan más energía que el café",
]

export default function Loader() {
    return (
        <div className="loadercontainer">
            <div className="contentloader">
                    <h1 className="cargando" >CARGANDO</h1>
                <span className="loader"></span>  
                <div className="sabias"><h2>Sabias qué?...</h2>
                    <h3>{curiosidad[Math.floor((Math.random() * curiosidad.length))]}</h3></div>

            </div>
        </div>

    )
}
 // MATH floor Devuelve el máximo entero menor o igual a un número.
 // MATH RANDOM devuelve un número incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango.
 // Dicho rango puede ser ampliado hasta los valores deseados.   
 // ENTONCES HAGO ESTO PARA QUE CUANDO RECORRA MI ARRAY ME TIRE UN NUMERO RANDOM EL CUAL VALE POR ALGUNA CURIOSIDAD
 


