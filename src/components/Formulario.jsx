import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const Formulario = ({setBusqueda, setCategoria}) => {
/*     const [input, setInput] = useState("");
    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!input.trim()) return;
        setBusqueda(input);
        setInput("");
        setCategoria((categorias) => {
          if(!categorias.includes(input.trim().toLowerCase())){
            return [...categorias, input.trim().toLowerCase()]
          }
          else{
            return [...categorias]
          }}
        )
        console.log("Has hecho submit")
    } */
  const { formulario, handleChange, handleSubmitForm, reset } = useForm({buscar: ""});

  const handleSubmit = (ev) => {
    handleSubmitForm(ev);

    const input = formulario.buscar.trim();
    console.log(formulario.buscar)
    if (!input) return;

    setBusqueda(input);

    setCategoria((categorias) => {
      const lower = input.toLowerCase();
      return categorias.includes(lower) ? categorias : [...categorias, lower];
    });

    reset();
  };
    return (
    <>
      <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="buscar"
            name="buscar"
            value={formulario.buscar}
            onChange={handleChange}
            />
            <button  className="btnBuscar" type="submit">Buscar</button>
      </form>
    </>
  );
};
