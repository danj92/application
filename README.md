# Application

Status tests and deploy 🚀 [![Tests_and_build ](https://github.com/danj92/application/workflows/Tests_and_build/badge.svg)](https://github.com/danj92/application/actions)

## Run Front-end locally

- Install the Angular CLI globally:
  - `sudo npm install -g @angular/cli`
- Start project:
  - `npm install`
  - `npm start`
  - Navigate to `http://localhost:4200/`

## Run Backend locally

With fake data

- `npm run json-server:faker`

`optional` => with own database (find in the folder) `db.json`

`npm run json-server`

## Running unit tests

Run `npm run test` or `npm run test:ci` (headless) to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cy:open` or `npm run cy:run` (headless) to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## WIKI

You may find all project details in our [WIKI](https://github.com/danj92/application/wiki)

script for fake data in `json-server generate.js`

## Online Demo
