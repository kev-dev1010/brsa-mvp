import { promises as fs } from 'fs';
import path from 'path';
import { Produto } from '../../../core/entities/Produto';
import { IProdutoRepository } from '../../../core/repositories/IProdutoRepository';

// Define a estrutura do nosso banco de dados em JSON.
// Teremos uma chave 'produtos' que conterá um array de objetos Produto.
interface IDatabase {
  produtos: Produto[];
}

// Este é o nosso Adaptador de banco de dados para JSON.
// Ele implementa a interface IProdutoRepository, traduzindo os métodos
// da interface em operações de leitura e escrita no arquivo db.json.
export class ProdutoRepositoryJson implements IProdutoRepository {
  // O caminho para o nosso arquivo de banco de dados.
  // `__dirname` é o diretório do arquivo atual, e subimos alguns níveis para chegar na raiz do projeto.
  private readonly dbPath = path.join(__dirname, '../../../../db.json');

  // Método auxiliar privado para ler o banco de dados.
  private async readDb(): Promise<IDatabase> {
    try {
      const data = await fs.readFile(this.dbPath, 'utf-8');
      // Se o arquivo estiver vazio, retorna uma estrutura de DB padrão.
      if (!data) {
        return { produtos: [] };
      }
      return JSON.parse(data) as IDatabase;
    } catch (error) {
      // Se o arquivo não existir, por exemplo, retorna uma estrutura de DB vazia.
      return { produtos: [] };
    }
  }

  // Método auxiliar privado para escrever no banco de dados.
  private async writeDb(data: IDatabase): Promise<void> {
    // `JSON.stringify` com `null, 2` formata o JSON de forma legível no arquivo.
    await fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
  }

  async save(produto: Produto): Promise<void> {
    const db = await this.readDb();
    const index = db.produtos.findIndex((p) => p.id === produto.id);

    if (index !== -1) {
      // Se o produto já existe, atualiza.
      db.produtos[index] = produto;
    } else {
      // Se não existe, adiciona ao array.
      db.produtos.push(produto);
    }

    await this.writeDb(db);
  }

  async findById(id: string): Promise<Produto | null> {
    const db = await this.readDb();
    const produto = db.produtos.find((p) => p.id === id);
    return produto || null;
  }

  async findAll(): Promise<Produto[]> {
    const db = await this.readDb();
    return db.produtos || [];
  }

  async delete(id: string): Promise<void> {
    const db = await this.readDb();
    // Filtra o array, mantendo todos os produtos cujo ID seja diferente do fornecido.
    db.produtos = db.produtos.filter((p) => p.id !== id);
    await this.writeDb(db);
  }
}
