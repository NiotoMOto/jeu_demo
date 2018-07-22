var bas = document.getElementById("bas");
var haut = document.getElementById("haut");
var droite = document.getElementById("droite");
var gauche = document.getElementById("gauche");
var texte_bas = document.getElementById("description_bas");
var texte_haut = document.getElementById("description_haut");
var texte_droite = document.getElementById("description_droite");
var texte_gauche = document.getElementById("description_gauche");
var habits = document.getElementById("habits");
habits.textContent = "propres";
var inventaire = document.getElementById("inventaire");

function clic2() {
    alert("Votre service n'est pas fini !");
}

function clic3() {
    alert("Vous vous asseyez un moment sur un banc et vous vous rendez compte qu'il y a un journal abandonné à côté, vous le prenez");
		inventaire.innerHTML += "<li>journal</li>";
}

function clic4() {
    alert("Vous vous approchez des poubelles en voulant attraper une paire de ciseaux encore utilisables quand tout d'un coup, vous glissez et salissez votre tenue de plusieurs traces de sauces fast-food...");
    habits.textContent = "sales";
	inventaire.innerHTML += "<li>paire de ciseaux</li>";
}

function clic1() {
   ecran.style.backgroundImage = "url('images/personnages/docteur.jpg')";
   	if (habits.textContent = "propres") {
   		document.getElementById("texte").textContent = "Bonjour Diane, je suis le docteur Derek, vous m'avez l'air en forme aujourd'hui. Je vais vous poser une question : Il y a un nouveau né dans l'aile de pédiatrie, son pouls est de 90 battements par minute, est-ce normal ? ";
	}
	if (habits.textContent = "sales") {
		document.getElementById("texte").textContent = "Bonjour Diane, je suis le docteur Derek, et j'attends de mes infirmières qu'elles aient une tenue plus présentable au travail ! Laissez moi vous poser une question : Il y a un nouveau né dans l'aile de pédiatrie, son pouls est de 90 battements par minute, est-ce normal ? ";
	}
	
   texte_bas.textContent = "OUI";
   bas.id = "question1_oui";
   texte_haut.textContent = "NON";
   haut.id = "question1_non";
   texte_gauche.textContent = "";
   texte_droite.textContent = "";
}

var reponse1 = document.getElementById("question1_oui");
var reponse2 = document.getElementById("question1_non");

function clic5() {
	document.getElementById("texte").textContent = "Je vois, vous laisseriez donc ce nouveau-né avec une insuffisance cardiaque manifeste, j'en toucherai un mot à la directrice";
	alert("La démo est finie, le jeu sera complété plus tard");
}

function clic6() {
	document.getElementById("texte").textContent = "Bonne réponse Diane, je suis ravi d'avoir une infirmière compétente avec moi, je vous souhaite une bonne journée";
	alert("La démo est finie, le jeu sera complété plus tard");
}


haut.addEventListener("click", clic1);
bas.addEventListener("click", clic2);
droite.addEventListener("click", clic3);
gauche.addEventListener("click", clic4);
reponse1.addEventListener("click", clic5);
reponse2.addEventListener("click", clic6);
