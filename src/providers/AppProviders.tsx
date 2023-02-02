import { createContext, useContext, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

// Define what main theme will look like
const lightTheme: DefaultTheme = {
  main: "light",
  colors: {
    color: "#000",
    bg: "#fff",
    primary: "#948f8f",
    secondary: "#c3c3c3",
  },
};

const themeDark: DefaultTheme = {
  main: "dark",
  colors: {
    color: "#fff",
    bg: "#000",
    primary: "#f2f3f3",
    secondary: "#cdcd",
  },
};

const initialAppValue = {
  changeTheme: () => {},
  theme: lightTheme,
};

const AppContext = createContext<any>(initialAppValue);

export const useAppContext = () => {
  return useContext(AppContext);
};

function AppProviders({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(initialAppValue.theme);

  const changeTheme = () => {
    setTheme(themeDark);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ changeTheme, theme }}>
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default AppProviders;
