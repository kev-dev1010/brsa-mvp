# 🔄 Fluxo de Entrada e Saída de Dados

## Exemplo de Fluxo: Criar Cliente
1. **Request HTTP** chega na rota `/clientes`
2. O **Controller** recebe e valida os dados
3. O **Caso de Uso** aplica regras de negócio
4. O **Repository (Port)** é chamado
5. O **Adapter (DB)** salva os dados
6. O sistema retorna **Response HTTP (JSON)**

---

➡️ Veja também [Entidades](./entidades.md)
