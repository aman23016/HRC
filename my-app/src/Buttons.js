import * as React from "react";
import './Buttons.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AdvanceSearch from "./ServButtons/AdvanceSearch";
import Add from "./ServButtons/Add";
import Analytics from "./ServButtons/Analytics";
import Edit from "./ServButtons/Edit";
import Delete from "./ServButtons/Delete";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Refresh from '@mui/icons-material/Refresh';
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
export default function BasicButtonGroup() {

  const ColorButton = styled(Button)(({ theme }) => ({
     backgroundColor:"#283d4a",
    borderColor:"#206c8d",
    width:"180px",
    borderRadius:"0.6vw",
    minHeight:"fit-content",
     border:"solid",
    '&:hover': {
      backgroundColor:"#14aff1",
    },
  }));

  return (
    <div>
      <div style={{minHeight:"110px",marginBottom:"10px"}}>
      <ButtonGroup id="btn-group1"
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>PREDICT</Button>
        <ColorButton><Analytics/></ColorButton>
        <ColorButton><AdvanceSearch/></ColorButton>
        
      </ButtonGroup>
      <Button variant='outlined' startIcon={<Refresh/>} style={{left:"1vh",top:"2vh",minWidth:"fit-content"}}></Button>

      <TextField style={{top:"0.7vh",left:"2vh",borderRadius:"0.8vw",minWidth:"250px",minHeight:"40px",color:"#aba7a6",backgroundColor:"#f0f0f0"}}id="outlined-basic" label="Search Customer ID" variant="outlined" />
      <ButtonGroup id="btn-group2"
        variant="contained"
        aria-label="outlined primary button group"
      >
        <ColorButton><Add/></ColorButton>
        <ColorButton><Edit/></ColorButton>
        <ColorButton><Delete/></ColorButton>
      </ButtonGroup>
    </div>
    </div>
  );
}