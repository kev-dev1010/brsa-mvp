import crypto from 'crypto';

// A classe Produto é uma entidade central do nosso sistema.
// Ela representa o objeto de negócio "Produto" com suas regras e propriedades.
// Usar uma classe nos permite não só ter um formato de dados, mas também
// adicionar métodos que contenham regras de negócio específicas do produto no futuro.
export class Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  criadoEm: Date;
  atualizadoEm: Date;

  // O construtor é usado para criar uma nova instância de Produto.
  // Usamos `Partial<Produto>` para permitir a criação de um produto passando apenas algumas
  // propriedades, enquanto outras podem ser geradas automaticamente (como id, criadoEm).
  constructor(props: Partial<Produto>) {
    // Atribuição explícita de cada propriedade para satisfazer o modo strict do TypeScript.
    // Isso garante que todas as propriedades terão um valor definido.
    this.id = props.id || crypto.randomUUID();
    this.nome = props.nome || ''; // Garante que nome seja uma string vazia se não fornecido
    this.descricao = props.descricao || ''; // Garante que descricao seja uma string vazia se não fornecido
    this.preco = props.preco || 0; // Garante que preco seja 0 se não fornecido
    this.estoque = props.estoque || 0; // Garante que estoque seja 0 se não fornecido
    this.criadoEm = props.criadoEm || new Date();
    this.atualizadoEm = new Date(); // Sempre atualiza a data de atualização
  }
}
