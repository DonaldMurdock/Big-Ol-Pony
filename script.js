//array of pictures
var slides = document.getElementsByClassName("slides");

currentSlide = 0

//display first photo
slides[currentSlide].style.display = "block"

//Function to display the next photo
function nextSlide(){
    slides[currentSlide].style.display = "none"
    if (currentSlide == slides.length - 1){   //If we're at the end of the array we start back at the beginning
        currentSlide = 0
    }
    else{
        currentSlide++                        //Increment slide index
    }
    slides[currentSlide].style.display = "block"
}

//Function to display the previous photo
function prevSlide(){
    slides[currentSlide].style.display = "none"
    if (currentSlide == 0){
        currentSlide = slides.length - 1    //If we're at the beginning of the array go back to the end
    }
    else{
        currentSlide--                      //Decrement the slide index.
    }
    slides[currentSlide].style.display = "block"
}

document.getElementById("forward").addEventListener("click", nextSlide);
document.getElementById("back").addEventListener("click", prevSlide);


//Change photos every 5 seconds
setInterval(nextSlide, 5000)
