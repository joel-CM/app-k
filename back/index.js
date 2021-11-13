const { conn } = require("./db");
const app = require("./src/app");

conn
  .sync({ force: true })
  .then((res) => {
    app.listen(3001, () => {
      console.log("db is running!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
