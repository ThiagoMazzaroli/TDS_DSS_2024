import express from 'express';
import bodyParser from 'body-parser';
import userRouters from './routes/routes.js'

const app = express();

app.use(express.json());    

app.listen(7070, () => {
    console.log('foi');
});

app.use('/cliente', userRouters)
