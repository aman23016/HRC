import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ColorButton = styled(Button)(({ theme }) => ({
  width: "48%",
  margin: "2px",
  color: "white",
  borderColor: "white",
  border: "solid",
  borderRadius: "7px",
  backgroundColor: "transparent",
}));

const values = {
  someDate: new Date().toISOString().substring(0, 10)
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minWidth: "60%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#2a3e4c",
  border: "2px solid #000",
  boxShadow: 24,
  "& .MuiTextField-root": { m: 1, width: "25ch" },
};

export default function Add() {
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
        ADD
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
                fontSize: "large",
                textDecoration: "bold",
                fontFamily: "calibri",
              }}
            >
              ADD
            </p>
            <TextField
              label="Business Code"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Business Code"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Customer Number"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Customer Number"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Clear Date"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              value={values.someDate}
              InputLabelProps={{shrink:true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Business Year"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Business Year"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Document ID"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Document ID"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Posting Date"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              value={values.someDate}
              InputLabelProps={{shrink:true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Document Create Date"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              value={values.someDate}
              InputLabelProps={{shrink:true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Due Date"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              value={values.someDate}
              InputLabelProps={{shrink:true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Invoice Currency"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Invoice Currency"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Document Type"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Document Type"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Posting Id"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Posting Id"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Total Open Amount"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Total Open Amount"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Baseline Create Date"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              type="date"
              value={values.someDate}
              InputLabelProps={{shrink:true, style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Customer Payment Terms"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Customer Payment Terms"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <TextField
              label="Invoice Id"
              id="standard-start-adornment"
              sx={{ bgcolor: "white", borderRadius: "5px" }}
              placeholder="Invoice Id"
              InputLabelProps={{ style: { color: "black" } }}
              variant="standard"
            />
            <div
              style={{ alignItems: "center", margin: "35px 10px 10px 10px" }}
            >
              <ColorButton>ADD</ColorButton>
              <ColorButton onClick={handleClose}>CANCEL</ColorButton>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
