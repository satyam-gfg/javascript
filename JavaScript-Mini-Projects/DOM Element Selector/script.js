// Select the heading using getElementById and change its text content
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Updated Heading Text';

// Select all paragraphs with the class text-content using getElementsByClassName
const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue'; // Change text color to blue
}

// Select the image using querySelector and change its source
const mainImage = document.querySelector('#main-image');
mainImage.src = 'https://via.placeholder.com/200'; // Update image source

// Select the container div using querySelector and change its background color
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = 'lightgray'; // Change background color

// Select all paragraphs inside the container div using querySelectorAll and update their text content
const containerParagraphs = containerDiv.querySelectorAll('p');
containerParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Updated text for container paragraph.';
});
