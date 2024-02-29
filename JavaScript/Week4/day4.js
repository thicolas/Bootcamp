function displayStudentInfo(objUser){
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);
console.log(usersArray);


const usersArray2 = Object.entries(users).map(([key, value]) => [key, value * 2]);
console.log(usersArray2);

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color= color;
    }
  }
class Mamal extends Animal {
    constructor(name, type, color){
        super(name,type,color);
    }
    sound(wtv){
        return `The ${this.type} named ${this.name} (${this.color}) makes the sound "${wtv}".`;
    }
}
const farmerCow = new Mamal ("lily", "cow", "white");
console.log(farmerCow.sound("mooo"));

class Video {
    constructor(title, uploader, time){
        this.title=title;
        this.uploader=uploader;
        this.time =time;
    }
    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}`
    }
}
const shrek = new Video("shrek","idk",60);
console.log(shrek.watch());
const shrek2 = new Video("shrek 2","wtv",90);
console.log(shrek2.watch());