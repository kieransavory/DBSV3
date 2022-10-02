// Functions to change background via selector icons on hero section of landing page. 

function bgChangerOne() {

    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')

        heroOne.style.backgroundImage = "url(DBSheader2.jpg)";
        buttonOne.style.backgroundColor = "navy";
        buttonTwo.style.backgroundColor = "white";
        buttonThree.style.backgroundColor = "white";
}

function bgChangerTwo() {

    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')
    
        heroOne.style.backgroundImage = "url(dbskitchen.jpg)";
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


function menuToggle() {
    document.getElementById('mobileNav').classList.toggle('active');
}




