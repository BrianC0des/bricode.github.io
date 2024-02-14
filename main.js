function simplifyFraction(numerator, denominator) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  return {
    numerator: numerator / gcd,
    denominator: denominator / gcd
  };
}

function showInputs() {
  var formulaSelect = document.getElementById('formula');
  var inputsDiv = document.getElementById('inputs');

  if (!formulaSelect || !inputsDiv) {
    console.error('Required elements not found.');
    return;
  }

  var formula = formulaSelect.value;
  inputsDiv.innerHTML = '';

  switch (formula) {
    case '1':
      inputsDiv.innerHTML += '<input type="number" id="numerator" placeholder="Numerator">';
      inputsDiv.innerHTML += '<input type="number" id="denominator" placeholder="Denominator">';
      break;
    case '2':
      inputsDiv.innerHTML += '<input type="number" id="degrees" placeholder="Degrees">';
      break;
    default:
      console.error('Invalid formula selected.');
      return;
  }
}

function calculate() {
  var formulaSelect = document.getElementById('formula');
  var resultDisplay = document.getElementById('result');
  var inputsDiv = document.getElementById('inputs');
  var result;

  if (!formulaSelect || !resultDisplay || !inputsDiv) {
    console.error('Required elements not found.');
    return;
  }

  var formula = formulaSelect.value;

  // Retrieve input values based on the selected formula
  var numerator, denominator, degrees;
  switch (formula) {
    case '1':
      numerator = parseFloat(document.getElementById('numerator').value);
      denominator = parseFloat(document.getElementById('denominator').value);
      break;
    case '2':
      degrees = parseFloat(document.getElementById('degrees').value);
      break;
    default:
      console.error('Invalid formula selected.');
      return;
  }

  // Perform calculations
  switch (formula) {
    case '1':
      var degrees = Math.round((numerator / denominator) * 180);
      result = `Degrees = ${degrees}°`;
      break;
    case '2':
      var radians = degrees * (Math.PI / 180); // Convert degrees to radians
      var simplifiedFraction = simplifyFraction(radians / Math.PI * 180, 180); // Convert radians to fraction of pi
      if (simplifiedFraction.denominator === 1) {
        result = `Radians = ${simplifiedFraction.numerator}π rad`;
      } else {
        result = `Radians = ${simplifiedFraction.numerator}π/${simplifiedFraction.denominator} rad`;
      }
      break;
  }

  // Display the result
  resultDisplay.textContent = result;
}
