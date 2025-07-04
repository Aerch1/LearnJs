//grade calculator

const checkGrade = (grade) => {
  let sumgrade = 0;

  for (let i = 0; i < grade.length; i++) {
    sumgrade += grade[i];
  }
  let average = sumgrade / grade.length;
  console.log("The sum of the grades:", sumgrade);
  return average;
};

let grade1 = [90, 80, 84, 99, 91, 89, 91, 90];

let grado = checkGrade(grade1);
console.log("The average of oyur grade is: ", grado.toFixed(2));
