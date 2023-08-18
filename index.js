
console.log('hello world')

let num = 20

console.log(num)

// Assignment 1.💀
// 1. create a variable "my age", then set its value to your age
// 2. log my age variable on console 
console.log('Assignment 1')

var my_age = 17

console.log(my_age)

// Assignment 2.💀💀
// 1. Create 2 variables "myage", "humandogratio"clear
// 2. multiply the two together and store the result in my dog years
// 3. log my dog age to console 
console.log('Assignment 2')

var myage = 10
var humandogratio = 7
var mydogyears = myage * humandogratio

console.log('The result =',mydogyears)

// Assignment 3.💀💀💀
// create a variable "bonus points". Initialize it at 50. increase it by 100.
// decrease it down to 25, and then finally increase it to 70
// console.log the value of each step 
console.log('Assignment 3')

var bonuspoints = 50

bonuspoints = bonuspoints + 50
console.log('Step 1.', bonuspoints)

bonuspoints = bonuspoints - 75
console.log('Step 2.', bonuspoints)

bonuspoints = bonuspoints + 45
console.log('Step 3.', bonuspoints)

// Assignment 4.💀💀💀💀
// create a function (you decide the name) that logs out the number 42 on the console
// call/invoke the function 
function number() {
    console.log('42')
}

number()

// Assignment 5.💀💀💀💀💀
// create a function that logs out  the sum of all lap times

var lap1 = 34
var lap2 = 33
var lap3 = 36

function lapsum() {
    console.log(lap1 + lap2 + lap3)
}

lapsum()

// Assignment 6.💀💀💀💀💀💀
// create a function that increments the laps completed variable with one
// run it 3 times

var lapscompleted = 0

function lapsincrement() {
    lapscompleted = lapscompleted + 1
    console.log(lapscompleted)
}

lapsincrement()
lapsincrement()
lapsincrement()

// Assignment 7.💀💀💀💀💀💀💀 
// initialize the count as zero
// listen for clicks on the increment button 
// change the count-el in the html to reflect the new count 
var count = 0
let countclicked = document.getElementById("count-el")


function increment() {
    count += 1
    countclicked.innerText = count
    console.log(count)
}

// Assignment 8.💀💀💀💀💀💀💀💀 
// create a function save(), which logs out the count when its called 
// create a save btn in your html 
// set the id to save-btn and call the save-btn is clicked

// Assignment 15 comes here 😱

let saveEl = document.getElementById("save-el")


function save() { 
    var count_dash = count + " - "
    saveEl.textContent += count_dash
    countclicked.innerText = 0 
    count = 0
    console.log(count)
}

// Assignment 9.💀💀💀💀💀💀💀💀💀
// make a variable, message, that stores the string; "you have three new notifications"

var username = "David"

var message = "you have three new messages"

console.log(message + ", " + username)

// Assignment 10.💀💀💀💀💀💀💀💀💀💀
// create a variable message to user that contains the message we have logged 💀

var messagetouser =  message + ", " + username +  "!"

console.log(messagetouser)

// Assignment 11.💀11x
// create two variables, name and greetings. The name variable should store your name,
// and the greeting variable should store "Hi, my name is"
// create a third variable that concatenates the two strings
// log my greetings to console


var initials = "David"
var greeting = "Hi, my name is"
var mygreetings = greeting + ", " + initials

console.log(mygreetings)

// Assignment 12.💀12x
// solve these lol

console.log(4 + 5) // its 9
console.log("2" + "4") // its 24
console.log("5" + 1) // its 51
console.log(100 + "100") // 100100

// Assignment 13.💀13x
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// create two variables (name and greetings) that contains your name
// and the greeting we want to render on the page
// Render the welcome 👋 message using welcomeEl.innertext

let welcomeEl = document.getElementById("welcome-el")
var name = "David"
var greetings = "Welcome back,"

welcomeEl.innerText = greetings + name

// Assignment 14.💀14x
// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW!!
// HINT: count = count + 1

welcomeEl.innerText = welcomeEl.innerText + "👋"

// Assignment 15.💀15x
// 1. Grab the save-el paragraph and store it in a variable called saveEl
// 2. create a variable that contains both count and the dash seperation, i.e. "12 - "
// 3. Render the variable in the saveEl using inner text
// NB. make sure you don't delete the existing content of the paragraph

// its on line 103 😌 had to put it there 🤫

// Assignment 16.💀16x
// make the increment reset after clicking save 
// i did that in ln 107

// Well finished the course well on this tho 😌🎊🎊
// now recap practices 

// practice 1. 🍎
// create two variables, first name and last name 
// concatenate the two variables into a third variable called full name
// Log full name to console 

var firstname = "David"
var lastname = "Ahonkhai"
var fullname = firstname + " " + lastname

console.log(fullname)

// practice 2. 🍎
// create a function that calls "Hi there, Linda!" when called

var name1 = "Linda" 
var greeting2 = "Hi there"

function linda() {
    console.log(greeting2 + ", " + name1 + "!")
}

linda()

// practice 3. 🍎 
// create variable mypoints = 3
// create 2 functions addpoints(), removepoints()
// have them add/remove points from mypoints variable
// call the function to log 10 points 

var mypoints = 3

function addpoints() {
    mypoints += 10
    console.log("added 10 points 🤓")
}

addpoints()

function removepoints() {
    mypoints -= 3
    console.log("removed 3 points 🫠")
}

removepoints()

console.log("your total points are" + ": " + mypoints)

// practice 4. 🍎
// Try to predict what each of the lines would logout

console.log("2" + 2)// 22
console.log(11 + 7)// 18
console.log(6 + "5")// 65
console.log("My points: " + 5 + 9)// 59
console.log( 2 + 2)// 4 
console.log("11" + "14")// 1114

// CLASS 2. (its kinda easy) 😄😄😄

// Assignment 1. 💀
// when the user clicks the purchase button, render out 
// "Something went wrong, please try again" in the paragraph
// that has the id "error"

var error = document.getElementById("error")

function purchase() {
    error.textContent = "Something went wrong, please try again"
}

// Assignment 2. 💀💀
// create four functions: add(), subtract(), divide(), multiply()
// call the correct function once the user clicks on one of the buttons
// perform the giving calculation using num1 and num2
// Render the results of the calculation in the paragraph with the id = "sum-el"

// E.g. if the user clicks on the "plus" button, you should render 
// "Sum: 10" since (8 + 2 = 10) inside the paragraph with id = "sum-el"

var num1 = 8
var num2 = 2
var totalsum = ""
var sum = document.getElementById("sum-el")

//num1 = document.getElementById("num1-el")
//num2 = document.getElementById("num2-el") 


function add() {
    totalsum = num1 + num2
    sum.textContent = "sum: " + totalsum
}

function subtract() {
    totalsum = num1 - num2
    sum.textContent = "sum: " + totalsum
}

function multiply() {
    totalsum = num1 * num2
    sum.textContent = "sum:" + totalsum
}

function divide() {
    totalsum = num1 / num2
    sum.textContent = "sum:" + totalsum
}

// Assignment 3. 💀💀💀
// create 2 variables, first card and second card
// set their values to a random number between 2-11
// create a variable and set it to the sum of the 2 cards


var firstcard = 2
var secondcard = 11

var cardSum = firstcard + secondcard
console.log(cardSum)

// Assignment 5. 💀💀💀💀💀
// check if the person is old enough to enter the nightclub (21)
// Log a suitable message to both messages
// if less tha 21  -> "you, cannot enter the night club!"
// else            -> "Welcome sir!"

var age = 51

if (age <= 21) {
    console.log("you, cannot enter the night club!")
}
else {
    console.log("Welcome sir!🗿")
}

// Assignment 6. 💀💀💀💀💀💀
// check if the person is eligible for a birthday card from the king! (100)
// if less than 100 -> "not eligible"
// if exactly 100 -> "Heres your birthday card from the king! 🗿🗿"
// if above 100 -> "not eligible, you've already gotten one"

var age = 100 

if (age < 100) {
    console.log("not eligible!")
}
else if(age === 100) {
    console.log("Here's your birthday🎂 card from the 👑king! ")
}
else {
    console.log("not eligible, you've already gotten one")
}

// Assignment 8 💀x8
// create a variable isalive and assign it to true
// flip the value to false in the appropriate code block

console.log("boolean test 🤓👇")
console.log(4 === 3) // False
console.log(5 > 2) // true
console.log(12 > 12) // false
console.log(3 < 0) // false
console.log(3 >= 3) // true
console.log(11 <= 11) // true
console.log(3 <= 2) // false
console.log("🎊🎊🎊🎊🎊")

// Assignment 7. 💀x7
// write the conditionals according to these rules 
// if less than or equals to 20 -> "Do you wan to draw a new card?"
// if else exactly 21 -> "wahoo 🥳, you've got blackjack!"
// else "you're out of the game"

// Assignment 9 💀x9
// create a variable called message and assign its value to an empty string 
// reassign the message variable to a string we're logging out


// Assignment 10 💀💀💀💀💀💀💀💀💀💀
// create a button that says START GAME .
// make it call a startGame() function when clicked
// create a startgame() function
// style the button with provided designs :
// text color - #016f32
// width - 150px
// color - goldenrod

// Assignment 11 💀x11
// store the message el paragraph in a variable called messageEl
// display message in the messageEl using messageEl.textcontent

// Assignment 12 💀x12
// give the sum paragraph an id of sum-el
// store sum paragraph in a variable called sumEl
// Render the sum on the page using this format -> "sum: 14"

// Assignment 13 💀x13
// give the cards paragraph an id of card-el
// store cards paragraph in a variable called cardEl
// Render the cards on the page using this format -> "card: 14 12"

// Assignment 18 💀x18
// Create a new array -> cardz - that contains the first and second card
// Refer to the cardz array when rendering out the cards


var firstcard = getRandomCard()
var secondcard = getRandomCard()
var blackjacksum = firstcard + secondcard 
var hasblackjack = false
var isalive = true
var message = ""
var cardz = [firstcard, secondcard]
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-El")
var cardEl = document.getElementById("card-El")


// Assignment something 6x 💀💀💀💀💀💀
// create a function, getRandomCard(), that always returns the number 5

// modify the getRandomCard() function so it returns random numbers between 1 and 13.

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1
}

console.log(getRandomCard())
//🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆

function start_game(){
    render_game()
}
//🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆🦆

function render_game() {
    cardEl.textContent = "card: " 
    // create for loop that renders all cards
    for( i = 0; i < cardz.length; i++) {
        cardEl.textContent += cardz[i] + " "   
    }
    sumEl.textContent = "sum: " + blackjacksum
    if (blackjacksum <= 20) {
        message = "do you want to draw a new card?"
    }
    else if (blackjacksum === 21) {
        hasblackjack = true
        message = "you got blackjack!" 
    }
    else {
        isalive = false
        message = "You're out of the game"
    }
    messageEl.textContent = message
    console.log(message)
}

console.log(isalive)

// Assignment 14 💀x14
// Make a new card button, mak it run newcard() on click -->
// Create newcard() function, it should log out "drawing a new card from the deck"

// Create a variable -> card and hard code the value to a number(2-11)
// Add a new card to the sum variable
// call start game

// Push the card to the cards array 

function new_card() {
    var newcardz = getRandomCard()
    cardz.push(newcardz)
    blackjacksum += cardz[2]
    render_game()
    console.log("drawing a new card from the deck 🤔")
    console.log(cardz)
}

// Assignment 15 💀x15
// create an array that list your i.e. experience, education, licenses, skill or similar
// The items for the array should be strings 

var experience = ["HTML", "CSS", "Javascript", "c#", "C++",]

console.log( experience[0] )
console.log( experience[1] )
console.log( experience[2] )

// Assignment 16 💀x16
// create an array that describes yourself. use the three primitive data types you've learned 
// it should contain your name(string), your age(numbers) and whether you like pizza(boolean)

var my_name = "David"
var how_old = 18
var like_pizza = true 

if (like_pizza = true) {
    console.log("this dude likes pizza🫠")

}

var description = [my_name, how_old, like_pizza]
console.log(description[2])

// Assignment 17 💀x17
// Push the new messages to the messages array, and log out the array 


var text_messages = [
    "Hey, how's it going",
    "i'm great thank you! How about you",
    "All good. Been working on my portfolio lately"
]

var new_messages = "Same here!"

text_messages.push(new_messages)

console.log(text_messages)

// BONUS ASSIGNMENT 🥱
// Remove last item on array 


text_messages.shift()

console.log(text_messages)

// Assignment something 💀💀💀💀💀💀💀💀💀💀
// Count 1 - 10

for ( var numbers = 1; numbers < 11; numbers += 1 )

console.log(numbers)

console.log("This is just a log to seperate the numbers 🗿")

// Assignment something x2 💀💀💀💀💀💀💀💀💀💀
// Create a for loop that counts from 10 to 100 in steps of 10
// use console.log to log out the numbers

for ( var i = 10; i < 101; i += 10) {
    console.log(i)
}

// Assignment something x3 💀💀💀💀💀💀💀💀💀💀 
// Create a for loop that logs out all the cards
// Use card.length to specify how long the loop should be!

var loop_test = ["David", "Jojo", "Mercy"]

for (var a = 0; a < loop_test.length; a++) {
    console.log(loop_test[a])
}

console.log("💀💀💀💀 separator lol")
// Assignment something x4 💀💀💀💀💀💀💀💀💀💀 
// Render the items in sentence_El paragraph using loops and text.content 

var sentence = ["Hi", "my", "name", "is", "David"]
var sentenceEl = document.getElementById("sentence_El")

for (var a = 0; a < sentence.length; a++) {
    sentenceEl.textContent += sentence[a] + " "
    console.log(sentence[a])
}


// Assignment something x5 💀💀💀💀💀💀💀💀💀💀💀
// write a function that returns the total race time
// call/invoke the function and store the returned value in a new variable
// log the variable out

var time1 = 102
var time2 = 107
var Total_time = 0


function total_race_time() {
     return time1 + time2
}

Total_time = total_race_time()
console.log(Total_time)

var random_number = Math.random()
var floored_number = Math.floor(3.55)

console.log(random_number)
console.log(floored_number)

// Questions 🤔
// what does Math.random() do?
// Ans: it gives a random number from 0 to infinity i think

// what does Math.floor() do?
// Ans: it makes decimal numbers whole numbers.

// Assignment Dice 🎲

var random_die = Math.floor(Math.random() * 6) + 1

console.log("Your die: " + random_die)

// Write down all the possible values random_die can hold now!
// 0-5
// modify expression show it writes 0-6.

// Assignment something x6 💀💀💀💀💀💀💀💀 
// Create a function, roll_dice() that returns a random number between 1 and 6

function roll_dice() {
    var random_dice = Math.floor(Math.random() * 6) + 1
    console.log("You rolled a " + random_dice)
}

function roll() {
    roll_dice()
}

if (typeof window === "object") {
    console.log( "code is running in a browser environment" )
  } else {
    console.log("code is running in a non-browser environment")
  }

  // log 1-100 and number thats divisible by 3 log "fizz" divisible by 5 log "buzz"

  for(let a = 1; a < 101; a++){
    if(a % 3 == 0){
        console.log("FIZZ")
    }
    else if(a % 5 == 0){
        console.log("BUZZ")
    }
    console.log(a)
  }

  // Given an array of intergers, return an array, where the first element is the count of positives numbers 
  // and the second element is sum of negative numbers. 0 is either positive or negative If the input array is empty or null, 
  // return an empty array.


    function Positives_Negatives(input) {
        var positive_count = 0;
        var negative_count = 0;
        if (input == null || input.length == 0) {
          return [];
        }
        for (var i = 0; i < input.length; i++) {
          if (input[i] > 0) {
            positive_count++;
          } else {
            negative_sum += input[i];
          }
        }
        return [positive_count, negative_sum];
      }

      var input_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10, -11, -12, -13, -14, -15];
      var result = Positives_Negatives(input_array);


      console.log(result);
      console.log("Count of positive numbers: " + result[0] + ", Sum of negative numbers: " + result[1]);
    

    // Give the page a dark and light theme 🦆