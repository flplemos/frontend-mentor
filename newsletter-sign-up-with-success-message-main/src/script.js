function validarEmail() {
    var email = document.getElementById('email');
    var error = document.getElementById('error-mail');

    if (!email.checkValidity()) {
        error.innerHTML = "Valid email required!";
        email.style.background = 'rgba(220, 20, 60, 0.301)'
    }
}

function redefinirMsg(){
    var error = document.getElementById('error-mail');

    if (error.innerHTML = "Valid email required!"){
        
        error.innerHTML = "";
        email.style.background = "white";
    }
}

function Enviar(){
    var email = document.getElementById('email');
    var popup = document.querySelector('.popup');
    var proxpage = document.querySelector('.desativado');
    var emailDisplay = document.getElementById('emailDisplay'); // Novo elemento

    if (email.checkValidity() && email.value.trim() !== ''){
        popup.classList.toggle("desativado");
        proxpage.classList.toggle("ativado");
        
        // Exibe o email digitado no novo elemento
        emailDisplay.innerHTML = "A confirmation email has been sent to <strong>" + email.value + "</strong>. Please open it and click the button inside to confirm your subscription.";
    } else {
        window.alert('Valid email required!')
    }
}

function Voltar() {
    var popup = document.querySelector('.popup');
    var proxpage = document.getElementById('newcard');

    popup.classList.toggle("desativado");
    proxpage.classList.toggle("ativado");
}