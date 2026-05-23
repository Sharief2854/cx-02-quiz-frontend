import { Box, styled, TextField } from "@mui/material";


let GlassyCard = styled(Box)(({ theme }) => ({
    backgroundColor:theme.palette.primary.light,
    width:"400px",
    margin:"auto",
    marginTop:"20px",
    padding:"30px",
    borderRadius:"10px",
    

}));

export { GlassyCard };