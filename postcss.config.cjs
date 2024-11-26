module.exports = {
  plugins: {
    "postcss-font-magician": {
      variants: {
        Ubuntu: {
          400: [],
          500: [],
          700: [],
        },
        "Nunito Sans": {
          400: [],
        },
      },
      foundries: ["google"],
    },
    autoprefixer: {},
  },
};
