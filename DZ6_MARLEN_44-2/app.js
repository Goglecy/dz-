const seasons = {
    winter: ['Декабрь', 'Январь', 'Февраль'],
    spring: ['Март', 'Апрель', 'Май'],
    summer: ['Июнь', 'Июль', 'Август'],
    autumn: ['Сентябрь', 'Октябрь', 'Ноябрь']
};

const monthsContainer = document.getElementById('monthsContainer');

function showMonths(season) {

    monthsContainer.innerHTML = '';

    const months = seasons[season];

    months.forEach(month => {
        const monthBtn = document.createElement('button');
        monthBtn.textContent = month;
        monthsContainer.appendChild(monthBtn);
    });
}

document.getElementById('winterBtn').addEventListener('click', () => showMonths('winter'));
document.getElementById('springBtn').addEventListener('click', () => showMonths('spring'));
document.getElementById('summerBtn').addEventListener('click', () => showMonths('summer'));
document.getElementById('autumnBtn').addEventListener('click', () => showMonths('autumn'));