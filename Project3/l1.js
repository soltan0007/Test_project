/*
let name = "Roman";
let age = 19;
let isMarried = false;
*/
let age = prompt("How old are you?");
let login = prompt("Write login")

switch(login){
    case 'admin':
        document.write("chao");
        break;
    case 'horse':
        alert("buy");
        break;
    case 'ivan':
        console.log("koo");
        break;
    default:
        document.write("lets");
}

/*
if (age >= 18 && login === "admin") {
    document.write("<h1> Welcome </h1>");
} else {
    document.write("<h1> Go home! </h1>");
}

/*
alert("My name is " + name);


let userName = prompt("How old are you?");
document.write(userName);
document.write("<br>");

let isAdult = confirm("Are u 18?");
document.write(isAdult);
*/