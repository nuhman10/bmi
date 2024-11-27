function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        document.getElementById('bmiValue').textContent = bmi;

        // Categorize BMI
        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi >= 18.5 && bmi <= 25) category = 'Normal';
        else if (bmi > 25 && bmi <= 30) category = 'Overweight';
        else category = 'Obesity';
        document.getElementById('bmiCategory').textContent = category;
    } else {
        alert('Please enter valid height and weight values.');
    }
}

function clearForm() {
    document.getElementById('bmiForm').reset();
    document.getElementById('bmiValue').textContent = '--';
    document.getElementById('bmiCategory').textContent = '--';
}
