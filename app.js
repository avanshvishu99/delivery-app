// app.js or server.js
//these codes are copied need to verify
import { createConnection } from 'mysql';
import 'static';
const app = express();
import script from './script.js';
const port = 3306;
import express, { json, urlencoded } from 'express';
//these four constructor should be studied
import mongoose from 'mongoose';
import session from 'express-session';
import bcrypt from 'bcrypt';
import { urlencoded as _urlencoded, json as _json } from 'body-parser';

//set up middleware
app.use(json());
app.use(urlencoded({extended: true}));
app.use(session({secret: 'secret-key', resave:false, saveUninitialized: true}));
app.set('view engine', 'ejs');
app.use('static',(path.join(__dirname, 'public')));



//Basic code of mysql written by ansh ("const db")
const connection =
	createConnection({
	host: 'localhost',
	user: 'root',
	password: 'anshiee9889aA@',
	database: 'mysql',
});

// filepath: c:\Users\4GIN\Desktop\programs\webDevelop\delivery app\app.js
import dotenv from 'dotenv';
dotenv.config();

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
if (err) {
	console.error('Database connection error: ' + err.stack);
return;
}
console.log('Connected to database');
});
export default connection;



//these code are other codes need to verify
app.use(_urlencoded({ extended: false }));
app.use(_json());

//sample client data (you would typically use a database)
const clients = [];

//sample consignment data ( you would typically use a database )
const consignments =[] ;

// api endpoint for adding a new client
app.post('/api/cliens',(req,res) => {
	const newClient = req.body;
	clients.push(newClient);
	res.status(201).json({ messsage: 'client added successfully' });
});

//api endpoint for getting all clients
app.get('/api/clients',(req,res) => {
	res.json(clients);
});

//api endpoint for adding a new consignment
app.post('/api/cliens',(req,res) => {
	const newConsignment = req.body;
	consignments.push(newClient);
	res.status(201).json({ messsage: 'consignment added successfully' });
});

//api endpoint for getting all consignments
app.get('/api/consignments',(req,res) => {
	res.json(consignments);
});

app.listen(port, () => {
	console.log('Server is running on port ${port}');
});