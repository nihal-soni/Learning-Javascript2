const firstName = "Nihal";
const lastName = "soni";
let accountEmail = "nihal.dev233@gmail.com";
let accountPassword = 232323;
let userCity = "Bengaluru";
let userState = "Karnatka";
// var isUserIsActive = true;

// From 2015 to current we have stopped using var in javascript because of issur in block scope and functional scope

//  this is the first way to get outputs
console.log(firstName);
console.log(lastName);
console.log(accountEmail);
console.log(userCity);
// console.log(isUserIsActive);

// this is the second way  to get OutputFileType



console.table({
  firstName,
  lastName,
  accountEmail,
  accountPassword,
  userCity,
  userState,
});
