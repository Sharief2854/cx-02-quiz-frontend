import { createTheme } from "@mui/material";

const theme=createTheme({
    palette:{
        primary:{
            main:"#000000",
            dark:"#000000",
            light:"#3e3e3e",
            contrastText:"#000000"
        },
        secondary:{
            main: "#ffffff"
        },
        tertiary: {
            main: "#0000ff"
        },
        text:{
            primary:"#ffffff",
            secondary:"#000000",
            tertiary:"#0000ff"
        }
    }
});
export default theme;