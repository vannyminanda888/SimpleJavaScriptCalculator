
function load() {

    var btns = document.querySelectorAll('#calculator span');

    console.log(btns);
    var operators = ['+', '-', 'x', '÷'];
    var inputScreen = document.querySelector('#screen');
    var btnValue;
    var input;

    for(var i=0; i< btns.length; i++) {

        var decimalAdded = false; // Flag used to avoid two decimal

        btns[i].addEventListener('click', function () {

            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;

            switch (btnValue) {
                case 'C':
                    inputScreen.innerHTML = '';
                    decimalAdded = false;
                    break;
                case '=':

                    // Last char of string
                    var lastChar = input[input.length - 1];
                    // console.log(lastChar);

                    // Replace x to *, + to / which could be calculated in eval

                       input = input.replace("x", '*').replace("÷", '/');

                    // input = input.replace(/x/g, '*').replace(/÷/g, '/');

                    // Checking the last character of the input.
                    // If it's an operator or a decimal, remove it
                    // /.$/ means last char in regex

                    // if(operators.includes(lastChar) )
                    //   console.log('lastValue is present in operators array'); else console.log('not present');

  //checking if expression is incomplete
  //the last char should not be an operator or a decimal

                    if(operators.includes(lastChar) || lastChar == '.'){
                      break;
                      // input = input.replace(/.$/, '');
                      }

//checking if input is defined
                    else  {
                        // If the argument is an expression, eval() evaluates the expression.
                        // If the argument is one or more JavaScript statements, eval() executes the statements.
                        inputScreen.innerHTML = eval(input);
                    }
                    decimalAdded = false; //resetting this
                    break;
                case '.':
                    if(!decimalAdded) {
                        inputScreen.innerHTML += btnValue;
                        decimalAdded = true;
                    }
                    break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                    // Last char of string
                    var lastChar = input[input.length - 1];

                    // Only add operator if input is not empty and there is no operator at the last
                    if(input != '' && !operators.includes(lastChar))
                        inputScreen.innerHTML += btnValue;

                    // Allows minus if the string is empty. The first number could be under zero
                  else{
                      if(input == '' && btnValue == '-')
                     { inputScreen.innerHTML += btnValue; }
                  } 

                    // Allows to represent the last operation
                    if(operators.includes(lastChar) && input.length > 1) {
                      //simplified
                      inputScreen.innerHTML = input.replace(lastChar, btnValue);
                        // inputScreen.innerHTML = input.replace(/.$/, btnValue);
                    }
                    decimalAdded = false;
                    break;
                default:
                    inputScreen.innerHTML += btnValue;
                    decimalAdded = false;
                    break;
            }
        });
    }
}