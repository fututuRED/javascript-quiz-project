class Quiz {
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }
  // 4. shuffleQuestions()
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }
  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    if (answer === this.questions[this.currentQuestionIndex].answer)
      console.log("In answer", answer);
    console.log(this.questions);
    {
      this.correctAnswers++;
    }
  }
  hasEnded() {
    if (currentQuestionIndex < this.questions.length) {
      return false;
    } else if (currentQuestionIndex === this.questions.length) {
      return true;
    }
  }

  // 6. hasEnded()
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if ((this.currentQuestionIndex = this.questions.length)) {
      return true;
    }
  }

  // 7. filterQuestionsByDifficulty() method

  filterQuestionsByDifficulty(difficulty) {
    if (3 > difficulty > 1) {
      return this.questions;
    } else {
      for (let question in this.questions) {
        return this.questions.filter(
          (difficul) => (this.questions.difficulty = difficul)
        );
      }
    }
  }

  /*

*/
  averageDifficulty() {
    this.questions.reduce(function((accumulator, questions.difficulty))=>
   return accumulator + questions.difficulty)
  
  }
    //array.reduce(accumulator, currentValue) => accumulator + current Value
    // Sum of difficulties of each question / nb of questions
  }

