export type Theme = {
  colors: {
    [key: string]: {
      50?: string;
      100: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
  };
};

export const colors = {
  primary: {
    50: '#FCECEC',
    100: '#F9D8D8',
    200: '#F3B2B2',
    300: '#EE8B8B',
    400: '#E86565',
    500: '#E23E3E',
    600: '#CB3838',
    700: '#B53232',
    800: '#9E2B2B',
    900: '#882525',
  },

  secondary: {
    50: '#FFF5E6',
    100: '#FFE1B3',
    200: '#FFCE80',
    300: '#FFBA4D',
    400: '#FFA61A',
    500: '#FF9C00',
    600: '#E68C00',
    700: '#CC7D00',
    800: '#B36D00',
    900: '#995E00',
  },

  neutral: {
    50: '#FFFFFF',
    100: '#F1F1F1',
    200: '#D9D9D9',
    300: '#C1C1C1',
    400: '#A9A9A9',
    500: '#919191',
    600: '#797979',
    700: '#606060',
    800: '#484848',
    900: '#303030',
  },

  rating: {
    100: '#FFB661',
  },

  error: {
    50: '#FDE7EB',
    100: '#EE1133',
  },

  green: {
    50: '#CEECD7',
    100: '#31B057',
  },
} satisfies Theme['colors'];
