const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 5431;
app.use(express.static("public"))
app.set('views', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});



app.use("/contact", require("./routes/contact"));
app.use("/", require("./routes/index"));


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);