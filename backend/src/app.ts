import express from 'express';
import productRouter from './routes/product.routes.js';

const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/products', productRouter)

export default app;