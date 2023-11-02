var express = require('express')
var expressWs = require('express-ws')

var app = express()
expressWs(app)

websockets = []

app.ws('/echo', (ws) => {
	console.log("New client connected.");
	websockets.push(ws)
	ws.send("Start")

	ws.on("message", data => {
		console.log(data)
		if (data == "Pluh") {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send("testawdadjio");
			}
		}
		if (data == "toggle_light") {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send("toggle_light");
			}
		}

		if (data == "kill") {
			for (let i = 0; i < websockets.length; i++) {
				ws.close();
			}
		}

		if (data == "PING") {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send("PONG");
			}
		}

		if (data.startsWith("change_track")) {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send(data);
			}
		}

		if (data.startsWith("copy_desmos")) {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send(data);
			}
		}

		if (data.startsWith("SIMULATE_")) {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send(data.substring(9));
			}
		}

		if (data == "say_hello") {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send("say_hello");
			}
		}
		if (data.startsWith("say_message")) {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send(data);
			}
		}
		if (data.startsWith("run_command")) {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send(data);
			}
		}
		if (data.startsWith("flash_light")) {
			for (let i = 0; i < websockets.length; i++) {
				websockets[i].send(data);
			}
		}
	})
});

const path = require('path');
app.listen(8081, function(err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", 8081);
});