var questionsArr =[
    {
        question: 'There are 60 seconds in a minute',
        answer: true
    },
    {
        question: '10 minutes is equal to 700 seconds',
        answer: false
    },
    {
        question: 'There are 24 hours in a day',
        answer:true
    },
    {
        question: 'There are 72 hours in 3 days',
        answer: true
    },
    {
        question: 'There are 12 months in a year',
        answer: true
    },
    {
        question: 'There are 27 months in 2 years',
        answer: false
    },
]

function runQuiz(){
    const questions = [
        "There are 60 seconds in a minute",
        "10 minutes is equal to 700 seconds",
        "There are 24 hours in a day",
        "There are 72 hours in 3 days",
        "There are 12 months in a year",
        "There are 27 months in 2 years",
      ];
    
    var score = 0;
      for(var i = 0; i < questions.length; i++) 
      
      {
        var answer = confirm(questions[i])
        if (answer === true) {
        score++
        }
      }

    alert("You got " + score + " of 4 true questions correct.")

    }




