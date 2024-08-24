# DOM Element Selector

## Overview
This project demonstrates various DOM element selection methods and their usage in JavaScript to manipulate HTML elements. The HTML file includes a heading, paragraphs, images, and a container div. The JavaScript code performs different manipulations on these elements using `getElementById`, `getElementsByClassName`, `querySelector`, and `querySelectorAll`.

## Files
- `index.html`: Contains the HTML structure for the webpage.
- `styles.css`: Provides basic styling for the elements (included within `index.html` for simplicity).
- `script.js`: Contains the JavaScript code to manipulate the DOM elements.

## HTML Structure
The HTML structure includes:
- A heading with the `id` of `main-heading`.
- Several paragraphs, some with the class `text-content`.
- An image with the `id` of `main-image`.
- A `div` with the class `container` containing additional paragraphs and another image.

## JavaScript Code
The JavaScript file performs the following actions:
1. **Change the text of the heading**: 
   - Selects the heading with the `id` of `main-heading` and updates its text content.
2. **Change the color of paragraphs with class `text-content`**:
   - Uses `getElementsByClassName` to select all paragraphs with this class and changes their text color to blue.
3. **Change the source of the image with the `id` of `main-image`**:
   - Selects the image using `querySelector` and updates its `src` attribute.
4. **Change the background color of the `div` with the class `container`**:
   - Uses `querySelector` to select the container and changes its background color.
5. **Change the text of all paragraphs inside the `container` div**:
   - Selects all paragraphs inside the `container` div using `querySelectorAll` and updates their text content.

## Instructions
1. Open `index.html` in a web browser.
2. Ensure `script.js` is in the same directory as `index.html`.
3. The JavaScript code will automatically execute and apply the specified changes to the HTML elements.

## Usage
1. **Changing Heading Text**:
   - The text of the heading with the `id` of `main-heading` will be updated.

2. **Changing Paragraph Text Color**:
   - All paragraphs with the class `text-content` will have their text color changed to blue.

3. **Updating Image Source**:
   - The image with the `id` of `main-image` will have its source updated to a new URL.

4. **Changing Container Background Color**:
   - The `div` with the class `container` will have its background color changed.

5. **Updating Paragraph Text in Container**:
   - All paragraphs inside the container will have their text content updated.
