document.getElementById('calculateBtn').addEventListener('click', function() {
  const weightInput = document.getElementById('weight').value;
  const heightInput = document.getElementById('height').value;
  const resultDiv = document.getElementById('result');

  const weight = parseFloat(weightInput);
  const heightCm = parseFloat(heightInput);

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    resultDiv.style.color = 'red';
    resultDiv.textContent = 'Please enter valid positive numbers for weight and height.';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(2);

  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  resultDiv.style.color = '#222';
  resultDiv.textContent = `Your BMI is ${bmiRounded} (${category})`;
});
