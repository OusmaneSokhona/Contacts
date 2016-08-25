/* "use strict" */ ;
/* 
Activité : gestion des contacts
*/

/*Initialisation du Profil Contact*/
var nouveau = {

    init: function (nom, prenom, tel, mail) {
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.mail = mail;
    }
}

/*Fonction qui affiche le menu*/
function afficheMenu() {
    console.log("Entrez votre choix: \n" + "1-Liste des Contact \n" + "2-Ajouter un nouveau contact \n" + "3-Quitter \n");
}
/*Creation des deux premier contact d'init*/
var contact1 = Object.create(nouveau);
var contact2 = Object.create(nouveau);

contact1.init("Carole", "Levisse", 0652331446, "C.Levisse@open.com");
contact2.init("Nelsonne", "Melodie", 0745821693, "M.Nelsonne@open.com");

/*Listes des Contact dans un Tableau*/
var ListeDesContacts = [contact1, contact2];
console.log("Bienvenue dans le Gestionnaire de contact")
    /*affiche le menu*/
afficheMenu();

/*Boucle Principal*/
choix = prompt("entrez votre choix: ");
while (choix !== "3") { /*Tant que le choix n'est pas "3"*/

    /*Si le choix est un: affiche la listes des contact*/
    if (choix === "1") {
        console.log("Vous avez " + ListeDesContacts.length + " contacts");

        for (i = 0; i < ListeDesContacts.length; i++) {
            console.log(ListeDesContacts[i]);

        } /*Redemande un choix*/
        afficheMenu();
        var choix = prompt("entrez votre choix: ");

        /*Sinon si le choix est "2" ont creer un nouveau contact*/
    } else if (choix === "2") {

        /*creer un nouveau contact*/
        var contact = Object.create(nouveau)
        contact.init(this.nom = prompt("entrez le nom du contact: "), this.prenom = prompt("entrez le prenom du contact: "), this.tel = prompt("entrez le numero du contact: "), this.mail = prompt("entrez le mail du contact: "));

        /*Ajoute le contact au tableau*/
        ListeDesContacts.push(contact);
        console.log("Un nouveau Contact a été ajoutée")

        /*Redemande un choix*/
        afficheMenu();
        var choix = prompt("entrez votre choix: ");

        /*Sinon si l'utilisateur se trompe et entre un chiffre incorrecte on redemande un choix*/
    } else if (choix < 1 || choix > 3) {
        afficheMenu();
        var choix = prompt("Erreur veuillez choisir un nombre compris entre 1 et 3: ");

        /*Sinon si le choix est 3 on quitte*/
    } else {
        console.log("Au Revoir");
        break;
    }
}