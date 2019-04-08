module.exports = {
  "*.{ts, tsx}": ["yarn lint:ts --", "git add"],
  "*.{html|md}": ["yarn prettier --write --", "git add"]
}
