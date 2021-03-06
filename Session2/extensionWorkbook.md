# Code Academy: Session 3

> Think Like A Programmer in NodeJS

## Introduction
So you've just finished looking at data types, variables and functions in the first part of this session.

So now we're going to look at logic and loops.

We know from previous that we have a boolean value, true or false, this is what we get when we evaluate a condition. It is either true or false.

## If

This is more of a logic check.

The syntax is:
```if (condition) { doSomething(); }```

This means that if the condition evaluates to ```true``` then the code block will execute.
If false it'll just move on.

So for example:
```javascript
var number = 4;

if (number < 5) {
    console.log("The number is smaller than 5");
}

// Output
>> The number is smaller than 5
```
but in this example if the ```number``` is larger than 5, nothing will happen. Try this by adding another log statement after the if statement and changing the number.

Conditions don't just have to be based on numbers, you can evaluate strings, objects and lists.

```javascript
var listOfFruit = ["apple", "orange", "banana"];
if (fruitList.includes('apple')){
    console.log("Apple is in the list");
}
```

We can also have ```else``` and ```else if``` in there as well so we can check for more than one possible option. For example:

```javascript
function checkFruit(fruit){
  if (fruit == "apple"){
    console.log("Your fruit is an apple");
  } else if (fruit == "orange") {
    console.log("Your fruit is an orange");
  } else if (fruit == "banana") {
    console.log("Your fruit is a banana");
  } else {
    console.log("I don't know what your fruit is.")
  }
}


// OUTPUT
> checkFruit("kiwifruit")
"I don't know what your fruit is."

> checkFruit("banana")
"Your fruit is a banana"
```

Try it for yourself. You can do the same with numbers, but the importance is the syntax.
The condition you're checking should be in brackets ```(condition)``` and you can evaluate whatever you want, provided that the condition results in a boolean value.

**NOTE: ```==``` is equal to, ```=``` is an assignment. So ```fruit = "banana"``` is giving fruit a value, but ```fruit == "banana"``` is checking to see if the fruit is banana.**

You can use ```else``` like a default, so if your value doesn't fit any other known scenarios then you can do the else. Or if you only have one thing you're checking for, then if/else work as a helpful combo. What you use is all dependent on what you need to do.

## While

This is a loop, in this instance, based on the condition given.

The syntax is:
```javascript
while (condition) {
  doSomething...;
}
```

So in this, the code in the {} will execute until the condition is no longer true.

```javascript
while (true) {
    console.log("Hello");
}
```
This is called an infinite loop and the statement will be executed unendingly. Try it. I dare you. *If you do, then ctrl+c*


If you want to increment a counter, or add things recursively until a certain condition is met, then a while loop is a good start.

## For

```javascript
for (i = 0; i < 5; i++) {
    console.log("Number is: ", i);
}
```

## Fun Exercise: The Guessing Game

```javascript
// Get process.stdin as the standard input object.
var standard_input = process.stdin;
// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Guess A Number Game! Enter a number between 1 and 10:");

var secretNumber = Math.floor((Math.random() * 10) + 1);;

function guessingGame(){
  var guessed = false;
  while (!guessed) {
    // When user input data and click enter key.
    standard_input.on('data', function (data) {
        // User input exit.
        if(data === 'exit\n'){
            // Program exit.
            console.log("Program exit.");
            process.exit();
        } else {
            // Make a guess.
            makeGuess(data);
        }
    });
    function makeGuess(guess){
      if (guess > secretNumber){
        console.log("Number too big. Guess again!");
      } else if (guess < secretNumber){
        console.log("Number too small. Guess again!");
      } else if (guess == secretNumber){
        console.log("You Win!");
        guessed = true;

      }
    }
  }
  process.exit();
}

guessingGame();
```

Save this code as guessingGame.js and then run this from the terminal (in Cloud9 or locally):
```bash
node guessingGame.js
```
