const express = require("express")
const bodyParser = require("body-parser");
const port = 3000;
const uuid = require("uuid");

const app= express();
app.use(bodyParser.json())

const todos = [
    {
        id:1,
        task:"Eat breakfast",
        action: true
    },
    {
        id:2,
        task:"Eat dinner",
        action:false
    }
]

app.get("/", (req,res,next) => {
    res.send("<h1>this is an express appiction that performs simple todo</h1>")
})

app.get("/todos",(req,res)=>{
    res.json(todos)
} )

app.get("/todos/:id",(req,res) => {
    console.log(req.params.id);
    let todo= todos.filter((todo) => todo.id == req.params.id);
    res.json(todo)
})

app.post("/todos",(req,res) => {
    let body = req.body;
    console.log(body);
    todos.push({id:uuid.v4(), ...body})
    res.json(todos)
})

app.put("/todos/:id", (req, res) => {
    let todo = todos.find(todo => todo.id == req.params.id);

    if (todo) {
        todo.task = req.body.task;
        todo.action = req.body.action;

        res.json(todo);
    } else {
        res.send("Todo with given id doesn't exist");
    }
});

app.delete("/todos/:id", (req, res) => {
let index = todos.findIndex((todo) => todo.id == req.params.id);
todos.splice(index, 1) 
res.json([]);
});

app.listen(port, () => {
    console.log("The port is listening at " , port); 
})

