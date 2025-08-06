import { useEffect, useMemo, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";

import Routes from "./router";
import queryClient from "./queryClient";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const backgroundColor = theme.palette.background.default;
    document.body.style.backgroundColor = backgroundColor;
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes toggleTheme={toggleTheme} mode={mode} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
