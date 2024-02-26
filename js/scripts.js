// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const myStudentId = document.getElementById('myStudentId');
const id = 200551715;

// Function to change bg color from user input and add student id
function changeCustomColor() {
    const number = parseInt(customNumberInput.value);
    myStudentId.textContent = "Your Student ID: " + id;
    document.body.style.backgroundColor = getBackgroundColor(number);
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    myStudentId.textContent = "Your Student ID: " + id;
    document.body.style.backgroundColor = getBackgroundColor(randomNumber);
}

// Function to generate options for select list
function addList() {
    const imgOptions = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg"]; // Example array of image names
    for (let i = 0; i < imgOptions.length; i++) {
        const option = document.createElement('option');
        option.text = imgOptions[i];
        imageSelect.add(option);
    }
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = "./img/" + selectedImage;
}

// Event listeners for onclick event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Helper function to get background color based on number
function getBackgroundColor(number) {
    if (number < 0 || number > 100) {
        return 'red';
    } else if (number >= 0 && number <= 20) {
        return 'green';
    } else if (number > 20 && number <= 40) {
        return 'blue';
    } else if (number > 40 && number <= 60) {
        return 'orange';
    } else if (number > 60 && number <= 80) {
        return 'purple';
    } else {
        return 'yellow';
    }
}

// Initialize select options
addList();
