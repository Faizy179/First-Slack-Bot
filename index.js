require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
const riddles = [
    {q:"I am the first riddle", a:"answer"},
    {q: "I am the second riddle", a: "answer"}
];
const axios = require("axios");
let currentRiddle = null;
app.command("/the-goat-riddle", async ({ command, ack, respond }) =>
{
    await ack();
    currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    await respond(`*Here is your riddle:*\n${currentRiddle.q}\n\n_Type \`/guess [your answer]\` to solve it!_`);
}

);


app.command("/the-goat-guess", async ({ command, ack, respond }) =>
{
    await ack();
    if(!currentRiddle){
        await respond ("No current riddle right now. Type in the command '/the-goat-riddle' to receive a riddle");
        return;
    }
    const userGuess = command.text.trim().toLocaleLowerCase();

    if(userGuess.includes(currentRiddle.a)){
        await respond("Congrats you guessed the right answer");
        currentRiddle = null;
    }
    else{
        await respond ("Unfortunantly the entered guess was inncorrect");
    }
}
);

app.command("/the-goat-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});//command 1 end -- ping command
app.command ("/the-goat-pizza", async({command, ack,respond})=>{
    await ack();
    await respond({text: 'Wow I love eating pizza'});
}

);//Command 2 end -- pizza command

app.command("/the-goat-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/the-goat-ping - Check bot latency
/the-goat-pizza - Eat a pizza
/the-goat-catfact - Get a cat fact
/the-goat-riddle - Get a riddle
/the-goat-guess - guess the answer to the riddle`
  });
});//Commmand 3 end -- help command


app.command("/the-goat-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact. Out of API Usage" });
  }
});

(async () => {
  await app.start();
  console.log("riddle bot is running!");
})();