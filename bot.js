const Telegraf = require("telegraf");

const bot = new Telegraf("1151245498:AAGCfxAEIhBxM5ztJf07sVHNiqqDwIJxKbE");

bot.use((ctx, next) => {
  ctx.reply("usaste el bot");
  // next();
  ctx.state.users = 75;
  next(ctx); //next is passed because we can modify data
});

bot.start((ctx) => {
  console.log(ctx.updateSubTypes[0]);

  bot.telegram.sendMessage(ctx.chat.id, "hello world");
});

bot.help((ctx) => ctx.reply("help command"));

bot.settings((ctx) => ctx.reply("settings command"));

// Custom Command
// to avoid case sensitive commando you can put in an array some variations
bot.command(["mytest", "Mytest", "test"], (ctx) => {
  ctx.reply("my custom command");
});

// hears
// This wont work on groups, so you will have to turn off 'privacy group'
bot.hears("computer", (ctx) => {
  ctx.reply("Hey I am selling a computer!!!");
});

// this methods can be recognized inside a long text
bot.mention("BotFather", (ctx) => {
  ctx.reply("you mentioned someone");
});

bot.phone("+1 730 263-4233", (ctx) => {
  ctx.reply("this is a phone");
});

bot.hashtag("coding", (ctx) => {
  ctx.reply("hashtag!");
});

bot.launch();
