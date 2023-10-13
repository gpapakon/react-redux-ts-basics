import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/material";
const Home = () => {
  return (
    <Box>
      <Link
        component={RouterLink}
        to="/todos"
        color={"primary"}
        style={{
          textDecoration: "none",
        }}
      >
        Todos
      </Link>
      <Link
        component={RouterLink}
        to="/clients"
        color={"primary"}
        style={{
          textDecoration: "none",
        }}
      >
        Clients
      </Link>
    </Box>
  );
};

export default Home;
