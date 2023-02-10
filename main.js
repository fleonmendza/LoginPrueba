const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const regexPass = /^(?=.*[\#\$\.\@\<\>\!\¿\?\&\%\¡\/])(?=.*[A-Z])(?=.*[a-z])\S{16}$/g;
const regexMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
const regexName = /^[a-zA-Z\s]{1,25}$/g;

const validarForm = (e) => {
    switch(e.target.name){
        case "name":
            if(regexMail.test(e.target.value)){
                document.getElementById('name').classList.replace('formulario_input-name', 'formulario_input');
                document.getElementById('name').classList.replace('formulario_input','formulario_input-correo');
                console.log("correo"); 
            }if (regexName.test(e.target.value)){
                document.getElementById('name').classList.replace('formulario_input-correo', 'formulario_input');
                document.getElementById('name').classList.replace('formulario_input','formulario_input-name');
                console.log("nombre")
            }else{
                console.log("no valido");
            }
        break;
        case "password":
            if(regexPass.test(e.target.value)){
                document.getElementById('password').classList.replace('formulario_input_pass-error', 'formulario_input_pass');
                document.getElementById('password').classList.replace('formulario_input_pass','formulario_input_pass-correcto');
                console.log("pass corecta");
            }else{
                document.getElementById('password').classList.replace('formulario_input_pass-correcto', 'formulario_input_pass');
                document.getElementById('password').classList.replace('formulario_input_pass','formulario_input_pass-error');
                console.log("pass mala");
            }
        break;
    }      
}

inputs.forEach((input) =>{
   //input.addEventListener('change', validarForm);
    //input.addEventListener('blur', validarForm);
   // input.addEventListener('keyup', validarForm);
   input.addEventListener('input', validarForm);
})


const text = "DiDs12%3456789#@";
const correo = "abram.awelo@prestalana.com.mx";


if(regexPass.test(text)){
    console.log("correcto")
}else{
    console.log("error")
}

if(regexMail.test(correo)){
    console.log("correcto")
}else{
    console.log("error")
}