import { useEffect, useRef } from "react";
/**
 * useDidMountEffect se basa en el componentDidMount de React a través del
 * useEffect más el hook useRef para prevenir el primer render.
 * Realiza prácticamente lo mismo que useEffect pero de forma más razonable.
 */

export const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};
