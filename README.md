# React Family Tree

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo
Take a look at the app [here](https://www.cauveryraja.com/family-tree/).

## Tech stacks used

- [React](https://react.dev/) : User Interface Library
- [React Testing Library](https://testing-library.com/) : User-centric UI testing library
- [Jest](https://jestjs.io/) : JS Testing framework
- [Prettier](https://prettier.io/) : Code formatter
- [Husky](https://typicode.github.io/husky/#/) : Git Hooks for commit and push actions
- [Lint staged](https://github.com/okonet/lint-staged) : Runs linters against git staged files
- [Styled components](https://styled-components.com/) : React-specific CSS-in-JS styling solution
- [Cypress](https://www.cypress.io/) : Frontend testing tool (Here used for e2e testing)

## Assumptions

- Only use npm. Do not use yarn.
- Node version : Check the `.nvmrc` file
- No third-party UI component library is used. All UI components are developed from scratch.

## Getting started

Start the development server

```bash
npm i
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## State management
This is done using React Context API, no third party library is used.

## Testing

### Unit testing
This setup is done using Jest and React Testing Library. 
Run unit tests using below commands

```bash
npm test                      // Runs all tests
npm run coverage              // Runs test with coverage and opens report
```

### End to End testing
Cypress is used for e2e testing. 
Run e2e tests using below commands

```bash
npm run e2e                   // Runs all e2e tests
npm run e2e:open              // Opens Cypress and runs all tests
```

## License
This project is not licensed. Feel free to use it, happy coding :)
