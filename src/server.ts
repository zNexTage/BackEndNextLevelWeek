import express from 'express'
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)


const port = 3333;

app.get("/", (req, res) => res.json({ message: "Hello World" }));

//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params:Paginação, filtros, ordenação

app.listen(port, () => console.log(`Express rodando na porta ${port}`));
