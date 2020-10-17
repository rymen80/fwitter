import React from "react";


const Math = ({ num1, num2, operator}) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'You didnt give us an operator'
  }
  return <span>{num1} {operator} {num2} = {result}</span>
}

export default Math;
