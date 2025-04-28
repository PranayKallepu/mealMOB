import { createContext } from "react";

//create context
export const ThemeContext = createContext();

//create provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
};
