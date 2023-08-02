const buttonConvert = document.getElementById('result');
const buttonReset = document.getElementById('reset');

buttonConvert.addEventListener('click', () => {
    const input = parseFloat(document.getElementById('input').value);
    const inputOption = document.getElementById('input-option').value;

    const output = document.getElementById('output');
    const outputOption = document.getElementById('output-option').value;

    if (inputOption === outputOption) {
        alert("Please select different options.");
    }

    let result = tempConverter(input, inputOption, outputOption).toFixed(2);

    output.value = result;

    let formula = getConvertionFormula(input, inputOption, outputOption);
    document.getElementById('howto').innerHTML = formula;
})

buttonReset.addEventListener('click', () => {
    const inputOption = document.getElementById('input-option').value;
    const outputOption = document.getElementById('output-option').value;
    
    output.value = '';
    document.getElementById('input').value = '';

    let resetFormula = getResetFormula(inputOption, outputOption);
    document.getElementById('howto').innerHTML = resetFormula;
})

function getResetFormula(inputOption, outputOption) {
    let resetFormula = '';

    switch (inputOption) {
        case 'celcius':
            switch (outputOption) {
                case 'fahrenheit':
                    resetFormula = '(0 &deg;C &times; 9/5) + 32 = 32 &deg;F';
                    break;

                case 'reamur':
                    resetFormula = '0 &degC &times; 4/5 = 0 &deg;Re';
                    break;
                
                case 'kelvin':
                    resetFormula = '0 &deg;C + 273 = 273 K';
                    break;
            
                default:
                    break;
            }
            break;
        
        case 'fahrenheit':
            switch (outputOption) {
                case 'celcius':
                    resetFormula = '(0 &deg;F &minus 32) &times; 5/9 = &minus;17.78 &deg;C';
                    break;

                case 'reamur':
                    resetFormula = '(0 &deg;F &minus 32) &times; 4/9 = &minus;14.22 &deg;Re';
                    break;

                case 'kelvin':
                    resetFormula = '(0 &deg;F &minus 32) &times; 5/9 + 273 = 255.372 K';
                    break;
            
                default:
                    break;
            }
            break;

        case 'reamur':
            switch (outputOption) {
                case 'celcius':
                    resetFormula = '0 &deg;Re &times 5/4 = 0 &deg;C';
                    break;

                case 'fahrenheit':
                    resetFormula = '(0 &deg;Re &times 9/4) + 32 = 32 &deg;F';
                    break;

                case 'kelvin':
                    resetFormula = '(0 &deg;Re &times 5/4) + 273 = 273 K';
                    break;
            
                default:
                    break;
            }
            break;

        case 'kelvin':
            switch (outputOption) {
                case 'celcius':
                    resetFormula = '0 K &minus 273 = &minus;273 &deg;C';
                    break;

                case 'fahrenheit':
                    resetFormula = '(0 K &minus 273) &times 9/5 + 32 = &minus;459.7 &deg;F';
                    break;

                case 'reamur':
                    resetFormula = '(0 K &minus 273) &times; 4/5 = &minus;218.4 &deg;Re';
                    break;
            
                default:
                    break;
            }
            break;

        default:
            break;
    }

    return resetFormula;
}

// celcius to fahrenheit, reamur, kelvin formula
const cToF = (cel => {
    let fahrenheit = (cel * 9/5) + 32;
    return fahrenheit; 
})

const cToR = (cel => {
    let reamur = 4/5 * cel;
    return reamur;
})

const cToK = (cel => {
    let kelvin = cel + 273;
    return kelvin;
})

// fahrenheit to celcius, reamur, kelvin formula
const fToC = (fah => {
    let celcius = (fah - 32) * 5/9;
    return celcius;
})

const fToR = (fah => {
    let reamur = (fah - 32) * 4/9;
    return reamur;
})

const fToK = (fah => {
    let kelvin = (fah - 32) * 5/9 + 273;
    return kelvin;
})

// reamur to celcius, fahrenheit, kelvin formula
const rToC = (rea => {
    let celcius = 5/4 * rea;
    return celcius;
})

const rToF = (rea => {
    let fahrenheit = (9/4 * rea) + 32;
    return fahrenheit;
})

const rToK = (rea => {
    let kelvin = (5/4 * rea) + 273;
    return kelvin;
})

// kelvin to celcius, fahrenheit, reamur formula
const kToC = (kel => {
    let celcius = kel - 273;
    return celcius;
})

const kToF = (kel => {
    let fahrenheit = (kel - 273) * 9/5 + 32;
    return fahrenheit;
})

const kToR = (kel => {
    let reamur = (kel - 273) * 4/5;
    return reamur;
})

// function to calculate
const tempConverter = (input, inputOption, outputOption) => {
    let result;

    switch (inputOption) {
        case 'celcius':
            switch (outputOption) {
                case 'fahrenheit':
                    result = cToF(input);
                    break;

                case 'reamur':
                    result = cToR(input);
                    break;
                
                case 'kelvin':
                    result = cToK(input);
                    break;
            
                default:
                    break;
            }
            break;
        
        case 'fahrenheit':
            switch (outputOption) {
                case 'celcius':
                    result = fToC(input);
                    break;

                case 'reamur':
                    result = fToR(input);
                    break;

                case 'kelvin':
                    result = fToK(input);
                    break;
            
                default:
                    break;
            }
            break;

        case 'reamur':
            switch (outputOption) {
                case 'celcius':
                    result = rToC(input);
                    break;

                case 'fahrenheit':
                    result = rToF(input);
                    break;

                case 'kelvin':
                    result = rToK(input);
                    break;
            
                default:
                    break;
            }
            break;

        case 'kelvin':
            switch (outputOption) {
                case 'celcius':
                    result = kToC(input);
                    break;

                case 'fahrenheit':
                    result = kToF(input);
                    break;

                case 'reamur':
                    result = kToR(input);
                    break;
            
                default:
                    break;
            }
            break;

        default:
            break;
    }
    return result;
}

// function to get convertion formula
const getConvertionFormula = (input, inputOption, outputOption) => {
    let formula = '';
    let result;

    // celcius to fahrenheit, reamur, kelvin
    if (inputOption == 'celcius' && outputOption == 'fahrenheit') {
        result = cToF(input);
    } else if (inputOption == 'celcius' && outputOption == 'reamur') {
        result = cToR(input);
    } else if (inputOption == 'celcius' && outputOption == 'kelvin') {
        result = cToK(input);
    } 

    // fahrenheit to celcius, reamur, kelvin
    else if (inputOption == 'fahrenheit' && outputOption == 'celcius') {
        result = fToC(input);
    } else if (inputOption == 'fahrenheit' && outputOption == 'reamur') {
        result = fToR(input);
    } else if (inputOption == 'fahrenheit' && outputOption == 'kelvin') {
        result = fToK(input);
    }

    // reamur to celcius, fahrenheit, kelvin
    else if (inputOption == 'reamur' && outputOption == 'celcius') {
        result = rToC(input);
    } else if (inputOption == 'reamur' && outputOption == 'fahrenheit') {
        result = rToF(input);
    } else if (inputOption == 'reamur' && outputOption == 'kelvin') {
        result = rToK(input);
    }

    // kelvin to celcius, fahrenheit, reamur
    else if (inputOption == 'kelvin' && outputOption == 'celcius') {
        result = kToC(input);
    } else if (inputOption == 'kelvin' && outputOption == 'fahrenheit') {
        result = kToF(input);
    } else if (inputOption == 'kelvin' && outputOption == 'reamur') {
        result = kToR(input);
    }

    switch (inputOption) {
        case 'celcius':
            switch (outputOption) {
                case 'fahrenheit':
                    formula = `(${input} &deg;C &times; 9/5) + 32 = ${result} &deg;F`;
                    break;

                case 'reamur':
                    formula = `${input} &deg;C &times; 4/5 = ${result} &deg;Re`
                    break;
                
                case 'kelvin':
                    formula = `${input} &deg;C + 273 = ${result} K`;
                    break;
            
                default:
                    break;
            }
            break;
        
        case 'fahrenheit':
            switch (outputOption) {
                case 'celcius':
                    formula = `(${input} &deg;f - 32) &times; 5/9 = ${result} &deg;C`;
                    break;

                case 'reamur':
                    formula = `(${input} &deg;f - 32) &times; 4/9 = ${result} &deg;Re`;
                    break;

                case 'kelvin':
                    formula = `(${input} &deg;f - 32) &times; 5/9 + 273 = ${result} K`;
                    break;
            
                default:
                    break;
            }
            break;

        case 'reamur':
            switch (outputOption) {
                case 'celcius':
                    formula = `${input} &deg;R &times; 5/4 = ${result} &deg;C`;
                    break;

                case 'fahrenheit':
                    formula = `(${input} &deg;R &times; 9/4) + 32 = ${result} &deg;F`;
                    break;

                case 'kelvin':
                    formula = `(${input} &deg;R &times; 5/4) + 273 = ${result} K`;
                    break;
            
                default:
                    break;
            }
            break;

        case 'kelvin':
            switch (outputOption) {
                case 'celcius':
                    formula = `${input} K - 273 = ${result} &deg;C`
                    break;

                case 'fahrenheit':
                    formula = `(${input} K - 273) &times; 9/5 + 32 = ${result} &deg;F`
                    break;

                case 'reamur':
                    formula = `(${input} K - 273) &times; 4/5 = ${result} &deg;Re`
                    break;
            
                default:
                    break;
            }
            break;

        default:
            break;
    }

    return formula;
}