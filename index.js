const express = require("express");

const carsRouter = require("./cars/cars-router");
const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());

server.use("/cars", carsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "something went wrong",
  });
});

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});
