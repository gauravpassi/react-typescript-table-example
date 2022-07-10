import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import materialTheme from "./materialTheme";

type ThemeWrapperProps = {
  /** The primary content of the Wrapper component */
  children?: React.ReactElement | React.ReactElement[];
};

const ThemeWrapper = (props: ThemeWrapperProps): React.ReactElement => (
  <ThemeProvider theme={materialTheme}>{props.children}</ThemeProvider>
);

export default ThemeWrapper;
