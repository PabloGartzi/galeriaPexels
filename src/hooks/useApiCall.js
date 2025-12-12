import { useState, useEffect } from "react";
import { createClient } from "pexels";


export const useApiCall = (categoria, perPage, pagina) => {
    const [fotos, setFotos] = useState([]);
    const [totalResultados, setTotalResultados] = useState(0);  // Total de resultados
    const [cargando, setCargando] = useState(true);

    const API_KEY = "l7j5PBtSkZYjGj9uxxw8oqVZE4XFAEt2EV7kp172g5004Nj2t0RtK4aB";
    const client = createClient(API_KEY);
    
    useEffect(() => {
        if (!categoria) return;

        setCargando(true);
        client.photos
        .search({ query: categoria, per_page: perPage, page: pagina })
        .then((result) => {
            setFotos(result.photos);
            setTotalResultados(result.total_results);
            setCargando(false);
        })
        .catch((error) => {
            console.error(error);
            setCargando(false);
        });
    }, [categoria, perPage, pagina]);
    return { fotos, totalResultados, cargando };
}
