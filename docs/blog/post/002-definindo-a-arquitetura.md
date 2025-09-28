# Diário de Bordo #2: Desenhando o Esqueleto do Projeto

Com o ambiente configurado, o próximo passo era decidir como organizar nosso código. Onde cada arquivo vai? Como garantir que o projeto não vire uma bagunça daqui a alguns meses? A resposta está na **arquitetura do diretório**.

## A Encruzilhada: Camadas vs. Módulos

Seguindo o plano de usar a Arquitetura Hexagonal, a primeira ideia foi agrupar nosso código por **camadas técnicas**:

- Uma pasta para todos os `controllers`.
- Uma pasta para todos os `repositories`.
- Uma pasta para todos os `use-cases`.

Essa abordagem é um clássico e funciona bem. No entanto, durante a discussão, surgiu uma ideia interessante: e se agrupássemos por **módulo de negócio**?

- Uma pasta `products` com tudo dentro (seu controller, seu repositório, etc.).
- Uma pasta `sales` com tudo de vendas.

Essa segunda abordagem (chamada de "Modular Monolith" ou "Feature-Sliced") é extremamente poderosa para projetos grandes, pois deixa tudo relacionado a uma funcionalidade bem isolado e coeso. É como ter mini-projetos dentro do projeto principal.

## A Decisão: Simplicidade Hoje, Flexibilidade Amanhã

Apesar da abordagem modular ser muito atraente (e algo que certamente quero explorar no futuro), decidimos por começar com a estrutura de **camadas**. 

**Por quê?**

1.  **Simplicidade para o MVP:** Para o nosso Produto Mínimo Viável, a estrutura de camadas é mais direta e nos permite construir as primeiras funcionalidades de forma mais rápida.
2.  **Base de Aprendizado:** Implementar um padrão clássico do começo ao fim é um ótimo exercício. Entender bem a estrutura por camadas vai tornar a transição para uma estrutura modular no futuro muito mais clara.
3.  **Refatoração como Ferramenta:** A migração de uma arquitetura de camadas para uma modular é um excelente desafio técnico e uma oportunidade de aprendizado valiosa para quando o projeto crescer.

## O Esqueleto Final

Então, nosso `src` ficou assim:

```
src/
├── core/         # A lógica de negócio pura
├── infra/        # A comunicação com o mundo exterior (HTTP, DB)
└── main.ts       # O ponto de entrada que conecta tudo
```

Dentro de `core` e `infra`, os arquivos serão organizados por seu papel técnico (`entities`, `controllers`, etc.).

Com o esqueleto definido e documentado, agora sim estamos prontos para colocar a primeira peça de carne nesse osso: a entidade `Produto`.

Até a próxima!