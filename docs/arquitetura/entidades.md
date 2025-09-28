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
