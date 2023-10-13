import React, { FC, useEffect, useState } from "react";
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
import {
  Todo,
  addTodo,
  editTodo,
  getInitTodos,
} from "../../../Slices/todoSlice";
import todos from "../../../Mocks";
import { useNavigate } from "react-router-dom";

interface TodoFormProps {
  todo: Todo | null;
  type: string;
}

const TodoForm: FC<TodoFormProps> = ({ todo, type }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todos.todos);
  const navigate = useNavigate();
  let form_fields = {
    id: 0,
    title: "",
    description: "",
    completed: false,
  };

  let initialValues = {};

  const validationSchema = Yup.object({
    title: Yup.string().required("The Title Is Required"),
    description: Yup.string().required("The Description Is Required"),
  });

  const submit_form = (values: any) => {
    if (type === "add") {
      dispatch(addTodo(values));
    } else if (type === "edit") {
      dispatch(editTodo(values));
    }

    navigate("/todos");
  };

  if (type === "edit" || type === "view") {
    form_fields = {
      id: todo ? todo.id : 0,
      title: todo ? todo.title : "",
      description: todo ? todo.description : "",
      completed: todo ? todo.completed : false,
    };
  } else if (type === "add") {
    form_fields = {
      id: todosState ? todosState.length + 1 : 1,
      title: "",
      description: "",
      completed: false,
    };
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Card>
        {type === "view" ? (
          <CardHeader title={"View ToDo"} />
        ) : (
          <CardHeader title={type === "add" ? "Add Todo" : "Edit Todo"} />
        )}
        <Divider />
        <CardContent>
          <Formik
            initialValues={form_fields}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              submit_form(values);
            }}
          >
            {({ errors, handleBlur, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      disabled={type === "view"}
                      name="title"
                      label="Title"
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      error={touched.title && Boolean(errors.title)}
                      helperText={touched.title && errors.title}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      disabled={type === "view"}
                      name="description"
                      label="Description"
                      as={TextField}
                      variant="outlined"
                      error={touched.description && Boolean(errors.description)}
                      helperText={touched.description && errors.description}
                      fullWidth
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Field
                        disabled={type === "view"}
                        name="completed"
                        label="Completed"
                        type="checkbox"
                        as={Checkbox}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display={"flex"} justifyContent={"flex-end"}>
                      {(type === "add" || type === "edit") && (
                        <Button
                          type="submit"
                          variant="contained"
                          color="success"
                        >
                          {type === "add" ? "Add Todo" : "Save"}
                        </Button>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TodoForm;
