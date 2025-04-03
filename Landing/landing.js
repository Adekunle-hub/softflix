const homeNetflixHeader = document.querySelector('.netflix-header');
const signInButton = document.querySelector('.signin-button');

function loadSignInPage(){
    signInButton.addEventListener('click', () => {
        window.location.href = "signin/signin.html";
    });
}

function loadHome(){
    homeNetflixHeader.addEventListener('click', ()=>{
        window.location.href = "../index.html"
    });
};

const emailInput = document.querySelector('.email-input');
const getStartedButton = document.querySelector('.get-started-js')
getStartedButton.addEventListener('click',()=>{
    emailInput.value = '';
});


function loadFaqAnswers(){
document.querySelectorAll('.faqs-container').forEach((question)=>{
    question.addEventListener('click',()=>{
        const faqAnswers = question.querySelector('.faq-answers')
        if(faqAnswers.style.display === 'none' || faqAnswers.style.display === ""){
            faqAnswers.style.display = 'inline'
        }else{
            faqAnswers.style.display = "none"
        }
    })
})
}

const imageList = document.querySelector('.movies-display')
const slideButtons = document.querySelectorAll('.js-slide-button')

slideButtons.forEach( button=>{
    button.addEventListener('click',()=>{
        let direction;
        if(button.id === "prev-slide"){
            direction = -1
        }else{
            direction = 1
        }

        const scrollAmount = Math.round((imageList.clientWidth * direction));
        
        imageList.scrollBy({left: scrollAmount, behavior:"smooth"})


    })
})

const maxScrollLeft =  imageList.scrollWidth - imageList.clientWidth
const maxScrollRight =  imageList.clientWidth - imageList.clientWidth
const handleSlideButtons = () =>{
    if(imageList.scrollLeft <= 0){
        slideButtons[0].style.display = "none"
    }else{
        slideButtons[0].style.display = "block"; 
    }if(imageList.scrollLeft >= maxScrollLeft){
        slideButtons[1].style.display = "none"
    }else{
        slideButtons[1].style.display = "block"
    }

}

imageList.addEventListener('scroll',()=>{
    handleSlideButtons();
})

//--for mobile swap--//
let touchStartX = 0;
let touchCurrentX = 0;

imageList.addEventListener('touchstart',(e)=>{
touchStartX = e.touches[0].clientX
}, {passive:true})

//--When finger moves on screen--//
imageList.addEventListener('touchmove',  (e) =>{
    if(touchCurrentX <= maxScrollLeft && touchCurrentX >= maxScrollRight){
    e.preventDefault()
    touchCurrentX = e.touches[0].clientX
    const touchDifference = touchStartX - touchCurrentX;
    imageList.scrollLeft = imageList.scrollLeft + touchDifference;
    touchStartX = touchCurrentX;
    }else{
        touchCurrentX = touchCurrentX
    }}, {passive:false})

loadFaqAnswers()
loadSignInPage()
loadHome()