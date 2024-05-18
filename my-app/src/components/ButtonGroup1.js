import * as React from 'react';
import {Button,ButtonGroup} from '@mui/material';
import Refresh from '@mui/icons-material/Refresh';
import { TextField } from '@mui/material';
import AdvancedSearch from './ServButtons/AdvanceSearch';

export default function Basic() {

  const onAdvSearch =()=>{
    
  }
  
  return (
    <div className='firstgroup'>
        <ButtonGroup>
            <Button variant = 'contained' style={{color: "#ffffff", width: "180px"}}>PREDICT</Button>
            <Button variant = 'outlined' style={{color: "#ffffff", width: "180px"}}>ANALYTICS VIEW</Button>
            <Button variant = 'outlined' style={{color: "#ffffff", width: "180px"}} onClick={onAdvSearch}>ADVANCE SEARCH</Button>
        </ButtonGroup>

        <Button variant='outlined' startIcon={<Refresh/>} style={{minWidth:"fit-content"}}></Button>

        <TextField id='filled-search' label='Search Customer Id' type='search' variant='filled' 
        style={{background:"white", marginLeft: "50px", borderRadius:"8px"}}/>

        <ButtonGroup variant='outlined' style={{float: "right"}}>
            <Button style={{color: "#ffffff", width: "180px"}} >ADD</Button>
            <Button style={{color: "#ffffff", width: "180px"}} disabled>EDIT</Button>
            <Button style={{color: "#ffffff", width: "180px"}}>DELETE</Button>
        </ButtonGroup>
    </div>
  );
}