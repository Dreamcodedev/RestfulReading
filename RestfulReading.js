/*
===================Demba Diop=====19/10/2021=================Lyon-France
Création d'une app appelée RestfulReading, 
qui permettra aux utilisateurs de suivre les livres qu'ils sont en train de lire/qu'ils ont lus.
*/
class Book {
    constructor(title,author,description,pages,currentPage,read){
        this.title=title;
        this.author=author;
        this.description=description;
        this.pages=pages;
        this.currentPage=currentPage;
        this.read=read;
    }
    // permet à l'utilisateur de dire à quelle page il se trouve actuellement
    readBook(page){

        //si l'argument  page  est inférieur à un ou supérieur au nombre total de pages du livre, 
        // readBook retourne  0
        if(page<1 || page >this.pages){
            return 0;
        }

        //si l'argument  page  est supérieur ou égal à 1 et inférieur au nombre total de pages du livre,  
        //readBook  modifie le champ  currentPage  de l'instance pour être égal à la valeur de l'argument passé, 
        //et retourne 1
        else if(page >1 && page <this.pages){
            this.currentPage = page;
            return 1;
        }

        //si l'argument  page  est égal au nombre total de pages du livre, 
        // readBook  modifie le champ  currentPage  de l'instance pour être égal à la valeur de l'argument passé, 
        //modifie le champ  read  de l'instance en  true  , et retourne  1
        else {
            this.currentPage = page;
            this.read=true;
            return 1;
        }
    }
}

//Création  d'au moins trois instances (livres)
let livrePremier = new Book("L'aventure Ambigu","Cheikh Hamidou Kane","La vie d'un jeune sénégalais",160, 5,false);
let livreSecond = new Book("Une si longue lettre","Mariame Ba","hisoire d'une femme sénégalaise",167, 1,false);
let livrePTroisieme = new Book("Mission spéciale","Kwassi Koranteng","Insmecteur dans les champs de mine",185, 9,false);

// Stockage des livres dans un tableau
let books =[livrePremier,livreSecond, livreSecond]