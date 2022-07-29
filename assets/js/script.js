const menu = document.getElementById('toggle_menu');
const Header = document.getElementById('Header_Mobile');
const Row = document.getElementById('Row_down');
menu.addEventListener('click', ()=>{
        Header.classList.toggle("active");
    });


const Slider = document.getElementById('carousel');

const Adryel = document.getElementById('Adryel');
const Slider_Adryel = 'adryel';
const Cor_Adryel = '#1F1616'
Adryel.addEventListener('click' , ()=>{
    Slider_Target(Slider_Adryel)
    Slider.style.background = Cor_Adryel

})

const Sah = document.getElementById('Sah');
const Slider_Sah = 'sah';
const Cor_Sah = '#603320'
Sah.addEventListener('click' , ()=>{
    Slider_Target(Slider_Sah);
    Slider.style.background = Cor_Sah
})

const Jean = document.getElementById('Jean');
const Slider_Jean = 'jean';
const Cor_Jean = '#4081A0';
Jean.addEventListener('click' , ()=>{
    Slider_Target(Slider_Jean);
    Slider.style.background = Cor_Jean

})

const Nina = document.getElementById('Nina');
const Slider_Nina = 'nina';
const Cor_Nina = '#818181';
Nina.addEventListener('click' , ()=>{
    Slider_Target(Slider_Nina);
    Slider.style.background = Cor_Nina
})

function Slider_Target(artista){
    Slider.innerHTML = `
    <img class="w1" src="assets/img/slider/${artista}/01.png" alt="">
    <img class="w2" src="assets/img/slider/${artista}/01.png" alt="">
    <img class="" src="assets/img/slider/${artista}/01.png" alt="">
    <img class="w2" src="assets/img/slider/${artista}/01.png" alt="">
    <img class="w1" src="assets/img/slider/${artista}/01.png" alt="">
    `
}