
const JobUtils =  {
  remainingDays(job) {
    //calculation remaining
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
  
    const createdDate = new Date(job.created_at);
  
    const dueDay = createdDate.getDate() + Number(remainingDays);
  
    const dueDateInMs = createdDate.setDate(dueDay);
  
    const timeDiffInMs = dueDateInMs - Date.now();
  
    //miliseconds in days
    const dayInMs = 1000 * 60 * 60 * 24;
  
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs);
  
    return dayDiff;
  },
  
  calculateBudget(job, valueHour) {
    return valueHour * job["total-hours"];
  }
}

export default JobUtils;
