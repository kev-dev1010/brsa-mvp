# Caso de Uso: <Nome do Caso>

## 1. Descrição
Breve explicação do objetivo do caso de uso.

## 2. Atores
- **Primário:** (quem executa, ex.: Usuário, Cliente, Admin, Entregador)
- **Secundário:** (quem é impactado indiretamente)

## 3. Pré-condições
O que precisa estar válido antes de executar (ex.: cliente cadastrado, produto em estoque).

## 4. Fluxo Principal
1. Ator realiza ação inicial
2. Sistema valida os dados
3. Sistema executa o processamento
4. Sistema retorna resposta

## 5. Fluxos Alternativos
- Se a validação falhar...
- Se não houver estoque...

## 6. Pós-condições
O que deve ser verdade depois que o caso de uso termina.

## 7. Regras de Negócio
- Exemplo: CPF deve ser válido
- Exemplo: Venda só pode ser registrada se houver estoque

## 8. Exemplo de Entrada/Saída
### Entrada
```json
{
  "clienteId": "123",
  "produtos": [
    { "produtoId": "abc", "quantidade": 2 }
  ]
}
