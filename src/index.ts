let inputElement = (<HTMLInputElement>document.getElementById('input'));
let ResultDisplay = (<HTMLInputElement>document.getElementById('result-output'));
let converterTitle = (<HTMLBodyElement>document.getElementById('converter-title'));
let errorMessage = (<HTMLBodyElement>document.getElementById('error-message'));
const selectElement = (<HTMLSelectElement>document.getElementById('selectCoverter'));
let convertBtn = (<HTMLButtonElement>document.getElementById('calculate-difference'));

selectElement.onchange = function () {
  let chosenOption = selectElement.options.selectedIndex;
  converterTitle.innerHTML = selectElement.options[chosenOption].innerHTML;
  // clear Text Input field
  inputElement.value = '';
}


convertBtn.addEventListener('click', () => {
  let inputToConvert = Number(inputElement.value);

  switch (selectElement.value) {
    case "fahrenheit":
      ResultDisplay.value = `${fahreinheitToCelcius(inputToConvert)}°C`;
      clearInputFields()
      break;
    case "celsius":
      ResultDisplay.value = `${celciusToFahrenheit(inputToConvert)}°F`;
      clearInputFields()
      break;
    case "miles":
      ResultDisplay.value = `${milesToKilometer(inputToConvert)}km`;
      clearInputFields()
      break;
    case "kilometer":
      ResultDisplay.value = `${kilometersToMiles(inputToConvert)}m`;
      clearInputFields()
      break;
    case "pounds":
      ResultDisplay.value = `${poundsToKilograms(inputToConvert).toFixed(2)}kg`;
      clearInputFields()
      break;
    case "kilograms":
      ResultDisplay.value = `${KilogramsToPounds(inputToConvert).toFixed(2)}lbs`;
      clearInputFields()
      break;
    case "kilometreToMeter":
      ResultDisplay.value = `${KilometreToMeter(inputToConvert)}m`;
      clearInputFields()
      break;
    case "meterToKilometre":
      ResultDisplay.value = `${meterToKilometer(inputToConvert)}km`;
      clearInputFields()
      break;
    case "centimeterToMeter":
      ResultDisplay.value = `${centimeterToMeter(inputToConvert)}m`;
      clearInputFields()
      break;
    case "meterToCentimeter":
      ResultDisplay.value = `${meterToCentimeter(inputToConvert)}cm`;
      clearInputFields()
      break;
    default:
      errorMessageHandler()
      break;
  }
})
function clearInputFields() {
  inputElement.value = '';
}
function errorMessageHandler() {
  errorMessage.innerHTML = "please select a converter!";
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