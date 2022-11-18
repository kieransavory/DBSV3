// Functions to change background via selector buttons on hero section of landing page. /////////////////////////

function bgChangerOne() {

    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')
    
        heroOne.style.backgroundImage = "url(dbskitchen.webp)";
        buttonOne.style.backgroundColor = "navy";
        buttonTwo.style.backgroundColor = "white";
        buttonThree.style.backgroundColor = "white";
}

function bgChangerTwo() {

    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')
    
        heroOne.style.backgroundImage = "url(DBSheader2.webp)";
        buttonOne.style.backgroundColor = "white";
        buttonTwo.style.backgroundColor = "navy";
        buttonThree.style.backgroundColor = "white";

}

function bgChangerThree() {

    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')
    
        heroOne.style.backgroundImage = "url(dbsdesign.webp)";
        buttonOne.style.backgroundColor = "white";
        buttonTwo.style.backgroundColor = "white";
        buttonThree.style.backgroundColor = "navy";

}


///////////////////////////////////////// Mobile hamburger menu operation //////////////////////////////////////


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


/////////////////////////////////////////// Image carousels //////////////////////////////////////////////////



//FIRST CAROUSEL LOGIC
function carouselOne() {


    carouselOpen();

    //Change text to relate to images on load.
    document.getElementById('modalLabel').innerText = "Loft conversion - ongoing project."

    let count = 0;
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    if (count == 0) {
        left.style.visibility = "hidden";
    }

    //Array of images used in carousel. 
    const bgArray = [
        "url(loft1.webp)",
        "url(loft2.webp)",
        "url(loft6.webp)",
        "url(loft3.webp)",
    ];

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
    ];

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

//THIRD CAROUSEL LOGIC
function carouselThree() {

    carouselOpen();

    document.getElementById('modalLabel').innerText = "Extension - ongoing project."

    let count = 0; 
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    if (count == 0) {
        left.style.visibility = "hidden";
    }

    

    const bgArrayThree = [
        "url(benhall1.webp)",
        "url(benhall2.webp)",
        "url(benhall3.webp)",
        "url(benhall4.webp)",
        "url(benhall5.webp)",
        "url(benhall6.webp)",
    ];

    let ArrayLength = bgArrayThree.length;

    document.getElementById('modalBackground').style.backgroundImage = bgArrayThree[count];

    left.addEventListener('click', () => {
        count--;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayThree[count];

        if ((count + 1) < ArrayLength) {
            right.style.visibility = "visible";
        } 

        if (count == 0) {
            left.style.visibility = "hidden";
        }
    })

    right.addEventListener('click', () => {
        count++;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayThree[count];

        if ((count + 1) >= ArrayLength) {
            right.style.visibility = "hidden";
        } 

        if (count > 0) {
            left.style.visibility = "visible";
        }
    })

}

//FOURTH CAROUSEL LOGIC
function carouselFour() {

    carouselOpen();

    document.getElementById('modalLabel').innerText = "Extension - ongoing project."

    let count = 0; 
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    if (count == 0) {
        left.style.visibility = "hidden";
    }

    

    const bgArrayFour = [
        "url(glosroad1.webp)",
        "url(glosroad2.webp)",
        "url(glosroad3.webp)",
        "url(glosroad4.webp)",
    ];

    let ArrayLength = bgArrayFour.length;

    document.getElementById('modalBackground').style.backgroundImage = bgArrayFour[count];

    left.addEventListener('click', () => {
        count--;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayFour[count];

        if ((count + 1) < ArrayLength) {
            right.style.visibility = "visible";
        } 

        if (count == 0) {
            left.style.visibility = "hidden";
        }
    })

    right.addEventListener('click', () => {
        count++;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayFour[count];

        if ((count + 1) >= ArrayLength) {
            right.style.visibility = "hidden";
        } 

        if (count > 0) {
            left.style.visibility = "visible";
        }
    })

}

//FIFTH CAROUSEL LOGIC
function carouselFive() {

    carouselOpen();

    document.getElementById('modalLabel').innerText = "Standalone build"

    let count = 0; 
    let left = document.getElementById('modalLeft');
    let right = document.getElementById('modalRight');

    if (count == 0) {
        left.style.visibility = "hidden";
    }

    

    const bgArrayFive = [
        "url(whaddon1.webp)",
        "url(whaddon2.webp)",
        "url(whaddon3.webp)",
        "url(whaddon4.webp)",
        "url(whaddon5.webp)",
        "url(whaddon6.webp)",
        "url(whaddon7.webp)",
        "url(whaddon8.webp)",
        "url(whaddon10.webp)",
        "url(whaddon11.webp)",
        "url(whaddon13.webp)",
        "url(whaddon14.webp)",
    ];

    let ArrayLength = bgArrayFive.length;

    document.getElementById('modalBackground').style.backgroundImage = bgArrayFive[count];

    left.addEventListener('click', () => {
        count--;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayFive[count];

        if ((count + 1) < ArrayLength) {
            right.style.visibility = "visible";
        } 

        if (count == 0) {
            left.style.visibility = "hidden";
        }
    })

    right.addEventListener('click', () => {
        count++;
        document.getElementById("modalBackground").style.backgroundImage = bgArrayFive[count];

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

    projectsScroll();
    //Reloading window resets image carousel variables.
    document.getElementById('imageModal').classList.toggle('active');
    window.location.reload();

    
}














////////////////////////////////////////////////////// Document Onscroll events /////////////////////////////////////
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



function messageCount() {

    const buttonArrayOne = [
    "transition: all 0.5s;",
    "padding: 15px;",
    "background-color: whitesmoke;",
    "border: 2px solid slategray;",
    "color: slategrey;",
    "font-size: 20px;",
    "cursor: pointer;"
    ]

    let message = document.getElementById('messagebox').value;

    let messageLength = message.length;

    let counter = document.getElementById('messageCounter');


    //Set counter to length of message.
    counter.innerText = messageLength;


    let button = document.getElementById('messagebutton');

    if (message.trim() != "") {

    if (messageLength >= 30) {
        button.style.backgroundColor = "whitesmoke";
        button.style.cursor = "pointer";
        button.style.color = "slategrey";
        enableButton();
        
    } else if (messageLength <= 30) {
        button.style.backgroundColor = "slategrey";
        button.style.cursor = "not-allowed";
        button.style.color = "whitesmoke";
        disableButton();

    }
    function disableButton() {
        document.getElementById('messagebutton').disabled = true;
        document.getElementById('messagebutton').title = "Please fill in the form in order to send a message.";
    }

    function enableButton() {
        document.getElementById('messagebutton').disabled = false;
        document.getElementById('messagebutton').title = "Send message";
    }

}
       

}



//Developed by Kieran Savory for DBS Building Services
    

