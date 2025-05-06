const express = require("express");
const path = require("path");
const app = express();


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "public")));

// GETTERS
// <a href="/students">enlace</a>
app.get("/students",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/views/marilo.students.html"))
})
// <a href="/dashboard">enlace</a>
app.get("/dashboard",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/views/zoe.index.html"))
})
// <a href="/index">enlace</a>
app.get("/index",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/views/index.html"))
})
// <a href="/teachers">enlace</a>
app.get("/teachers",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/views/marilo.teachers.html"))
})



//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});