function tocarSom(seletorAudio) { 
    const elemento = document.querySelector(seletorAudio);  
    
    if( elemento && elemento.localName === 'audio') {
        elemento.play();
    }else {
        console.log('Elemento inválido.')
    }

};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i=0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //Template String

    tecla.onclick = function () {
        tocarSom(idAudio);        
    }

    tecla.onkeydown = function (event) {

        if (event.code === 'space' || event.code === "Enter") {
            tecla.classList.add('ativa'); 
        }               

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}





