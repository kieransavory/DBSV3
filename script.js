// Functions to change background via selector buttons on hero section of landing page. 

function bgChangerOne() {

    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')
    
        heroOne.style.backgroundImage = "url(dbskitchen.jpg)";
        buttonOne.style.backgroundColor = "navy";
        buttonTwo.style.backgroundColor = "white";
        buttonThree.style.backgroundColor = "white";
}

function bgChangerTwo() {

    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')
    
        heroOne.style.backgroundImage = "url(DBSheader2.jpg)";
        buttonOne.style.backgroundColor = "white";
        buttonTwo.style.backgroundColor = "navy";
        buttonThree.style.backgroundColor = "white";

}

function bgChangerThree() {

    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')
    
        heroOne.style.backgroundImage = "url(dbsdesign.jpg)";
        buttonOne.style.backgroundColor = "white";
        buttonTwo.style.backgroundColor = "white";
        buttonThree.style.backgroundColor = "navy";

}


// Mobile hamburger menu operation


function menuToggle() {
    document.getElementById('mobileNav').classList.toggle('active');
}


//Open image gallery modal

function carouselOpen() {
    document.getElementById('imageModal').classList.toggle('active');
}

//Close image gallery modal
function carouselClose() {
    document.getElementById('imageModal').classList.toggle('active');
}



// Return button functionality 

document.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY; 

        if (scrollPosition > 2900) {
            document.getElementById('returnButton').style.display = "flex";
        } else document.getElementById('returnButton').style.display = "none";

})

function returnToTop() {
    window.scrollTo(0,0);
}

// Dark mode button functionality 

function darkMode() {
    let darkModeButton = document.getElementById('darkmodebutton');
    let darkModeSlide  = document.getElementById('darkmodeslide');

        darkModeButton.addEventListener('click', () => {
            darkModeSlide.style.float = right;

        })
}

    
