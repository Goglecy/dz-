let numbers =  [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7]

 let multiplyNumbers =  numbers.map((price) => price * 5 );

console.log(multiplyNumbers);

let positiveNumbers = numbers.filter ((price) => price > 0 )

console.log(positiveNumbers);







let long = [600, 1500, 200, 3750, 1550, 1400, 1000]

console.log(long)

let inMeters = long
    .map((price) => price / 1000)

console.log(inMeters)

let inInches = long
    .map((price) => price / 25.4)
    .map(price => Math.round(price))
console.log(inInches)





let words = ['alla','lola','madam','peep','alex','level','table']

function isPalindrome (word) {
    return word === word.split('').reverse().join('')
}
let palindrome = words.filter (isPalindrome)

console.log(palindrome)
