import { useEffect, useReducer } from "react";

const initialState = [];

const init = () => JSON.parse(localStorage.getItem("todos")) || initialState;

export function useTodos(todoReducer) {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    console.log(todo);
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const onDeleteTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const onToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return { todos, handleAddTodo, onDeleteTodo, onToggleTodo };
}
