import { openDb }  from "../db/config.js";
//import { db, connOptions } from "../db/config1.js";

const Job = {
  async get() {
    const db = await openDb();

    const jobs = await db.all(`SELECT * FROM jobs`);

    await db.close();

    return jobs.map((job) => ({
      id: job.id,
      name: job.name,
      "daily-hours": job.daily_hours,
      "total-hours": job.total_hours,
      created_at: job.created_at,
    }));
  },

  async update(updatedJob, jobId) {
    const db = await openDb();

    db.run(
      `UPDATE jobs SET
           name = "${updatedJob.name}"
          ,daily_hours = ${updatedJob[daily - hours]}
          ,total_hours = ${updatedJob[total - hours]}
          ,created_at = ${updatedJob.created_at}
         WHERE id = ${jobId}`
    );
  },

  async delete(id) {
    const db = await openDb();

    db.run(`DELETE FROM jobs WHERE id = ${id}`);

    await db.close();
  },

  async create(newJob) {
    const db = await openDb();
    await db.run(
      `INSERT INTO jobs (
              name
            , daily_hours
            , total_hours
            , created_at
          ) VALUES (
          "${newJob.name}"
          ,${newJob["daily-hours"]}
          ,${newJob["total-hours"]}
          ,${newJob.created_at}
        )`
    );

    await db.close();
  },
};
export default Job;