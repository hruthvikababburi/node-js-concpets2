var addDays = require("date-fns/addDays");
const finalDate = (days) => {
  const date = addDays(new Date(2020, 07, 22), days);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
//console.log(finalDate(30));
module.exports = finalDate;
