import { useEffect, useState } from "react";
import { createClient } from "pexels";

import {Card} from './Card'
import {Paginacion} from './Paginacion'

const API_KEY = "l7j5PBtSkZYjGj9uxxw8oqVZE4XFAEt2EV7kp172g5004Nj2t0RtK4aB";

export const GridGalery = ({categoria}) => {
    const perPage = 15
    const [fotos, setFotos] = useState([]);
    const [pagina, setPagina] = useState(1); // página actual
    useEffect(() => {
        if (!categoria) return;
        const client = createClient(API_KEY);
        console.log(categoria)
        client.photos
        .search({ query: categoria, per_page: perPage, page: pagina  })
        .then((result) => {
            setFotos(result.photos);
        })
        .catch((error) => console.error(error));
    }, [categoria, pagina]);

  return (
    <>
    <div className="gallery">
        {fotos.map((foto) => (
            <Card foto={foto}/>
        ))}
    </div>
    <div className="paginacion">
        <Paginacion pagina={pagina} perPage={perPage}
    />
    </div>
    </>
  );
}