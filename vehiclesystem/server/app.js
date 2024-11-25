import express,{json} from 'express';
import {  vehicleroute } from './routes/route.js';
import cors from 'cors';

const app=express();

const port=5000;
app.use(json());
app.use(cors())

app.use('/', vehicleroute);
app.listen(port,()=>{
    console.log(`server running port ${port}`);
    
})