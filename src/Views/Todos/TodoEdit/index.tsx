import { RootState, useDispatch, useSelector } from "../../../Store";
import todos from "../../../Mocks";
import { useEffect, useState } from "react";
import { getInitTodos } from "../../../Slices/todoSlice";
import { Box } from "@mui/material";
import TodoForm from "../TodoForm";
import { useParams } from "react-router-dom";
import { selectTodoById } from "../../../Slices/todoSlice";
import { Todo } from "../../../Slices/todoSlice";
const EditTodo = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todos.todos);
  const { id } = useParams();
  const [selected_todo, set_selected_todo] = useState<any>(null);

  useEffect(() => {
    if (!todosState) {
      dispatch(getInitTodos(todos));
    }
  }, [dispatch, todosState]);

  useEffect(() => {
    if (id && todosState) {
      set_selected_todo(selectTodoById(todosState as Todo[], parseInt(id)));
    }
  }, [todosState, id]);

  if (!selected_todo) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <TodoForm type={"edit"} todo={selected_todo} />
    </Box>
  );
};

export default EditTodo;
