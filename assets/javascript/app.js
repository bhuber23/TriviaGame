//Questions and answers
//Who was the first Avenger? Captain America, Iron Man, Black Widow, Thor
//What is the name of Tony Stark's Father? Howard, Stephen, Chris, Peter
//On what planet is the Soul Stone found? Vormir, Earth, Mars, Morag
//What is Peter Quill's superhero name? Star-lord, Iron Man, Black Panther, Vision
//The Infinity Saga spanned from 2008 to 2019. How many MCU films were part of this saga? 23, 16, 22, 20
//Spiderman makes his debut in the MCU in Captain America: Civil War. Which actor plays this (best) version of Peter Parker? Tom Holland, Tobey Maguire, Andrew Garfield, Chris Evans
//What color is the Time Stone? Green, purple, blue, orange
//Thanos' goal throughout the course of the Infinity Saga is to collect the 6 infinity stones. In what device does Thanos put these Infinity Stones to harness their collective powers? Infinity Gauntlet, Infinity Belt, Infinity Pants, Infinity Necklace
//In Avengers: End Game, we learn that Tony Stark and Pepper Potts have had a daughter in the 5 years after "the snap." What is their daughter's name? Morgan, Scarlett, Natasha, Wanda
//Which Avenger is getting a 4th solo film in Phase 4 of the MCU? Thor, Captain America, Iron Man, Hulk



//Function to start the game
function start() {
    $(".start").on("click", function() {
        $(".start").hide();
        displayQuestion();
        answerClick();
    });
}
start();

//Define variables
var questions = [
    {
        question: "Who was the first Avenger?",
        options: ["Captain America", "Iron Man", "Black Widow", "Thor"],
        answer: "Captain America",
        image: "assets/images/captain.gif"

    },

    {
        question: "What is the name of Tony Stark's Father?",
        options: ["Chris", "Stephen", "Howard", "Peter"],
        answer: "Howard",
        image: "assets/images/howard.jpg"
    },

    {
        question: "On what planet is the Soul Stone found?",
        options: ["Morag", "Vormir", "Earth", "Mars"],
        answer: "Vormir",
        image: "assets/images/vormir.jpeg"
    },

    {
        question: "What is Peter Quill's superhero name?",
        options: ["Iron Man", "Black Panther", "Star-lord", "Vision"],
        answer: "Star-lord",
        image: "assets/images/star-lord.gif"
    }
];
//console.log(questions);
//console.log(questions[0].question)
var correctAnswers = 0;
var wrongAnswers = 0;
var list;
var choice;
var userChoice = "";
var answerArray = [];


//Function that counts down time 




//Function to switch questions/update html
function displayQuestion() {
    //to choose random question
    list = Math.floor(Math.random() * questions.length)
    choice = questions[list];
    if (!answerArray.includes(choice)) {
        $("#question-block").html("<h2>" + choice.question + "</h2>");
        for(var i = 0; i < choice.options.length; i++) {
            //Adds div for the guess
            var userChoice = $("<div>");
            //Adds class to the guess
            userChoice.addClass("answer-choice");
            //Updates html with the possible answers to the question
            userChoice.html(choice.options[i]);
            userChoice.attr("value", choice.options[i]);
            //Appends with the guess the user chose
            $("#answer-block").append(userChoice);
        }
    //Push answer into an array
        answerArray.push(choice)
    }
    else if (answerArray.length === questions.length) {
        return;
    }
    else {
        displayQuestion();
    }
}


//Click function to register the answer that's clicked
function answerClick() {

$(".answer-choice").on("click", function() {
    var chosenAnswer = $(this).attr("value");
    console.log(chosenAnswer);

    if (chosenAnswer === choice.answer) {
        correctAnswers++;
        chosenAnswer = "";
        $("#answer-response").text("Correct!");
        $("#answer-block").empty();
        //Move to next question
        nextQuestion();
    }
    else {
        wrongAnswers++;
        chosenAnswer = "";
        $("#answer-response").text("Sorry! The correct answer is: " + choice.answer + "!");
        //Move to next question
        nextQuestion();
    }
})
}

function nextQuestion() {
    setTimeout(function() {
        displayQuestion();
        answerClick();
        $("#answer-response").empty();
    }, 1000 * 5)
}

//Play game again


