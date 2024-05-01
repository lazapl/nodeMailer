const contactForm = document.querySelector('.contact-form')


    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let subject = document.querySelector('#subject')
    let message = document.querySelector('#message')

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault()


    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = function(){
        console.log(xhr.responseText)
        if(xhr.responseText = 'success'){
            alert('Your message has been sent')
            name.value = ""
            email.value = ""
            subject.value = ""
            message.value = ""
        }else{
            alert('Your message has not been sent')
        }
    }
    xhr.send(JSON.stringify(formData))
    
})