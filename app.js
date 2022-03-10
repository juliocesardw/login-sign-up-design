
// FORMULARIO REGISTRO VALIDAR
const btnDeleteImg=document.querySelector('.btnDeleteImg');
const btnPass=document.querySelectorAll('[active-pass]');

function cargarImagen(el){
    const imagen=el.target.files[0];
    
    const elPadre=el.target.parentNode.parentNode;
    const imgVista=document.querySelector('.imagen-view');
    
    //tamaño de imagen
    if(imagen["size"] > 2000000){
 
        console.log(el.target.parentNode.parentNode);

        const div = document.createElement("div");
        div.setAttribute('class','text-error');
        div.innerHTML="La imagen no debe superar los 2MB";
        elPadre.parentNode.querySelector('.error-image').appendChild(div);
        return false;
 
    }else{

        
        if(elPadre.parentNode.querySelector('.error-image')){
            elPadre.parentNode.querySelector('.error-image').innerHTML="";
        }

        const datos_imagen = new FileReader();
        	
        //imagen la convertimos en un archivo
        datos_imagen.readAsDataURL(imagen);

        datos_imagen.addEventListener('load',function(e){

            const ruta_imagen=e.target.result;
            //imagen en pantalla
            imgVista.style.backgroundImage='url('+ruta_imagen+')';
            el.target.parentNode.querySelector('.icono').setAttribute('class',"icono fa-solid fa-pencil");
            elPadre.classList.remove('image-empty');

        })

        return true;
 
    }
}

function _crearEleError(text){
    const div = document.createElement("div");
    div.setAttribute('class','text-error');
    div.innerHTML=text;
    return div;
}

function mostrarPass(e){
    const inputPassword=e.target.parentNode.querySelector('input');

    if(inputPassword.type==="password"){

        inputPassword.setAttribute('type','text');
        e.target.classList.remove('fa-eye-slash');
        e.target.classList.add('fa-eye');


    }else{

        inputPassword.setAttribute('type','password');
        e.target.classList.remove('fa-eye');
        e.target.classList.add('fa-eye-slash'); 
            
    }
}

if(document.getElementById('fotoPerfil')){


    //INPUT CARGAR IMAGEN
    const fotoPerfil=document.getElementById('fotoPerfil');
    fotoPerfil.addEventListener('change', cargarImagen);

    //ELIMINAR IMAGEN
    btnDeleteImg.addEventListener('click',(e)=>{
        e.currentTarget.parentNode.classList.add('image-empty');
        const imgVista=document.querySelector('.imagen-view');

        fotoPerfil.parentNode.querySelector('.icono').setAttribute('class',"icono fa-solid fa-plus");
        
        imgVista.style.backgroundImage='none';
        fotoPerfil.value='';
    })

}


//BTN MOSTRAR Y OCULTAR CONTRASEÑA
btnPass.forEach(element => {
    element.addEventListener('click',mostrarPass);
});




$(document).ready(function() {
    $("#formRegistro").validate({
        rules: {
            correo: {
                required: true,
                email: true
            },
            nombre: {
                required:true 
            },
            password: {
                required:true 
            }
        },
        messages : {
            correo: {
                required: "Campo requerido",
                email: "Ingrese un correo electrónico válido."
            },
            nombre: {
                required: "Campo requerido"
            },
            password: "Campo requerido"

        } 
    });

    $("#formLogin").validate({
        rules: {
            correo: {
                required: true,
            },
            password: {
                required:true 
            }
        },
        messages : {
            correo: {
                required: "Campo requerido",
            },
            password: "Campo requerido"

        } 
    });
});
