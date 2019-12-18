// require("dotenv").config();
// const cors = require("cors");
// const next = require("next");
// const Pusher = require("pusher");
// const express = require("express");
// const api = require("./apiRoute");

// const PORT = process.env.PORT || 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
// console.log(process.env.NODE_ENV);
// console.log(process.env);

// app
//   .prepare()
//   .then(() => {
//     const server = express();

//     server.use(cors());
//     server.use(express.urlencoded({ extended: false }));
//     server.use(express.json());
//     server.use(api);

//     const pusher = new Pusher({
//       appId: process.env.APP_ID,
//       key: process.env.KEY,
//       secret: process.env.SECRET,
//       cluster: process.env.CLUSTER,
//       useTLS: true
//     });
//     // let answers = {};

//     server.get("/", (req, res) => {
//       app.render(req, res, "/");
//     });

//     server.get("*", (req, res) => {
//       return handle(req, res);
//     });

//     // server.post("/answer", (req, res, next) => {
//     //   const { choice = null } = req.body;

//     //   if (choice) {
//     //     const hasChoice =
//     //       choice in answers && typeof answers[choice] === "number";
//     //     const count = (hasChoice ? Math.max(0, answers[choice]) : 0) + 1;

//     //     answers = { ...answers, [choice]: count };

//     //     pusher.trigger("poll-board", "new-answer", { choice, count });
//     //   }
//     // });

//     // server.post("/answers", (req, res, next) => {
//     //   res.json({ answers, status: "success" });
//     // });

//     server.listen(PORT, err => {
//       if (err) throw err;
//       console.log(`> > Server listening at port ${PORT}`);
//     });
//   })
//   .catch(ex => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
