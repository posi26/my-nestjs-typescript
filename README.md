# My NestJS Project

This project is built with NestJS and follows a specific folder structure for better organization and maintainability.

## Folder Structure
```sh
src/
├── common/
│ ├── enums/
│ ├── interceptors/
│ └── middleware/
├── configs/
├── controllers/
├── guard/
├── models/
├── modules/
├── repositories/
└── services/
app.module.ts
lambda.ts
main.ts
test/
```
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
