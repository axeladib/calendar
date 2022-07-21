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
// console.log(currentDate);


//TODO:Display the number of days in 1 month dynamically
//TODO:Select the div that wanted to be inserted
// console.log(daysOfMonth);
//TODO:Empty string
let days = "";


//DISPLAY PREVIOUS DAYS OF MONTHS
//TODO:Guess how many days 
const prevLastDay = new Date(
  date.getFullYear(),
  date.getMonth(),0,
  0
).getDate();
// console.log(prevLastDay); 
const prevDayIndex = date.getDay();
// console.log(prevDayIndex);
for (let x = prevDayIndex; x > 0; x--){
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  document.querySelector(".days").innerHTML = days;
}
//The first day of the july is on THURSDAY


//TODO:Make the last day dynamic to the current month
const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
// console.log(lastDay);
//TODO:Highlighting current day
for (let i = 1; i <= lastDay ; i++){
  // console.log(i);
  // if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
  //   days += `<div classelse {

  //   }}=""today">${i}</div>`
  // } else {
  //  days += `<div> </div>`;
  // }
  days += `<div>${i}</div>`;
  // console.log(days);
  document.querySelector(".days").innerHTML = days;
}


//TODO:Display last days of the months
const nextFirstDay = new Date(
  date.getFullYear(),
  date.getMonth()+2,1
).getDay();
console.log(nextFirstDay);

//TODO:Determine the first day of the month - WEDNESDAY
// const nextDayIndex = date.getDay();
// console.log(nextDayIndex);

for (let j = 1; j < nextFirstDay; j ++){
  days += `<div class="next-date">${j}</div>`;
   document.querySelector(".days").innerHTML = days;
}
