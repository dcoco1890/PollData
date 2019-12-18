const Pusher = require("pusher");
const predata = require("../../utils/choices.json");

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  useTLS: true
});

// starting off with one answer, cause why not
let answers = { ...predata };

export default (req, res) => {
  switch (req.method) {
    case "GET":
      res.json(answers);
      break;
    case "POST":
      const { choice = null } = req.body;

      if (choice) {
        const hasChoice =
          choice in answers && typeof answers[choice] === "number";
        const count = (hasChoice ? Math.max(0, answers[choice]) : 0) + 1;

        answers = { ...answers, [choice]: count };

        pusher.trigger("poll-board", "new-answer", { choice, count });
      }
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
};
