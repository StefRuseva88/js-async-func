async function startQuiz() {
    let finalScore = 0;
    for (let index = 0; index < questions.length; index++) {
        const { question, answers, correct } = questions[index]; 
        const userInput = await ask(question, answers);
        if (userInput === correct) {
            finalScore += 1;
            console.log("Correct!");
        } else {
            console.log("Not correct!");
        }
    }

    console.log("Final result: " + finalScore);
}

function ask(question, answers) {
    return new Promise((resolve) => {
        let message = question + '\n';
        answers.forEach((answer, index) => message += `${index}. ${answer}\n`);
        const userInput = prompt(message);
        resolve(parseInt(userInput));
    });
}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5"],
        correct: 1
    },
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris"],
        correct: 2
    },
    {
        question: "What is the square root of 16?",
        answers: ["4", "5", "6"],
        correct: 0
    },
];
