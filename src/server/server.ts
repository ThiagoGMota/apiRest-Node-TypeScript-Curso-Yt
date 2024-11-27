import express from 'express';
import { router } from '../routes/router';
import 'dotenv/config';

const server = express();

server.use(express.json())

server.use(router);
export { server }