import React, { FC, useEffect, useState } from "react";
import { Todo } from "../../../Slices/todoSlice";
import {
  Box,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteTodo from "./DeleteTodo";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
interface TodosViewListProps {
  todos: Todo[];
}

const TodosViewList: FC<TodosViewListProps> = ({ todos }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  useEffect(() => {
    if (!open) {
      setSelectedTodo(null);
    }
  }, [open]);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            title={
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography>Todo List</Typography>
                <IconButton onClick={() => navigate("/todos/add")}>
                  <AddIcon color="success" />
                </IconButton>
              </Box>
            }
          />
          <Divider />
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Completed</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos.map((todo) => (
                  <TableRow key={todo.id}>
                    <TableCell>{todo.id}</TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell>
                      {todo.completed ? (
                        <CheckIcon color="success" />
                      ) : (
                        <CloseIcon color="error" />
                      )}
                    </TableCell>
                    <TableCell>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <IconButton
                          onClick={() => [navigate(`/todos/${todo.id}/view`)]}
                        >
                          <ArrowForwardIcon color="action" />
                        </IconButton>
                        <IconButton>
                          <EditIcon
                            color="info"
                            onClick={() => [navigate(`/todos/${todo.id}/edit`)]}
                          />
                        </IconButton>
                        <IconButton
                          onClick={() => [setSelectedTodo(todo), setOpen(true)]}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Container>
      <DeleteTodo open={open} setOpen={setOpen} todo={selectedTodo} />
    </Box>
  );
};

export default TodosViewList;
