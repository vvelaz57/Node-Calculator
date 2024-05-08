const rs = require('readline-sync');

const objOperators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};



function chooseOperation(operations) {
  return rs.question(
    'What operation would you like to perform? ',
    {
      limit: operations,
      limitMessage: 'This is not a valid operation',
    }
  );
};

function calculateResult(objOperations,chosenOperator, firstNum, secondNum) {
  return objOperations[chosenOperator](firstNum, secondNum);
};

const getNumber = (order) => {
  return rs.questionInt('Please enter the ' + order +' number ');
}

const calculator = (objOperations) => {
  const operations = Object.keys(objOperations);
  const chosenOperator = chooseOperation(operations);
  const [firstNum, secondNum] = ['first', 'second'].map((order) => 
  getNumber(order)
  );

  const result = calculateResult(
    objOperations,
    chosenOperator, 
    firstNum, 
    secondNum);
  console.log ('The result is:', result);
};

calculator(objOperators);



