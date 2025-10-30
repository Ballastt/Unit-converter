const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");
const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("input-value");

convertBtn.addEventListener("click", function () {
  const value = parseFloat(inputValue.value);

  if (isNaN(value)) {
    alert("Please enter a valid number");
    return;
  }

  lengthResult.textContent = lengthConversion(value);
  volumeResult.textContent = volumeConversion(value);
  massResult.textContent = massConversion(value);
});

function lengthConversion(value) {
  const metersToFeet = (value * 3.28084).toFixed(3);
  const feetToMeters = (value / 3.28084).toFixed(3);
  return `
      ${value} meters = ${metersToFeet} feet | ${value} 
      feet = ${feetToMeters} meters
    `;
}

function volumeConversion(value) {
  const litersToGallons = (value * 0.264172).toFixed(3);
  const gallonsToLiters = (value / 0.264172).toFixed(3);
  return `
      ${value} liters = ${litersToGallons} gallons | ${value} 
      gallons = ${gallonsToLiters} liters
    `;
}

function massConversion(value) {
  const kilosToPounds = (value * 2.20462).toFixed(3);
  const poundsToKilos = (value / 2.20462).toFixed(3);
  return `
      ${value} kilos = ${kilosToPounds} pounds | ${value} 
      pounds = ${poundsToKilos} kilos
    `;
}
