# Yarn Monorepo example

This project is an example of the monorepo handled by yarn workspaces. 

To know more - please refer to: [Yarn Monorepo example](https://medium.com/@mkocik/yarn-workspaces-monorepo-beginners-guide-ed89de47aa25)

If you need the complete monorepo boilerplate - it's [here](https://github.com/mkocik/monorepo-rest-api-node-react-boilerplate)

## Installation

Use yarn to install dependecies.

```bash
yarn
```

## Usage
To run the project, you need to build it and start it.

```bash
yarn build
yarn start
```

## Base structure
The project contains backend and frontend workspaces, together with packages, that can be used to extract some logic there.
```bash
backend/
frontend/
packages/
     config/
     .../
     .../
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
