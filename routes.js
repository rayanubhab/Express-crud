import express from 'express';


const dishes = express.Router();

dishes.get('/',(req,res)=>{

    res.send("Hello from contact");
});

dishes.post('/:dishID',(req,res)=>{
    res.send(
        "Hello" + req.params.dishID + req.body.name
    )
})

export default dishes;