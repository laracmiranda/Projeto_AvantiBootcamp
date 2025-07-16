import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import routes from './src/routes/index.js';



const app = express();

//Acesso para API
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


app.use(express.json());//Tratar JSON
app.use(cookieParser());//biblioteca cookies

//Rotas de aplicação
app.use(routes);

//Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
    
})
