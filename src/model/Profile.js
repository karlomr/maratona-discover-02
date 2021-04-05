let data = {
  name: "Karlo",
  avatar: "https://avatars.githubusercontent.com/u/17259816?v=4",
  "monthly-budget": 19000,
  "days-per-week": 5,
  "hours-per-day": 8,
  "vacation-per-year": 2,
  "value-hour": 90,
};

module.exports = {
    get(){
        return data;
    },

    update(newData){
      data = newData;
    }
}
