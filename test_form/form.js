let formulaire  = document.getElementById("formulaire");
let error       = document.querySelector(".text-danger");
let input       = document.getElementById("prix");

error.style.display="none";

let nbreAleatoire = Math.floor(Math.random()*1001); // nombre aléatoire entre 0 et 1000
let coups = 0;
let nbreChoisi;

function verifier(nombre) { 

    let instruction = document.createElement('div');

    if(nombre > nbreAleatoire){
        instruction.textContent = "C'est plus grand !"; 
        instruction.className   = "instruction grand";
    } else if (nombre  < nbreAleatoire) {
        instruction.textContent = "C'est plus petit !";
        instruction.className   = "instruction petit" ;  
    } else {
        instruction.textContent = "Félicitations !";
        instruction.className   = "instruction fini";
    }

    document.querySelector("#instructions").prepend(instruction);
}

input.addEventListener('keyup', () => { 
    if(isNaN(input.value)){ 
        error.style.display="block";  
        error.innerHTML='Le prix doit être un nombre';
    }
    else{
        error.style.display="none";
    }
})

formulaire.addEventListener( 'submit' , (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == '') { 
        input.style.borderColor = "red";
    }else { 
        coups++;
        input.style.borderColor = "silver";
        nbreChoisi = input.value;
        input.value = '';
        verifier(nbreChoisi);
    }
} );