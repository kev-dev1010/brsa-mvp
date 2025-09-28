# Diário de Bordo #3: Implementando o Core de Produto

Com a arquitetura definida, era hora de sujar as mãos e construir a primeira funcionalidade completa da nossa lógica de negócio: a criação de um **Produto**. Este processo foi um excelente exercício para colocar em prática o padrão da Arquitetura Hexagonal.

A implementação foi dividida em 4 partes, seguindo as camadas que definimos.

### 1. A Entidade: `Produto.ts`

- **Onde:** `src/core/entities/`
- **O que é:** O coração da funcionalidade. Uma classe TypeScript que representa um produto, com todas as suas propriedades (`id`, `nome`, `preco`, etc.). Ela é "pura", ou seja, não tem ideia de como será salva ou de onde virão seus dados.

### 2. A Porta: `IProdutoRepository.ts`

- **Onde:** `src/core/repositories/`
- **O que é:** A "Porta" de saída do nosso hexágono. É uma **interface**, um contrato que define as operações de persistência que um produto pode sofrer (ex: `save`, `findById`). A lógica de negócio dependerá apenas deste contrato, nunca de uma implementação concreta.

### 3. O Adaptador: `ProdutoRepositoryJson.ts`

- **Onde:** `src/infra/db/repositories/`
- **O que é:** O primeiro "Adaptador" que se conecta à Porta. Esta classe implementa a interface `IProdutoRepository` e traduz os métodos do contrato em operações reais de leitura e escrita no nosso banco de dados `db.json`. Se amanhã quisermos usar PostgreSQL, só precisaremos criar um novo adaptador aqui, sem tocar no `core`.

### 4. O Caso de Uso: `CriarProduto.ts`

- **Onde:** `src/core/use-cases/`
- **O que é:** O cérebro da operação. Esta classe orquestra a regra de negócio. Ela recebe os dados para criar um produto, usa a entidade `Produto` para validar e estruturar esses dados, e chama o método `save` do repositório (através da interface) para persistir a informação.

A parte mais legal é que o `CriarProduto` recebe o repositório por **injeção de dependência**, ou seja, ele não faz ideia que está falando com um repositório de JSON. Ele só sabe que está falando com "algo" que cumpre o contrato `IProdutoRepository`.

## Próximos Passos

Com toda a lógica de negócio para criar um produto pronta e isolada, o próximo passo é criar a camada de infraestrutura que vai expor essa funcionalidade para o mundo exterior: um `Controller` para receber requisições HTTP.

Até a próxima!