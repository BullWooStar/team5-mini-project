const palette = {
  purple: "#6B23E0",
  darkGray: "#777",
};

const common = {
  flexCenter: `
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  flexAround: `
      display: flex;
      align-items: center;
      justify-content: space-around;
    `,
  flexColumnStart: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `,
};

const fontSizes = {
  title: "2rem",
  subtitle: "1.5rem",
  paragraph: "1rem",
};

const CardFontSizes = {
  title: ".9rem",
  subtitle: ".7rem",
  paragraph: "1rem",
};

const theme = {
  palette,
  common,
  fontSizes,
  CardFontSizes,
};

export default theme;
