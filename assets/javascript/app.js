var questions = {

    // Object of all words that can be chosen, along with info
    q1: {
        question: "What is the world's longest river?",
        answers: ['Amazon', 'Nile', 'Congo', 'hello'],
        correctAnswer: "Amazon"

    },
    q2: {
        question: "Which actress has won the most Oscars?",
        answers: ['Emma Stone', 'Brie Larson', 'Katharine Hepburn', 'Jennifer Lawrence'],
        correctAnswer: "Katharine Hepburn"

    },
    q3: {
        question: "Catalonia is a region of what country?",
        answers: ['Spain', 'Italy', 'Morroco', 'England'],
        correctAnswer: "Spain"
    },
    q4: {
        question: "What was the name of the first electronic general-purpose computer?",
        answers: ['EPAC', 'ENIAC', 'SLACK', 'BLACK'],
        correctAnswer: "ENIAC"
    },
    q5: {
        question: "What canal connects the Pacific Ocean to the Atlantic Ocean?",
        answers: ['Welland', 'Corinth', 'Suez', 'Panama'],
        correctAnswer: "Panama"
    }
};



$(document).ready(function() {
    $("#done-btn").hide();
    var myvar;

    
    $("#start-btn").on("click", function() {
        var correctAnswers = 0;
        var inCorrectAnswers = 0;
        var unAnswered = 0;
        var selectedAnswers = [];
        // var answer0;
        // var answer1;
        // var answer2;
        // var answer3;
        // var answer4;

        var timerDiv = $("<div>");
        timerDiv.addClass("timerClass");
        timerDiv.attr("id", "time");
        $("#start-btn").hide();

        
        $(".content").append(timerDiv);


        var time = 50,
        //$("#time").html(display);
        display = document.querySelector('#time');
        startTimer(time, display);
        var q = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
        for (var i = 0; i < 5; i++) {
            var currentQuestion = q[i];
            var questionsNewDiv = $("<div>");
            questionsNewDiv.addClass("questions-div");

            var answersNewDiv = $("<div>");
            answersNewDiv.addClass("answers-div");


            $(".content").append(questionsNewDiv);
            $(".content").append(answersNewDiv);

            questionsNewDiv.html(currentQuestion.question);
            answersNewDiv.html(
                "<input type='radio' class='radbtn' id='radbtn0' value='" + currentQuestion.answers[0] + "' name='radAnswer" + i + "'>" + currentQuestion.answers[0] + "   " +
                "<input type='radio' class='radbtn' id='radbtn1' value='" + currentQuestion.answers[1] + "' name='radAnswer" + i + "'>" + currentQuestion.answers[1] + "   " +
                "<input type='radio' class='radbtn' id='radbtn2' value='" + currentQuestion.answers[2] + "' name='radAnswer" + i + "'>" + currentQuestion.answers[2] + "   " +
                "<input type='radio' class='radbtn' id='radbtn3' value='" + currentQuestion.answers[3] + "' name='radAnswer" + i + "'>" + currentQuestion.answers[3]
            );


            //console.log($("#radbtn0").val());



        }
        // if(){

        // }
        $(".radbtn").on("click", function() {

            var value = $(this).val();
            var answerIndex = $(this).attr("name");

            console.log(answerIndex);
            console.log(value);
            //selectedAnswers.push(value);

            if (answerIndex === "radAnswer0") {
                selectedAnswers[0] = value;
            } else if (answerIndex === "radAnswer1") {
                selectedAnswers[1] = value;
            } else if (answerIndex === "radAnswer2") {
                selectedAnswers[2] = value;
            } else if (answerIndex === "radAnswer3") {
                selectedAnswers[3] = value;
            } else if (answerIndex === "radAnswer4") {
                selectedAnswers[4] = value;
            }
            // if (answerIndex === "radAnswer0") {
            //     answer0 = value;
            // } else if (answerIndex === "radAnswer1") {
            //     answer1 = value;
            // } else if (answerIndex === "radAnswer2") {
            //     answer2 = value;
            // } else if (answerIndex === "radAnswer3") {
            //     answer3 = value;
            // } else if (answerIndex === "radAnswer4") {
            //     answer4 = value;
            // }

            // console.log("answer0:" + selectedAnswers[0]);
            // console.log("answer1:" + selectedAnswers[1]);
            // console.log("answer2:" + selectedAnswers[2]);
            // console.log("answer3:" + selectedAnswers[3]);
            // console.log("answer4:" + selectedAnswers[4]);



        });
         $(".content").append($("#done-btn"));
        $("#done-btn").show();
        $("#done-btn").on("click", function() {
            gameOver();



        });

       

        function checkCorrectness(correctAnswer, answer) {
            if(answer == null){
                unAnswered++;
            }
            else if (answer === correctAnswer) {
                correctAnswers++;
            } else {
                inCorrectAnswers++;
            }
        }
        function startTimer(duration, display) {
        var timer = duration,
            seconds;
        myvar = setInterval(function() {
            seconds = parseInt(timer % 60, 10);

            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = "Time Remaining: " + seconds + " seconds";

            if (--timer < 0) {
                clearInterval(myvar);
                display.textContent = "Time out";

                //$(".content").hide();
                gameOver();
                //timer = duration;
            }
        }, 1000);



    }
        function gameOver(){
        clearInterval(myvar);
            $(".questions-div").hide();
            $(".answers-div").hide();
            $("#done-btn").hide();
            checkCorrectness(questions.q1.correctAnswer, selectedAnswers[0]);
            checkCorrectness(questions.q2.correctAnswer, selectedAnswers[1]);
            checkCorrectness(questions.q3.correctAnswer, selectedAnswers[2]);
            checkCorrectness(questions.q4.correctAnswer, selectedAnswers[3]);
            checkCorrectness(questions.q5.correctAnswer, selectedAnswers[4]);
            
            // console.log(correctAnswers);
            // console.log(inCorrectAnswers);
            // console.log(unAnswered);


            var finalDiv = $("<div>");
            finalDiv.addClass("final-div");
            var imgSrc = "";

            

            if((correctAnswers>inCorrectAnswers) && (correctAnswers>unAnswered) ){
                imgSrc = "./assets/images/good.png";
            }
            // else if(correctAnswers<inCorrectAnswers){
            //     imgSrc = "./assets/images/nogood.png";
            // }
            else{
                imgSrc = "./assets/images/nogood.png";
            }
            // var finalDivHeader = $("<div>");
            // finalDivHeader.addClass("final-div-header");

            //$(".content").append(finalDivHeader);
            var finalImage = $("<img class='final-img' >");
            
            finalImage.attr("src", imgSrc);
            $(".content").append(finalDiv);
            finalDiv.html("All Done" + "<br>" +
                "Correct Answers:  " + "&nbsp" + correctAnswers + "<br>" +
                "Incorrect Answers:  " + "&nbsp" + inCorrectAnswers + "<br>" +
                "UnAnswered:  " + "&nbsp" + unAnswered + "<br>" );
            finalDiv.append(finalImage);


            var playAgain = $("<br>" + "<button id='playAgain-btn' type='button' class='btn btn-default playAgain-button'>Try Again</button>");

            finalDiv.append(playAgain);
            //$(".content").append($("#"));

            //finalDivHeader.html("All Done");
             $("#playAgain-btn").on("click", function(){
        location.reload();
    });
            
    }

   

    });


});
