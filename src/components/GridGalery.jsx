import { useEffect, useState } from "react";
import {useApiCall} from "../hooks/useApiCall"
import {Card} from './Card'
import {Paginacion} from './Paginacion'


export const GridGalery = ({categoria}) => {
    const perPage = 15
    const [cate, setCate] = useState(categoria)
    const [pagina, setPagina] = useState(1); // página actual
    
    const { fotos, totalResultados, cargando } = useApiCall(cate, perPage, pagina);
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