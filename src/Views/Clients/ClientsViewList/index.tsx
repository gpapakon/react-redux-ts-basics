import { Client, searchClients } from "../../../Slices/clientsSlice";
import { FC, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
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
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";


interface ClientsViewListProps {
  clients: Client[];
}

const ClientsViewList : FC<ClientsViewListProps>  = ({clients}) => {

  const navigate = useNavigate();
  const [user_search, set_user_search] = useState("")

  const custom_clients = useSelector(searchClients(user_search));
  

  // useEffect(() => {
  //   if( user_search ){
  //     console.log(searchClients(user_search))
  //   }
  // },[user_search])

  console.log(custom_clients)



  return(
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Container maxWidth="sm">

        {/* how to give card a padding of 2 horizontaly */}
        <Box padding={2} >

          <TextField
            name="search"
            label="Search"
            variant="outlined"
            fullWidth
            value={user_search}
            onChange={(e) => set_user_search(e.target.value)}
          />

        </Box>
        <Card>
          <CardHeader
            title={
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography>Clients List</Typography>
                <IconButton onClick={() => navigate("/clients/add")}>
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
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  {/* <TableCell>Actions</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {custom_clients && custom_clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>{client.id}</TableCell>
                    <TableCell>{client.name}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    {/* <TableCell>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <IconButton
                          // onClick={() => [navigate(`/clients/${todo.id}/view`)]}
                        >
                          <ArrowForwardIcon color="action" />
                        </IconButton>
                        <IconButton>
                          <EditIcon
                            color="info"
                            // onClick={() => [navigate(`/clients/${todo.id}/edit`)]}
                          />
                        </IconButton>
                        <IconButton
                          // onClick={() => [setSelectedTodo(todo), setOpen(true)]}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Box>
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Container>
      {/* <DeleteTodo open={open} setOpen={setOpen} todo={selectedTodo} /> */}
    </Box>
  )
  
}

export default ClientsViewList;