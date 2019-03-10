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

I want the little red squiggles in my editor to help me find my mistakes. So next I set up lint. Thanks to [this article](https://codeburst.io/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6).

```
yarn add -D eslint babel-eslint
yarn add -D eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import
```

[Commit](https://github.com/davidjohnmaccallum/basic-react-native-skills/commit/5ee719aca6c9af1f19d47eeb742025311fb26a64)

Now I have my little red squiggles. Problem is, my project is covered with them and I have not touched a single line of code yet :(

```
npx eslint . --fix
```

[Commit](https://github.com/davidjohnmaccallum/basic-react-native-skills/commit/46bf6538e62ccb97a28254f848107a66e917b9cc)

What a pain getting rid of all of these errors. Feels like I just wasted 15 minutes of my life.

[Commit](https://github.com/davidjohnmaccallum/basic-react-native-skills/commit/76f3daa5910d41443ecd449483a227b7745f2566)

## List View

FlatList actually. From here: https://facebook.github.io/react-native/docs/flatlist

[Commit](https://github.com/davidjohnmaccallum/basic-react-native-skills/commit/9e779ce154169755f6d33e47c1170b20b175a7bc)