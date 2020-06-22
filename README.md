<h1 align="center">
  <img alt="API Gateway" title="API Gateway" src=".github/api-gateway.png" width="250" />
</h1>

<h4 align="center">
	API Gateway Express
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lucas-eduardo/api-gateway-express?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lucas-eduardo/api-gateway-express">

  <a href="https://www.linkedin.com/in/lucasdeveloperti/">
    <img alt="Made by Lucas Eduardo" src="https://img.shields.io/badge/made%20by-Lucas Eduardo-%2304D361">
  </a>

  <a href="https://github.com/lucas-eduardo/api-gateway-express/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucas-eduardo/api-gateway-express">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/lucas-eduardo/api-gateway-express/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/lucas-eduardo/api-gateway-express?style=social">
  </a>
</p>

## :information_source: O que é API Gateway?

Segundo o site [RedHat][redhat], "o gateway de API é uma ferramenta de gerenciamento de APIs que fica entre o cliente e uma coleção de serviços de back-end.

Ele funciona como um proxy inverso, que aceita todas as chamadas da interface de programação de aplicações (API), agrega os vários serviços necessários para realizá-las e retorna o resultado apropriado.

A maioria das APIs corporativas é implantada por meio de gateways de API. Esses gateways normalmente gerenciam tarefas comuns que são usadas em um sistema de serviços de API, como autenticação de usuários, limitação de taxa e estatísticas".

## 💻 Sobre o projeto

Esse projeto para estudo surgiu apenas para testar uma criação de um gateway utilizando o express, para ter mais liberdade em tudo o que ocorre na aplicação e como foi desenvolvido.

## 🛠 Tecnologias

As principais ferramentas utilizadas:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [Express][express]
- [Express Http Proxy][express-http-proxy]
- [JS YAML][js-yaml]
- [Morgan][morgan]

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs] e [Yarn][yarn].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### Configuração Yml

Crie um arquivo na raiz chamado **config.yml** e passe as configurações desejadas.

```yml
nameApplication: API Gateway
hostApplication: http://localhost

config:
  port: 3333
  enabledMorgan: true

security:
  enabledJSON: true
  enabledHelmet: true

services:
  - nameRoute: users
    url: http://localhost:3001
  - nameRoute: products
    url: http://localhost:3002
```

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/lucas-eduardo/api-gateway-express

# Acesse a pasta do projeto no terminal/cmd
$ cd api-gateway-express

# Instale as dependências
$ yarn install

# Configure o arquivo config.yml conforme o exemplo.

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[express]: https://expressjs.com/pt-br/
[express-http-proxy]: https://www.npmjs.com/package/express-http-proxy
[js-yaml]: https://www.npmjs.com/package/js-yaml
[morgan]: https://www.npmjs.com/package/morgan
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[license]: https://opensource.org/licenses/MIT
[redhat]: https://www.redhat.com/pt-br/topics/api/what-does-an-api-gateway-do
