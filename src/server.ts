import express from 'express';
import 'reflect-metadata';
const app = express();
const router = express.Router();
app.use('/api/v1', router);
app.listen(3000, () => console.log('Example app listening on port 3000!'));
