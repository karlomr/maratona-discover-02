
const Profile = require("../model/Profile");
const ProfileUtils = require("../utils/ProfileUtils");
const NumberUtils = require("../utils/NumberUtils");


module.exports = {
  async index(req, res) {
    const profile = await Profile.get();
    //in features consume api with quotation
    const valueHour = Number(profile["value-hour"]);

    const valueCurrency = await ProfileUtils.valueCurrency(valueHour);

 
    return res.render("profile", {
      profile,
      valueHour : valueHour,
      valueHourBrl: valueCurrency.BRL,
      valueHourUsa: valueCurrency.USD,
      valueHourEur: valueCurrency.EUR,
    });
  },

  async update(req, res) {
    //req. body to catch data
    const data = req.body;

    //define how many weeks have in the year :52
    const weeksPerYear = 52;

    //remove vacation in the year, to catch how many work in a month
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;

    //total work hour  in the week per month
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"];

    //work hour to monthly
    const monthlyTotalHours = weekTotalHours * weeksPerMonth;

    //What will be the value of my hour?
    let valueHour = data["monthly-budget"] / monthlyTotalHours;

    const profile = await Profile.get();

    await Profile.update({
      ...profile,
      ...req.body,
      ["value-hour"]: valueHour,
    });

    return res.redirect("/profile");
  },
};
