# 📦 Entidades de Negócio

Este documento descreve as entidades centrais do domínio da aplicação.

---

## Produto

A entidade `Produto` representa um item disponível para venda no sistema.

### Propriedades

| Atributo       | Tipo     | Descrição                                                 |
|----------------|----------|-----------------------------------------------------------|
| `id`           | `string` | Identificador único do produto (UUID).                    |
| `nome`         | `string` | Nome do produto (ex: "Vaper V12", "Pod Descartável").   |
| `descricao`    | `string` | Descrição detalhada do produto.                           |
| `preco`        | `number` | Preço de venda do produto.                                |
| `estoque`      | `number` | Quantidade do produto disponível em estoque.              |
| `criadoEm`     | `Date`   | Data e hora em que o registro do produto foi criado.      |
| `atualizadoEm` | `Date`   | Data e hora da última atualização do registro do produto. |

### Observação sobre Inicialização de Propriedades (Erro TS2564)

Durante o desenvolvimento, encontramos o erro `TS2564` (`Property '...' has no initializer and is not definitely assigned in the constructor`). Este erro ocorre no modo `strict` do TypeScript quando uma propriedade é declarada na classe, mas o TypeScript não consegue garantir que ela será inicializada no construtor. A solução foi garantir que todas as propriedades recebam um valor explícito no construtor, mesmo que seja um valor padrão ou vindo de `props` com um fallback (`props.nome || ''`).
