//p tags dynamically created to show conversion results
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

  // Length conversion
  const metersToFeet = (value * 3.28084).toFixed(3);
  const feetToMeters = (value / 3.28084).toFixed(3);
  lengthResult.innerHTML = `
            <p>${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters</p>
        `;

  // Volume conversion
  const litersToGallons = (value * 0.264172).toFixed(3);
  const gallonsToLiters = (value / 0.264172).toFixed(3);
  volumeResult.innerHTML = `
            <p>${value} liters = ${litersToGallons} gallons | ${value} 
            gallons = ${gallonsToLiters} liters</p>
        `;

  // Mass conversion
  const kilosToPounds = (value * 2.20462).toFixed(3);
  const poundsToKilos = (value / 2.20462).toFixed(3);
  massResult.innerHTML = `
            <p>${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos</p>
        `;
});
