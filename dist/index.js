"use strict";
let inputElement = document.getElementById('input');
let resultDisplay = document.getElementById('result-output');
let converterTitle = document.getElementById('converter-title');
let errorMessage = document.getElementById('error-message');
const selectElement = document.getElementById('selectCoverter');
let convertBtn = document.getElementById('calculate-difference');
selectElement.onchange = function () {
    let chosenOption = selectElement.options.selectedIndex;
    converterTitle.innerHTML = selectElement.options[chosenOption].innerHTML;
    clearInputFields();
};
convertBtn.addEventListener('click', () => {
    if (inputElement.value === '' && selectElement.value === '') {
        errorMessageHandler();
        return;
    }
    if (inputElement.value === '' && selectElement.value !== '') {
        errorMessageHandler("convert value cannot be empty!");
        return;
    }
    let inputToConvert = Number(inputElement.value);
    switch (selectElement.value) {
        case "fahrenheit":
            resultDisplay.value = `${fahreinheitToCelcius(inputToConvert)}°C`;
            break;
        case "celsius":
            resultDisplay.value = `${celciusToFahrenheit(inputToConvert)}°F`;
            break;
        case "miles":
            resultDisplay.value = `${milesToKilometer(inputToConvert)}km`;
            break;
        case "kilometer":
            resultDisplay.value = `${kilometersToMiles(inputToConvert)}m`;
            break;
        case "pounds":
            resultDisplay.value = `${poundsToKilograms(inputToConvert).toFixed(2)}kg`;
            break;
        case "kilograms":
            resultDisplay.value = `${KilogramsToPounds(inputToConvert).toFixed(2)}lbs`;
            break;
        case "kilometreToMeter":
            resultDisplay.value = `${KilometreToMeter(inputToConvert)}m`;
            break;
        case "meterToKilometre":
            resultDisplay.value = `${meterToKilometer(inputToConvert)}km`;
            break;
        case "centimeterToMeter":
            resultDisplay.value = `${centimeterToMeter(inputToConvert)}m`;
            break;
        case "meterToCentimeter":
            resultDisplay.value = `${meterToCentimeter(inputToConvert)}cm`;
            break;
        default:
            errorMessageHandler();
            break;
    }
});
function clearInputFields() {
    inputElement.value = '';
    resultDisplay.value = '';
}
function errorMessageHandler(message = "please select a converter!") {
    errorMessage.innerHTML = message;
    setTimeout(() => {
        errorMessage.innerHTML = '';
    }, 3000);
}
function fahreinheitToCelcius(fahrenheit) {
    const changeOfDegreeFandC = 5 / 9;
    const fahrenheitFreezingPoint = 32;
    let celsius = (fahrenheit - fahrenheitFreezingPoint) * changeOfDegreeFandC;
    return Math.ceil(celsius);
}
function celciusToFahrenheit(celsius) {
    const changeOfDegreeFandC = 9 / 5;
    const fahrenheitFreezingPoint = 32;
    let fahrenheit = (celsius * changeOfDegreeFandC) + fahrenheitFreezingPoint;
    return Math.ceil(fahrenheit);
}
function kilometersToMiles(kilometer) {
    let conversionFactor = 0.62137119;
    let miles = kilometer * conversionFactor;
    return miles;
}
function milesToKilometer(miles) {
    let conversionFactor = 1.609344;
    let kilometer = miles * conversionFactor;
    return kilometer;
}
function poundsToKilograms(pounds) {
    let conversionFactor = 0.45359237;
    let kilograms = pounds * conversionFactor;
    return kilograms;
}
function KilogramsToPounds(kilograms) {
    let conversionFactor = 2.2046;
    let pounds = kilograms * conversionFactor;
    return pounds;
}
function KilometreToMeter(kilometre) {
    let conversionFactor = 1000;
    let meter = kilometre * conversionFactor;
    return meter;
}
function meterToKilometer(meter) {
    let conversionFactor = 1000;
    let kilometre = meter / conversionFactor;
    return kilometre;
}
function meterToCentimeter(meter) {
    let conversionFactor = 100;
    let centimeter = meter * conversionFactor;
    return centimeter;
}
function centimeterToMeter(centimeter) {
    let conversionFactor = 100;
    let meter = centimeter / conversionFactor;
    return meter;
}
//# sourceMappingURL=index.js.map