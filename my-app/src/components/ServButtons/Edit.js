import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Modal from "@mui/material/Modal";
import { fontFamily } from "@mui/system";

const StyledButtonGroup = styled(ButtonGroup)({
  // change the text color for all buttons
  "& .MuiButtonGroup-grouped": {
    color: "white",
    margin: "10px",
    borderColor: "white",
  },
});
const ColorButton = styled(Button)(({ theme }) => ({
  width: "48%",
  margin: "2px",
  color: "white",
  borderColor: "white",
  border: "solid",
  borderRadius:"7px",
  backgroundColor:"transparent"
}));
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

export default function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const paymentHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <Button
        style={{
          backgroundColor: "transparent",
          width: "180px",
        }}
        onClick={handleOpen}
      >
        EDIT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="form" sx={style} noValidate autoComplete="off">
          <div>
            <p
              style={{
                color: "white",
                marginLeft: "10px",
                fontSize: "large",
                textDecoration: "bold",
                fontFamily: "calibri",
              }}
            >
              Edit
            </p>
            {/* <TextField
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              id="outlined-helperText"
              label="Invoice Currency"
              defaultValue="USD"
            /> */}
            <TextField
              label="Invoice Currency"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              InputLabelProps={{style : {color : 'black'} }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">USD</InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              label="Customer Payment Terms"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              defaultValue="ABCD"
              InputLabelProps={{style : {color : 'black'} }}
              onChange={paymentHandler}
              variant="standard"
            />
            {/* <TextField
              id="outlined-helperText"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              label="Customer Payment Terms"
              defaultValue="ABCD"
            /> */}
            <div>
              {/* <StyledButtonGroup
                fullWidth="false"
                variant="outlined"
                aria-label="outlined primary button group"
              > */}
              <div style={{alignItems:"center",margin: "35px 10px 10px 10px" }}>
                {/* <Button style={{ width: "48%", margin: "2px" }}>EDIT</Button>
                <Button
                  style={{ width: "48%", margin: "2px" }}
                  onClick={handleClose}
                >
                  CANCEL

                </Button> */}
                <ColorButton>EDIT</ColorButton>
                <ColorButton onClick={handleClose}>CANCEL</ColorButton>
              </div>
              {/* </StyledButtonGroup> */}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
