import React, { useEffect } from "react";
import todos from "../../Mocks";
import { useDispatch, useSelector } from "../../Store";
import { getInitTodos } from "../../Slices/todoSlice";
import TodosViewList from "./TodosViewList";
const Todos = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todos.todos);

  useEffect(() => {
    if (!todosState) {
      dispatch(getInitTodos(todos));
    }
  }, [dispatch, todosState]);

  if (!todosState) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {todosState && todosState.length > 0 && (
        <TodosViewList todos={todosState} />
      )}
    </div>
  );
};

export default Todos;
