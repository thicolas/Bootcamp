// //ex1
// const container = document.getElementById("container");
// console.log('container: ', container);

// document.querySelector(".list").children[1].textContent = "Richard";

// const lists = document.querySelectorAll(".list");
// lists.forEach(list =>list.firstElementChild.textContent ="nic");

// lists[1].children[1].remove();

// //ex3
// const navbar = document.getElementById("navBar")
// navbar.setAttribute("id","socialNetworkNavigation")

// const li = document.createElement("li")
// const logout = document.createTextNode("Logout")
// li.appendChild(logout)
// const ul = navbar.firstElementChild
// ul.appendChild(li)

// //ex4
// const allBooks = [];
// const book1 = {
//     title:"Harry Potter",
//     author:"idk",
//     image: "https://picsum.photos/200",
//     alreadyRead: false
// }
// const book2 = {
//     title:"If I did It",
//     author:"OJ Simpson",
//     image: "https://picsum.photos/200",
//     alreadyRead: true
// }
// allBooks.push(book1,book2);

// const table = document.createElement("table");
// table.innerHTML = `
// <thead>
//     <tr>
//         <th colspan="3">My Book List</th>
//     </tr>
// </thead>
// <tbody>
//     <tr>
//         <td>${book1.title} written by ${book1.author}</td>
//         <td>
//         <img src="${book1.image}"/>
//         </td>
//         <td>Already read: ${book1.alreadyRead}</td>
//     </tr>
//     <tr>
//         <td class ="is-read">${book2.title} written by ${book2.author}</td>
//         <td>
//         <img src="${book2.image}"/>
//         </td>
//         <td>Already read: ${book2.alreadyRead}</td>
//     </tr>
// </tbody>
// `
// const bookListDiv = document.querySelector(".listBooks");
// bookListDiv.appendChild(table);

//daily challange
const planets = ["Mercury", "Venus", "Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];

for(const planet of planets){
    console.log('planet:', planet);
    const div = document.createElement("div");
    div.classList.add("planet");
    
}