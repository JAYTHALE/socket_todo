
const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
require("dotenv").config()

//step 1 middaleware
const app = express()
app.use(express.json())

app.use(cors({ origin: true, credentials: true }))


//step 2 route 
app.use("/api/notes", require("./routes/todo.routes"))


//step 3 404 router
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found 404" })
})
//step 4 error handler
app.use("*", (err, req, res, next) => {
    console.log(err);
    res.status(404).json({ message: "Resource Not Found 404", error: err.message })
})
//step 5 connection
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))

})