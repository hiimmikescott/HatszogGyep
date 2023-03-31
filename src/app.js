const calcButton = document.querySelector("#calcButton")
const egeszInput = document.querySelector("#side1")
const felInput = document.querySelector("#side2")
const egeszResult = document.querySelector("#egeszeredmeny")
const felResult = document.querySelector("#feleredmeny")
calcButton.addEventListener("click", ()=>{
    const egesz = Number (egeszInput.value)
    const fel = Number (felInput.value)
    let egeszRes = calcArea(egesz)
    let felRes = (calcArea(fel))/2
    egeszResult.value=egeszRes+" cm²"
    felResult.value=felRes+" cm²"
    deleteInputs()
})
function calcArea(side) {
    let area = (3/2)*Math.pow(side,2)*Math.sqrt(3)
    return area
}
function deleteInputs(){
    baseInput.value=""
    heightInput.value=""
}