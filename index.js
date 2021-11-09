
let ul = document.querySelector("ul");
let buttonValidate = document.querySelector('button'); 
let form = document.querySelector('form')
let input = document.querySelector('.input')
let result = [];


console.log(ul);
console.log(form);
console.log(input);


function addEvent(){
    input.value = '';
    buttonValidate.addEventListener('click', () => {
        result.push(input.value)
    }  )
    console.log(task)
}

addEvent();

/*class createTask{
    constructor(nom, ajouter){
        this.nom = nom;
        this.ajouter = ajouter
    }
    
    create(){
        let inputOne = document.querySelector('.input');
        let resultat = inputOne.value;
        console.log(resultat)
    }
    
    
    }

    */