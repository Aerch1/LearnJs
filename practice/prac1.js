//age checker

const ageCheck = (year) => {
  const d = new Date();
  let yearToday = d.getFullYear();

  let age = yearToday - year;
  console.log("Your age is: ", age);
};
ageCheck(2003);
