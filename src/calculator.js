class Calculator {

    static sum(numberOne, numberTwo){
        return numberOne + numberTwo;
    }

    static multiply(numberOne, numberTwo){
        return numberOne * numberTwo;
    }

    static substract(numberOne, numberTwo){
        return numberOne - numberTwo;
    }

    static division(numberOne, numberTwo){
        return numberOne/numberTwo;
    }

    static percentil(numberOne,numberTwo){
        if(numberTwo == 0){ return 0};
        return (numberOne / numberTwo) * 100;
    }

    static numberToPower(numberOne, numberTwo){
        return Math.pow(numberOne, numberTwo);
    }

    static numberToPowerTwo(number){
        return Math.pow(number, 2);
    }

    static squareRoot(number){
        return Math.sqrt(number);
    }
}

module.exports = {
    Calculator:Calculator
}