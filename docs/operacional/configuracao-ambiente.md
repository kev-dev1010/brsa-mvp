# ⚙️ Configuração de Ambiente com TypeScript

Este documento descreve os passos para configurar o ambiente de desenvolvimento local usando TypeScript.

## 1. Pré-requisitos
- **Node.js**: Versão 18 ou superior.
- **npm**: Gerenciador de pacotes do Node.
- **Git**: Para controle de versão.

## 2. Instalação do Projeto
```bash
git clone <URL_DO_REPOSITORIO>
cd brsa-mvp
```

## 3. Instalação de Dependências

As dependências são divididas em duas categorias:

- **Dependências de Produção (`dependencies`):** Pacotes essenciais para a aplicação rodar em produção. Instalados com `npm install <pacote>`.
- **Dependências de Desenvolvimento (`devDependencies`):** Ferramentas usadas apenas durante o desenvolvimento, como compiladores, testadores e o nodemon. Instaladas com `npm install <pacote> --save-dev`.

### Dependências de Produção
- **`express`**: Framework web para criar o servidor e as rotas da API.
- **`dotenv`**: Carrega variáveis de ambiente de um arquivo `.env`. É de produção pois o servidor, mesmo em produção, precisa ler estas variáveis.

```bash
npm install express dotenv
```

### Dependências de Desenvolvimento
- **`typescript`**: A linguagem TypeScript.
- **`ts-node`**: Permite executar código TypeScript diretamente no Node.js.
- **`nodemon`**: Reinicia o servidor automaticamente durante o desenvolvimento.
- **`@types/*`**: Pacotes de definição de tipos (ex: `@types/node`, `@types/express`, `@types/dotenv`). Eles são o "manual de instruções" para o TypeScript entender as bibliotecas JavaScript.

```bash
npm install typescript ts-node nodemon @types/node @types/express @types/dotenv --save-dev
```

> **Nota sobre Erros Comuns:**
> - **Erro de TypeScript (Ex: `Cannot find module '...' or its corresponding type declarations`):** Geralmente significa que falta um pacote `@types/*` nas `devDependencies`.
> - **Erro de Node.js (Ex: `Error: Cannot find module '...'`):** Geralmente significa que falta o pacote em si nas `dependencies` de produção.

## 4. Configurando o TypeScript (`tsconfig.json`)
Crie o arquivo `tsconfig.json` na raiz com o seguinte conteúdo:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "db.json"]
}
```

## 5. Scripts do `package.json`
```json
"scripts": {
  "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/main.ts",
  "build": "tsc",
  "start": "node dist/main.js"
},
```

## 6. Execução Local
```bash
npm run dev
```