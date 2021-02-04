# Comment versionner un composant vue js ? 
### Tout d'abord il faut définir un package.son dans le dossier du composant à savoir : 
- name
- description
- version
- main (pointe vers le fichier par default)

Exemple : 
``` 
{
  "name": "first-composant",
  "version": "1.0.0",
  "description": "mon premier composant vue js",
  "main": "src/first-composant.vue",

}
```

Ensuite créer un repos git et y pusher le composant !

#### dans le dossier du composant :
- git init
- git add src/first-composant.vue package.json
- git commit -m "commitMessage"
- git remote add 'lien du repos github'
- git push

Dans le projet où vous voulez utiliser le composant -> rajouter dans le package.json : 

```
"dependencies": {
    {...},
    "first-composant": "github:Benjamin-Entropik/first-composant#main"
}
```
- lancer dans le terminal : npm install

Felicitation !! Votre composant est intégré à votre projet et vous pouvez désormais l'utiliser : 

- home.js
```javascript 
import FirstComposant from "first-composant" 

export default {
    components: {
        FirstComposant
    },
    {...}
}
```

- Home.vue
```html
<template>
    <div>
        <firstComposant />
    <div>
</template>
``` 

Et si vous avez un deuxième composant dans votre paquet il vous suffit de l'appeler ainsi 

- home.js 
```javascript
import AutreComposant from "first-composant/src/AutreComposant.vue"

export default {
    components: {
        AutreComposant
    },
    {...}
}
```

    Voilà, vous pouvez maintenant créer des paquets de composant et les mettres à jour indépendamment de votre projet.