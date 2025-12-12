import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    setCargando(true);
    setError(null);

    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la petición");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        console.log("Error");
        setError(err)
      })
      .finally(() => setCargando(false))
  }, [url]);
  return { data, cargando };
};
