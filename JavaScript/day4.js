function age(myAge){
    console.log("my mom is "+myAge*2);
    console.log("my dad is "+myAge*2*1.2);
}
age(18);

function age2(myAge){
    return myAge*2;
}
console.log(age2(18));

//ex1
function infoAboutMe(){
    console.log("yo im nic and i like sports and i like sports betting");
}
infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(personName +" is " +personAge+ " and their fav color is "+personFavoriteColor);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//ex2
// function tip(){
//     let billy = prompt("whats the bill?");
//     if(billy<50){
//         console.log("the tip is: "+ billy*0.2+" and the total is: "+billy*1.2);
//     }
//     if(billy<200 && billy>49){
//         console.log("the tip is: "+ billy*0.15+" and the total is: "+billy*1.15);
//     }
//     if(billy>199){
//         console.log("the tip is: "+ billy*0.1+" and the total is: "+billy*1.1);
//     }
// }
// tip();

//ex3
function isDivisble(){
    var tot=0;
    for(let i =0; i<501;i++){
        if(i%23==0){
            console.log(i);
            tot=tot+i;
        }
    }
    console.log(tot);
}
isDivisble();
//hello