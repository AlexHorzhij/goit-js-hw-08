import { throttle } from "lodash";

const form = document.querySelector(".feedback-form")

form.addEventListener("input", throttle(inputHandler, 500))
form.addEventListener("submit", submitFormHandler)

document.addEventListener("DOMContentLoaded", formContentLoader)

function inputHandler(e) {
    const formData = e.currentTarget.elements
    const email = formData.email.value
    const message = formData.message.value

    const inputValue = { email, message, }
    const inputValueForStorage = JSON.stringify(inputValue)
    console.log(inputValueForStorage)
    localStorage.setItem("feedback-form-state" ,inputValueForStorage)
}

function formContentLoader() {
    const storageData = localStorage.getItem("feedback-form-state")
    const mail = form.elements.email
    const message = form.elements.message

    try {
        const inputValue = JSON.parse(storageData)
        inputValue ? ( mail.value = inputValue.email, message.value = inputValue.message ) : "";
     } catch (error) {
        console.log('storage data error')
    }
}

function submitFormHandler(e) {
    e.preventDefault()
    const formData = e.currentTarget.elements
    const email = formData.email.value
    const message = formData.message.value

    console.log(email)
    console.log(message)

    form.reset()
    localStorage.removeItem("feedback-form-state")
}






// function formContentLoader() {
//     const y = localStorage.getItem("feedback-form-state")
//     let mail = ""
//     let message = ""

//     try {
//         const inputValue = JSON.parse(y)
//         inputValue ? ( mail = inputValue.email, message = inputValue.message ) : "";

//         form.elements.email.value = mail
//         form.elements.message.value = message
    
//         console.log(mail.value)
//         console.log(message.value)
//      } catch (error) {
//         console.log('storage data error')
//     }
// }