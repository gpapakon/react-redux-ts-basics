import React, { FC } from "react";
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Todo } from "../../../Slices/todoSlice";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "../../../Store";
import { deleteTodo } from "../../../Slices/todoSlice";
interface DeleteTodoProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todo: Todo | null;
}

const DeleteTodo: FC<DeleteTodoProps> = ({ open, setOpen, todo }) => {
  const dispatch = useDispatch();
  if (!todo) return null;
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Card>
          <CardHeader
            title={
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>Delete Todo</Typography>
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon color="error" />
                </IconButton>
              </Box>
            }
          />
          <Divider />
          <CardContent>
            <Typography>{`Are you sure you want to delete todo ${todo.id} ?`}</Typography>
          </CardContent>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Button
              variant={"text"}
              color={"error"}
              startIcon={<DeleteIcon />}
              onClick={() => [dispatch(deleteTodo(todo.id)), setOpen(false)]}
            >
              Delete
            </Button>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
};

export default DeleteTodo;
