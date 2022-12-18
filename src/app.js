const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(){
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            rl.question('Enter the operator (+, -, *, /, ^, ^2, %): ', (operator) => {

            })
        })
    })
}

main();