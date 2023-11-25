// QuestionStore.js
const questionStore = [
    { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
    { question: "Explain the concept of quantum entanglement", subject: "Physics", topic: "Quantum Mechanics", difficulty: "Medium", marks: 10 },
    { question: "Solve the differential equation: dy/dx = 2x", subject: "Mathematics", topic: "Calculus", difficulty: "Hard", marks: 15 },
    // Add more sample questions here
  ];
  
module.exports = questionStore;
  
const fs = require('fs');

const questionStorePath = 'questionStore.json';

function readQuestionStore() {
  try {
    const data = fs.readFileSync(questionStorePath, 'utf8');
    return JSON.parse(data) || [];
  } catch (error) {
    if (error.code === 'ENOENT') {

        console.error('Question store file not found. Creating an empty store.');
        return [];
      } else {
        console.error('Error reading question store:', error.message);
        return [];
      }
  }
}

function writeQuestionStore(data) {
  try {
    fs.writeFileSync(questionStorePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing question store:', error.message);
  }
}

module.exports = {
  readQuestionStore,
  writeQuestionStore
};
