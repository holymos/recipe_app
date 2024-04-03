import { FC, PropsWithChildren, createContext } from 'react';

import { colors, Theme } from '@theme/colors';

type ThemeContextProps = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeContext.Provider
      value={{
        theme: {
          colors,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
