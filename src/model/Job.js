import HanaDbUtils from '../utils/HanaDbUtils.js';

const Job = {

  async get() {
    const allData = `SELECT * FROM "ROCKETSEAT"."JOBS"`
    const jobs = await HanaDbUtils.defaultStatementReturnAllValues(allData)

    return jobs.map((job) => ({
      id: job.id,
      name: job.name,
      "daily-hours": job.daily_hours,
      "total-hours": job.total_hours,
      created_at: job.created_at,
    }));
  },


  async update(updatedJob, jobId) {
    const command =         
    `UPDATE "ROCKETSEAT"."JOBS" SET
      "name" = '${updatedJob.name}'
     ,"daily_hours" = ${updatedJob["daily-hours"]}
     ,"total_hours" = ${updatedJob["total-hours"]}
    FROM "ROCKETSEAT"."JOBS"
    WHERE "id"= ${jobId}`;

    await HanaDbUtils.defaultStatementNoReturn(command);
  },

  async delete(jobId) {
    const command =         
    `DELETE FROM "ROCKETSEAT"."JOBS"
    WHERE "id"= ${jobId}`;

    await HanaDbUtils.defaultStatementNoReturn(command);
  },

  async create(newJob) {
    const command =         
    `INSERT INTO "ROCKETSEAT"."JOBS"(
      "name",
      "daily_hours",
      "total_hours"    
    ) VALUES (
      '${newJob.name}'
      ,${newJob["daily-hours"]}
      ,${newJob["total-hours"]})`

    await HanaDbUtils.defaultStatementNoReturn(command);
  },
};
export default Job;