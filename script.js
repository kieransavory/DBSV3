function bgChanger() {


    let buttonOne = document.getElementById('heroButtonOne');
    let buttonTwo = document.getElementById('heroButtonTwo');
    let buttonThree = document.getElementById('heroButtonThree');
    let heroOne = document.getElementById('heroOne')

    buttonOne.addEventListener('click', () => {
        heroOne.style.backgroundImage = "url(dbsheader2.jpg)";
        buttonOne.style.backgroundColor = "navy";
        buttonTwo.style.backgroundColor = "white";
        buttonThree.style.backgroundColor = "white";
    })

    buttonTwo.addEventListener('click', () => {
        heroOne.style.backgroundImage = "url(dbskitchen.jpg)"; 
        buttonOne.style.backgroundColor = "white";
        buttonTwo.style.backgroundColor = "navy";
        buttonThree.style.backgroundColor = "white";
    })

    buttonThree.addEventListener('click', () => {
        heroOne.style.backgroundImage = "url(dbsdesign.jpg)";
        buttonOne.style.backgroundColor = "white";
        buttonTwo.style.backgroundColor = "white";
        buttonThree.style.backgroundColor = "navy";
    })
}