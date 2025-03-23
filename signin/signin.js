

function loadHomePage(){
  const homeNetflix  = document.querySelector('.netflix-header-js')
  homeNetflix.addEventListener('click',()=>{
    window.location.href = "../index.html"
  })
}

loadHomePage()
