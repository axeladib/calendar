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


//TODO:Display the day,month,date,year in 1 stringg
const currentDate = date.toDateString();
document.getElementById("day").innerHTML = currentDate;
console.log(currentDate);


//TODO:Display the number of days in 1 month dynamically
//TODO:Select the div that wanted to be inserted 
// console.log(daysOfMonth);
//TODO:Empty string
let days = "";
//TODO:Make the last day dynamic to the current month
const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
console.log(lastDay);
for (let i = 1; i <= lastDay ; i++){
  // console.log(i);
  days += `<div>${i}</div>`;
  // console.log(days);
  document.querySelector(".days").innerHTML = days;
}