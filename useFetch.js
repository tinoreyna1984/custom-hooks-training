import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  // hook para mantener la referencia cuando el componente esta montado
  const isMounted = useRef(true);
  /**
   * Inicializo los valores de state
   */
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  /**
   * Este useEffect controla el montaje del componente. Para el desmontado, cambia el estado
   * de la referencia
   */
  useEffect(() => {
    // no genera efecto
    return () => {
      isMounted.current = false;
    };
  }, []);

  /**
   * useEffect: cuando ocurra el renderizado, obtengo como efecto la data esperada.
   * La condicion que hace que ocurra una sola vez es que se conozca el url (el segundo
   * argumento con url en el arreglo)
   */
  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    }); // comienzo con los valores por defecto antes del cambio
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) { // ver el useRef y su useEffect asociado
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};
