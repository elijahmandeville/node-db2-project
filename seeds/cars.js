exports.seed = async function (knex) {
  await knex("cars").truncate();

  await knex("cars").insert([
    {
      vin: "30J90JF9J12309J5",
      make: "Audi",
      model: "TT",
      mileage: 775,
      isLemon: 0,
      transType: "Automatic",
      title: "Clean",
    },
    {
      vin: "GJ39J20J52093J9F",
      make: "Honda",
      model: "Civic",
      mileage: 125925,
      isLemon: 1,
      transType: "Automatic",
      title: "Clean",
    },
    {
      vin: "F23J2J3TJWEJGOIJ2",
      make: "BMW",
      model: "i8",
      mileage: 5,
      isLemon: 0,
      transType: "Automatic",
      title: "Clean",
    },
  ]);
};
