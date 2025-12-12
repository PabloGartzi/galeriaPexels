export const Paginacion = ({ pagina, perPage, totalResultados, setPagina }) => {
    const totalPaginas = Math.ceil(totalResultados / perPage);
    const principio = Math.max(1, pagina - 5);
    const fin = Math.min(totalPaginas, pagina + 5);
    const paginas = [];
    for (let i = principio; i <= fin; i++) {
        paginas.push(i);
    }
    return (
    <div className="paginacion-container">
        <button
        disabled={pagina == 1}
        onClick={() => setPagina(1)}
        >
        Primera página
        </button>
        <button
        disabled={pagina == 1}
        onClick={() => setPagina(pagina - 1)}
        >
        Anterior
        </button>

        {paginas.map((numPag) => (
            <button
                key={numPag}
                onClick={() => setPagina(numPag)}
                disabled={numPag == pagina}
            >
            {numPag}
            </button>
        ))}

        <button
        disabled={pagina == totalPaginas}
        onClick={() => setPagina(pagina + 1)}
        >
        Siguiente
        </button>
        <button
        disabled={pagina == totalPaginas}
        onClick={() => setPagina(totalPaginas)}
        >
        Última página
        </button>

    </div>
    );
};
