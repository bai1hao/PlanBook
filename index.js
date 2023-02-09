import express from "express"
import route from "./route.js"

let app = express();

app.use(express.static('public'))
app.use(route)

let port = process.env.PlanBookPort | 80;
app.listen(port,()=>{
    console.log(["Server started!"]);
    console.log(`Port: ${port}`);
});