function User(name, surname) {
    this.name = name;
    this.surname = surname;
}
// создаем
User.prototype.play = function() {
    console.log("I am playing");
}

const JohnyDepp = new User("Johny", "Depp");
// console.log(JohnyDepp);
JohnyDepp.play();

const JohnTravolta = new User("John", "Travolta");
JohnTravolta.play();

console.log(JohnTravolta.play === JohnyDepp.play);