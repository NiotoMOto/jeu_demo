var ecran = document.getElementById("screen");
ecran.style.backgroundImage = "url('images/lieux/exterieur.jpg')";
ecran.style.backgroundRepeat = "no-repeat";
/*ecran.style.backgroundAttachement = "fixed";*/
ecran.style.backgroundPosition = "center";
document.getElementById("texte").textContent = "Une nouvelle journée commence à l'hôpital, un nouvel hôpital au fait puisque tu es réafectée dans celui-ci suite au décès accidentel en service d'une infirmière. Bonne chance, tout devrait bien se passer...";

var force = document.getElementById("force");

if (force.textContent = "normale") {
	force.style.color = "blue";
}

var sante = document.getElementById("sante");

if (sante.textContent = "bonne") {
	sante.style.color = "green";
}

var bas = document.getElementById("bas");
var haut = document.getElementById("haut");
var droite = document.getElementById("droite");
var gauche = document.getElementById("gauche");
var texte_bas = document.getElementById("description_bas");
var texte_haut = document.getElementById("description_haut");
var texte_droite = document.getElementById("description_droite");
var texte_gauche = document.getElementById("description_gauche");
var habits = document.getElementById("habits");
var inventaire = document.getElementById("description");

function clic1() {
   ecran.style.backgroundImage = "url('images/personnages/docteur.jpg')";
   if (habits.textContent = "propres") {
   		document.getElementById("texte").textContent = "Bonjour Diane, je suis le docteur Derek, vous m'avez l'air en forme aujourd'hui. Je vais vous poser une question : Il y a un nouveau né dans l'aile de pédiatrie, son pouls est de 90 battements par minute, est-ce normal ? ";
	}
	else {
		document.getElementById("texte").textContent = "Bonjour Diane, je suis le docteur Derek, et j'attends de mes infirmières qu'elles aient une tenue plus présentable au travail ! Laissez moi vous poser une question : Il y a un nouveau né dans l'aile de pédiatrie, son pouls est de 90 battements par minute, est-ce normal ? ";
	}
   texte_bas.textContent = "OUI";
   texte_haut.textContent = "NON";
   texte_gauche.textContent = "";
   texte_droite.textContent = "";
}

function clic2() {
    alert("Votre service n'est pas fini !");
}

function clic3() {
    alert("Vous vous asseyez un moment sur un banc et vous vous rendez compte qu'il y a un journal abandonné à côté, vous le prenez");
    if (inventaire.textContent = "rien pour l'instant") {
    	inventaire.textContent = "journal";
	}
	else {
		inventaire.textContent += "journal";
	}
}

function clic4() {
    alert("Vous vous approchez des poubelles en voulant attraper une paire de ciseaux encore utilisables quand tout d'un coup, vous glissez et salissez votre tenue de plusieurs traces de sauces fast-food...");
    habits.textContent = "sales";
    if (inventaire.textContent = "rien pour l'instant") {
    	inventaire.textContent = "paire de ciseaux";
	}
	else {
		inventaire.textContent += "paire de ciseaux";
	}

}


haut.addEventListener("click", clic1);
bas.addEventListener("click", clic2);
droite.addEventListener("click", clic3);
gauche.addEventListener("click", clic4);