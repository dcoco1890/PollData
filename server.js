require("dotenv").config();
const cors = require("cors");
const next = require("next");
const Pusher = require("pusher");
const express = require("express");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/", (req, res) => {
      app.render(req, res, "/");
    });

    server.get("*", (req, res) => handle(req, res));

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> > Server listening at port ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
