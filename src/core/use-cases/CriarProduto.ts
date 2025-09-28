import { Produto } from '../entities/Produto';
import { IProdutoRepository } from '../repositories/IProdutoRepository';

// DTO (Data Transfer Object) para a criação de um produto.
// Define a estrutura de dados que o caso de uso espera receber.
export interface CriarProdutoDTO {
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
}

// Este é o nosso Caso de Uso. Ele orquestra a lógica de negócio para criar um produto.
// Note que ele depende da ABSTRAÇÃO (IProdutoRepository) e não da implementação concreta.
export class CriarProduto {
  // O construtor recebe uma implementação de IProdutoRepository.
  // Isso é chamado de Injeção de Dependência. Quem criar uma instância de `CriarProduto`
  // terá que fornecer um repositório compatível.
  constructor(private produtoRepository: IProdutoRepository) {}

  /**
   * O método `execute` é o ponto de entrada do caso de uso.
   * @param data Os dados do produto a ser criado.
   * @returns O produto que foi criado.
   */
  async execute(data: CriarProdutoDTO): Promise<Produto> {
    // 1. Cria uma nova instância da entidade Produto com os dados recebidos.
    const novoProduto = new Produto(data);

    // 2. Persiste o novo produto usando o repositório.
    // O caso de uso não sabe se está salvando em um JSON, PostgreSQL ou outro banco.
    // Ele apenas confia no contrato definido pela interface.
    await this.produtoRepository.save(novoProduto);

    // 3. Retorna a entidade do produto recém-criado.
    return novoProduto;
  }
}
