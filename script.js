const nameInput = document.getElementById('name');
const submitName = document.getElementById('submitName');
const nameInputContainer = document.getElementById('nameInputContainer');
const imageContainer = document.getElementById('imageContainer');
const currentImage = document.getElementById('currentImage');
const buttonsContainer = document.getElementById('buttonsContainer');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const finalContent = document.getElementById('finalContent');

const images = ['pics/Thinking.jpg', './pics/Asking.PNG'];
let imageIndex = 0;

submitName.addEventListener('click', () => {
    if (nameInput.value === 'Yalguun') {
        // Hide the name input and button
        nameInputContainer.style.display = 'none';

        imageContainer.style.display = 'block';
        currentImage.src = images[imageIndex];

        setTimeout(() => {
            imageIndex++;
            currentImage.src = images[imageIndex];
            buttonsContainer.style.display = 'block';
        }, 2000);
    }
});

yesButton.addEventListener('click', () => {
    buttonsContainer.style.display = 'none';
    currentImage.src = './pics/Happy.gif';
    setTimeout(() => {
        imageContainer.style.display = 'none';
        finalContent.style.display = 'block';
    }, 2500);
});

noButton.addEventListener('click', () => {
    alert('No action defined!');
});
