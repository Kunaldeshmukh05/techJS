import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/joke", (req, res) => {
  const joke = [
    {
      id: 1,
      author: "Programmer Humor",
      content:
        "Why did the JavaScript programmer get a job easily? Because they always promised they would `callback`!",
    },
    {
      id: 2,
      author: "Dev Joke",
      content:
        "Why was the JavaScript developer sad? Because he didn't `Node` how to `Express` himself.",
    },
    {
      id: 3,
      author: "Array Enthusiast",
      content:
        "What's the best thing about arrays in JavaScript? You can just `pop()` the kids off the end!",
    },
    {
      id: 4,
      author: "Async Programmer",
      content: "You want to hear a JavaScript joke? I'll `callback` later.",
    },
    {
      id: 5,
      author: "Senior Dev",
      content:
        "What did one JavaScript array say to the other? 'We've got to `push` ourselves to the limit!'",
    },
    {
      id: 6,
      author: "Junior Dev",
      content:
        "Why did the programmer quit his job? Because he didn't get arrays.",
    },
    {
      id: 7,
      author: "Anonymous",
      content:
        "What did the proud React component say to its child? I've got to give you props.",
    },
    {
      id: 8,
      author: "Stack Overflow User",
      content:
        "Some people, when confronted with a problem, think “I know, I'll use regular expressions.” Now they have two problems.",
    },
    {
      id: 9,
      author: "GitHub Contributor",
      content:
        "I don't care if it works on your machine! We are not shipping your machine!.",
    },
  ];
  res.send(joke);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is listening on the port: ${port}`);
});
