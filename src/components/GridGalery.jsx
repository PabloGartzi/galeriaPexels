import { useEffect, useState } from "react";
import {useApiCall} from "../hooks/useApiCall"
import {Card} from './Card'
import {Paginacion} from './Paginacion'
import { useFetch } from "../hooks/useFetch";


export const GridGalery = ({categoria}) => {
    const perPage = 15
    const [cate, setCate] = useState(categoria)
    const [pagina, setPagina] = useState(1); // página actual
    
    const { fotos, totalResultados, cargando } = useApiCall(cate, perPage, pagina);

//ESTO ES CON EL useFetch
/*     const API_KEY = "l7j5PBtSkZYjGj9uxxw8oqVZE4XFAEt2EV7kp172g5004Nj2t0RtK4aB";
    const url = `https://api.pexels.com/v1/search?query=${categoria}&per_page=${perPage}&page=${pagina}`;
    const { data, cargando } = useFetch(url, { 
        headers: { Authorization: API_KEY } 
    });
    const fotos = data?.photos || [];
    const totalResultados = data?.total_results || 0; */
  return (
    <>
    <div className="galeria">
        {categoria && cargando && <p>CARGANDO FOTOS...</p>}
        {fotos.map((foto) => (
            <Card key={foto.id} foto={foto}/>
        ))}
    </div>
    {totalResultados > 0 && (
        <div className="paginacion">
            <Paginacion pagina={pagina} perPage={perPage} totalResultados={totalResultados} setPagina={setPagina}/>
        </div>
    )}
    </>
  );
}