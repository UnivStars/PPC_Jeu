const button = document.querySelectorAll('button');
let resultat = document.querySelector(".resultat");
let joue = document.querySelector(".joue")
let joueur;
let robot;
let p = document.querySelector('p');


// Boucle
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        joueur = button[i].innerHTML;
        //selection du joueur
        robot = button[Math.floor(Math.random() * button.length)].innerHTML;
        //selection du bot en random
        resultat.innerHTML = "";
        //affiche rien de base
        joue.innerHTML = "";
        //console.log(`Joueur : ${joueur} VS Robot : ${robot}`);
        //document.write(`Joueur : ${joueur} VS Robot : ${robot}`);

        if (joueur == robot) {
            //    console.log(joueur + "joueur");
            resultat.innerHTML = "Egalité";
            //egaliter 
        }
        else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")) {
            resultat.innerHTML = "Gagné";
            //victoire
        }
        else {
            resultat.innerHTML = "Perdu";
            //defaite
        }
        joue.innerHTML = (`Joueur : ${joueur} VS Robot : ${robot}`);
    });
}
