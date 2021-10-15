const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("cors")({ credentials: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Connected",
  });
});

app.use("/heros", require("./routes/heros"));
app.use("/villains", require("./routes/villains"));

httpServer.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
