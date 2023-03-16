module.exports = {
  method: "get",
  requiredRole: ["admin", "maintainer", "contributor"],
  url: "/example/01",
  handler: async (req, res, bot, server) => {
    return {
      status: 200, 
      result: "hello world"
    }
  },
};
