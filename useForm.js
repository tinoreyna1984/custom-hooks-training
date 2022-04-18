import { useState } from "react";

/**
 * Formulario reutilizable hecho a base del hook useState
 */

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  /**
   * Este handler recibe el argumento de eventos, pero cada evento es desestructurado
   * y se toma el objeto target (e.target). Y al mismo tiempo, usamos la propiedad name
   * para convertirla en la variable name del objeto y asignarle el valor ingresado (target.value)
   */
  const handleInputChange = ({ target }) => {
    setValues({
      ...values, // las demas propiedades quedan inmutables
      [target.name]: target.value, // seria algo como name: valorIngresado
    });
  };

  // reset: limpiar los campos ingresados
  const reset = () => {
    setValues(initialState);
  }

  // devolvemos los valores captados por este hook a algun formulario
  return [values, handleInputChange, reset];
};
