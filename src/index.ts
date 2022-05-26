let inputElement = (<HTMLInputElement>document.getElementById('input'));
let resultDisplay = (<HTMLInputElement>document.getElementById('result-output'));
let converterTitle = (<HTMLBodyElement>document.getElementById('converter-title'));
let errorMessage = (<HTMLBodyElement>document.getElementById('error-message'));
const selectElement = (<HTMLSelectElement>document.getElementById('selectCoverter'));
let convertBtn = (<HTMLButtonElement>document.getElementById('calculate-difference'));

selectElement.onchange = function () {
  let chosenOption = selectElement.options.selectedIndex;
  converterTitle.innerHTML = selectElement.options[chosenOption].innerHTML;
  // clear Text Input field
  clearInputFields();
}


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
      errorMessageHandler()
      break;
  }
})
function clearInputFields() {
  inputElement.value = '';
  resultDisplay.value = '';
}
function errorMessageHandler( message = "please select a converter!") {
  errorMessage.innerHTML = message;
  setTimeout(() => {
    errorMessage.innerHTML = '';
  }, 3000);
}

function fahreinheitToCelcius(fahrenheit:number):number {
  const changeOfDegreeFandC:number = 5/9;
  const fahrenheitFreezingPoint:number = 32;
  let celsius =  (fahrenheit - fahrenheitFreezingPoint )* changeOfDegreeFandC;
  return Math.ceil(celsius);
}
function celciusToFahrenheit(celsius:number):number {
  const changeOfDegreeFandC:number = 9/5;
  const fahrenheitFreezingPoint:number = 32;
  let fahrenheit =  (celsius * changeOfDegreeFandC ) + fahrenheitFreezingPoint;
  return Math.ceil(fahrenheit);
}

function kilometersToMiles(kilometer:number):number {
  let conversionFactor:number = 0.62137119;
  let miles = kilometer * conversionFactor;
  return miles;
}
function milesToKilometer(miles:number):number {
  let conversionFactor:number = 1.609344;
  let kilometer = miles * conversionFactor;
  return kilometer;
}

function poundsToKilograms(pounds:number):number {
  let conversionFactor = 0.45359237;
  let kilograms = pounds * conversionFactor;
  return kilograms;
}
function KilogramsToPounds(kilograms:number):number {
  let conversionFactor = 2.2046;
  let pounds = kilograms * conversionFactor;
  return pounds;
}
function KilometreToMeter(kilometre:number):number {
  let conversionFactor = 1000;
  let meter = kilometre * conversionFactor;
  return meter;
}
function meterToKilometer(meter:number):number {
  let conversionFactor = 1000;
  let kilometre = meter / conversionFactor;
  return kilometre;
}

function meterToCentimeter(meter:number):number {
  let conversionFactor = 100;
  let centimeter = meter * conversionFactor;
  return centimeter;
}
function centimeterToMeter(centimeter:number):number {
  let conversionFactor = 100;
  let meter = centimeter / conversionFactor;
  return meter;
}