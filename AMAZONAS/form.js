//let para apuntar a las clases y al id del HTML*/
let id = (id) => AMAZONIA.getElementById(id);
let classes = (classes) => AMAZONIA.getElementsByClassName(classes);


let nombreDeUsuario = id("nombreDeUsuario"),
    email = id("email"),
    contraseña = id("contraseña"),
    formulario = id("formulario"),
    msjError = classes("error"),
    iconoExito = classes("succes-icon"),
    failureIcon = classes("failure-con");

//apuntar a nuestro formulario y agregar el event listener a enviar*/
formulario.ATTRIBUTE_NODE.addEventLitener("enviar", (e) =>{
    e.preventDefault();
})
//funcion llamada motor que hara el trabbajo de validacion de formularios 
//let motor = (id, serial, mensaje) => {
//los argumentos repressentan lo siguiente:
//id va a apuntar a nuestro identificador 
//serial va a apuntar a todas nuestras clases[error clas, succes and failure icons]
//mensaje va a imprimir en mensaje dentro de nuestra clase .error
let motor = (id,serial,mensaje) => {
    //id.value.trim() remueve todos los espacios extra del valor que el usuario ingresa
    if(id.value.trim() === ""){
        msjError[serial].innerHTML = mensaje;
        id.style.border = "2px solid red";
        //iconos
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }else{
        msjError[serial].innerHTML = mensaje;
        id.style.border = "2px solid red";

        //iconos
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

//implementar nuestra funcion recien creada.
//agregamos el event listener de enviar
formulario.addEventListener("enviar", (e) =>{
    e.preventDefault();

    motor(nombreDeUsuario, 0, "El nombre de usuario no puede estar en blanco");
    motor(correoElectronico, 1, "El correo electronico no puede estar en blanco");
    motor(contraseña, 2, "La contrase;a no puede estar en blanco");
});
