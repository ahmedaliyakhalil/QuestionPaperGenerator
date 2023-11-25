# QuestionPaperGenerator
Assignment given my the Reelo .Design and implement a Question Paper Generator application

 Project Structure:
  The project consists of several files organized into different modules:
  
App.js:
1. The main entry point for the application.
2. Takes user input for the total marks and difficulty distribution.
3. Utilizes the QuestionPaperGenerator class to generate a question paper.
4. Outputs the generated question paper to the console.
   
QuestionPaperGenerator.js:
1. Defines the QuestionPaperGenerator class responsible for generating question papers.
2. Constructor takes an optional questionStore parameter (an array of questions).
3. Provides methods:
   a. getQuestionsByDifficulty(difficulty): Filters questions based on difficulty level.
   b. generateQuestionPaper(totalMarks, difficultyDistribution): Generates a question paper           based on total marks and difficulty distribution.

QuestionStore.js:
1. Manages reading and writing the question store data to/from a JSON file.
2. Provides functions:
   a. readQuestionStore(): Reads the question store from a JSON file, returning an array of           questions.
   b. writeQuestionStore(data): Writes data (array of questions) to the question store JSON           file.
   
Workflow:
1. Reading Question Store:
  a. The App.js script reads the question store from the questionStore.json file using the           readQuestionStore function.
2. User Input:
  a. The application prompts the user to input the total marks for the question paper and the       difficulty distribution.
3. Question Paper Generation:
  a. The QuestionPaperGenerator class is instantiated with the question store.
  b. The user inputs are used to generate a question paper using the generateQuestionPaper           method.
4. Output:
  a. The generated question paper, categorized by difficulty levels, is printed to the console.

User Interaction:
1. Total Marks:
 a. The user is prompted to enter the total marks for the question paper.
2. Difficulty Distribution:
  b. The user is prompted to enter the difficulty distribution in the format               
     Easy:20,Medium:50,Hard:30.
3. Generated Question Paper:
  a. The application generates and displays a question paper based on the user's input.

Data Persistence:
The questions are stored in a JSON file (questionStore.json), and the QuestionStore.js module is responsible for reading and writing this data.

Expected Output:
The expected output is a well-formatted question paper displayed in the console, with questions categorized by difficulty levels.

Note:
The project assumes that the questionStore.json file contains a valid array of questions with attributes such as question, subject, topic, difficulty, and marks. The actual content of the question store will impact the generated question paper.
This project follows a modular structure, separating concerns between reading/writing data, generating question papers, and handling user input, making it more maintainable and extensible.
