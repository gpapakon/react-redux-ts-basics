import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/material";
import { useDispatch, useSelector } from "../../Store";

import {clients} from "../../Mocks";
import { getClients } from "../../Slices/clientsSlice";
import ClientsViewList from "./ClientsViewList";


const Clients = () => {

  const dispatch = useDispatch();
  const clientsState = useSelector((state) => state.clients.clients);

  useEffect(() => {

    if( !clientsState ){
      dispatch( getClients(clients))
    }
    
  },[dispatch, clientsState])


  if (!clientsState) {
    return <div>Loading...</div>;
  }


  return (
    <Box>
      {clientsState && clientsState.length > 0 && (
        <ClientsViewList clients={clientsState} />
      )}
      
    </Box>
  );
};

export default Clients;
