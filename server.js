const express = require("express");
const app = express();
const PORT = process.env.PORT ||3000;
const homeRoutes = require("./routes/homeRoutes");
const noteRoutes = require("./routes/noteRoutes");
const logReq = require("./middleware/logRequest")

app.use(logReq)
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api/notes",noteRoutes)
app.use(homeRoutes)


app.listen( PORT,()=>{
    console.log("listenin to port "+ PORT)
})