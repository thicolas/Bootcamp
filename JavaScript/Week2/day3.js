// for(let i = 0; i<16; i++){
//     if(i%2==0){
//         console.log(i+" is even")
//     }
//     else{
//         console.log(i +" is odd");
//     }
// }
// let names= ["john", "sarah", 23, "Rudolf",34]
// for(i=0; i<names.length; i++){
//     if(typeof names[i]==='string'){
//         names[i]=names[i][0].toUpperCase()+names[i].slice(1);
//         console.log(names[i]);
//     }
//     else{
//         continue;
//     }
// }

// for(i=0;i<names.length;i++){
//     if(typeof names[i]==='string'){
//         console.log(names[i]);
//     }
//     else{
//         break;
//     }
// }

//ex 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
for(let i in people){
    if(people[i]=="James"){
        people.splice(i,i,"Jason")
    }
}
people.push("Nic");
let vibez = people.indexOf("Mary");
console.log(vibez);
console.log(people);

let list = people.slice(1);
console.log(list);

let doesNotExist = people.indexOf("Foo");
//coz it doesnt exist
let last = people[people.length-1];
console.log(last);

for(let i in people){
    console.log(people[i]);
}
for(let i in people){
    if(people[i]!="Devon"){
    console.log(people[i]);
    }
    else{
        if(people[i]=="Devon"){
            console.log("Devon")
            break;
        }
    }
}
//ex 2
const colors = ["red","blue","green","purp","black"];
for (let i in colors){
    console.log("My #"+i+" choice is "+ colors[i]);
}

//ex 3
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

if(building.numberOfRoomsAndRent.david[1]+building.numberOfRoomsAndRent.sarah[1]>building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]=1200;
    console.log(building.numberOfRoomsAndRent.dan[1]);
}
//ex 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  
  for(let i in details){
    console.log(i);
    console.log(details[i]);
  }

  //ex 7
  const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
  const firstLetters = [];

  for(let i in names){
    const firstLetter = names[i][0];
    firstLetters.push(firstLetter);
  }
  firstLetters.sort();
  console.log(firstLetters);

  const secretSocietyName = firstLetters.join('');
  console.log(secretSocietyName);

  //DC
 
  for(let j=1;j<7;j++){
    let pattern = '';
  for(let i=1;i<=j;i++){
    pattern+= '* ';
  }
  console.log(pattern);
}
//yo