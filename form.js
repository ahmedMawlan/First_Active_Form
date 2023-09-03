function validation(){
    let firstName = document.getElementById('name').value
    let phoneNumber = document.getElementById('phone-number').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let fnameError = document.querySelector('.fname-error')
    let phoneError = document.querySelector('.phone-error')
    let emailError = document.querySelector('.email-error')
    let passError = document.querySelector('.pass-error')

    let fnameRegex = /^[A-Za-z. ]{5,20}$/
    let phoneRegex = /\d{11,15}/
    let emailRegex = /.*@[a-z0-9.-]*/i
    let passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

    if (fnameRegex.test(firstName)){
        fnameError.innerHTML = ''
    }else{
        fnameError.innerHTML = 'Your First name is not valid'
        return false
    }

    if(phoneRegex.test(phoneNumber)){
        phoneError.innerHTML = ''
    }else{
        phoneError.innerHTML = 'Your Phone number not valid. must contain digits number between 11 and 15'
        return false
    }

    if(emailRegex.test(email)){
        emailError.innerHTML = ''
    }else{
        emailError.innerHTML = 'Your Email is not valid. must contain, ex. me@email.come'
        return false
    }

    if(passRegex.test(password)){
        passError.innerHTML = ''
    }else{
        passError.innerHTML = 'This password is not valid, ex. asf@#455sdf'
        return false
    }

}