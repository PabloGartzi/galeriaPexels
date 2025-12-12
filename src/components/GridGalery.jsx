import { useEffect, useState } from "react";
import { createClient } from "pexels";

import {Card} from './Card'
import {Paginacion} from './Paginacion'

const API_KEY = "l7j5PBtSkZYjGj9uxxw8oqVZE4XFAEt2EV7kp172g5004Nj2t0RtK4aB";

export const GridGalery = ({categoria}) => {
    const perPage = 15
    const [fotos, setFotos] = useState([]);
    const [cate, setCate] = useState(categoria)
    const [pagina, setPagina] = useState(1); // página actual
    const [totalResultados, setTotalResultados] = useState(0);  // Total de resultados
    useEffect(() => {
        if (!categoria) return;
        const client = createClient(API_KEY);
        console.log(categoria)
        client.photos
        .search({ query: categoria, per_page: perPage, page: pagina })
        .then((result) => {
            setTotalResultados(result.total_results);
            setFotos(result.photos);
        })
        .catch((error) => console.error(error));
    }, [cate, pagina]);

  return (
    <>
    <div className="gallery">
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