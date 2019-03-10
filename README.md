# Basic React Native Skills

I'm using this project to build up my React Native skills.

## Project Setup

So I started here: https://facebook.github.io/react-native/docs/getting-started.

I love NPM for NodeJS apps but I had some trouble with NPM on React apps. So I am using Yarn.

```
npm install -g expo-cli
expo init basic-skills
cd basic-skills
yarn start
```

Really loved how flawlessly this worked.

I want the little red squiggles in my editor to help me find my mistakes. So next I set up lint. Thanks to (this article)[https://codeburst.io/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6].

```
yarn add -D eslint babel-eslint
yarn add -D eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import
```