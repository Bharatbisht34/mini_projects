const form = document.querySelector("form");

document.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)


        // Show result

        if (bmi < 18.6) {
            result.innerHTML = `You are Underweight <span>${bmi}</span>`;
            
        }
        if (bmi > 18.6  && bmi<24.9) {
            result.innerHTML = `You have a Normal weight <span>${bmi}</span>`;
            
        }
        if (bmi > 24.9) {
            result.innerHTML = `You are Overweight <span>${bmi}</span>`;
            
        }
    }


})