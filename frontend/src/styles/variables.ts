const mediaQ = (size: number) => `@media only screen and (min-width: ${size}px)`;

export const colors = {
    white: '#ffffff',
    black: '#000000',
    blueGray: '#E4E6EA',
    darkGrey: '#707a8f',
    green: '#00cccc',
    red: '#b30000',
};

export const mediaQueries = {
    xs: mediaQ(320),
    sm: mediaQ(576),
    md: mediaQ(850),
    lg: mediaQ(992),
    xl: mediaQ(1200),
    xxl: mediaQ(1440),
    xxxl: mediaQ(1600),
};

export const fontWeight = {
    light: 300,
    regular: 400,
    bold: 700,
};

export const fontSize = {
    small: '0.8rem',
    normal: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
    extraLarge: '2rem',
};

export const fontFamily = {
    lato: `'Lato', sans-serif`,
};
