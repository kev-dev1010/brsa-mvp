# 🏗️ Arquitetura do Sistema

O sistema segue o padrão **Ports & Adapters (Hexagonal Architecture)**, 
separando regras de negócio da infraestrutura.

## Camadas
- **Core (Domínio):** Entidades, Value Objects, Casos de Uso e Ports.
- **Infrastructure (Adapters):** Banco de dados, autenticação, APIs externas, web.
- **Config:** Injeção de dependência e carregador de módulos.

## Fluxo Geral
Entrada (Controller) ➝ Caso de Uso ➝ Port ➝ Adapter ➝ Banco/Serviço

---

➡️ Continue em [Fluxo de Entrada e Saída de Dados](./fluxo-dados.md)  
➡️ Veja também [Entidades](./entidades.md)
