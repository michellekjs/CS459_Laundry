const express = require('express');
const axios = require('axios');
const app = express();
const port = 1234;
const cors = require('cors');
const nodemailer = require('nodemailer');

let state = false;
const loginInfo = require('./gmail.json');

var whitelist = ['192.168.0.2', 'http://localhost:3000']

let corsOptions = {
	origin: function(origin, callback){

		var isWhitelisted = whitelist.indexOf(origin) !== -1;
	  
		callback(null, isWhitelisted); 
	  
		// callback expects two parameters: error and options 
	  
		},
	credentials: true
}

app.use(cors(corsOptions));

app.get('/', (req,res) => {
	res.send('hello');
	console.log('got a request!');
});

app.get('/req', (req,res) => {
	res.send({ state });
	console.log('got a request!');
});

app.get('/on', (req,res) => {
	res.send('received');
	state = true;
	console.log('laundry running');
});

app.get('/off', (req,res) => {
	res.send('received');
	state = false;
	console.log('laundry complete?');
	sendEmail();
});

app.listen(port, (res,req) => {
	console.log('server on');
});


const sendEmail = async () => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: loginInfo.id,
			pass: loginInfo.password
		}
	});

	let info = await transporter.sendMail({
		from: `"TEAM 200" <${loginInfo.id}`,
		to: 'jjy0709@kaist.ac.kr',
		subject: 'Your laundry is done!',
		text: `Your laundry is done now :)`
	});

	console.log('Message sent: %s', info.messageId);
}

