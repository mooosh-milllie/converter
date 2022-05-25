"use strict";
let inputElement = document.getElementById('input');
let ResultDisplay = document.getElementById('result-output');
let converterTitle = document.getElementById('converter-title');
let errorMessage = document.getElementById('error-message');
const selectElement = document.getElementById('selectCoverter');
let convertBtn = document.getElementById('calculate-difference');
selectElement.onchange = function () {
    let chosenOption = selectElement.options.selectedIndex;
    converterTitle.innerHTML = selectElement.options[chosenOption].innerHTML;
    inputElement.value = '';
};
convertBtn.addEventListener('click', () => {
    let inputToConvert = Number(inputElement.value);
    switch (selectElement.value) {
        case "fahrenheit":
            ResultDisplay.value = `${fahreinheitToCelcius(inputToConvert)}°C`;
            clearInputFields();
            break;
        case "celsius":
            ResultDisplay.value = `${celciusToFahrenheit(inputToConvert)}°F`;
            clearInputFields();
            break;
        case "miles":
            ResultDisplay.value = `${milesToKilometer(inputToConvert)}km`;
            clearInputFields();
            break;
        case "kilometer":
            ResultDisplay.value = `${kilometersToMiles(inputToConvert)}m`;
            clearInputFields();
            break;
        case "pounds":
            ResultDisplay.value = `${poundsToKilograms(inputToConvert).toFixed(2)}kg`;
            clearInputFields();
            break;
        case "kilograms":
            ResultDisplay.value = `${KilogramsToPounds(inputToConvert).toFixed(2)}lbs`;
            clearInputFields();
            break;
        case "kilometreToMeter":
            ResultDisplay.value = `${KilometreToMeter(inputToConvert)}m`;
            clearInputFields();
            break;
        case "meterToKilometre":
            ResultDisplay.value = `${meterToKilometer(inputToConvert)}km`;
            clearInputFields();
            break;
        case "centimeterToMeter":
            ResultDisplay.value = `${centimeterToMeter(inputToConvert)}m`;
            clearInputFields();
            break;
        case "meterToCentimeter":
            ResultDisplay.value = `${meterToCentimeter(inputToConvert)}cm`;
            clearInputFields();
            break;
        default:
            errorMessageHandler();
            break;
    }
});
function clearInputFields() {
    inputElement.value = '';
}
function errorMessageHandler() {
    errorMessage.innerHTML = "please select a converter!";
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