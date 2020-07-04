import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import {errors} from 'celebrate';
const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')));
app.use(errors());
app.listen(3333);
/*
  Rota: Endereço completo da requisição
  Recurso: Qual entidade estamos acessando do sistema

  GET:  Buscar uma ou mais informações do back-end
  POST: Criar uma nova informação no Back-end
  PUT:  Atualizar uma informação existente no Back-end
  DELETE: Remover uma informação do Back-end

  REQUEST PARAM: Parâmetros que vem na própria rota que identificam um recurso
  QUERY PARAM: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
  REQUEST BODY: Parâmetros para criação/atualização de informações

  SELECT * FROM users WHERE name = 'Diego'
  Knex('users').where('name', 'Diego').select('*')

*/

/*

Comando: NPX TSC(TYPESCRIPT) --INIT
Abri um arquivo de configuração para typescript

*/