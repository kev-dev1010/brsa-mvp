import { Request, Response } from 'express';
import { CriarProduto } from '../../../core/use-cases/CriarProduto';

// O Controller é a camada que lida diretamente com as requisições HTTP.
// Sua única responsabilidade é receber a requisição, extrair os dados relevantes,
// chamar o caso de uso apropriado e retornar uma resposta HTTP (sucesso ou erro).
export class ProdutoController {
  // Novamente, usamos Injeção de Dependência. O controller depende de um caso de uso,
  // mas não sabe qual. Ele apenas o recebe em seu construtor.
  constructor(private criarProduto: CriarProduto) {}

  /**
   * Lida com a requisição para criar um novo produto.
   * @param req O objeto de requisição do Express.
   * @param res O objeto de resposta do Express.
   */
  async handle(req: Request, res: Response): Promise<Response> {
    // O `try...catch` é fundamental em controllers para capturar quaisquer erros
    // que possam ocorrer na lógica de negócio (casos de uso) e retornar um erro HTTP apropriado.
    try {
      const { nome, descricao, preco, estoque } = req.body;

      // Chama o caso de uso para executar a lógica de negócio.
      const produto = await this.criarProduto.execute({
        nome,
        descricao,
        preco,
        estoque,
      });

      // Retorna o status 201 (Created) e o produto recém-criado em formato JSON.
      return res.status(201).json(produto);
    } catch (error: any) {
      // Em caso de erro, retorna o status 400 (Bad Request) com a mensagem de erro.
      return res.status(400).json({ error: error.message });
    }
  }
}
