
// Task 1 

const modalButton = document.querySelector('.openModal')
const modal = document.querySelector('.modal')

const title = document.querySelector('.title')

modalButton.addEventListener('click', () => {
    modal.classList.toggle('show')

    
    modal.style.backgroundColor = 'red'
    // title.style.color = 'white'
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove("show") 
    }
 }


// Task 2 

const colorForm = document.querySelector('.colorForm')

const formButton = document.querySelector('.formbtn')

const bodyColor = document.querySelector('body')

colorForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputColorValue = document.querySelector('input[name="text"]')
    console.log(inputColorValue)

    if (!inputColorValue.value) {
        alert('Please enter a color')
    } 

    else if (inputColorValue.value == "red") {
        bodyColor.style.backgroundColor = 'red' 
        return
    } 

    else if (inputColorValue.value == "blue") {
        bodyColor.style.backgroundColor = 'blue'  
        return
    } 

    else if (inputColorValue.value == "green") {
        bodyColor.style.backgroundColor = 'green'
        return
    } 
    
    else if (inputColorValue.value == 'black') {
        bodyColor.style.backgroundColor = 'black'
        return
    }
    
    else if (inputColorValue.value == 'white') {
        bodyColor.style.backgroundColor = 'white'
        return 
    } else {
        alert('Your chosen color does not match')
    }

})







