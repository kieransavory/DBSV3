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

    let count = 0; 
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    const bgArray = [
        "url(https://pixabay.com/get/ga36729cdef99d0a55b6fc2a1015b23fae151e99680eed5162773904499ddeedd5a287cb36534c62e45bbab397890b1a4_1280.jpg)",
        "url(https://pixabay.com/get/gfbcad7b2a561143ca261c8d72491cae4e5cfd121db65007b2ed9b1c948a599de32266b1eac9992996ed1dbb179bea6bd_1280.jpg)",
        "url(https://pixabay.com/get/g915c157a64edcf05c537bfebc0f77d258cfd720f729615a012377138fe737a2dd993dd158125148c913f07d72b8153ce_1280.jpg)",
        "url(https://pixabay.com/get/g3c931a6f2acdbffc6b22397a0bba6fe83336df8eacb290807ebaed8a0a6ceddb62f4229031e76523b460f9c4b985c534_1280.jpg)",
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

    let count = 0; 
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    

    const bgArrayTwo = [
        "url(https://pixabay.com/get/gdb6e613f2e39d634d059f1a092b8cb965d1d534f8973520b34fd48b0db50c6a5863d915ff804fef40c90b501c86b26d2_1280.jpg)",
        "url(https://pixabay.com/get/ga24e64fd8f7cee61712731fe1ee73b1366a45d712b1178ee9efd3a68b33b19f7b709f2109c605e22aa6e214c5695a7b6_1280.jpg)",
        "url(https://pixabay.com/get/g68dabeb4fe834262c5245056c59bae82e5decf119910d68e4fb33f53507aeea07261ab63b02d38e213cc87da15f1bfa6_1280.jpg)",
        "url(https://pixabay.com/get/g6734f2e42a41f5799f045bcf6c09143012e07c8379c4a35f06d63e32143847c53576e5353ba0c4f8655bb63b061ee54b_1280.jpg)",
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

    
