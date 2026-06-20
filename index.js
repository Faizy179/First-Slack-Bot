require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/the-goat-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});
app.command ("/the-goat-pizza", async({command, ack,respond})=>{
    await ack();
    await respond({text: 'Wow I love eating pizza'});
}

);

(async () => {
  await app.start();
  console.log("bot is running!");
})();