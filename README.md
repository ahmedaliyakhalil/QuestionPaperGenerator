# QuestionPaperGenerator
Assignment given my the Reelo Design and implement a Question Paper Generator application


Project Structure:
The project consists of several files organized into different modules:

App.js:

The main entry point for the application.
Takes user input for the total marks and difficulty distribution.
Utilizes the QuestionPaperGenerator class to generate a question paper.
Outputs the generated question paper to the console.
QuestionPaperGenerator.js:

Defines the QuestionPaperGenerator class responsible for generating question papers.
Constructor takes an optional questionStore parameter (an array of questions).
Provides methods:
getQuestionsByDifficulty(difficulty): Filters questions based on difficulty level.
generateQuestionPaper(totalMarks, difficultyDistribution): Generates a question paper based on total marks and difficulty distribution.
QuestionStore.js:

Manages reading and writing the question store data to/from a JSON file.
Provides functions:
readQuestionStore(): Reads the question store from a JSON file, returning an array of questions.
writeQuestionStore(data): Writes data (array of questions) to the question store JSON file.
Workflow:
Reading Question Store:

The App.js script reads the question store from the questionStore.json file using the readQuestionStore function.
User Input:

The application prompts the user to input the total marks for the question paper and the difficulty distribution.
Question Paper Generation:

The QuestionPaperGenerator class is instantiated with the question store.
The user inputs are used to generate a question paper using the generateQuestionPaper method.
Output:

The generated question paper, categorized by difficulty levels, is printed to the console.
User Interaction:
Total Marks:

The user is prompted to enter the total marks for the question paper.
Difficulty Distribution:

The user is prompted to enter the difficulty distribution in the format Easy:20,Medium:50,Hard:30.
Generated Question Paper:

The application generates and displays a question paper based on the user's input.
Data Persistence:
The questions are stored in a JSON file (questionStore.json), and the QuestionStore.js module is responsible for reading and writing this data.
Expected Output:
The expected output is a well-formatted question paper displayed in the console, with questions categorized by difficulty levels.
Note:
The project assumes that the questionStore.json file contains a valid array of questions with attributes such as question, subject, topic, difficulty, and marks. The actual content of the question store will impact the generated question paper.
This project follows a modular structure, separating concerns between reading/writing data, generating question papers, and handling user input, making it more maintainable and extensible.
