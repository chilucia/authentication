const express = require('express');
const userRouter = require('./route/route');

const PORT= 7500;

const app = express();
app.use(express.json())

app.get('/',(req,res) =>{
    res.send('API for learning authentication')
})

app.use('/api',userRouter);
app.listen(PORT,()=>{
    console.log('listening on port:' + PORT)
})
