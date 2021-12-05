document.querySelector(".claim-btn").addEventListener("click", function () {

    for (let i = 0; i < 4; i++) {
        const textInput = document.querySelectorAll(".form-input")[i];
        const alertSymbolSelector = document.querySelectorAll(".fas")[i];
        const alertTextSelector = document.querySelectorAll(".form-alert-p")[i];
        if (textInput.value === "") {
            alertSymbolSelector.classList.add("visible-input");
            alertTextSelector.classList.add("visible-input");
        } else {
            alertSymbolSelector.classList.remove("visible-input");
            alertTextSelector.classList.remove("visible-input");
        }
    }
    const emailValidation = document.querySelectorAll(".form-input")[2];
    const alertSymbol = document.querySelectorAll(".fas")[2];
    const alertText = document.querySelectorAll(".form-alert-p")[2];
    if (emailValidation.value.match(/@/) === null) {
        alertSymbol.classList.add("visible-input");
        alertText.classList.add("visible-input");
    } else {
        alertSymbol.classList.remove("visible-input");
        alertText.classList.remove("visible-input");
    }
})