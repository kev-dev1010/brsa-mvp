import express from 'express';
import dotenv from 'dotenv';

// Importa as classes necessárias para a Injeção de Dependência
import { ProdutoRepositoryJson } from './infra/db/repositories/ProdutoRepositoryJson';
import { CriarProduto } from './core/use-cases/CriarProduto';
import { ProdutoController } from './infra/http/controllers/ProdutoController';
import { createProdutoRoutes } from './infra/http/routes/produto.routes';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// --- Injeção de Dependência e Montagem da Aplicação ---

// 1. Instancia o Adaptador (ProdutoRepositoryJson)
const produtoRepository = new ProdutoRepositoryJson();

// 2. Instancia o Caso de Uso (CriarProduto), injetando o repositório
const criarProdutoUseCase = new CriarProduto(produtoRepository);

// 3. Instancia o Controller (ProdutoController), injetando o caso de uso
const produtoController = new ProdutoController(criarProdutoUseCase);

// 4. Cria as rotas de produto, injetando o controller
const produtoRoutes = createProdutoRoutes(produtoController);

// 5. Monta as rotas de produto no Express, sob o prefixo /api
app.use('/api', produtoRoutes);

// --------------------------------------------------------

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor BRSA-MVP rodando na porta ${port}`);
  console.log(`Acesse a rota de criação de produtos em http://localhost:${port}/api/produtos (POST)`);
});
