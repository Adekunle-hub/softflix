const eyeIcon = document.querySelector('.js-eye-icon');
const userPassword = document.querySelector('.password');
const userEmail = document.querySelector('.email')
const singInButton = document.querySelector('.signin');

function loadHomePage(){
  const homeNetflix  = document.querySelector('.netflix-header-js')
  homeNetflix.addEventListener('click',()=>{
    window.location.href = "../index.html"
  })
}

function showPassword(){
  eyeIcon.addEventListener('click',()=>{
   if(userPassword.type === "password"){
    userPassword.type = "text"
    eyeIcon.classList.replace('fa-eye', "fa-eye-slash")
   }else{
    userPassword.type = "password"
    eyeIcon.classList.replace('fa-eye-slash', "fa-eye")
   
   }
  })
}

function loadSignIn(){
  singInButton.addEventListener('click',()=>{
    if(userEmail.value === '' || userPassword.value === ''){
      alert('Please, fill both fields')
    }else{
    userEmail.value = '';
    userPassword.value = '';
    alert('Account created successfully')
    }
  })
}
loadHomePage()
showPassword()
loadSignIn()
