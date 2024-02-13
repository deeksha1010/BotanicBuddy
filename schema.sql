-- userCred Table
CREATE TABLE IF NOT EXISTS userCred (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255)
);

-- userInfo Table
CREATE TABLE IF NOT EXISTS userInfo (
    username VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255),
    name VARCHAR(255),
    age INT,
    FOREIGN KEY (username) REFERENCES userCred(username) -- one-to-one relationship
);

-- plant_info Table
CREATE TABLE IF NOT EXISTS plant_info (
    PlantID INT PRIMARY KEY,
    plant_name VARCHAR(255),
    plant_sp VARCHAR(255),
    info TEXT
);

-- UserPlants Table
CREATE TABLE IF NOT EXISTS UserPlants (
    UserPlantID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    PlantID INT,
    DateAdded DATE,
    LastWatered DATE,
    FOREIGN KEY (username) REFERENCES userCred(username), -- many-to-one
    FOREIGN KEY (PlantID) REFERENCES plant_info(PlantID) -- many-to-one
);

-- AvailablePlants Table
CREATE TABLE IF NOT EXISTS AvailablePlants (
    PlantID INT PRIMARY KEY,
    PlantName VARCHAR(100) NOT NULL,
    Species VARCHAR(100),
    Info TEXT,
    Availability INT,
    Cost INT
);

-- UserFeedback Table
CREATE TABLE IF NOT EXISTS UserFeedback (
    FeedbackID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    PlantID INT,
    QueryType VARCHAR(50) NOT NULL,
    Description TEXT,
    Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (username) REFERENCES userCred(username), -- many-to-one
    FOREIGN KEY (PlantID) REFERENCES AvailablePlants(PlantID) -- many-to-one
);
