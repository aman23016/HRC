import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

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
  borderRadius:"7px",
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
        DELETE
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
              Delete Records?
            </p>
            <p
              style={{
                color: "white",
                marginLeft: "10px",
                fontSize: "large",
                textDecoration: "bold",
                fontFamily: "calibri",
              }}
            >
              Are you sure you want to delete these record[s]?
            </p>
            <div style={{ alignItems: "center", margin: "35px 10px 10px 10px" }}>
              <ColorButton>DELETE</ColorButton>
              <ColorButton onClick={handleClose}>CANCEL</ColorButton>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
