const listElements = document.querySelectorAll("[data-js-list-element]")
const buttonSubmitELement = document.querySelector("[data-js-button-submit]")

let isActive = false

let buttons = []

listElements.forEach((button) => {
    buttons.push(button)
})


const setActiveButton = (activeButton) => {
    buttons.forEach((button) => {
        button.classList.remove("text-black", "bg-white")
        button.classList.add("hover:bg-[hsl(25,97%,53%)]")
    })
    activeButton.classList.add("text-black", "bg-white")
    activeButton.classList.remove("hover:bg-[hsl(25,97%,53%)]")
    localStorage.setItem("number", activeButton.textContent)
    isActive = true
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {setActiveButton(button)})
})


buttonSubmitELement.addEventListener("click", (event) => {
    event.preventDefault()
    if (!isActive) {
        alert("Choose a rating!")
    } else {
        window.location.assign("./thank-you-state.html")
    }
})
