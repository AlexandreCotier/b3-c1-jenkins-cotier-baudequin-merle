const readline = require('readline');
const {Calculator} = require("./calculator");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForContinue(){
    rl.question('Do you want to make another operation ? (y for yes) ?', (answer) => {
        if((answer === 'y') || (answer === 'o')){
            main();
        } else {
            rl.close();
        }
    })

}

function main(){
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number (let it empty if ^2): ', (num2) => {
            rl.question('Enter the operator (+, -, *, /, ^, ^2, %, v): ', (operator) => {

                let result;
                let sortie;
                num1 = Number(num1);
                num2 = Number(num2);

                switch(operator){
                    case '+':
                        result = Calculator.sum(num1,num2);
                        break;
                    case '-':
                        result = Calculator.substract(num1,num2);
                        break;
                    case '*':
                        result = Calculator.multiply(num1,num2);
                        break;
                    case '/':
                        result = Calculator.division(num1,num2);
                        break;
                    case '^':
                        result = Calculator.numberToPower(num1,num2);
                        break;
                    case '^2':
                        result = Calculator.numberToPowerTwo(num1);
                        sortie = num1 + ' ' + operator + ' = ' + result;
                        break;
                    case '%':
                        result = Calculator.percentil(num1,num2);
                        break;
                    case 'v':
                        result = Calculator.squareRoot(num1);
                        sortie = operator + num1 + ' = ' + result;
                        break;
                    default:
                        console.log('Invalid operator');
                        break;
                }

                if(isNaN(result)){
                    console.log("Something went wrong...");
                }else{
                    if(operator != '^2' && operator != 'v'){
                        sortie = num1 + ' ' + operator + ' ' + num2 + ' = ' + result;
                    }
                    console.log(sortie);
                }

                askForContinue();
            });
        });
    });
}

main();