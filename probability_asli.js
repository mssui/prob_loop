// GLHF Entertainment Asli Ari challange solution

// If I used floating numbers I would had to use extra methods. Since floating numbers will not shown to the user
// I have picked my random number as decimal multiply by 1000

// Set up the apple and pear
// Banana will be the rest of the possibilities
let apple = 10,
  pear = 150;

// Loop starts for 20 times
for (let i = 0; i < 20; i++) {
  // Pick a random number between 0 to 1000
  var rand = Math.floor(Math.random() * 1000);

  if (rand <= apple) {
    console.log(`Level ${i + 1} You won an Golden Apple.`);
  } else if (rand <= pear) {
    console.log(`Level ${i + 1} You won a Pear.`);
  } else {
    console.log(`Level ${i + 1} You won a Banana.`);
  }
  // Before finishing the loop add the new possibility to variables
  apple += 1;
  pear += 15;
}
