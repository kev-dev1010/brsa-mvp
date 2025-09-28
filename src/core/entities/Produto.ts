import crypto from 'crypto';

// A classe Produto é uma entidade central do nosso sistema.
// Ela representa o objeto de negócio "Produto" com suas regras e propriedades.
// Usar uma classe nos permite não só ter um formato de dados, mas também
// adicionar métodos que contenham regras de negócio específicas do produto no futuro.
export class Produto {
  // Propriedades da nossa entidade
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
    // O `Object.assign` copia as propriedades do objeto `props` para a instância `this`.
    Object.assign(this, props);

    // Se um ID não for fornecido, um novo ID aleatório será gerado.
    // Isso é útil para garantir que cada produto tenha um identificador único.
    if (!props.id) {
      this.id = crypto.randomUUID();
    }

    // Se a data de criação não for fornecida, a data atual é usada.
    if (!props.criadoEm) {
      this.criadoEm = new Date();
    }

    // A data de atualização é sempre definida para a data atual ao criar ou atualizar.
    this.atualizadoEm = new Date();
  }
}
