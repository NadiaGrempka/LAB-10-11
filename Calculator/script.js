// window.onload = function () {

    function calculate(){
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        const operation = document.getElementById('operation').value;
        let result;

        if (isNaN(number1) || isNaN(number2)) {
            result = "not a number";
        }else {
            switch (operation){
                case 'add':
                    result = number1 + number2;
                    break;
                case 'subtract':
                    result = number1 - number2;
                    break;
                case 'multiply':
                    result = number1 * number2;
                    break;
                case 'divide':
                    result = number1 / number2;
                    break;
                default: result = "error: incorrect operation";
            }
        }
        document.getElementById('result').innerText = result;
    }

// }