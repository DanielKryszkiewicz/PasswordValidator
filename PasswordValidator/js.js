const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const showMsg = () => {
 if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
  p.textContent = 'You have very strong password!'
  p.style.color = 'lime'
 } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)){
   p.textContent = 'You have good password!'
  p.style.color = 'gold'
  }else {
   p.textContent = "You have poor password"
   p.style.color = 'red'
  }
 }

 const checkPass = () => {
  if(pass.value !== ''){
   showMsg()
  }
 }

pass.addEventListener('keyup', checkPass) 