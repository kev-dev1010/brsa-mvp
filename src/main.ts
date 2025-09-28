import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor BRSA-MVP está no ar!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
