const inputEl = document.getElementById("enterNumber")
const ConvertBtn = document.getElementById("convertNumber")
const display1El = document.getElementById("display1")
const display2El = document.getElementById("display2")
const display3El = document.getElementById("display3")

ConvertBtn.addEventListener("click", function(){
    if (inputEl.value === "" || isNaN(inputEl.value)) {
        display1El.textContent = "FILL IN A VALID NUMBER🚨​"
        display2El.textContent = "I CAN ONLY CONVERT NUMBERS"
        display3El.textContent = "NO EMPTY FIELDS!"
    }else{
    getLength()
    getVolume()
    getMass()
    }
})
function getLength(){
    let stringConvert = Number(inputEl.value)
    let changeMeterToFeet = (stringConvert * 3.28084)
    let changeFeetToMeter = (stringConvert * 0.3048)
    display1El.innerHTML = `${stringConvert} meters  =  ${changeMeterToFeet.toFixed(3)} feet | 
                           ${stringConvert} feet = ${changeFeetToMeter.toFixed(3)} meters`
}
function getVolume(){
    let stringConvert = Number(inputEl.value)
    let changelitersToGalons = stringConvert * 0.264172
    let changeGalonsToLiters = stringConvert * 3.78541
    display2El.innerHTML = `${stringConvert} liters  =  ${changelitersToGalons.toFixed(3)} gallons | 
                           ${stringConvert} gallons = ${changeGalonsToLiters.toFixed(3)} liters`
}
function getMass(){
    let stringConvert = Number(inputEl.value)
    let changeKilosToPounds = stringConvert * 2.20462
    let changePoundsToKilos = stringConvert * 0.453592
    display3El.innerHTML = `${stringConvert} kilos  =  ${changeKilosToPounds.toFixed(3)} pounds | 
                           ${stringConvert} pounds = ${changePoundsToKilos.toFixed(3)} kilos`
}