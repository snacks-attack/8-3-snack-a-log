\c d98cufhggcs4gi; 

INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES
('Strawberries', 20, 10, 0, true, 'https://picsum.photos/id/1080/300/300'),
('Raspberries', 16, 4, 0, true, 'https://picsum.photos/id/102/300/300'),
('Honey Covered Granola',  30, 12, 22, false, 'https://picsum.photos/id/312/300/300'),
('New Wave Nuts', 11, 55, 9, true, 'https://picsum.photos/id/139/300/300'),
('Raw Onions & Turnips', 11, 9, 9, true, 'https://picsum.photos/id/292/300/300'),
('Healthy Birthday Cake Square', 4, 8, 19, false, 'https://content.nutrisystem.com/images/products/alc/large/BirthdayCakeSquare_L.jpg');

INSERT INTO users (username, password, email, created_at) VALUES
('test1', 'test1', 'test1@test.com', NOW()),
('test2', 'test2', 'test2@test.com', NOW()),
('test3', 'test3', 'test3@test.com', NOW());

INSERT INTO userSnacks (userID, name, fiber, protein, added_sugar, is_healthy, image) VALUES
(1, 'Strawberries', 20, 10, 0, true, 'https://picsum.photos/id/1080/300/300'),
(2, 'Raspberries', 16, 4, 0, true, 'https://picsum.photos/id/102/300/300'),
(3, 'Honey Covered Granola',  30, 12, 22, false, 'https://picsum.photos/id/312/300/300'),
(1, 'New Wave Nuts', 11, 55, 9, true, 'https://picsum.photos/id/139/300/300'),
(2, 'Raw Onions & Turnips', 11, 9, 9, true, 'https://picsum.photos/id/292/300/300'),
(3, 'Healthy Birthday Cake Square', 4, 8, 19, false, 'https://content.nutrisystem.com/images/products/alc/large/BirthdayCakeSquare_L.jpg');

-- use advanced image search to choose images that are square (aspect ratio)
-- https://www.google.com/advanced_image_search