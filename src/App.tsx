import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Views/Home";
import Todos from "./Views/Todos";
import AddTodo from "./Views/Todos/AddTodo";
import EditTodo from "./Views/Todos/TodoEdit";
import ViewTodo from "./Views/Todos/TodoView";
import Clients from "./Views/Clients";
const App = () => {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/add" element={<AddTodo />} />
          <Route path="/todos/:id/edit" element={<EditTodo />} />
          <Route path="/todos/:id/view" element={<ViewTodo />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
