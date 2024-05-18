import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import "./Analytics.css";

const values = {
  someDate: new Date().toISOString().substring(0, 10),
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#2a3e4c",
  border: "2px solid #000",
  boxShadow: 24,
  "& .MuiTextField-root": { m: 1, width: "25ch" },
};
const ColorButton = styled(Button)(({ theme }) => ({
  width: "48%",
  margin: "2px",
  color: "white",
  borderColor: "white",
  border: "solid",
  borderRadius: "7px",
  backgroundColor: "transparent",
}));
export default function Delete() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{
          backgroundColor: "transparent",
          width: "180px",
        }}
        onClick={handleOpen}
      >
        ANALYTICS VIEW
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} noValidate autoComplete="off">
          <div>
            <p
              style={{
                color: "white",
                marginLeft: "10px",
                marginBottom: "50px",
                fontSize: "large",
                textDecoration: "bold",
                fontFamily: "calibri",
              }}
            >
              Analytics View
            </p>

            <div class="flex-wrap">
              <div>
                <p style={{ color: "white" }}>Clear Date</p>
                <TextField
                  id="standard-start-adornment"
                  sx={{ bgcolor: "white", borderRadius: "5px" }}
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: "black" } }}
                  variant="standard"
                />
                <TextField
                  id="standard-start-adornment"
                  sx={{ bgcolor: "white", borderRadius: "5px" }}
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: "black" } }}
                  variant="standard"
                />
              </div>
              <div>
                {" "}
                <p style={{ color: "white" }}>Due Date</p>
                <TextField
                  id="standard-start-adornment"
                  sx={{ bgcolor: "white", borderRadius: "5px" }}
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: "black" } }}
                  variant="standard"
                />
                <TextField
                  id="standard-start-adornment"
                  sx={{ bgcolor: "white", borderRadius: "5px" }}
                  type="date"
                  variant="standard"
                />
              </div>
            </div>
            <div class="flex-wrap">
              <div>
                <p style={{ color: "white" }}>Baseline Create Date</p>
                <TextField
                  id="standard-start-adornment"
                  sx={{ bgcolor: "white", borderRadius: "5px" }}
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: "black" } }}
                  variant="standard"
                />
                <TextField
                  id="standard-start-adornment"
                  sx={{ bgcolor: "white", borderRadius: "5px" }}
                  type="date"
                  InputLabelProps={{ shrink: true, style: { color: "black" } }}
                  variant="standard"
                />
              </div>
              <div>
                <p style={{ color: "white" }}>Invoice Currency</p>
                <TextField
              label="Invoice Currency"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Invoice Currency"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
              </div>
            </div>
            <div
              style={{ alignItems: "center", margin: "35px 10px 10px 10px" }}
            >
              <ColorButton>SUBMIT</ColorButton>
              <ColorButton onClick={handleClose}>CANCEL</ColorButton>
            </div>
            {/* <div style={{float:"top"}}>
            <div style={{maxWidth:"30%",float:"left"}}>
            <p style={{color:"white"}}>Clear Date</p>
            <TextField

              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              InputLabelProps={{ shrink: true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
          
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              InputLabelProps={{ shrink: true, style: { color: "black" } }}
              variant="standard"
            />
            </div>

            <div style={{maxWidth:"48%",float:"right"}}>
                <p style={{color:"white"}}>Due Date</p>
            <TextField
       
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              InputLabelProps={{ shrink: true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              variant="standard"
            />
            </div>
            </div>





            <div style={{float:"top"}}>
            <div style={{maxWidth:"48%",float:"left"}}>
            <p style={{color:"white"}}>Clear Date</p>
            <TextField

              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              InputLabelProps={{ shrink: true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
          
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              InputLabelProps={{ shrink: true, style: { color: "black" } }}
              variant="standard"
            />
            </div>

            <div style={{maxWidth:"48%",float:"right"}}>
                <p style={{color:"white"}}>Due Date</p>
            <TextField
       
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              InputLabelProps={{ shrink: true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              variant="standard"
            />
            </div>
            </div> */}

            {/* 
            <div style={{float:"bottom"}}>
            <div style={{maxWidth:"48%",float:"left"}} >
            <p style={{color:"white"}}>Baseline Create Date</p>
            <TextField
          
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              InputLabelProps={{ shrink: true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
       
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              
              InputLabelProps={{ shrink: true, style: { color: "black" } }}
              variant="standard"
            />
            </div>



           
            <div style={{maxWidth:"48%",float:"right"}}>
            <p style={{color:"white"}}>Invoice Currency</p>
            <TextField
              label="Invoice Currency"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Invoice Currency"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            </div>
            </div> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
