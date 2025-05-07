function convertTemperature() {
    const tempInput = document.getElementById("temperature").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById("result");
    const value = parseFloat(tempInput);
  
    if (isNaN(value)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
  
    let result = "";
  
    if (unit === "celsius") {
      const f = (value * 9 / 5) + 32;
      const k = value + 273.15;
      result = `Fahrenheit: ${f.toFixed(2)} °F | Kelvin: ${k.toFixed(2)} K`;
    } else if (unit === "fahrenheit") {
      const c = (value - 32) * 5 / 9;
      const k = c + 273.15;
      result = `Celsius: ${c.toFixed(2)} °C | Kelvin: ${k.toFixed(2)} K`;
    } else if (unit === "kelvin") {
      const c = value - 273.15;
      const f = (c * 9 / 5) + 32;
      result = `Celsius: ${c.toFixed(2)} °C | Fahrenheit: ${f.toFixed(2)} °F`;
    }
  
    resultDiv.textContent = result;
  }
  