class Customer {
    constructor(email, password, age, city, gender, name, surname) {
        this.email = email;
        this.password = password;
        this.age = age;
        this.city = city;
        this.gender = gender;
        this.name = name;
        this.surname = surname;
    }
}

var clients = [new Customer("admin@com.ua","admin",18,"Donetsk","Woman","Daniella","Queue"),new Customer("were@ukr.net", "3453", 18, "Kyiv", "Man", "Bill", "Vazovsky"), new Customer("ert@ukr.net", "123", 30, "Lviv", "Woman", "Mary", "Clingane"), new Customer("rrr@gmail.com", "234", 23, "Kyiv", "Man", "Chack", "Rittle")];
function logIn() {
    var flag = false;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name, surname;
    for(var i = 0;i<clients.length;i++){
        if(clients[i].email == email && clients[i].password == password){
            flag = true;
            name = clients[i].name;
            surname = clients[i].surname;
            break;
        }
    }
    if(flag){
        var accountField= document.getElementById("account");
        accountField.innerHTML = "Admin";
        window.location.href = "/index.html";
    }else{
        alert("There is no such account");
    }
}