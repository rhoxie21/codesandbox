// ✨ To run the application in watch mode: FILE=primer.js npm start ✨

// 🚨
// Example 1: Create an object that has 4 primitive types of data on it
const pet = {
  name: "Michael",
  age: 1,
  isCool: true,
  middleName: undefined
};

// Example 2: Create an array of numbers

const ages = [1, 34, 5, 69, 90, 848];

// Example 3: Create an array of objects where each object has a 2 properties

const people = [{ name: "Michael" }, { name: "Henry" }];

// Example 4: Using the function keyword, Create a function that takes in a name and returns a modified name

function greeter(name) {
  return `Hello, ${name}.`;
}
// Example 5: Refactor the above function to be an arrow function
const arrowGreeter = (name = "Guest") => `Hello, ${name}.`;
console.log(arrowGreeter());
// Example 6: If there is no name in the above function, default to "Guest"

// Example 7: Create a function that takes in an object and destructures a name

const displayPetName = ({ name = "Henry" }) => {
  console.log(name);
};

displayPetName(pet);

// Example 8: Refactor the above function that takes in an object and destructures a name

// Example 9: Create a function that takes in an object with an "ages" property and returns a copy of the object with a modified age

const adult = {
  ages: [18, 25, 30, 50],
  name: "Michael",
  favoriteColor: ["blue", "orange", "green"]
};

const modifyAges = adult => {
  const birthdayAges = [...adult.ages].map(age => age + 1);

  return {
    ...adult,
    ages: birthdayAges
  };
};
console.log(modifyAges(adult));
