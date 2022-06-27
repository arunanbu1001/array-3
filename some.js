ages = [3, 10, 12, 18, 20];
function ageCheck(a) {
  return a > 19;
}
console.log(ages.some(ageCheck));