import { colors, styled, TextField } from "@mui/material";


let TextBox = styled("input")(({ theme }) => ({

    padding:"10px",
    fontSize:"1rem",
    color:"white",
    border:"none",
    backgroundColor:"transparent",
    borderBottom:"1px solid white",
    // width:"100%",
    "&:hover":{
        outline:"none",
        borderBottom: "2px solid white",
    },
    "&:focus":{
        outline:"none",
        borderBottom: "2px solid white",
    },
    "&::placeholder":{
        color:"white"
    }
    
}));

export {TextBox};