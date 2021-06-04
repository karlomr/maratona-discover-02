"use strict"
import { db, connOptions } from './config1.js';

const initDb =  {
  init() {
    
    const profile = `CREATE TABLE "ROCKETSEAT"."PROFILE"(
     "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY
     ,"name" NVARCHAR(100)
     ,"avatar" NVARCHAR(100)
     ,"monthly_budget" DOUBLE
     ,"days_per_week" INT
     ,"hours_per_day" INT
     ,"vacation_per_year" INT
     ,"value_hour" DOUBLE)`

    const jobs = `CREATE TABLE "ROCKETSEAT"."JOBS"(
          "id" INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY
         ,"name" NVARCHAR(50)
         ,"daily_hours" INT
         ,"total_hours" INT
         ,"created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)`

    
    const in_profile = `INSERT INTO "ROCKETSEAT"."PROFILE" (
      --"id", this line comment in SQL because is genereated automatic
      "name",
      "avatar",
      "monthly_budget",
      "days_per_week",
      "hours_per_day",
      "vacation_per_year",
      "value_hour"
      )VALUES (       
      'Karlo',
      'https://avatars.githubusercontent.com/u/17259816?v=4',
      19000,
      5,
      8,
      2,
      90)`

    //attention not declaring id and created_at because add automatic in sql
    const in_jobs = 
    {
      job1:`INSERT INTO "ROCKETSEAT"."JOBS"
            (
              "name",
              "daily_hours",
              "total_hours"    
            ) VALUES 
            ('Pizzaria Dominos', 2, 60)`,
      job2:`INSERT INTO "ROCKETSEAT"."JOBS"
            (
              "name",
              "daily_hours",
              "total_hours"    
            ) VALUES 
            ('OneTwo Project', 3, 47)`
    }

    //const db = Database.createConnection()

    // db.connect(connOptions, function(err) {
    //   if (err) throw err
    
      // db.exec(profile, function (err, result) {
      //   if (err) throw err;
      //   console.log("Table PROFILE created!")
      // })

      // db.exec(jobs, function (err, result) {
      //   if (err) throw err;
      //   console.log("Table JOBS created!")
      // })

      db.exec(in_profile, function (err, affectedRows) {
        if (err) throw err;
        console.log(`Rows affected: ${affectedRows}`);
      })

      db.exec(in_jobs.job1, function (err, affectedRows) {
        if (err) throw err;
        console.log(`Rows affected: ${affectedRows}`)
      })

      db.exec(in_jobs.job2, function (err, affectedRows) {
        if (err) throw err;
        console.log(`Rows affected: ${affectedRows}`)
      })
    // })
  
    // db.disconnect(function (err) {
    //   if (err) {
    //     return console.error(err)
    //   }
    // })
  }
}

initDb.init()