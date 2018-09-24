module.exports = function solveEquation(equation) {
  let elementsOfEquation = equation.split(' ');
  let a = (elementsOfEquation[0]);
  let b = (elementsOfEquation[3] + elementsOfEquation[4]);
  let c = (elementsOfEquation[7] + elementsOfEquation[8]);
  let d = (b * b) - (4 * a * c);
  
  if (d === 0) {
      let x1 = (b * -1) / (2 * a);
      return x;
  } else if (d > 0) {
      let x1 = (-b + (Math.sqrt(d))) / (2 * a);
      let x2 = (-b - (Math.sqrt(d))) / (2 * a);
      let solution = [Math.round(x1), Math.round(x2)].sort((a, b) => a - b);
      return solution;
  } else {
    return 'The equation has no real roots'
  }
}

