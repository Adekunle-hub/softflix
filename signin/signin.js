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
    eyeIcon.src="../Landing/svg/eye-slash-svgrepo-com.svg"

   }else{
    userPassword.type = "password"
    eyeIcon.src = "../Landing/svg/eye-svgrepo-com.svg"
     
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
