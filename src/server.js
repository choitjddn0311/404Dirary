import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());

app.listen(port , () => {
    console.log(`${port}포트에서 듣는중이당`);
})