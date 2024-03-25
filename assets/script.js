const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//déclaration des constantes et variables
const img = document.querySelector(".banner-img")                    // sélectionne un élément avec la classe CSS "".banner-img".
const texte = document.querySelector("#banner p")                    // sélectionne les paragraphs enfant de l'élément avec l'ID "banner". 
const nbreSlides = slides.length                                     // stocke la longueur du tableau slides dans la variable nbreSlides

let counter = 0                                                      // initialisation du compteur

//Ajout des bullet points au slider

const divDot = document.querySelector(".dots")                       //recuperation de l'element de classe "dots"

for(let i = 0; i < nbreSlides; i++) {

	const Dot = document.createElement('div')                        //creation de la div        

	Dot.classList.add("dot")                                         //ajout de la classe .dot

	divDot.appendChild(Dot)                                          //ajout de la div de classe .dot   => ajout du point dot                          
}
let Dots = document.querySelectorAll(".dot")                         //sélectionne tous les éléments avec la classe CSS .dot, 
Dots[0].classList.add("dot_selected")                                //ajoute la classe .dot_selected au premier point pour indiquer que c'est la premiere diapo qui est affichée



// Ecouteur d'événements pour détecter un clic sur un élément avec la classe .arrow_right
const next = document.querySelector(".arrow_right") 					//selectionne les éléments avec la classe "".arrow_right"
next.addEventListener("click", () => {              					// Lorsque l'utilisateur clic sur l'element fleche droite, la fonction fléchée est exécutée
	counter++                                       					// incrementation du compteur
	if(counter === nbreSlides){                     					// si le compteur est egale au nombre de slide
		counter = 0                                 					// on remet le compteur a 0
		Dots[nbreSlides-1].classList.remove("dot_selected")             // on retire la class "dot_selected"
	}
	img.src = "./assets/images/slideshow/" + slides[counter].image      // Met à jour l'attribut src de l'image avec le chemin de la nouvelle diapositive
	texte.innerHTML = slides[counter].tagLine                           // Met à jour le texte avec la légende de la nouvelle diapositive
	Dots[counter].classList.add("dot_selected")                         // Ajoute la classe "dot_selected" à la diapositive actuelle
	Dots[counter-1].classList.remove("dot_selected")                    // Retire la classe "dot_selected" de la diapositive précédente

})

// eventlistener fleche precedente
const back = document.querySelector(".arrow_left")                      // selectionne les éléments avec la classe "".arrow_right"
back.addEventListener("click", () => {                                  // Lorsque l'utilisateur clic sur l'element fleche gauche, la fonction fléchée est exécutée
	counter--                                                           // decrementation du compteur
	if(counter < 0){                                                    // Si le compteur devient inférieur à zéro, cela signifie que l'utilisateur est revenu à la première diapositive.
		Dots[counter+1].classList.remove("dot_selected")                // la classe dot_selected est retirée de la diapositive actuelle
		counter = nbreSlides - 1                                        // le compteur est réinitialisé à la dernière diapositive
	}
	img.src = "./assets/images/slideshow/" + slides[counter].image      // Met à jour l'attribut src de l'image avec le chemin de la nouvelle diapositive
	texte.innerHTML = slides[counter].tagLine                           // Met à jour le texte avec la légende de la nouvelle diapositive
	Dots[counter].classList.add("dot_selected")	                        // Ajoute la classe "dot_selected" à la diapositive actuelle
	Dots[counter+1].classList.remove("dot_selected")	                // Retire la classe "dot_selected" de la diapositive précédente							
})



