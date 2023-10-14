import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let todos = [];
let workTodos = [];
let todo = "";
let workTodo = "";
let alerts = ["primary ", "secondary ", "success", "danger", "warning ", "info", "light", "dark"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index.ejs", { tagName: randomize(), tds: todos });
});
app.post("/submit", (req, res) => {
    todo = req.body['td'];
    todos.push(todo);
    todo = "";
    res.render("index.ejs", { tds: todos, tagName: randomize() });

});
app.get("/work", (req, res) => {
    res.render("workIndex.ejs", { tagName: randomize(), wtds: workTodos });
})
app.post("/submitWork", (req, res) => {
    workTodo = req.body['td'];
    workTodos.push(workTodo);
    workTodo = "";
    res.render("workIndex.ejs", { wtds: workTodos, tagName: randomize() });

});

app.listen(port, () => {
    console.log(`Node Listening in port ${port}`);
});

function randomize() {
    return alerts[Math.floor(Math.random() * alerts.length)];
};

function addClassName() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
};
//get checkboxes