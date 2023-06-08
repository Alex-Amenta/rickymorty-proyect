export default function Validacion(input) {
    //este input = {email:--  pasword:--}
    
    const error = {};
    // {email: Error}

    // descomentar esto cuando haya copiado lo que escribi abajo
    const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const regexPassword = new RegExp("(?=.*[0-9])");

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un email valido!";
    }
    if(!input.email) {
        error.email = "Debe ingresar un email!";
    }
    if(input.email.length > 35){
        error.email = "No mayor a 35 cáracteres!";
    }
    if(!regexPassword.test(input.password)){
        error.password = "Debe tener minimo un numero!";
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "Entre 6 y 10 carácteres!";
    }

    return error;
}