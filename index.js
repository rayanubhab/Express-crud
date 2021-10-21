import express, { urlencoded } from 'express';
import router from './routes.js';
const app = express();
app.use(express.json({extended:"true"})); //Body parser
app.use(express.urlencoded({extended:"true"})); 

// app.get('/',(req,res)=>{

//     res.send("Home page");
// });

app.use('/contact',router);

app.listen(3000,()=>{
   
    console.log("App is listening");

})