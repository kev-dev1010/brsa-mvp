import { Router } from 'express';
import { ProdutoController } from '../controllers/ProdutoController';

// Esta função configura e retorna um Router do Express para as rotas de produto.
// Ela recebe o ProdutoController como dependência, garantindo a Injeção de Dependência.
export function createProdutoRoutes(produtoController: ProdutoController): Router {
  const produtoRoutes = Router();

  // Define a rota POST para criar um novo produto.
  // Quando uma requisição POST chegar em /produtos, o método `handle` do controller será chamado.
  produtoRoutes.post('/produtos', (req, res) => produtoController.handle(req, res));

  return produtoRoutes;
}
