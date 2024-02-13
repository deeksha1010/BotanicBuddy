-- Dummy data for userCred table
INSERT INTO userCred (username, password) VALUES
    ('user1', 'password1'),
    ('user2', 'password2'),
    ('user3', 'password3'),
    ('user4', 'password4'),
    ('user5', 'password5'),
    ('user6', 'password6'),
    ('user7', 'password7'),
    ('user8', 'password8'),
    ('user9', 'password9'),
    ('user10', 'password10');

-- Dummy data for userInfo table
INSERT INTO userInfo (username, email, name, age) VALUES
    ('user1', 'user1@example.com', 'John Doe', 30),
    ('user2', 'user2@example.com', 'Jane Smith', 25),
    ('user3', 'user3@example.com', 'Alice Johnson', 28),
    ('user4', 'user4@example.com', 'Bob Williams', 35),
    ('user5', 'user5@example.com', 'Emily Brown', 27),
    ('user6', 'user6@example.com', 'Michael Davis', 32),
    ('user7', 'user7@example.com', 'Sophia Wilson', 29),
    ('user8', 'user8@example.com', 'David Martinez', 31),
    ('user9', 'user9@example.com', 'Olivia Taylor', 26),
    ('user10', 'user10@example.com', 'James Lee', 33);

-- Dummy data for plant_info table
INSERT INTO plant_info (PlantID, plant_name, plant_sp, info) VALUES
    (1, 'Rose', 'Flower', 'Beautiful flowering plant'),
    (2, 'Fern', 'Fern', 'Leafy green plant'),
    (3, 'Cactus', 'Cactus', 'Drought-resistant succulent'),
    (4, 'Lavender', 'Shrub', 'Aromatic herb'),
    (5, 'Tulip', 'Flower', 'Colorful spring flower'),
    (6, 'Snake Plant', 'Indoor Plant', 'Low-maintenance indoor plant'),
    (7, 'Maple Tree', 'Tree', 'Deciduous tree with vibrant leaves'),
    (8, 'Bamboo', 'Grass', 'Fast-growing tall grass'),
    (9, 'Sunflower', 'Flower', 'Bright and cheerful flower'),
    (10, 'Aloe Vera', 'Succulent', 'Soothing medicinal plant');

-- Dummy data for UserPlants table
INSERT INTO UserPlants (username, PlantID, DateAdded, LastWatered) VALUES
    ('user1', 1, '2023-01-15', '2023-01-20'),
    ('user2', 2, '2023-02-10', '2023-02-15'),
    ('user3', 3, '2023-02-01', '2023-02-05'),
    ('user4', 4, '2023-03-12', '2023-03-18'),
    ('user5', 5, '2023-04-05', '2023-04-10'),
    ('user6', 6, '2023-04-20', '2023-04-25'),
    ('user7', 7, '2023-05-08', '2023-05-12'),
    ('user8', 8, '2023-06-15', '2023-06-20'),
    ('user9', 9, '2023-07-03', '2023-07-08'),
    ('user10', 10, '2023-08-10', '2023-08-15');

-- Dummy data for AvailablePlants table
INSERT INTO AvailablePlants (PlantID, PlantName, Species, Info, Availability, Cost) VALUES
    (1, 'Rose', 'Flower', 'Beautiful flowering plant', 20, 10),
    (2, 'Fern', 'Fern', 'Leafy green plant', 15, 8),
    (3, 'Cactus', 'Cactus', 'Drought-resistant succulent', 25, 12),
    (4, 'Lavender', 'Shrub', 'Aromatic herb', 18, 15),
    (5, 'Tulip', 'Flower', 'Colorful spring flower', 30, 10),
    (6, 'Snake Plant', 'Indoor Plant', 'Low-maintenance indoor plant', 50, 20),
    (7, 'Maple Tree', 'Tree', 'Deciduous tree with vibrant leaves', 10, 25),
    (8, 'Bamboo', 'Grass', 'Fast-growing tall grass', 22, 18),
    (9, 'Sunflower', 'Flower', 'Bright and cheerful flower', 28, 12),
    (10, 'Aloe Vera', 'Succulent', 'Soothing medicinal plant', 40, 15);

-- Dummy data for UserFeedback table
INSERT INTO UserFeedback (username, PlantID, QueryType, Description) VALUES
    ('user1', 1, 'Feedback', 'The Rose is blooming beautifully.'),
    ('user2', 2, 'Complaint', 'The Fern is not getting enough sunlight.'),
    ('user3', 3, 'Query', 'Can you provide care tips for the Cactus?'),
    ('user4', 4, 'Feedback', 'The Lavender smells amazing.'),
    ('user5', 5, 'Complaint', 'The Tulip is wilting.'),
    ('user6', 6, 'Feedback', 'The Snake Plant is thriving indoors.'),
    ('user7', 7, 'Query', 'What fertilizer should I use for the Maple Tree?'),
    ('user8', 8, 'Complaint', 'The Bamboo leaves are turning yellow.'),
    ('user9', 9, 'Feedback', 'The Sunflower brings a smile to my face every day.'),
    ('user10', 10, 'Query', 'How often should I water the Aloe Vera plant?');
