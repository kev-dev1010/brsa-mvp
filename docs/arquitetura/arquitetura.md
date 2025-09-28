# 🏗️ Arquitetura do Sistema

O sistema segue o padrão **Ports & Adapters (Hexagonal Architecture)**, separando as regras de negócio da infraestrutura.

## Estrutura de Diretórios

Para implementar a Arquitetura Hexagonal, adotamos a seguinte estrutura de diretórios dentro de `src/`:

```
src/
├── core/
│   ├── entities/
│   ├── repositories/
│   └── use-cases/
│
├── infra/
│   ├── http/
│   │   ├── controllers/
│   │   └── routes/
│   ├── db/
│   │   └── repositories/
│   └── middlewares/
│
└── main.ts
```

### Responsabilidades

*   `src/core` - **O Coração (Domínio):**
    *   `entities/`: As entidades de negócio puras (ex: `Produto.ts`). Não sabem nada sobre o mundo exterior.
    *   `repositories/`: As "Portas" de saída. São **interfaces** que definem como o `core` se comunica com a persistência de dados (ex: `IProdutoRepository.ts`).
    *   `use-cases/`: A lógica de negócio da aplicação (ex: `CriarProduto.ts`). Orquestram as regras de negócio.

*   `src/infra` - **Os Adaptadores:**
    *   `http/`: O adaptador para o protocolo HTTP.
        *   `controllers/`: Recebem as requisições, chamam os `use-cases` e retornam as respostas.
        *   `routes/`: Mapeiam as rotas da API para os controllers.
    *   `db/`: O adaptador para o banco de dados.
        *   `repositories/`: A **implementação** concreta das interfaces de repositório (ex: `ProdutoRepositoryJson.ts`).
    *   `middlewares/`: Funções que interceptam as requisições, como para autenticação, logs, etc.

*   `src/main.ts` - **O Ponto de Partida:**
    *   Responsável por inicializar a aplicação, configurar o servidor e conectar as peças (injeção de dependência).

---

➡️ Continue em [Fluxo de Entrada e Saída de Dados](./fluxo-dados.md)  
➡️ Veja também [Entidades](./entidades.md)
