import express, {Request, Response} from 'express';

const userRouter = express.Router();
/*
router.get('/', (req: Request, res: Response)=>{
    res.send('get users');
});
router.post('/', (req: Request, res: Response)=>{
    res.send('post users');
});
router.put('/', (req: Request, res: Response)=>{
    res.send('put users');
});
router.delete('/:id', (req: Request, res: Response)=>{
    console.log(req.param.id);
    res.send('delete users');
});
*/
userRouter.get('/', (req: Request, res: Response)=>{
    res.send('get users');
}).post('/', (req: Request, res: Response)=>{
    res.send('post users');
}).put('/', (req: Request, res: Response)=>{
    res.send('put users');
}).delete('/:id', (req: Request, res: Response)=>{
    console.log(req.params.id);
    res.send('delete users');
});

export default userRouter;