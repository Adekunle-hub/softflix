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

loadFaqAnswers()
loadSignInPage()
loadHome()