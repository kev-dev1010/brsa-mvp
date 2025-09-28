# Diário de Bordo #1: Configurando o Ambiente e Aprendendo com os Erros

Olá! Este é o primeiro post do meu diário de bordo documentando a criação de um sistema de gestão para a BRSA. A decisão mais importante, logo de início, é a escolha das ferramentas certas. Por isso, optei por **usar TypeScript desde o começo**.

## Montando o Quebra-Cabeça: As Dependências

Para o projeto, separamos as dependências em duas categorias:

- **Produção (`dependencies`):** O essencial para o sistema funcionar, como o `express` (nosso framework web) e o `dotenv` (para gerenciar variáveis de ambiente).
- **Desenvolvimento (`devDependencies`):** Ferramentas que nos auxiliam a escrever o código, como o `typescript`, o `nodemon` (que reinicia o servidor para nós) e os pacotes `@types/*`.

## Lição #1: O Erro de Tipos do TypeScript

Ao rodar o servidor pela primeira vez, o TypeScript reclamou: `Cannot find module 'dotenv' or its corresponding type declarations`. 

**O que isso significa?** O TypeScript não sabia o que era o `dotenv`. Ele precisa de um "manual de instruções" para cada biblioteca JavaScript, que são os pacotes `@types`.

**A solução:** Instalar o manual que faltava: `npm install @types/dotenv --save-dev`.

## Lição #2: O Erro de Módulo do Node.js

Achamos que tudo estava resolvido, mas um novo erro surgiu: `Error: Cannot find module 'dotenv'`. Parecido, mas fundamentalmente diferente.

**O que isso significa?** Desta vez, não era o TypeScript reclamando. Era o próprio Node.js, na hora de executar o código, que não encontrava a biblioteca `dotenv`.

Isso revelou um erro meu: eu havia instalado o "manual" (`@types/dotenv`), mas não a "ferramenta" (`dotenv`) em si nas dependências de produção.

**A solução:** Instalar o pacote que faltava no lugar certo: `npm install dotenv`.

Essa experiência foi a melhor forma de entender na prática a diferença entre `dependencies` e `devDependencies`, e entre um erro de compilação do TypeScript e um erro de execução do Node.js.

## O Coração da Configuração: `tsconfig.json`

Este arquivo é o cérebro da nossa configuração TypeScript. Nele, uma configuração importante foi a chave `"exclude"`, onde mandamos o TypeScript ignorar nosso banco de dados fake `db.json`.

## Próximos Passos

Com o ambiente finalmente estável, documentado e com duas lições importantes aprendidas, o próximo passo é começar a estruturar a API com Express, definindo as primeiras rotas para nossos futuros CRUDs.

Até a próxima!