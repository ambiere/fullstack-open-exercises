export default {
  '**/*.{js,jsx}': 'npm run lint',
  '**/*': 'prettier --write --ignore-unknown',
}
