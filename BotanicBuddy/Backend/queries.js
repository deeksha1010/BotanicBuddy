const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'botanicBuddy',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Function to check if user exists
async function userExists(username) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM userCred WHERE username = ?';
    connection.query(query, [username], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length > 0);
      }
    });
  });
}

// Function to insert new user
async function insertUser(username, password) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO userCred (username, password) VALUES (?, ?)';
    connection.query(query, [username, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Function for authenticating login for existing user
async function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM userCred WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length > 0);
      }
    });
  });
}

// Function to retrieve all the information for a specified user
async function getUserInfo(username) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM userInfo WHERE username = ?';
    connection.query(query, [username], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]); // Assuming there's only one row per user
      }
    });
  });
}

// Function to retrieve all information about all the plants in plantsInfo
async function getAllPlantsInfo() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM plant_info';
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to retrieve all information about plants available to buy
async function getAllAvailablePlants() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM AvailablePlants';
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to retrieve all the user feedback
async function getAllUserFeedback() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM UserFeedback';
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to retrieve the plants of a specified user
async function getUserPlants(username) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM UserPlants WHERE username = ?';
    connection.query(query, [username], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Export all functions
module.exports = {
  userExists,
  insertUser,
  authenticateUser,
  getUserInfo,
  getAllPlantsInfo,
  getAllAvailablePlants,
  getAllUserFeedback,
  getUserPlants
};
