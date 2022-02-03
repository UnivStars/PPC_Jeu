const button = document.querySelectorAll('button');
let resultat = document.querySelector(".resultat");
let joueur;
let robot;
let p = document.querySelector('p');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        joueur = button[i].innerHTML;
        robot = button[Math.floor(Math.random() * button.length)].innerHTML;

        resultat.innerHTML = "";

        if (joueur == robot) {
            resultat.innerHTML = "Egalité";
            // console.log(robot + joueur + "if")
        }
        else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")) {
            resultat.innerHTML = "Gagné";
        }
        else {
            resultat.innerHTML = "Perdu";
        }
    });
}
console.log(`Joueur:${joueur} VS Robot ${robot}`);

