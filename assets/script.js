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
const img = document.querySelector(".banner-img")
const texte = document.querySelector("#banner p")
const nbreSlides = slides.length

let counter = 0

//Ajout des bullet points au slider
//recuperation de l'element de classe "dots"
const divDot = document.querySelector(".dots")

for(let i = 0; i < nbreSlides; i++) {
	//creation de la div
	const Dot = document.createElement('div')
	//ajout de la classe .dot
	Dot.classList.add("dot")
	//ajout de la div de classe .dot
	divDot.appendChild(Dot)
}
let Dots = document.querySelectorAll(".dot")
Dots[0].classList.add("dot_selected")



// eventlistener fleche suivante
const next = document.querySelector(".arrow_right")
next.addEventListener("click", () => {
	counter++
	if(counter === nbreSlides){
		counter = 0
		Dots[nbreSlides-1].classList.remove("dot_selected")
	}
	img.src = "./assets/images/slideshow/" + slides[counter].image
	texte.innerHTML = slides[counter].tagLine
	Dots[counter].classList.add("dot_selected")
	Dots[counter-1].classList.remove("dot_selected")

})

// eventlistener fleche precedente
const back = document.querySelector(".arrow_left")
back.addEventListener("click", () => {
	counter--
	if(counter < 0){ 
		Dots[counter+1].classList.remove("dot_selected")
		counter = nbreSlides - 1
	}
	img.src = "./assets/images/slideshow/" + slides[counter].image
	texte.innerHTML = slides[counter].tagLine
	Dots[counter].classList.add("dot_selected")	
	Dots[counter+1].classList.remove("dot_selected")								
})



