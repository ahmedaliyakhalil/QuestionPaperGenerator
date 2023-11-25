// App.js
const readline = require('readline');
const QuestionPaperGenerator = require('./QuestionPaperGenerator');
const { readQuestionStore, writeQuestionStore } = require('./QuestionStore');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const questionStore = readQuestionStore();
const generator = new QuestionPaperGenerator(questionStore);

function getUserInput() {
  rl.question('Enter total marks for the question paper: ', (totalMarks) => {
    rl.question('Enter difficulty distribution (e.g., Easy:20,Medium:50,Hard:30): ', (distribution) => {
      const difficultyDistribution = distribution.split(',')
        .map(item => {
          const parts = item.split(':');
          if (parts.length === 2) {
            const difficulty = parts[0].trim();
            const percentage = parseInt(parts[1].trim());
            return { difficulty, percentage };
          } else {
            console.error('Invalid input format. Please use the format Easy:20,Medium:50,Hard:30');
            rl.close();
            process.exit(1);
          }
        });

      const questionPaper = generator.generateQuestionPaper(parseInt(totalMarks), difficultyDistribution);

      console.log('\nGenerated Question Paper:');
      console.log(questionPaper);

      // Move the close operation here after printing the question paper
      rl.close();
    });
  });
}

getUserInput();
