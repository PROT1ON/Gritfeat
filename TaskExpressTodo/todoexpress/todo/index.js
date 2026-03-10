const express = require("express")
const app = express();
const port = 3000;
const bodyparser = require("body-parser")
const uuid = require("uuid")

app.use(bodyparser.json)

const todos = [
    {
        id : 1,
        task : "Eat lunch",
        completed : false
    },
    {
    id : 2,
    task : "wash dishes",
    completed : true  
    }
]
 //get request ya cha
app.get("/",(req , res , next) => {
    res.send("Todo List Home Page");
}
)

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    console.log(req.params.id);
    let todo = todos.filter((todo) => todo.id == req.params.id);
    res.json(todo);
});
//post 
app.post("/todos", (req, rex) =>{
    let body = req.body;
        console.log(body);
        todos.push({id: uuid.v4() , ...body});
    res.json(todos);
});
//update put
app.put("/todos/:id", (req,res) => {
    let todo = todos.find(todo => todo.id == req.params)
    if(todo){
        todo.desc = req.body.task;
        todo.completed = req.body.action;
        res.json([])
    } else
    {
        res.send("Todo with given i doesnt exist")
    }
    res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
    let index = todos.findIndex((todo) => todo.id == req.params.id);
        todos.splice(index, 1)
    res. json(todo);
})

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});