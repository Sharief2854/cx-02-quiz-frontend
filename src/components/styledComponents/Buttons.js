import { Transform } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

let PrimaryButton = styled(Button)(({theme}) => ({
    backgroundColor:theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.text.primary,
    padding:"5px 35px",
    borderRadius:"30px",
    fontSize:"0.8rem",
    transition:"all 0.2s linear 0s",
    "&:hover":{
        transform:"scale(1.1)",
        
    }
}));

let SecondaryButton = styled(PrimaryButton)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
        transform: "scale(1.1)",

    }
}));

let LinkButton = styled(Button)(({ theme }) => ({
    
    color: theme.palette.text.primary,
    "&:hover": {
        textDecoration:"underline"

    }
}));


export {
    PrimaryButton,
    SecondaryButton,
    LinkButton
};
