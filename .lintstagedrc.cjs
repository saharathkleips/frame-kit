module.exports = {
  "*": "prettier -uw --cache",
  "*.{ts,tsx}": ["eslint --cache --fix"],
  "*.css": "stylelint --cache --fix",
};
