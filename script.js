const nextIcon=document.querySelector('.next'); // Assign the element with class 'next'.
const prevIcon=document.querySelector('.prev'); // Assign the element with class 'prev'.
const imageContainer=document.querySelector('.imageContainer'); // Assign the element with class 'imageContainer'.
const imgs=document.querySelectorAll('img'); // Select all img elements on the page.

let currentImg=1; // Declared with let because it will change.
let timeout; // The timeout variable is used to control automatic transitions.

prevIcon.addEventListener('click', () => { 
    currentImg--; // Decrease currentImg when the previous button is clicked.
    clearTimeout(timeout); // Clears the timeout on click to prevent conflicts.
    updateImg(); // Call the update image function.
});

nextIcon.addEventListener('click', () => { 
    currentImg++; // Increase currentImg when the next button is clicked.
    clearTimeout(timeout); // Clears the timeout on click to prevent conflicts.
    updateImg(); // Call the update image function.
});

function updateImg(){
    if(currentImg > imgs.length) // If currentImg exceeds the number of images
    {
        currentImg = 1; // Start from the first image.
    }
    else if(currentImg < 1){ // If currentImg is less than 1
        currentImg = imgs.length; // Go to the last image.
    }
    imageContainer.style.transform=`translateX(-${(currentImg-1) * 700 }px)` // Horizontally slide the images.
    timeout=setTimeout(()=>{
        currentImg++; // Automatically increment the image after 4 seconds.
        updateImg(); // Update the image.
    },4000) // Call the function again after 4 seconds.
}   

updateImg(); // Start the function immediately when the page loads.