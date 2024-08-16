//Problem 2 For each purchase, we add a fixed amount of 50 bonus points to your balance. 
//Points expire over time - 3 points expire every day.Calculate what balance the user will 
//have after 7 days if he usually makes a purchase every two days. 
//(The first purchase is made on Tuesday).Calculate how much will be on your balance after 7 days.
//Display the user's balance on the screen.
//
//
//
let Username = "Anton"; //client name
let StartBalance = 1000; //balance after registration
let BuyBonus = 50; //bonus for 1 purchase
let EveryDayFine = 3; //fine for 1 day
let a = 3; //number of purchases
let b = 7; //number of days passed

console.log(`Client: ${Username}`);
console.log(
  `Bonus Balans = ${StartBalance + BuyBonus * a - b * EveryDayFine} p`
);
