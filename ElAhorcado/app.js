const { dialog } = require('@electron/remote')

//dialog.showErrorBox("FALLO","ESTE ES UN GRAN FALLO")

let palabra = document.getElementById("palabra");
let guiones = document.getElementById("guiones");
let ahorcadito = document.getElementById("ahorcadito");
let letra = document.getElementById("letra");
let ahora = document.getElementById("ahora");
let boton = document.getElementById("boton");

let gui = "";
let img = 1;
letra.disabled=true;

const perder = {
    type:'info',
    title:'Info',
    message:'Has perdido',
};

const ganar = {
    type:'info',
    title:'Info',
    message:'Has ganado',
};

palabra.addEventListener('keyup', (evento) => {
    if (evento.key == "Enter") {
        letra.disabled=false;
        palabra.disabled=true;
        for (let i = 0; i < palabra.value.length; i++) {
            gui += "-";
        }
        guiones.innerHTML = gui;
    }
});


let aciertos=0;
letra.addEventListener('keyup', (evento) => {
    if (evento.key == "Enter") {
        let fallo = true;
        
        for (let i = 0; i < palabra.value.length; i++) {
            if (letra.value == palabra.value[i]) {
                
                //acierto
               gui = gui.slice(0,i)+palabra.value[i]+gui.slice(i+1,gui.length);
                aciertos++;
                if(aciertos==palabra.value.length){
                    dialog.showMessageBox(ganar)
                    letra.disabled=true;
                }
                fallo = false;
            }
        } 
        if (fallo) {
            if(img<6){
                ahora.src = "./img/" + img + ".png";
                img++;
            }else{
                dialog.showMessageBox(perder)
            }
        }
        letra.value="";
        guiones.innerHTML = gui;
    }
});

boton.addEventListener('click', (evento)=>{
palabra.value="";
letra.value="";
img=1;
gui="";
guiones.innerHTML="";
aciertos=0;
letra.disabled=true;
palabra.disabled=false;


});
// let pala= "hola";
// pala.charAt(0);
