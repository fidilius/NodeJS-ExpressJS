const EventsEmitter = require("events");

const customEmitter = new EventsEmitter();

customEmitter.on("trigger", (name, id) => {
  console.log(`event trigger data received! user ${name} id: ${id} `);
});

customEmitter.on("trigger", () => {
  console.log("some other logic here");
});

customEmitter.emit("trigger", "dog", 21);
