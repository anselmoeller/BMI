
let inputHeight = document.querySelector('#heightOfPerson');
let inputWeight = document.querySelector('#weightOfPerson');

let showResultBMI = document.querySelector('.showResultBMI');
document.querySelector('.btnCalculateBMI').addEventListener('click', ()=>{
    if(inputHeight === "" || inputWeight === ""){
        alert('Please fill all fields to calculete your BMI.');
    } else if(parseFloat(inputHeight.value) < 0 || parseFloat(inputWeight.value) < 0  ){
        alert('Please fill all fields correctly to calculete your BMI.');
    } else if (isNaN(parseFloat(inputHeight.value)) || isNaN(parseFloat(inputWeight.value))){
        alert("Please fill all fields with a valid number, like it's examples");
    } else {
  
        let resultBMI = parseFloat((inputWeight.value / (inputHeight .value * inputHeight.value)).toFixed(2));
        let descriptionResultBmi = "";

        if(resultBMI < 18.5){
            descriptionResultBmi = "Warning! You are underweight. Your BMI is lesser than 18.5."
            showResultBMI.style.color ='#f1d11a'
        } else if(resultBMI < 25){
            descriptionResultBmi = "Congrats! You has a normal weight. Your BMI is between 18.5 - 24.9."
            showResultBMI.style.color ='#2bb800'
        } else if(resultBMI < 30){
            descriptionResultBmi = "Warning! You are overweight. Your BMI is between 25 - 29.9."
            showResultBMI.style.color ='#e28000'
        } else {
            descriptionResultBmi = "Danger! You are obese! Your BMI is greater than 30."
            showResultBMI.style.color ='#e20f00'
        }

        showResultBMI.innerText = "Your actual BMI is: " + resultBMI + " \n" +descriptionResultBmi;
    }
});

document.querySelector('.btnResetBMI').addEventListener('click', ()=>{
    inputHeight.value = "";
    inputWeight.value = "";
    showResultBMI.innerText = "";

});