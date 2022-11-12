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

function menuToggleHome() {
    homeScroll();
    menuToggle();
}

function menuToggleAbout() {
    aboutScroll();
    menuToggle();
}

function menuToggleDesign() {
    designScroll();
    menuToggle();
}

function menuToggleProjects() {
    projectsScroll();
    menuToggle();
}

function menuToggleContact() {
    contactScroll();
    menuToggle();
}



//FIRST CAROUSEL LOGIC
function carouselOne() {


    carouselOpen();

    //Change text to relate to images on load.
    document.getElementById('modalLabel').innerText = "Driveway and garage rebuild"

    let count = 0;
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    if (count == 0) {
        left.style.visibility = "hidden";
    }

    //Array of images used in carousel. 
    const bgArray = [
        "url(https://thumbs.dreamstime.com/z/modern-office-buildings-17510275.jpg)",
        "url(https://thumbs.dreamstime.com/z/landscape-center-city-modern-commercial-background-sunny-day-street-road-urban-office-business-architecture-building-146645192.jpg)",
        "url(https://thumbs.dreamstime.com/z/industrial-bricklayer-installing-bricks-construction-site-close-up-75236615.jpg)",
        "url(https://thumbs.dreamstime.com/z/new-home-construction-image-36833097.jpg)",
    ]

    let ArrayLength = bgArray.length;


    document.getElementById('modalBackground').style.backgroundImage = bgArray[count];

    left.addEventListener('click', () => {
        count--;
        document.getElementById("modalBackground").style.backgroundImage = bgArray[count];

        if ((count + 1) < ArrayLength) {
            right.style.visibility = "visible";
        } 

        if (count == 0) {
            left.style.visibility = "hidden";
        }
    })

    right.addEventListener('click', () => {
        count++;
        document.getElementById("modalBackground").style.backgroundImage = bgArray[count];

        if ((count + 1) >= ArrayLength) {
            right.style.visibility = "hidden";
        } 

        if (count > 0) {
            left.style.visibility = "visible";
        }

    })
}

//SECOND CAROUSEL LOGIC
function carouselTwo() {

    carouselOpen();

    document.getElementById('modalLabel').innerText = "Kitchen Refurbishment"

    let count = 0; 
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    if (count == 0) {
        left.style.visibility = "hidden";
    }

    

    const bgArrayTwo = [
        "url(kitchen2.webp)",
        "url(kitchen3.webp)",
        "url(kitchen4.webp)",
        "url(kitchen5.webp)",
        "url(kitchen7.webp)",
        "url(kitchen8.webp)",
        "url(kitchen9.webp)",
    ]

    let ArrayLength = bgArrayTwo.length;

    document.getElementById('modalBackground').style.backgroundImage = bgArrayTwo[count];

    left.addEventListener('click', () => {
        count--;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayTwo[count];

        if ((count + 1) < ArrayLength) {
            right.style.visibility = "visible";
        } 

        if (count == 0) {
            left.style.visibility = "hidden";
        }
    })

    right.addEventListener('click', () => {
        count++;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayTwo[count];

        if ((count + 1) >= ArrayLength) {
            right.style.visibility = "hidden";
        } 

        if (count > 0) {
            left.style.visibility = "visible";
        }
    })

}










//Open image gallery modal
function carouselOpen() {
    document.getElementById('imageModal').classList.toggle('active');
    
}

//Close image gallery modal
function carouselClose() {
    window.location.reload(true);
    document.getElementById('imageModal').classList.toggle('active');
}














//Document Onscroll events
document.addEventListener("scroll", () => {

    let scrollPosition = window.scrollY; 

    //Return button appears past certain point.
        if (scrollPosition > 2900) {
            document.getElementById('returnButton').style.display = "flex";
        } else document.getElementById('returnButton').style.display = "none";
})

function returnToTop() {
    window.scrollTo(0,0);
}


// Navbar scroll position on list item click functionality for DESKTOP, LAPTOP AND TABLET. 

function homeScroll() {
    let newScroll = document.getElementById('heroOne').offsetTop;
    window.scrollTo(0, newScroll);
}

function aboutScroll() {
    let newScroll = document.getElementById('hero2').offsetTop;
    window.scrollTo(0, newScroll);
}

function designScroll() {
    let newScroll = document.getElementById('dbsdesign').offsetTop;
    window.scrollTo(0, newScroll);
}

function projectsScroll() {
    let newScroll = document.getElementById('gallery').offsetTop;
    window.scrollTo(0, newScroll);
}

function contactScroll() {
    let newScroll = document.getElementById('contactSection').offsetTop;
    window.scrollTo(0, newScroll);
}

    

