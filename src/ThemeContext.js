import { createContext } from "react";

// backgroundColor can be changed, like peru
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
