import Job from "../model/Job.js";
import  JobUtils from "../utils/JobUtils.js";
import  Profile from "../model/Profile.js";
import  NumberUtils from "../utils/NumberUtils.js";

const DashBoardController =  {
  async index(req, res) {
    const jobs = await Job.get();
    const profile = await Profile.get();
  
    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length,
    };
  
    // total hour per day in job progress
    let jobTotalHours = 0;
  
    const updatedJobs = jobs.map((job) => {
      const remaining = JobUtils.remainingDays(job);
      const status = remaining <= 0 ? "done" : "progress";
  
      //sum for status
      statusCount[status] += 1;
  
      jobTotalHours =
        status == "progress"
          ? jobTotalHours + Number(job["daily-hours"])
          : jobTotalHours;
  
      return {
        ...job,
        remaining,
        status,
        budget: NumberUtils.monetary(
          JobUtils.calculateBudget(job, profile["value-hour"])
        ),
      };
    });
  
    const freeHours = profile["hours-per-day"] - jobTotalHours;
  
    return res.render("index", {
      jobs: updatedJobs,
      profile: profile,
      statusCount: statusCount,
      freeHours: freeHours,
    });
  },  
}
 
export default DashBoardController;