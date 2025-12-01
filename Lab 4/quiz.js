const quizQuestions = [
    {
        question: "1. What is the capital of India?",
        options: ["A) Mumbai", "B) Delhi", "C) Kolkata", "D) Chennai"],
        answer: "b",
        hint: "It is also known as the Heart of India."
    },
    {
        question: "2. Which planet is known as the Red Planet?",
        options: ["A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"],
        answer: "b",
        hint: "It has iron oxide on its surface."
    },
    {
        question: "3. What does HTML stand for?",
        options: ["A) Hyper Time Markup Language", "B) Hyper Trainer Marking Level", "C) Hypertext Markup Language", "D) Hyperlink Markup Level"],
        answer: "c",
        hint: "It is used to structure web pages."
    },
    {
        question: "4. Which language is used for styling webpages?",
        options: ["A) JavaScript", "B) C", "C) CSS", "D) Python"],
        answer: "c",
        hint: "It describes the look & formatting of a document."
    },
    {
        question: "5. In which year was JavaScript created?",
        options: ["A) 2000", "B) 1995", "C) 1989", "D) 1998"],
        answer: "b",
        hint: "It was created by Brendan Eich in just 10 days."
    }
];

function runQuiz() {
    let score = 0;
    let totalTime = 15;
    let highScore = localStorage.getItem("highScore") || 0;

    alert("Welcome to the Advanced Quiz Game!\nYou have 15 seconds for each question.");

    for (let i = 0; i < quizQuestions.length; i++) {
        const current = quizQuestions[i];
        let startTime = Date.now();

        let message =
            current.question + "\n" +
            current.options.join("\n") +
            "\n\nEnter A, B, C, or D:";

        let answer = prompt(message);
        let timeTaken = (Date.now() - startTime) / 1000;

        if (timeTaken > totalTime) {
            alert(" Time's up!\nCorrect answer: " + current.answer.toUpperCase());
            continue;
        }

        if (!answer) {
            alert("You skipped the question!");
            continue;
        }

        let cleaned = answer.toLowerCase().trim();

        if (cleaned === current.answer) {
            score++;
            alert("🎉 Correct!");
        } else {
            alert("❌ Wrong!\nHint: " + current.hint + "\nCorrect answer was: " + current.answer.toUpperCase());
        }
    }

    let resultMessage =
        score === quizQuestions.length
            ? " Outstanding Performance!"
            : score >= quizQuestions.length - 1
            ? " Great Job!"
            : score >= quizQuestions.length / 2
            ? " Good try, keep practicing!"
            : " Needs improvement — try again!";

    alert(
        "Quiz Complete!\n" +
        "Your Score: " + score + " / " + quizQuestions.length + "\n\n" +
        resultMessage
    );

    if (score > highScore) {
        localStorage.setItem("highScore", score);
        alert(" NEW HIGH SCORE: " + score);
    } else {
        alert(" High Score: " + highScore);
    }

    let restart = prompt("Do you want to play again? (yes/no)");

    if (restart && restart.toLowerCase().trim() === "yes") {
        runQuiz();
    } else {
        alert("Thanks for playing! ");
    }
}

runQuiz();
