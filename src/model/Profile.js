const Database = require("../db/config");
const { db, connOptions } = require("../db/config1");

function getData() {
  return Promise((resolve, reject) => {
    db.connect(connOptions, function (err) {
      if (err) reject(err);
      const statement = db.prepare(
        `SELECT * FROM "ROCKETSEAT"."PROFILE" WHERE 1 =?`
      );

      statement.execQuery([1], function (err, rs) {
        if (err) reject(err);

        while (rs.next()) {
          row.push(rs.getValues());
          console.log("Rows: ", row);
        }
        //statement.drop();
        resolve(row);
      });
    });

    db.disconnect(function (err) {
      if (err) {
        reject(err);
      }
    });
  });
}

module.exports = {
  async get() {
    const data = await getData();
    return {
      name: data.name,
      avatar: data.avatar,
      "monthly-budget": data.monthly_budget,
      "days-per-week": data.days_per_week,
      "hours-per-day": data.hours_per_day,
      "vacation-per-year": data.vacation_per_year,
      "value-hour": data.value_hour,
    };
  },

  async update(newData) {
    const db = await Database();

    db.run(
      `UPDATE profile SET
           name = "${newData.name}" 
          ,avatar = "${newData.avatar}"
          ,monthly_budget = ${newData["monthly-budget"]}
          ,days_per_week = ${newData["days-per-week"]}
          ,hours_per_day = ${newData["hours-per-day"]}
          ,vacation_per_year = ${newData["vacation-per-year"]}
          ,value_hour = ${newData["value-hour"]}`
    );

    await db.close();
  },
};
