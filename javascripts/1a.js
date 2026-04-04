const integerInput = document.getElementById("integerInput")
const numeratorInput = document.getElementById("numeratorInput")
const denominatorInput = document.getElementById("denominatorInput")

function toFraction() {
    document.getElementById("integerDiv").style.display = "none"
    document.getElementById("fractionDiv").style.display = "block"
    integerInput.value = ""
}
function toInteger() {
    document.getElementById("integerDiv").style.display = "block"
    document.getElementById("fractionDiv").style.display = "none"
    numeratorInput.value = ""
    denominatorInput.value = ""
}

function xAndy(integer, fraction) {
    if (integer) {
        const x = [-2, -1, 1, 2]
        for (let i = 0; i < 4; i++) {
            document.getElementById(`x${i + 1}`).innerText = `$${x[i]}$`
            document.getElementById(`y${i + 1}`).innerText = `$${x[i]**2 * integer}$`
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const alert = document.getElementById("alert").innerText
    integerInput.addEventListener("input", (e) => {
        const integer = e.target.value
        console.log("Số:", integer)
        if (integer && Number(integer) <= 2 && Number(integer) >= -2) {xAndy(integer, false)} // NO WAY
    })
})

MathJax.typesetPromise()