const form = document.querySelector("form");
const newsletter = document.querySelector(".newsletter")
const newsletterSuccess = document.querySelector('.newsletter-success');
const newsletterInput = document.querySelector('#newsletter-email');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailReg.test(newsletterInput.value)) {
        newsletter.classList.add('hide');
        
            setTimeout(() => {
                newsletterSuccess.classList.add('show')
            }, 500);
        
    } else {
        form.classList.add('newsletter-show-error')
        setTimeout(() => {
            form.classList.remove('newsletter-show-error')
        }, 5000);
    }
  
    
})