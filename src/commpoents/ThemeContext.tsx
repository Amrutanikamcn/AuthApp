import React, { createContext, useContext, useState, ReactNode } from 'react';
import { defaultTheme, Theme } from './colors';


// Define the context type
interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}



// Create the Theme Context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
});

// ThemeProvider component
interface ThemeProviderProps {
  theme?: Theme; // Optional theme prop
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  // Use the provided theme if available; otherwise, fallback to defaultTheme
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme || defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme
export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};
