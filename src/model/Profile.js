const Database = require('../db/config')
const { db, connOptions, open } = require("../db/config1")

module.exports = {
    get(){
      let data = ''   
      db.connect(connOptions, function(err) {
        if (err) throw err
        const statement = db.prepare(`SELECT * FROM "ROCKETSEAT"."PROFILE" WHERE 1 =?`)  
        data = statement.execQuery([1], function(err, rs) {
          if (err) throw err
          var rows = []
          while (rs.next()) {
            rows.push(rs.getValues())
            console.log("Rows: ", rows)
          }
          statement.drop();
          db.disconnect(function(err) {
              if (err) {
                  return console.error(err);
              }   
          });          
        })
      })

      //await db.close()

      return {
        name: data.name,
        avatar: data.avatar,
        "monthly-budget": data.monthly_budget,
        "days-per-week": data.days_per_week,
        "hours-per-day": data.hours_per_day,
        "vacation-per-year": data.vacation_per_year,
        "value-hour": data.value_hour
      }
    },

    async update(newData){
      const db = await Database()

      db.run(
        `UPDATE profile SET
           name = "${newData.name}" 
          ,avatar = "${newData.avatar}"
          ,monthly_budget = ${newData["monthly-budget"]}
          ,days_per_week = ${newData["days-per-week"]}
          ,hours_per_day = ${newData["hours-per-day"]}
          ,vacation_per_year = ${newData["vacation-per-year"]}
          ,value_hour = ${newData["value-hour"]}`
      )

      await db.close()      
    }
}
