import { createTheme } from "@mui/material/styles";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: `#F5CB5C`,
      light: `#FFFFFF`,
    },
    secondary: {
      main: `#086BDE`,
      light: `#FFFFFF`,
    },
    text: {
      disabled: `#7C7C7C`,
      secondary: `#3E3E3C`,
    },
  },
  typography: {
    fontFamily: ["Kumbh Sans", "Inter"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

export default materialTheme;
