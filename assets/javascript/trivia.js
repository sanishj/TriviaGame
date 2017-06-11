$(document).ready(function() {


    //questions
    var questions = [{
        'questionNum': 1,
        'question': 'When was the first mobile phone, Motorola Dyna TAC 8000X manufactured?',
        'answer': ['1981', '1983', '1995', '1991'],
        'correctAnswer': '1983',
    }, {
        'questionNum': 2,
        'question': 'Dr. Morton Cooper supposedly made the first "modern mobile phone" call on a New York City street in 1973. For which Illinois company was Cooper working at the time?',
        'answer': ['Motorola', 'Nokia', 'Samsung', 'Sony'],
        'correctAnswer': 'Motorola'
    }, {
        'questionNum': 3,
        'question': "The first 'smart-phones' were designed in the early 1990s. What is the definition of a 'smart-phone'?",
        'answer': ['A device which does not have personal digital assistance capability', 'A device which allows users to install and run applications of their choice.',
            'A device which does not have a ringtone', 'Any 2G type of cellular device'
        ],
        'correctAnswer': "A device which allows users to install and run applications of their choice."
    }, {
        'questionNum': 4,
        'question': "Which Mobile Operating System has the world's largest user base?",
        'answer': ["Apple's IOS", "Microsoft's Windows Mobile", "Research in Motion's BB10", "Google's Android OS"],
        'correctAnswer': "Google's Android OS"
    }]


    var right = 0;
    var wrong = 0;

    /* EVENTS */
    /* button click */
    $('#start').on('click', function() {
        startGame();
        countdown();
        $('.js-check').on('click', function() {
            var answerChosen = ($(this).attr('data-name'));
            var correct = (questions[this.name].correctAnswer);
            if (answerChosen === correct) {
                alert("Correct!!");
                right++;
                // alert(right);
            } else {
                alert("try again");
                wrong++;
                // alert(wrong);
            }

        });
    })

    /* FUNCTIONS */
    function startGame() {
        var questionString = '';
        for (var i = 0; i < questions.length; i++) {

            var answerString = '';

            questionString = '<label class="question">' + questions[i].question + '</label>';

            for (var a = 0; a < questions[i].answer.length; a++) {
                answerString +=
                    '<label class="radio answer">' +
                    '<input class="answer js-check" type="radio" name="' + i +
                    '" data-name="' + questions[i].answer[a] +
                    '">' + questions[i].answer[a] +
                    '</input>' +
                    '</label>';
            }

            $('#questions').append('<label class="question">' + questionString +
                '<div class="answer">' + answerString + '</div>' + '</label>');
        }
    }

    // Timer
    function startTimer(duration, display) {
        var timer = duration,
            minutes,
            seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    function countdown() {
        var oneMinutes = 60 * 1,
        // $('#time').append('<div class="timer">' + oneMinutes + '</div>');
            display = document.querySelector("#time");
        startTimer(oneMinutes, display);
    };
});
