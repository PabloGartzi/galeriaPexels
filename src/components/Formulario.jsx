import { useState } from "react";

export const Formulario = ({setBusqueda, setCategoria}) => {
    const [input, setInput] = useState("");
    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!input.trim()) return;
        setBusqueda(input);
        setInput("");
        setCategoria((categorias) => {return [...categorias, input]})
        console.log("Has hecho submit")
    }
    return (
    <>
      <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="buscar"
            name="buscar"
            value={input}
            onChange={(ev) => {console.log("Has actualizado")
                return setInput(ev.target.value)}}
            />
            <button  className="btnBuscar" type="submit">Buscar</button>
      </form>
    </>
  );
};
