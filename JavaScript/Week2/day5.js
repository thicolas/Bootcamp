let count =0;

function playTheGame(){
    let ans = confirm("tryna play?");
    if(ans===false){
        alert("alr peace");
    }
    else if(ans === true){
      let  num = prompt("give number from 0-10");
        if(num>10||num<0){
            alert("not within the range boss");
        }
        if(isNaN(num)){
            alert("not a number cheif");
        }
       else{
       let computerNumber = Math.floor(Math.random() * 11);
       count = 0;
       compareNumbers(num, computerNumber);
       }
    }
}

function compareNumbers(number,computer){
while(count<=2){
    if(number==computer){
        alert("easy W");
        break;
    }
    if(number>computer){
        alert("your number is too big");
        number=prompt("run it back");
    }
    if(number<computer){
        alert("your number too small");
        number=prompt("run it back");
    }
    count++;
}

    alert("no more chances");

}

playTheGame();
