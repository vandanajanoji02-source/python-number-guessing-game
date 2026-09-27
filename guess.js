const { createInterface } = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

async function main() {
    const number = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const readline = createInterface({ input: stdin, output: stdout });

    console.log("Guess the number between 1 and 100!");

    try {
        while (true) {
            const answer = await readline.question("Your guess: ");
            const guess = Number(answer.trim());

            if (answer.trim() === "" || !Number.isInteger(guess)) {
                console.log("Please enter a whole number.");
                continue;
            }

            attempts += 1;
            if (guess < number) {
                console.log("Too low.");
            } else if (guess > number) {
                console.log("Too high.");
            } else {
                console.log(`Correct! You guessed the number in ${attempts} attempts.`);
                break;
            }
        }
    } finally {
        readline.close();
    }
}

main();