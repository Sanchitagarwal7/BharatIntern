
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;


    // Convert temperature from Celcius to Fahrenheit
    const celToFarh = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // Convert temperature from Fahrenheit to Celsius
    const farhToCel = (farh) => {
        let celsius = ((farh - 32) * 5 / 9);
        return celsius;
    }

    let result;
    if (valeTemp == "cel") {
        result = celToFarh(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} F`;
    } else {
        result = farhToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°C`;
    }

    setTimeout(() => {
        window.location.reload();
    }, 5000);
}

