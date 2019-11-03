$(document).ready(function() {
   


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
    
    
    
    //Define variables
    var questions = [
        {
            question: "Who was the first Avenger?",
            options: ["Captain America", "Iron Man", "Black Widow", "Thor"],
            answer: "Captain America",
            image: "assets/images/captain.gif"
    
        },
    
        {
            question: "What is the name of Tony Stark's father?",
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
        },

        {
            question: "The Infinity Saga spanned from 2008 to 2019. How many MCU films were a part of this saga?",
            options: ["23", "16", "22", "20"],
            answer: "23",
            image: "assets/images/infinity-saga.jpg"
        },

        {
            question: "Spiderman makes his debut in the MCU in Captain America: Civil War. Which actor plays this (best) version of Peter Parker?",
            options: ["Tobey Maguire", "Tom Holland", "Andrew Garfield", "Chris Evans"],
            answer: "Tom Holland",
            image: "assets/images/spiderman.gif"
        },

        {
            question: "What color is the Time Stone?",
            options: ["Purple", "Green", "Blue", "Orange"],
            answer: "Green",
            image: "assets/images/time-stone.gif"
        },

        {
            question: "Thanos' goal throughout the course of the Infinity Saga is to collect the 6 infinity stones. In what device does Thanos put these Infinity Stones to harness their collective powers?",
            options: ["Infinity belt", "Infinity necklace", "Infinity pants", "Infinity gauntlet"],
            answer: "Infinity gauntlet",
            image: "assets/images/thanos.jpg"
        },

        {   
            question: "In Avengers: End Game, we learn that Tony Stark and Pepper Potts have had a daughter in the 5 years after 'the snap.' What is their daughter's name?",
            options: ["Natasha", "Wanda", "Morgan", "Scarlet"],
            answer: "Morgan",
            image: "assets/images/morgan.gif"
        },

        {
            question: "Which Avenger is getting a 4th solo film in Phase 4 of the MCU?",
            options: ["Thor", "Captain America", "Iron Man", "Hulk"],
            answer: "Thor",
            image: "assets/images/thor.gif"
        }
    ];
    //console.log(questions);
    //console.log(questions[0].question)
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var list;
    var choice;
    var userChoice = "";
    var answerArray = [];
    var timer = 20;
    var intervalId;
    var running = false;
    
    
    //Function to start the game
    $(".reset").hide();
    function start() {
        $(".start").on("click", function() {
            $(".start").hide();
            displayQuestion();
            setTimer();
            answerClick();
            
        });
    }
    start();
    
    //Timer functions
    function setTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true
            timer = 20;
        }
    }
    function decrement() {
        $("#timer").text("Time remaining: " + timer + " seconds");
        timer--;
        if (timer === 0) {
            unanswered++;
            stop();
            $("#answer-block").empty();
            //$("#answer-response").empty();
            $("#answer-response").text("Sorry, time is up! The correct answer is: " + choice.answer + "!");
            $("#answer-block").append("<img id='image-choice' src=" + choice.image + ">");
            nextQuestion();
        }
    }
    function stop() {
        running = false;
        clearInterval(intervalId);
        nextQuestion();
        
    }
    
    
    
    
    //Function to switch questions/update html
    function displayQuestion() {
        //to choose random question
        list = Math.floor(Math.random() * questions.length)
        choice = questions[list];
        if (!answerArray.includes(choice)) {
            $("#question-block").text(choice.question);
            for(var i = 0; i < choice.options.length; i++) {
                //Adds div for the guess
                var userChoice = $("<button>");
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
        setTimer();
        
        
    }
    
    
    //Click function to register the answer that's clicked
    function answerClick() {
    
    $(".answer-choice").on("click", function() {
        var chosenAnswer = $(this).attr("value");
        console.log(chosenAnswer);
    
        if (chosenAnswer === choice.answer) {
            if (answerArray.length !== questions.length){
                
                correctAnswers++;
                chosenAnswer = "";
                $("#answer-response").append("Correct!");
                $("#answer-block").empty();
                $("#answer-block").append("<img id='image-choice' src=" + choice.image + ">");
                stop();
            }else{
                correctAnswers++;
                chosenAnswer = "";
                $("#answer-response").append("Correct!");
                $("#answer-block").empty();
                $("#answer-block").append("<img id='image-choice' src=" + choice.image + ">");
                setTimeout(endGame, 1000 * 5);
            }
            
            
            
        }
        else {
            if (answerArray.length !== questions.length){
                
                wrongAnswers++;
                chosenAnswer = "";
                $("#answer-response").text("Sorry! The correct answer is: " + choice.answer + "!");
                $("#answer-block").empty();
                $("#answer-block").append("<img id='image-choice' src=" + choice.image + ">");
                stop();
            }else{
                wrongAnswers++;
                chosenAnswer = "";
                $("#answer-response").text("Sorry! The correct answer is: " + choice.answer + "!");
                $("#answer-block").empty();
                $("#answer-block").append("<img id='image-choice' src=" + choice.image + ">");
                setTimeout(endGame, 1000 * 5);
            }
        }
    })
    }
    
    function nextQuestion() {
        setTimeout(function() {
            $("#answer-response").empty();
            $("#answer-block").empty();
            displayQuestion();
            answerClick();
            $("#timer").empty();
        }, 1000 * 1)
        
        
        
    }
    
    function endGame() {
        if (answerArray.length === questions.length) {
            clearInterval(intervalId);
            $("#question-block").empty();
            $("#answer-block").empty();
            $("#answer-response").empty();
            $("#question-block").text("Game over! Here is your score:")
            $("#answer-block").append("<h3>Correct answers: " + correctAnswers + "</h3>");
            $("#answer-block").append("<h3>Wrong answers: " + wrongAnswers + "</h3>");
            $("#answer-block").append("<h3>Unanswered questions: " + unanswered + "</h3>");
            $(".reset").show();
            correctAnswers = 0;
            wrongAnswers = 0;
            unanswered = 0;
        }
        
        
    }
   

    
    //Play game again
    $(".reset").on("click", function() {
        $(".reset").hide();
        $("#answer-block").empty();
        $("#question-block").empty();
        $(".start").show();
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        answerArray = [];
        start();
    })
    
    })
    
    //Things not working:
    //Play again/reset function does not work
    //Bug when you answer the first question right or wrong, the next question displays 8 possible answers
    //Bug when you answer the third question, it will say the wrong answer
    // Keeping score not working
    //Doesn't loop through every question in the array, stops at 3 questions instead of 4