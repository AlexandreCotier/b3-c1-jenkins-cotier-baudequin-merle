const Calculator = require('../src/calculator').Calculator;
const expect = require('chai').expect;

describe('Testing the Calculator Functions', function() {
    it('1. Sum', function(done) {
        expect(Calculator.sum(4,2)).to.equal(6);
        expect(Calculator.sum(4.1,2)).to.equal(6.1);
        done();
    });

    it('2. Multiply', function(done) {
        expect(Calculator.multiply(2,4)).to.equal(8);
        expect(Calculator.multiply(2.2,4)).to.equal(8.8);
        done();
    });

    it('3. Substract', function(done) {
        expect(Calculator.substract(6,4)).to.equal(2);
        done();
    });

    it('4. Division', function(done) {
        expect(Calculator.division(6,2)).to.equal(3);
        done();
    });

    it('5. Percentil', function(done){
        expect(Calculator.percentil(10,100)).to.equal(10);
        done();
    })
    it('6. Sum float', function(done) {
        expect(Calculator.sum(4.8,2.5)).to.equal(7.3);
        done();
    });

    it('7. Multiply float', function(done) {
        expect(Calculator.multiply(2,4.3)).to.equal(8.6);
        done();
    });

    it('8. Division float', function(done) {
        expect(Calculator.division(145.2,12.1)).to.equal(12);
        done();
    });

    it('9. Division float result', function(done) {
        expect(Calculator.division(10,3)).to.equal(3.3333333333333335);
        done();
    });

    it('10. Division zero', function(done) {
        expect(Calculator.division(10,0)).to.equal(Infinity);
        done();
    });

    //it('11. lettre', function(done) {
    //    expect(Calculator.division(10,'a')).to.equal('');
    //    done();
    //});

    it('12. ToPower', function(done){
        expect(Calculator.numberToPower(2,4)).to.equal(16);
        done();
    })

    it('13. ToPower2', function(done){
        expect(Calculator.numberToPowerTwo(18)).to.equal(324);
        done();
    })

    it('14. Square root tests', function(done){
        expect(Calculator.squareRoot(9)).to.equal(3);
        expect(Calculator.squareRoot(81)).to.equal(9);
        done();
    })

});