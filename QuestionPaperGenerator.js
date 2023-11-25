// QuestionPaperGenerator.js
class QuestionPaperGenerator {
    constructor(questionStore = []) {
      this.questionStore = questionStore;
    }
  
    getQuestionsByDifficulty(difficulty) {
      return this.questionStore.filter((question) => question.difficulty.toLowerCase() === difficulty.toLowerCase());
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
       // Placeholder logic, replace it with your actual implementation
    const questionPaper = []; // Replace this with your actual logic to generate the question paper

    // Print the generated question paper for debugging
   
    const easyQuestions = this.getQuestionsByDifficulty('easy');
    const mediumQuestions = this.getQuestionsByDifficulty('medium');
    const hardQuestions = this.getQuestionsByDifficulty('hard');

    console.log('Easy Questions:', easyQuestions);
    console.log('Medium Questions:', mediumQuestions);
    console.log('Hard Questions:', hardQuestions);

    // Calculate the number of questions for each difficulty based on the distribution
    const easyCount = Math.round((difficultyDistribution.easy / 100) * totalMarks);
    const mediumCount = Math.round((difficultyDistribution.medium / 100) * totalMarks);
    const hardCount = totalMarks - easyCount - mediumCount;

    // Add questions to the question paper
    questionPaper.push(...this.getRandomQuestions(easyQuestions, easyCount));
    questionPaper.push(...this.getRandomQuestions(mediumQuestions, mediumCount));
    questionPaper.push(...this.getRandomQuestions(hardQuestions, hardCount));
    
    console.log('Generated Question Paper:', questionPaper);
    return questionPaper;
  }

  getRandomQuestions(questions, count) {
    // Helper function to get a random subset of questions
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, count);

    return questionPaper; // Make sure to return the generated question paper
    }
  }
  
  module.exports = QuestionPaperGenerator;
  