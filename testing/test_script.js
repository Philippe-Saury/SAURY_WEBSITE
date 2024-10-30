//Cibler des éléments dans le DOM grâce à JavaScript

//Javascript has 5 data types boolean, null, undefined, string and number. Primitives Types
//There are 3 reference types Array, function and Object (technically all of them are objects)
//Primitives types don't have relationships to each other 
var x = 10;
var y ='abc';

var a = x;
var b = y;
 
//a just has the same value as x not the same memory adress. So if I change x after ligne 9, a 
// won't change. 

//Objects / Reference types
//The variable point2 receives the adress in memory of point1
let point1 = { x: 1, y: 1 };
let point2 = point1;

point1.y = 100;
console.log(point2.y);

//The == and ===
// == two reference types, they check if the two contain the reference to the same memory
var arrRef = ['Hi!'];
var arrRef2 = arrRef;
console.log(arrRef === arrRef2); // -> true
console.log(arrRef == arrRef2);

//Les fonctions

//Le mot this
//Dans un évenement this est le bouton
console.log("This in a button references the button")
const button = document.getElementById('first-button');
button.onclick = function(){
    console.log(this)
};

//Expression de fonction (on donne la fonction à une variable)
let disBonjour= function(){
    console.log('Bonjour');
};

disBonjour();

//Fonctions fléchés
let somme = (a,b) => a+b;

const sayhello = ()=>{
    console.log("hello");
}

//La portée des variables
//Si une variable globale et locale ont le même nom, la fonction utilise en priorité la variable
//locale dans la fonction. 


//Fonction externe et interne
let name = 'Philippe';
function externe(){
    let age = 29;
    function interne(){
        let hobbies = 'Trail';
        return name + ' , ' + age;
    }
    return interne();
}
console.log(externe());

//TRY AND CATCH
try{
    alert('Bonjour. LE TRY MARCHE.');  
}catch(err){
    alert('Une erreur a été rencontrée');
}


//Paramètres de restes
//On peut mettre autant de paramètres dans hobbies
let nom = 'Giraux';
let prenom = 'Pierre';
function profil(nom,prenom,...hobbies){
    let h = '';
    for(hobbie of hobbies)
    {
        h += hobbie +  ' ';
    }
    console.log('Nom : ' + nom + '\nPrénom : ' + prenom + '\nHobbies : ' + h);
}
profil('Giraud','Pierre','Trail','Piscine');

//Sélectionner des élements du DOM
//QuerySelectorAll sélectionne tout les élements dans le paramètre
let allPelements = document.querySelectorAll("p");
for(let i=0;i<allPelements.length;i++)
{
    let pElement = allPelements[i];
    console.log(pElement);
}
//QuerySelector sélectionne le premier élément
//On peut aussi cibler des élements avec leurs class pas juste le type de l'élément
let blueparagraph = document.querySelector(".blue-paragraph");
console.log(blueparagraph);



//Les fonctions CALLBACK
function direBonjour(callback) {
    console.log("Bonjour !");
    callback();
}

function direAuRevoir() {
    console.log("Au revoir !");
}

// Appeler direBonjour avec direAuRevoir en tant que callback
direBonjour(direAuRevoir);

// Résultat :
// Bonjour !
// Au revoir !


//LIRE LES FICHIERS JSON
var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//l'objet requete 
var request = new XMLHttpRequest();
//On ouvre une nouvell requete avec open
request.open("GET",requestURL);
request.responseType = "json";
//Avant d'envoyer la requete, on prépare le callback onload 
request.onload = function(){
    var superheroes = request.response;
    console.log(superheroes);
}
//On envoie notre requete
request.send();

//Cas ou la réponse n'est pas un sous forme JSON mais en chaine de caractères
//JSON.parse(request.response) pour le convertir texte en objet
//JSON.stringify fait l'opposé

