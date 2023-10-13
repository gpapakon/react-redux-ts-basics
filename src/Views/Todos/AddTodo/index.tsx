import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  TextField,
  Grid,
  Checkbox,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "../../../Store";
import { addTodo, getInitTodos } from "../../../Slices/todoSlice";
import todos from "../../../Mocks";
import TodoForm from "../TodoForm";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todos.todos);

  useEffect(() => {
    if (!todosState) {
      dispatch(getInitTodos(todos));
    }

    // if (todos.length > 0) {
    //   dispatch(getInitTodos(todos));
    // } else {
    //   dispatch(getInitTodos([]));
    // }
  }, [dispatch, todosState]);

  if (!todosState) {
    return <div>Loading...</div>;
  }

  const initialValues = {
    id: todosState ? todosState.length + 1 : 1,
    title: "",
    description: "",
    completed: false,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("The Title Is Required"),
    description: Yup.string().required("The Description Is Required"),
  });

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <TodoForm type={"add"} todo={null} />
    </Box>
  );
};

export default AddTodo;
