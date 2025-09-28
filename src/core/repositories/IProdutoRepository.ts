import { Produto } from '../entities/Produto';

// Esta é a interface do nosso repositório de Produto (a "Porta" na Arquitetura Hexagonal).
// Ela define um contrato, especificando quais métodos de persistência de dados
// devem existir para a entidade Produto. A lógica de negócio (casos de uso)
// dependerá desta abstração, e não de uma implementação concreta de banco de dados.
export interface IProdutoRepository {
  /**
   * Salva um produto (cria um novo se não existir um ID, ou atualiza um existente).
   * @param produto O objeto Produto a ser salvo.
   */
  save(produto: Produto): Promise<void>;

  /**
   * Busca um produto pelo seu ID.
   * @param id O ID do produto a ser buscado.
   * @returns O objeto Produto se encontrado, ou null caso contrário.
   */
  findById(id: string): Promise<Produto | null>;

  /**
   * Busca todos os produtos cadastrados.
   * @returns Um array com todos os produtos.
   */
  findAll(): Promise<Produto[]>;

  /**
   * Deleta um produto pelo seu ID.
   * @param id O ID do produto a ser deletado.
   */
  delete(id: string): Promise<void>;
}
