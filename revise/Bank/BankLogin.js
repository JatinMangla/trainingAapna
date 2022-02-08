function validation() {
    var email=document.getElementById('email').value
    var pwd=document.getElementById('pwd').value

    if(email=='admin@gmail.com' && pwd=='admin123'){
        
     window.location.href="BankHome.html"
    }
    else  {
        alert("E-mail or password is incorrect")
    }
}