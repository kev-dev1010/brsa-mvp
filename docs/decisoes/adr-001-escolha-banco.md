# ADR 001 – Escolha do Banco de Dados

## Contexto
O sistema precisa armazenar dados de clientes, produtos e vendas.  
Para o MVP, será usado **JSON** como base de dados local.

## Decisão
- MVP: JSON (simples, rápido para validar)
- Futuro: PostgreSQL (robusto, relacional, seguro)

## Consequências
- Fácil desenvolvimento inicial
- Migração planejada para SQL
