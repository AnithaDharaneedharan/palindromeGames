# Palindrome Game
Players enter a word and if the word is palindrome , they get a score which is the length of the palindrome string


---
## Requirements

For development, you will only need Node.js installed in your environement.

## Instructions

npm i

npm start

Click http://localhost:3000/ to see the UI , enter desired word and see the results of top scores

Note: Blank spaces and special characters are not counted. They are stripped off

## API Endpoints
http://localhost:3000/api/getScores to get the scores 
http://localhost:3000/api/submitEntry to post the string and name

## Notes
Error handling and tests(unit and integration) are written. 
The in memory approach is done by creating an empty array and storing it in the models layer.
Separation of concerns is followed.
I have used regex for better performance , express-validator for minimum validation checks and JEST for testing

