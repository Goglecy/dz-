let coins = 0;
let energy = 100;

const coinsElement = document.getElementById('coins');
const energyElement = document.getElementById('energy');
const collectButton = document.getElementById('collectButton');


function collectCoins() {

    coins += 10;

    energy -= 10;

    coinsElement.textContent = coins;
    energyElement.textContent = energy;

    if (energy <= 0) {
        energy = 0;
        alert('Энергия исчерпана!');
        collectButton.disabled = true;
    }
}

collectButton.addEventListener('click', collectCoins);