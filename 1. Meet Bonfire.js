/*
Two Tests
expect(meetBonfire()).to.be.a("boolean");
expect(meetBonfire()).to.be.true;expected false to be true
*/

function meetBonfire(argument) {
  console.log("you can read this function's argument in the developer tools", argument);

  //Change return value to true
  return true;
}



meetBonfire("You can do this!");
