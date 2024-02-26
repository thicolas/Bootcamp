// Ex 1

// #1
// Prediction: The value of 'a' inside funcOne will be 3.
// Explanation: 'a' is initially 5, but since 5 is greater than 1, it enters the if statement and sets 'a' to 3.

//#2
// Prediction: The value of 'a' inside funcThree will be 5 after calling funcTwo.
// Explanation: 'a' is a global variable initially set to 0. Calling funcTwo changes the global 'a' to 5, so when funcThree is called after funcTwo, it will display 5.

//#3
// Prediction: It will alert "inside the funcFive function hello".
// Explanation: funcFour assigns "hello" to the global variable 'a'. Then funcFive alerts the value of the global 'a', which is "hello".

//#4
// Prediction: It will alert "inside the funcSix function test".
// Explanation: Inside funcSix, 'a' is locally declared as "test", so it will display "test".

//#5
// Prediction: It will alert "in the if block 5" and "outside of the if block 2".
// Explanation: Inside the if block, 'a' is locally declared as 5, which only exists within the block scope. Outside the block, it remains 2.


// Ex 2
// const winBattle = () => {
//     return true;
// };

// Pt 2
const winBattle = true; // Assuming the function is evaluated as true

const experiencePoints = winBattle ? 10 : 1;

console.log(experiencePoints); // This will output 10 since winBattle is true


// Ex 3
const isString = (value) => {
    return typeof value === 'string';
};

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false


// Ex 4
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//     console.log(`${index + 1}# choice is ${color}.`);
// });
// if (colors.includes("Violet")) {
//     console.log("Yeah");
// } else {
//     console.log("No...");
// }

// Ex 5
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    let suffixIndex = (index + 1) % 10; // To handle cases like 11, 12, 13

    let suffix = suffixIndex <= 3 ? ordinal[suffixIndex] : ordinal[0]; // Default to "th" for 4th, 5th, 6th...

    console.log(`${index + 1}${suffix} choice is ${color}.`);
});


// Ex 6
// Use let for bankAmount since its value might change over time
let bankAmount = 5000; // Initial bank amount

// Use const for vatPercentage since it represents a fixed VAT percentage
const vatPercentage = 0.17; // 17% VAT in Israel

// Use const for monthly expenses since it's an array of expenses that won't be reassigned
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

// Modify the expenses array to include taxes (VAT)
const taxedExpenses = expenses.map(expense => {
    // Convert the expense string to a number and multiply by (1 + vatPercentage)
    return parseFloat(expense) * (1 + vatPercentage);
});

// Calculate the total expenses including taxes
const totalExpenses = taxedExpenses.reduce((acc, expense) => acc + expense, 0);

// Update the bank amount by subtracting total expenses
bankAmount -= totalExpenses;

// Display the current bank account standing at the end of the month
console.log(`Current bank account standing: $${bankAmount.toFixed(2)}`);


// Daily Challenge
const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

const usernames = [];

gameInfo.forEach(player => {
    usernames.push(player.username + '!');
});

console.log(usernames); // Output: ["john!", "becky!", "susy!", "tyson!"]

// Part 2
const winners = [];

gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});

console.log(winners); // Output: ["becky", "susy"]

// 3. 
let totalScore = 0;

gameInfo.forEach(player => {
    totalScore += player.score;
});

console.log("Total Score of Users:", totalScore); // Output: Total Score of Users: 71