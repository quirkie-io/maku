# Quirkie

Quirkie is a agnostic framework for TypeScript designed to work with high performance and minimal resources.

With Quirkie, developers are not confined to a particular framework or platform technology. This allows them to take advantage of the best framework and platform technologies for the project while still maintaining control over the overall design and architecture of the application.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![SonarQube](https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

- [Features]()
- [Autenticando]()
- [Usando um modulo]()
- [Criando um modulo]()

## Features

In addition to the README you're reading right now, this repo includes other READMEs that describe the purpose of each feature in more detail:

- [caching](src/caching/README.md)
- [dependency-injection](src/dependency-injection/README.md)
- [extensions](src/extensions/README.md)
- [mapping](src/mapping/README.md)
- [resiliency](src/resiliency/README.md)
- [serialization](src/serialization/README.md)
- [system](src/system/README.md)
- [typing](src/typing/README.md)

# Quickstart

To use Quirkie you need to authenticate to Github Packages.

## Authenticating with a Personal Access Token (PAT)

- Navigate to [Personal Access Tokens](https://github.com/settings/tokens) page.
- Click `Generate new token`.
- Click `Generate new token (classic)`.
- Add a description in the `Note` field. e.g. quirkie-pat.
- Change the `Expiration` field to `No expiration`.
- Select only the option `read:packages`.
- Click `Generate token`.
- Copy the generated token.

### .npmrc

```
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_TOKEN
```

### or npm login

```shell
$ npm login --scope=@quirkie-io --auth-type=legacy --registry=https://npm.pkg.github.com

> Username: YOUR_USERNAME
> Password: YOUR_PERSONAL_TOKEN
```

## Install existing module

Install with yarn:

```
yarn add @quirkie-io/quirkie
```

Choose an extension. e.g. `@quirkie-io/ioredis`.

You can see the available extensions by clicking on one of the [features]().

```
yarn add @quirkie-io/ioredis
```

Now, add it in main.ts file:

```typescript
import { IORedisModule } from '@quirkie-io/ioredis'

export class MyServer extends Server {
  constructor() {
    ...

    this.addModule(IORedisModule)
  }
}
```

# Project Structure

- src
  - application
  - domain
  - infra
    - crosscutting
    - external-services
      - billing
        - acl
        - services
          - service-a
            - models
              - input
              - output
    - modules


## Development commands

Run end to end testing

```bash
yarn e2e
```

Run command in specific package

```bash
yarn build --filter [package-name]
```

Install dependency in specific package

```bash
  yarn workspace @quirkie-io/quirkie add package-name
```
