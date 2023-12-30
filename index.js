const submit = document.querySelector(".submit")
const error = document.querySelector(".error")
const form = document.querySelector("form")
const input = document.querySelector("input")
const label = document.querySelector("label")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const inputValue = input.value;


    if (!isEmail(inputValue)) {
        error.style.display = "block"
        label.style.display = "block"
    }

    else {
        error.style.display = "none"
        alert("Thank you for your interest :", inputValue)

    }

})

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}
