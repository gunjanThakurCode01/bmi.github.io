const form = document.querySelector("form");

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height < 0 || isNaN(height)){
        result.innerHTML = "Please Enter Valid Height";
    }
    else if(weight < 0 || isNaN(weight)){
        result.innerHTML = "Please Enter Valid Weight";
    }
    else {
        const bmi = (weight / ((height/100) * (height/100))).toFixed(2);
        
        if(bmi < 18.6){
            result.innerHTML = bmi + "<br>" + "Underweight";
        }
        else if(bmi < 24.9 && bmi > 18.6){
            result.innerHTML = bmi + "<br>" + "Normal Weight";
        } 
        else {
            result.innerHTML = bmi + "<br>" + "Overweight";
        } 
    }

})