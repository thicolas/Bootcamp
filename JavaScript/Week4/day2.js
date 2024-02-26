//ex1
let sumFunc = (a,b)=> a+b;
console.log(sumFunc(1,1));

//ex2
function declaration(Kg) {
    return Kg * 1000;
  }
console.log(declaration(5)); 
  
const expression = function(Kg) {
    return Kg * 1000;
};
console.log(expression(5)); 
  
// Function declaration gets hoisted, so it can be called before it's declared.
// Function expression doesn't get hoisted and cannot be called before it's declared.

const arrow = weightInKg => weightInKg * 1000;
console.log(arrow(5));

//ex3
(function(child, partner, place, job){
    const sentence = `You will be a ${job} in ${place}, and married to ${partner} with ${child} kids.`;
    document.getElementById("output").innerHTML = sentence;
})(3,"nic","israel","coder");

//ex4
(function(userName) {
   
    const userDiv = document.createElement("div");
    userDiv.classList.add("navbar-text");
    userDiv.innerText = `Welcome, ${userName}!`;
    document.getElementById("user-info").appendChild(userDiv);
  })("Obama");
  
//ex5
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const sentence = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
        document.getElementById("output").innerText = sentence;
    }
  addIngredients("apple", "banana", "orange");
}
makeJuice("medium"); 
  
function makeJuice(size) {
    const ingredients = [];
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
        document.getElementById("output").innerText = sentence;
}
addIngredients("apple", "banana", "orange");
addIngredients("strawberry", "kiwi", "pineapple");
  
displayJuice();
}

makeJuice("large"); 
  
//daily challange
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
    let user = client; 
    client = "Betty"; 
    
    let shopping = {...groceries}; 
    

    shopping.totalPrice = "35$";
    shopping.other.paid = false;

    console.log(user); 
    console.log(client); 
    console.log(shopping); 
};

displayGroceries();
cloneGroceries();
