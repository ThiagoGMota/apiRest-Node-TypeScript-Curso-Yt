import { Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes'

const router = Router();

router.get('/', (req, res) => {
  res.send("Ola Thiago!");
});
router.post('/post', (req, res) => {
    console.log(req.body)//retorna o que foi 'postado'
    res.status(StatusCodes.OK).json('teste ok')
})

export { router };
