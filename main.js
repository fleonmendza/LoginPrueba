const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const regexPass = /^(?=.*[\#\$\.\@\<\>\!\¿\?\&\%\¡])(?=.*[A-Z])(?=.*[a-z])\S{16}$/gm;
const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm;
const regexName = /^[a-zA-Z\s]{1,40}$/gm;

const validarForm = (e) => {
    if(e.target.name == "name") {
        if(regexMail.test(e.target.value)){
            console.log("correo");
        }else if(regexName.test(e.target.value)){
            console.log("mobre")
        }else{
            console.log("no vlaido")
        }
    }else if(e.target.name == "password"){
        console.log("paswoeerddd")
    }
}

inputs.forEach((input) =>{
    //input.addEventListener('keyup', validarForm)
    input.addEventListener('input', validarForm)
})


const text = "DiDs12%3456789#@";
const correo = "abram.awelo@prestalana.com";


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