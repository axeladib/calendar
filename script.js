const date = new Date();
// console.log(date.getDate());
// console.log(date.getFullYear());
//getMonth() return
// console.log(date.getMonth());


//TODO:Making array for month;Accessing using array method
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//TODO:Display the realtime month
//TODO:Accessing the month from array using the int return from date method
//TODO:Select the h1 month and change it
let currentMonth = months[date.getMonth()];
// console.log(currentMonth);
document.getElementById("month").innerHTML = currentMonth;


//TODO:Display the day,month,date,year in 1 string
const currentDate = date.toDateString();
document.getElementById("day").innerHTML = currentDate;
console.log(currentDate);