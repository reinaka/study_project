module.exports = {
  plugins: {
    "postcss-font-magician": {
      variants: {
        Ubuntu: {
          400: [],
          700: [],
        },
      },
      foundries: ["google"],
    },
    autoprefixer: {},
  },
};
