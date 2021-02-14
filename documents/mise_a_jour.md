# AMÉLIORER todolist 

- RAJOUTER LES MIDDLEWARES POUR VÉRIFIER LES ROLES 

- RAJOUTER GRAPHQL POUR LES REQUETES BACK-END -> FAIRE UN CRUD USERS EN GRAPHQL

- RAJOUTER LE SYSTEME DE LANGUAGE 

- AMELIORER L'UTILISATION DE VUEX 

- AMELIORER LE RESET DE MOT DE PASSE

- AMELIORER L'INTERFACE 

- BIEN DOCUMENTER LE BOILERPLATE 

- AMÉLIORER LES DOCKERFILES ET LE DOCKER-COMPOSE

- AMELIORER LE LOGIN ET LE REGISTER 

- RAJOUTER LE VERSIONNING DES COMPOSANTS DE BASE 

Realiser des composants vue pour npm : https://fr.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html

### RAJOUTER LES MIDDLEWARES POUR VÉRIFIER LES ROLES 

    Il est vrai que la vérification des roles se fait côté vue js mais pour rajouter un plus de sécurité, pourquoi ne pas rajouter des middlewares pour filtrer directement les requêtes entrant dans l'application ?


 ### RAJOUTER GRAPHQL 

    Pour que le boilerplate possède la possibilité d'utiliser api REST mais aussi GraphQL pour les requêtes qui peut être un meilleur choix sur certain point (nottament si le projet et sa structure de donnée font appel à de nombreuses requêtes).

### RAJOUTER LE SYSTEME DE LANGUAGE 

    C'est secondaire mais vue que la plupart des boilerplates le propose je suppose que ça ne nous ferais pas de mal d'inclure la possibilité de switcher de langue

### AMELIORER L'UTILISATION DE VUEX 

    Pour l'instant vuex est utiliser pour la gestion du drawer, de la pagination et l'obtention des users mais je pense que l'on peut aller plus loin en incluant un crud complet géré par vuex pour optimiser la circulation des données et réduire le nombre de requête.

### AMELIORER LE RESET DE MOT DE PASSE

    Pas encore au point tout simplement..
- s'inspirer de https://github.com/AnowarCST/laravel-vue-crud-starter.git.

### AMELIORER L'INTERFACE

    Depuis les dernières modifications de todolist, il y a eu du nouveau du côté de vuetify et je pense que l'on pourrai rajouter ou modifier certain composant vuetify pour améliorer l'ux.

### AMÉLIORER LES DOCKERFILES ET LE DOCKER-COMPOSE

    Il reste quelques bugs à corriger comme par exemple le "npm run watch" qui fait des caprices parfois.
    Rajouter le protocole https.

### AMELIORER LE LOGIN ET LE REGISTER 

    En incluant tout ce qu'on a appris avec Bruno pour optimiser la sécurité de notre boilerplate. 

### RAJOUTER LE VERSIONNING DES COMPOSANTS DE BASE 

- Voir le tuto versionner_composant.md
