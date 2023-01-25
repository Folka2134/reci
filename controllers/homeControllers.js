// HOME CONTROLLER

module.exports = {
  working: async (req, res) => {
    try {
      res.render("home.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
