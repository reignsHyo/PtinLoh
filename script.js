let btnPress = document.getElementById('Btn');
let btnReg = document.getElementById('btn1');
let menuBtnReg = document.getElementById('menubtnreg');
let btnSubmit = document.getElementById('btnSubmit');
let spisanieCards = document.getElementById('spisanieCards');
btnPress.addEventListener("click", function(){
  document.getElementById('lakira').classList.toggle('active');
  document.getElementById('headerD').classList.toggle('active');
  document.getElementById('menubtn').classList.toggle('active');
});

btnReg.addEventListener("click", function(){
  document.getElementById('Registraciya').classList.toggle('active');

});


spisanieCards.addEventListener("click", function(){
  document.getElementById('spisanieCards').classList.remove('active');

});

menubtnreg.addEventListener("click", function(){
  document.getElementById('Registraciya').classList.toggle('active');
    document.getElementById('lakira').classList.remove('active');
});

btnSubmit.addEventListener("click", function(){
  document.getElementById('lohDiv').classList.add('active');
   document.getElementById('spisanieCards').classList.add('active');
});