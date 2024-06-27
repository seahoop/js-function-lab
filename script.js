function isAdult(x) {
    if (x >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(`Exercise 2 Result`, isAdult(21));

function isCharAVowel(x){
    if(x=5){
        return "True";
    }else {
        return "false";
    }
}
console.log(`Exercise 3 Result`, isCharAVowel("4"));

function generateEmail(name, domain)
{return name + "@" + domain;

}
console.log(`Exercise 4 Result`, generateEmail ("Ericdu" , "harborindustry.com"))

function greetUser(Name, time)
{
    return Name + " you are awesome Good" + time +"!";

}

console.log(`Exercise 5 result:`, greetUser("Eric", "Morning"))

function maxofThree(a,b,c) {
    if(a>=b && a>=c ){
        return a;
    }
    else if (b>=a && b>=c) {
        return b;
    } 
    else {
        return c;
    }
}
console.log(`Exercise 6 Result:`, maxofThree(5, 10, 8));

function calculateTip(totalAmount, tipPercentage )
{
    return (totalAmount * tipPercentage) / 100;

}
console.log('Exercise 7 Result:', calculateTip(50, 20));


function convertTemperature(temperature, scale)
{
    if(scale === `C`)
        {
            let resultF = (temperature * 9/5)+32
            return `${resultF} Fahrenheit`
        }
        else if(scale === `F`)
            {
                let resultC = (temperature-32)*5/9
                return `${resultC} Fahrenheit`
            }
                else {
                    return `Invalid scale`;
                }
            }
        
        console.log('Exercise 8 Result:', convertTemperature(32, "C"));




function basicCalculator(num1, num2, operation)
{ let result;
    if (operation === `add`)
        {
            result = num1 + num2;
        }
        else if (operation === `subtract`)
        {
            result = num1 - num2;
        }
        else if (operation === `divide`)
            {
                result = num1 / num2;
            }
        else if (operation === `multiply`)
            {
                result = num1 * num2;
            }
            else 
            {
                return `invalid`;
            }
            {
                return result;
            }
}
console.log(`Exercise 9 Result:`, basicCalculator(10, 5, "subtract"));
