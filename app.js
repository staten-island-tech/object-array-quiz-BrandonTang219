const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const dem = presidents.filter((president) => president.party === "D" );
console.log(dem);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const rep = presidents.filter(function (president){
  if (president.party === "R" && president.terms === 1){
    return true;
  }
});
console.log(rep);

//3) return only the last three presidents
const finalThreeEver = presidents.slice(9, 12);

console.log(finalThreeEver);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const democraticDoubleTerm = presidents.filter(
  (presidents) => (presidents.party === "D" && presidents.terms === 2)
)

console.log(democraticDoubleTerm);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
const lindtchocolatebjohnson = presidents.filter(function (president){
  if (presidents.name === "Lyndon Johnson" && presidents.terms === 2) {
  alert("LBJ served two terms")
} else {
  alert("LBJ was a ONE AND DONE")  
}
}) 

console.log(lindtchocolatebjohnson);
