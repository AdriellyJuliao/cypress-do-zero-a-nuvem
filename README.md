# Cypress do Zero à Nuvem

Projeto desenvolvido durante o curso **"Cypress do Zero à Nuvem"**, ministrado pela escola online [Talking About Testing](https://talkingabouttesting.com).

## Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas na sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

> Este projeto foi testado com as seguintes versões:
> - Git: `2.42.1`
> - Node.js: `20.13.1`
> - npm: `10.8.1`

Recomenda-se utilizar essas versões ou superiores.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL-do-repositório>
   cd nome-do-repositório
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   npm i
   ```

## Executando os Testes

Este projeto permite a execução de testes em dois modos: **Desktop** e **Mobile**.

###  Modo Desktop

- Executar testes em modo headless:
  ```bash
  npm test
  # ou
  npm t
  ```

- Abrir o Cypress com interface gráfica:
  ```bash
  npm run cy:open
  ```

###  Modo Mobile

- Executar testes em modo headless:
  ```bash
  npm run test:mobile
  ```

- Abrir o Cypress com interface gráfica:
  ```bash
  npm run cy:open:mobile
  ```

##  Autor

Este projeto foi criado com 💚 por [Walmyr](https://walmyr.dev).


