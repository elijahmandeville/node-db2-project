const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars");

    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const car = await db("cars").where("id", req.params.id);

  res.json(car);
});

router.post("/", async (req, res, next) => {
  const { make, model, vin, mileage, isLemon } = req.body;

  try {
    const payload = {
      vin,
      make,
      model,
      mileage,
      isLemon,
    };

    const [id] = await db("cars").insert(payload);
    const car = await db("cars").where("id", id).first();

    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { make, model, vin, mileage, isLemon } = req.body;

  try {
    const payload = {
      vin,
      make,
      model,
      mileage,
      isLemon,
    };

    await db("cars").where("id", req.params.id).update(payload);
    const updatedCar = await db("cars").where("id", req.params.id).first();

    res.json(updatedCar);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await db("cars").where("id", req.params.id).del();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
