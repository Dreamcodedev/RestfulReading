Demba Diop - 19/10/2021 - Lyon France

Création d'une app appelée RestfulReading, 
qui permettra aux utilisateurs de suivre les livres qu'ils sont en train de lire/qu'ils ont lus.

La classe  Book  doit contiens les champs suivants :

    title  -  string  - le titre du livre
    author  -  string  - l'auteur du livre
    description  -  string  - une description du livre
    pages  -  number  - le nombre total de pages
    currentPage  -  number  - la page où se trouve l'utilisateur actuellement (entre 1 et  pages  )
    read  -  boolean  - si l'utilisateur a lu ou non le livre (par défaut:  false  )

La classe  Book  contient la méthode instance suivante :

    readBook(page)
        permet à l'utilisateur de dire à quelle page il se trouve actuellement
        si l'argument  page  est inférieur à un ou supérieur au nombre total de pages du livre, readBook retourne  0
        si l'argument  page  est supérieur ou égal à 1 et inférieur au nombre total de pages du livre,  readBook  modifie le champ  currentPage  de l'instance pour être égal à la valeur de l'argument passé, et retourne 1
        si l'argument  page  est égal au nombre total de pages du livre,  readBook  modifie le champ  currentPage  de l'instance pour être égal à la valeur de l'argument passé, modifie le champ  read  de l'instance en  true  , et retourne  1
