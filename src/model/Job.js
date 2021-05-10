import  { openDb }   from "../db/config.js";
import { db, connOptions } from "../db/config1.js";


function getData() {
  return new Promise((resolve, reject) => {
    //https://developers.sap.com/tutorials/hana-clients-node.html
    //https://www.npmjs.com/package/@sap/hana-client
    db.connect(connOptions, function (err) {
      if (err) reject(err);

      const statement = db.prepare(`SELECT * FROM "ROCKETSEAT"."JOBS"`);

      statement.execQuery(function (err, rs) {
        if (err) reject(err);

        const rows = [];

        while (rs.next()) {
          rows.push(rs.getValues());
        }

        db.disconnect(function (err) {
          if (err) {
            reject(err);
          }
        });
        statement.drop();
        resolve(rows);
      });
    });
  });
} 

function updateData(updatedJob, jobId) {
  return new Promise((resolve, reject) => {
    db.connect(connOptions, function (err) {
      if (err) reject(err);

      db.exec(
        `UPDATE "ROCKETSEAT"."JOBS" SET
         "name" = '${updatedJob.name}'
        ,"daily_hours" = ${updatedJob["daily-hours"]}
        ,"total_hours" = ${updatedJob["total-hours"]}
       FROM "ROCKETSEAT"."JOBS"
       WHERE "id"= ${jobId}`,
        function (err, result) {
          if (err) reject(err);
          resolve(result);
          db.disconnect();
        }
      );
    });
  });
}

function deleteData(jobId) {
  return new Promise((resolve, reject) => {
    db.connect(connOptions, function (err) {
      if (err) reject(err);

      db.exec(
        `DELETE FROM "ROCKETSEAT"."JOBS"
         WHERE "id"= ${jobId}`,
        function (err, result) {
          if (err) reject(err);
          resolve(result);
          db.disconnect();
        }
      );
    });
  });
}

function createData(newJob) {
  return new Promise((resolve, reject) => {
    db.connect(connOptions, function (err) {
      if (err) reject(err);

      db.exec(
        `INSERT INTO "ROCKETSEAT"."JOBS"(
          "name",
          "daily_hours",
          "total_hours"    
        ) VALUES (
          '${newJob.name}'
          ,${newJob["daily-hours"]}
          ,${newJob["total-hours"]})`,
        function (err, result) {
          if (err) reject(err);
          resolve(result);
          db.disconnect();
        }
      );
    });
  });
}


const Job = {

  async get() {
    const jobs = await getData();

    return jobs.map((job) => ({
      id: job.id,
      name: job.name,
      "daily-hours": job.daily_hours,
      "total-hours": job.total_hours,
      created_at: job.created_at,
    }));
  },


  async update(updatedJob, jobId) {
    const updated = await updateData(updatedJob, jobId);
  },

  async delete(jobId) {
    const updated = await deleteData(jobId);

  },

  async create(newJob) {
    const created = await createData(newJob);
  },

};
export default Job;