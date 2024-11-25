function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        document.getElementById('bmi').textContent = '0';
        document.getElementById('category').textContent = 'Категория: Невозможно рассчитать';
        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);


    document.getElementById('bmi').textContent = bmi.toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Недовес';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Нормальный вес';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Избыточный вес';
    } else {
        category = 'Ожирение';
    }

    document.getElementById('category').textContent = 'Категория: ' + category;
}

document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);