import 'dotenv/config';
import express from 'express';
import router from './back/router.js';
import errorHandler from './back/errorHandler.js';
import path from 'node:path';

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use(express.json());

app.use('/api', router);
app.use('/api', errorHandler.notFound);
app.use((req, res) => {
    res.status(200).sendFile(path.join(import.meta.dirname, 'public/index.html'));
});
app.use(errorHandler.internalServerError);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});