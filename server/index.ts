import express, {Express, Request, Response} from 'express';

const port: number = 8000;
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from EXPRESSSSS')
})

app.listen(port, () => {
    console.log(`listenning on port: ${port}`)
})