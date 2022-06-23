const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require('cors');
// Middlewarea
app.use(express.json());
app.use(cors());
app.use("/books", router);


mongoose.connect("mongodb+srv://admin:HSJpMXXiagxKroxN@cluster0.tvyg7hz.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("Connecter to database"))
.then(() => {
    app.listen(5000)
})
.catch((err)=> console.Console(err));
// 