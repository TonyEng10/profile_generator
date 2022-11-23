const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// const r2 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

rl.question('What do you think of Node.js? ', (answer1) => {
  // console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question(`What's your name? Nicknames are also acceptable :)`, (answer2) => {
    // console.log(`That's a ${answer1} great name ${answer2}!`);
    rl.question(`What's an activity you like doing?`, (answer3) => {
      console.log(`${answer3} sounds like fun!`);
      rl.question(`What do you listen to while doing that??`, (answer4) => {
        console.log(`${answer4} is dope!`);
        rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
          console.log(`${answer5} is the best!`);
          rl.question(`Which sport is your absolute favourite?`, (answer6) => {
            console.log(`Nothing beats ${answer6}!`);

            console.log(`Your Profile Summary:\n Your name is ${answer2}. You enjoy a lot of ${answer3} in your spare time. While doing ${answer3}, you like to listen to ${answer4}. ${answer5} is one of you favourit things to eat and would love to share with other folks. Your favourite sport is ${answer6}!`)
            rl.close();
          })
        })
      })
    })
  });
});