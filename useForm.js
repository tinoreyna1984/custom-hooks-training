import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  /**
   * Este handler recibe el argumento de eventos, pero cada evento es desestructurado
   * y se toma el objeto target (e.target). Y al mismo tiempo, usamos la propiedad name
   * para convertirla en la variable name del objeto y asignarle el valor ingresado (target.value)
   */
  const handleInputChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setValues({
      ...values, // las demas propiedades quedan inmutables
      [name]: value, // seria algo como name: valorIngresado
    });
  };

  // limpia el formulario
  const reset = () => {
    setValues(initialState);
  }

  return {...values, values, handleInputChange, reset};
};
