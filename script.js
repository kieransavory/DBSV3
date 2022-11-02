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

    //Array of images used in carousel. 
    const bgArray = [
        "url(https://thumbs.dreamstime.com/z/modern-office-buildings-17510275.jpg)",
        "url(https://thumbs.dreamstime.com/z/landscape-center-city-modern-commercial-background-sunny-day-street-road-urban-office-business-architecture-building-146645192.jpg)",
        "url(https://thumbs.dreamstime.com/z/industrial-bricklayer-installing-bricks-construction-site-close-up-75236615.jpg)",
        "url(https://thumbs.dreamstime.com/z/new-home-construction-image-36833097.jpg)",
    ]


    document.getElementById('modalBackground').style.backgroundImage = bgArray[count];

    left.addEventListener('click', () => {
        count--;
        document.getElementById("modalBackground").style.backgroundImage = bgArray[count];
    })

    right.addEventListener('click', () => {
        count++;
        document.getElementById("modalBackground").style.backgroundImage = bgArray[count];
    })
}

//SECOND CAROUSEL LOGIC
function carouselTwo() {

    carouselOpen();

    document.getElementById('modalLabel').innerText = "Bar build"

    let count = 0; 
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    

    const bgArrayTwo = [
        "url(https://thumbs.dreamstime.com/z/construction-worker-28043224.jpg)",
        "url(https://thumbs.dreamstime.com/z/house-under-construction-87183.jpg)",
        "url(https://thumbs.dreamstime.com/z/construction-site-17443756.jpg)",
        "url(https://thumbs.dreamstime.com/z/roofers-lay-install-asphalt-shingles-roof-repair-two-roofers-roofing-construction-asphalt-shingles-roofers-lay-108374098.jpg)",
    ]

    document.getElementById('modalBackground').style.backgroundImage = bgArrayTwo[count];

    left.addEventListener('click', () => {
        count--;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayTwo[count];
    })

    right.addEventListener('click', () => {
        count++;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayTwo[count];
    })

}










//Open image gallery modal
function carouselOpen() {
    document.getElementById('imageModal').classList.toggle('active');
    
}

//Close image gallery modal
function carouselClose() {
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

    
