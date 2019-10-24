var express = require("express")
var app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

const translateController = require("./controller/translateController");

const API_VERSION = "0.0.1"

app.use(cors());
app.use(bodyParser.json({ limit: '250mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//=======================================
app.post('/api/translate', (req, res) => {
    //res.json({ message: "Welcome to WiTransalate Server..." })
    var result = { data: { data: 0 }, req: req, res: res };
    translateController.translateController(result);
})


//=======================================
var port = process.env.PORT || 3010
app.listen(port, function() {
    console.log("Server listening on: ", port)
})