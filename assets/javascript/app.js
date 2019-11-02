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
    });
}
start();

//Define variables
var questions = [
    {
        question: "Who was the first Avenger?",
        options: ["Captain America", "Iron Man", "Black Widow", "Thor"],
        answer: 0,
        image: "assets/images/captain.gif"

    },

    {
        question: "What is the name of Tony Stark's Father?",
        options: ["Chris", "Stephen", "Howard", "Peter"],
        answer: 2,
        image: "assets/images/howard.jpg"
    },

    {
        question: "On what planet is the Soul Stone found?",
        options: ["Morag", "Vormir", "Earth", "Mars"],
        answer: 1,
        image: "assets/images/vormir.jpeg"
    },

    {
        question: "What is Peter Quill's superhero name?",
        options: ["Iron Man", "Black Panther", "Star-lord", "Vision"],
        answer: 2,
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


//Function that counts down time 




//Function to switch questions/update html
function displayQuestion() {
    //to choose random question
    list = Math.floor(Math.random() * questions.length)
    choice = questions[list];
    $("#question-block").html("<h2>" + choice.question + "</h2>");
    for(var i = 0; i < choice.options.length; i++) {
        //Adds div for the guess
        var userChoice = $("<div>");
        //Adds class to the guess
        userChoice.addClass("answer-choice");
        //Updates html with the possible answers to the question
        userChoice.html(choice.options[i]);
        //Adds data attribute
        userChoice.attr("data-guessvalue", questions[i]);
        //Appends with the guess the user chose
        $("#answer-block").append(userChoice);
    }
}


//Click function to register the answer that's clicked
$(".answer-choice").on("click", function() {
    userChoice = parseInt($(this).attr("data-guessvalue"));

    if (userChoice === choice.answer) {
        correctAnswers++;
        userChoice = "";
        $("#answer-block").html("<p>Correct!</p>");
    }
    else {
        wrongAnswers++;
        userChoice = "";
        $("#answer-block").html("<p>Sorry! The correct answer is: " + choice.options[choice.answer] + "</p>");
    }
})

//Play game again


