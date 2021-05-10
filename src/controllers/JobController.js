import Job from "../model/Job.js";
import JobUtils from "../utils/JobUtils.js";
import Profile from "../model/Profile.js";
import NumberUtils from "../utils/NumberUtils.js";

const JobControler =  {
  async create(req, res) {
    return res.render("job");
  },

  async save(req, res) {
    await Job.create({
      name: req.body.name,
      "daily-hours": req.body["daily-hours"],
      "total-hours": req.body["total-hours"],
      created_at: Date.now(),
    });

    return res.redirect("/");
  },

  //how will it be seen in browser
  async show(req, res) {
    //get in rote id
    const jobId = req.params.id;
    const jobs = await Job.get();

    const job = jobs.find((job) => Number(job.id) === Number(jobId));

    if (!job) {
      return res.send("Job not found!");
    }

    const profile = await Profile.get();

    job.budget = JobUtils.calculateBudget(job, profile["value-hour"]);

    const budget = NumberUtils.monetary(job.budget);


    return res.render("job-edit", { job, budget: budget });
  },

  async update(req, res) {
    //get in rote id
    const jobId = req.params.id;

    const updatedJob = {
      name: req.body.name,
      "total-hours": req.body["total-hours"],
      "daily-hours": req.body["daily-hours"],
    };

    await Job.update(updatedJob, jobId);

    res.redirect("/job/" + jobId);
  },

  async delete(req, res) {
    const jobId = req.params.id;

    await Job.delete(jobId);

    return res.redirect("/");
  },
};

export default JobControler;
