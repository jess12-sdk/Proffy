import express from 'express';
import cors from 'cors';
import routes from './route';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


//ouvir requisições HTTP
app.listen(3333);