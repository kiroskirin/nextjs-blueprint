## Cookly-frontend

### How to used

```
  git clone repo
```

### Install Dependencies

```
  yarn or yarn install
```

### Run Project

```
  yarn dev
```

**Note:**

In case that you want to change port you can edit `scripts` in `package.json` to

```
  "dev": "next -p {PORT}"
```

### Flow

[Flow][flow] is a static type checker for your JavaScript code. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale.

Flow checks your code for errors through static type annotations. These types allow you to tell Flow how you want your code to work, and Flow will make sure it does work that way.

### Bulma

If you want to customize [Bulma][bulma] go to `static/styles/bulma.scss` and import what you need.

Then compile new css

```
  yarn css-build
```

### Blueprint

[Blueprint][blueprint] is a React-based UI toolkit for the web.
It is optimized for building complex data-dense interfaces for desktop applications.

### Storybook

[Storybook][storybook] is a UI development environment for your UI components. With it, you can visualize different states of your UI components and develop them interactively.

```
  yarn storybook
```

### Redux

All pages have access to the [redux][redux] store using `connect` from `react-redux`.

[Example][with-redux]

### Redux Saga

All request when call API should use [redux-saga][saga]

### Prettier

Format your code with `prettier` [sample][prettier-sample]

**Note:**

If you got the error message something like on your Editor

```
Failed to load plugin jsx-a11y: Cannot find module 'eslint-plugin-jsx-a11y'
```

You can try to install `peerDependencies` like this

```
  yarn remove eslint-config-airbnb

  yarn add --dev --peer eslint-config-airbnb
```

[bulma]: https://bulma.io/documentation/customize/with-node-sass/
[storybook]: https://storybook.js.org/basics/introduction/
[with-redux]: https://github.com/zeit/next.js/tree/master/examples/with-redux
[redux]: https://redux.js.org/
[saga]: https://redux-saga.js.org/
[prettier-sample]: https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a
[flow]: https://flow.org/
[blueprint]: https://blueprintjs.com/
