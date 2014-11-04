// DEPENDENCIES
var express    = require("express"),
	request    = require("request");

// APP CONFIG
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/semantic-ui/dist"));

// ROUTES
app.get("/", function (req, res) {
    res.render("index");
});

app.get("/results", function (req, res) {
	var url = "http://www.omdbapi.com/?s=" + req.query.search;
	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("results", { data: data });
		}
	});
});

// SERVER
var PORT_NUM = process.env.PORT || 3000;
var SERVER_START_MSG = "*Server is up and running on port " + PORT_NUM + "!*";

app.listen(PORT_NUM, function () {
	console.log(SERVER_START_MSG);
});

