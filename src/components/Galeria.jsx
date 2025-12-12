import { useEffect, useState } from "react";
import {Formulario} from "./Formulario.jsx"
import {GridGalery} from "./GridGalery.jsx"
import { Footer } from "./Footer.jsx";

export const Galeria = () => {
    let [busqueda, setBusqueda] = useState("");
    let [categorias, setCategoria] = useState([])
    return (    
        <>
        <Formulario setBusqueda={setBusqueda} setCategoria={setCategoria}/>
        <h2>Las categorías son:</h2>
    
        {categorias.map((cat) => (
            <p key={cat}>{cat}</p>
        ))}
        {categorias.map((cat) => (
            <GridGalery key={cat} categoria={cat}/>
        ))}
        <GridGalery busqueda={busqueda}/>
        <Footer/>
        </>
    )
}


        // {categorias.map(()=> {
        //     /*GRIDGALERY*/
        //         /* cards */
        //         /* paginación */
        // })}