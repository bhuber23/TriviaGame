$(document).ready(function() {
   
    
    //Define variables
    var questions = [
        {
            question: "Who was the first Avenger?",
            options: ["Captain America", "Iron Man", "Black Widow", "Thor"],
            answer: "Captain America",
            image: "assets/images/captain.gif"
    
        },
    
        {
            question: "What superhero does Bruce Banner turn into?",
            options: ["Hawkeye", "The Hulk", "Thor", "Black Widow"],
            answer: "The Hulk",
            image: "assets/images/hulk.gif"
        },
    
        {
            question: "Whose weapon of choice is a bow and arrow?",
            options: ["Hawkeye", "Scarlet Witch", "Thor", "Captain America"],
            answer: "Hawkeye",
            image: "assets/images/hawkeye.gif"
        },
    
        {
            question: "What is Peter Quill's superhero name?",
            options: ["Iron Man", "Black Panther", "Starlord", "Vision"],
            answer: "Starlord",
            image: "assets/images/star-lord.gif"
        },

        {
            question: "What was the first movie from the MCU that helped start the Infinity Saga?",
            options: ["Captain America", "The Hulk", "Iron Man", "The Avengers"],
            answer: "Iron Man",
            image: "assets/images/ironman.gif"
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
            options: ["Infinity Belt", "Infinity Necklace", "Infinity Pants", "Infinity Gauntlet"],
            answer: "Infinity gauntlet",
            image: "assets/images/thanos.gif"
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
            setTimer();
            displayQuestion();
        
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
            $("#timer").empty();
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
        
    
        if (chosenAnswer === choice.answer) {
            if (answerArray.length !== questions.length){
                
                correctAnswers++;
                chosenAnswer = "";
                $("#timer").empty();
                $("#answer-response").append("Correct!");
                $("#answer-block").empty();
                $("#answer-block").append("<img id='image-choice' src=" + choice.image + ">");
                stop();
            }else{
                correctAnswers++;
                chosenAnswer = "";
                $("#timer").empty();
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
                $("#timer").empty();
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
        }, 1000 * 5)
        
        
        
    }
    
    function endGame() {
        if (answerArray.length === questions.length) {
            clearInterval(intervalId);
            $("#question-block").empty();
            $("#answer-block").empty();
            $("#answer-response").empty();
            $("#timer").empty();
            $("#question-block").text("Game over! Here is your score:")
            $("#answer-block").append("<h3>Correct answers: " + correctAnswers + "</h3>");
            $("#answer-block").append("<h3>Wrong answers: " + wrongAnswers + "</h3>");
            $("#answer-block").append("<h3>Unanswered questions: " + unanswered + "</h3>");
            $(".reset").show();
            correctAnswers = 0;
            wrongAnswers = 0;
            unanswered = 0;
            running = false;
        }
        
        
    }
   

    
    //Play game again
    $(".reset").on("click", function() {
        $(".reset").hide();
        $("#answer-block").empty();
        $("#question-block").empty();
        //$("#timer").empty();
        $(".start").show();
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        answerArray = [];
        
    })
    
    })
    
    