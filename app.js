document.write(
  "TrueCoders Node-10 & Flex (JavaCrip) Gangstas!\n==========\n <br></br>"
);
document.write(
  "Exercise: JS Object-Oriented Programming \n==========\n <br></br>"
);

document.write(`<br></br>`);

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  remobveHobby(hobby) {
    this.hobbies.splice(this.hobbies.indexOf(hobby), 1);
  }

  greeting() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer & Part-Time Jigalow";
  }

  greeting() {
    return `Hello, my name is ${this.name}. <br></br> I'm a ${this.occupation}.`;
  }
}

let person = new Person("Jerry Judy", "Pot Belly Pig", "Hazel Green", [
  "Football",
  "Making Beats",
  "Cooking Pig Feet",
  "Being a Total Wanka",
  "Licking Dry Ankles",
]);

let coder = new Coder("Joey $h!t Snacks", "Parot", "The Bronx", [
  "Black Hat",
  "Scam Artist",
  "Male Stripper",
  "Young & Upcoming Jigalow",
  "Social Security Check Pimp",
]);

console.log(person);
console.log(coder);
console.log(person.greeting());
console.log(coder.greeting());
document.write("Exercise 1 thru 3: \n==========\n <br></br>");
document.write(person.greeting());
document.write(`<br></br>`);
document.write(`<br></br>`);
document.write("Next: \n==========\n <br></br>");
document.write(coder.greeting());
document.write(`<br></br>`);
document.write(`<br></br>`);
document.write("Exercise 4: \n==========\n <br></br>");

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num1, num2) {
    this.result = num1 + num2;
    return this.result;
  }

  subtract(num1, num2) {
    this.result = num1 - num2;
    return this.result;
  }

  multiply(num1, num2) {
    this.result = num1 * num2;
    return this.result;
  }

  divide(num1, num2) {
    this.result = num1 / num2;
    return this.result;
  }

  displayResult() {
    console.log(this.result + " = your result");
    document.write(this.result + " = your result <br></br>");
  }
}

let calc = new Calculator();
calc.add(5, 5);
calc.displayResult();
calc.subtract(10, 5);
calc.displayResult();
calc.multiply(5, 5);
calc.displayResult();
calc.divide(10, 5);
calc.displayResult();
