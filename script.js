let menu = document.querySelector(".burger-menu-toggle");
let menuToggle = document.querySelector(".show-menu");

menu.addEventListener("click", () => {
    menuToggle.style.display = menuToggle.style.display === "none" ? "block" : "none";
});

    const pers = document.querySelector('.pers');
    const prevButton = document.querySelector('.prev-button')
    const nextButton = document.getElementById('next-button');
    const per = Array.from(pers.querySelectorAll('img'));
    const persCount = per.length;
    let persIndex = 0;

    prevButton.addEventListener('click', showPreviousPers);
    nextButton.addEventListener('click', showNextPers); 
     
    function showPreviousPers(){
        persIndex = (persIndex - 1 + persCount) % persCount;
        updatePerc();
    }
    function showNextPers(){
        persIndex = (persIndex + 1) % persCount;
        updatePerc();
    }
    
    function updatePerc() {
        per.forEach((pers, index) => {
            if (index === persIndex) {
                pers.style.display = 'block';
            } else {
                pers.style.display = 'none';
            }
        });
    }
    updatePerc();