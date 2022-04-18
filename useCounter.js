/**
 * useCounter: custom hook que nos permite trabajar un contador de forma reutilizable.
 * Devuelve el estado, el incremento, el decremento y el reseteo
 */

import { useState } from "react"

export function useCounter(initialState = 10) {
    const [counter, setCounter] = useState(initialState)
    
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(initialState);
    }

    return {counter, increment, decrement, reset};
}
