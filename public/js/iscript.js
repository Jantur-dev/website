let dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
    dropdown.classList.toggle('active');
});
let hero = document.querySelector(".img-hero");
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    hero.style.left = value * 0.3 + "px";
});
let kotak = document.getElementById('kotak')
let respon = document.querySelector('#respon')
let kotakUl = document.querySelector("#kotak ul")
let dropOption = document.querySelector('.dropdownhp')
let responcss = document.querySelector('#kotak.respon ul')
kotak.addEventListener('click', () => {
    // alert("Jangan di klik belum jadi");
    // kotakUl.classList.remove("nonActive")
    // kotakUl.classList.add("active")
    let active = respon.classList
    // console.log(active[2] == "nonActive")
    if(active[2] == "nonActive"){
        respon.classList.remove("nonActive")
        respon.classList.add("active")
        // responcss.style.display = 'block' // yang jadi masalah
    } else if(active[2] == "active"){
        respon.classList.remove("active")
        respon.classList.add("nonActive")
        // responcss.style.display = 'none' // ini juga
    } 
});