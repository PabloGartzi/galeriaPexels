import { useState } from "react";

export const useForm = (formInicial = {}) => {
    const [formulario, setFormulario] = useState(formInicial);

    // Serializa el formulario usando FormData
    const serializarFormulario = (form) => {
        const formData = new FormData(form);
        const objetoCompleto = {};

        for (let [name, value] of formData) {
        objetoCompleto[name] = value;
        }
        return objetoCompleto;
    };

    const handleSubmitForm = (ev) => {
        ev.preventDefault();
        const formSerializado = serializarFormulario(ev.target);
        setFormulario(formSerializado);
    };

    const handleChange = ({ target }) => {
        setFormulario({
        ...formulario,
        [target.name]: target.value,
        });
    };

    const reset = () => {
        setFormulario(formInicial);
    };

  return { formulario, handleChange, handleSubmitForm, reset };
};
