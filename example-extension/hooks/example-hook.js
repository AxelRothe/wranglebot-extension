module.exports = {
  name: "example-external-hook",
  description: "An example hook that is external to the bot",
  version: "0.0.1",
  events: ["notification"],
  handler: async (event, data, wranglebot) => {
    const libs = await wranglebot.query.library.many().fetch();

    console.log(`There are currently ${libs.length} libraries loaded.`);
  },
};
