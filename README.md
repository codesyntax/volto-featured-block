# Volto Featured Block (@codesyntax/volto-featured-block)

ç

[![npm](https://img.shields.io/npm/v/@codesyntax/volto-featured-block)](https://www.npmjs.com/package/@codesyntax/volto-featured-block)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://codesyntax.github.io/volto-featured-block/)
[![Code analysis checks](https://github.com/codesyntax/volto-featured-block/actions/workflows/code.yml/badge.svg)](https://github.com/codesyntax/volto-featured-block/actions/workflows/code.yml)
[![Unit tests](https://github.com/codesyntax/volto-featured-block/actions/workflows/unit.yml/badge.svg)](https://github.com/codesyntax/volto-featured-block/actions/workflows/unit.yml)

## Features

- Page composition tool to feature or highlight items in your pages.
- No need to use existing content of the site to create this blocks (if you want to do that, use the core grid block)
- Variation and style support

## Upgrade guide

### Upgrade to 1.0.0

This version is not backwards compatible with blocks created with previous versions of this package.

The blocks will keep working but you may need to re-add some content into your pages.


## Installation

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @codesyntax/volto-featured-block
cd my-volto-project
```

Add `@codesyntax/volto-featured-block` to your package.json:

```JSON
"addons": [
    "@codesyntax/volto-featured-block"
],

"dependencies": {
    "@codesyntax/volto-featured-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start volto with:

```
yarn start
```

### Volto 18 and later

Add `@codesyntax/volto-featured-block` to your `package.json`:

```json
"dependencies": {
    "@codesyntax/volto-featured-block": "*"
}
```

Add `@codesyntax/volto-featured-block` to your `volto.config.js`:

```javascript
const addons = ['@codesyntax/volto-featured-block'];
```

If this package provides a Volto theme, and you want to activate it, then add the following to your `volto.config.js`:

```javascript
const theme = '@codesyntax/volto-featured-block';
```

## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.


## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Pre-requisites

-   [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
-   [Make](https://6.docs.plone.org/install/create-project.html#make)
-   [Docker](https://6.docs.plone.org/install/create-project.html#docker)


### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 🙏

Crafted with care by **Generated using [Cookieplone (0.7.1)](https://github.com/plone/cookieplone) and [cookiecutter-plone (92fee80)](https://github.com/plone/cookiecutter-plone/commit/92fee80e8c83fceacc79c729e5dddbe3ffaa502e) on 2024-11-13 18:26:16.669378**. A special thanks to all contributors and supporters!
