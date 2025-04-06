// script.js
document.addEventistener("DOMContentLoaded" , function () {
	const loginForm = document.getElementById("login-form");
	const mysql = require('mysql');
	// add an event listener to the login form
	loginForm.addEventListener("submit", function (event) {
		event.preventDefault(); //Prevent the defaul form submission behavior

		// get the values entered by the user
    // Learnt new imp code const obj = JSON.parse(text);
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;

		// Here , you would typically make an AJAx request to the server  for authentication.
		// For this basic example, we'll simulate a successful login.
		if (username ==="admin" && password==="password") {
			alert("Login successful!"); //Display a success message
			// you  can redirect the user to another page here if needed.
		} else {
			alert("Login failed. Please check you credentials."); // display an error message
		}
		//clear the form fields after submission (optional)
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
	});
});
// script.js

// Connect to the MySQL database
import { createConnection } from 'mysql';
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '9889anshiee9889aA@',
  database: 'courier_delivery',
});

// Define the functions to add, edit, and delete client information
function addClient(clientInfo) {
  // Insert the client information into the database
  connection.query('INSERT INTO clients SET ?', clientInfo, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Client added successfully');
  });
}

function editClient(clientId, clientInfo) {
  // Update the client information in the database
  connection.query('UPDATE clients SET ? WHERE id = ?', [clientInfo, clientId], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Client updated successfully');
  });
}

function deleteClient(clientId) {
  // Delete the client information from the database
  connection.query('DELETE FROM clients WHERE id = ?', clientId, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Client deleted successfully');
  });
}

// Export the functions
export default {
  addClient,
  editClient,
  deleteClient,
};
