# Présentation de la promotion développeur.ses avancé.es web et mobile de la Wild Code School Lyon 2021/2022

## Comment ajouter un.e élève ?

1. Ouvrir le fichier [promo.js](./data/promo.js)
2. Ajouter une entrée après la dernière `},`.

   L'entrée est de la forme suivante :

```js
  {
  name: 'Jean Michel',
  stack: [ICONS.JS, ICONS.JAVA],
  github: 'Url du profil Github',
  cv: 'Url vers le fichier du C.V',
  mail: 'johndoe@tonmail.com',
  portrait: 'Url vers la photo de l\'éléve',
},
```

### Partie `stack`

Les logos possibles pour la partie stack sont : JS, JAVA, PHP, REACT, SYMFONY, NODE.

##### Ajouter des logos

Aller dans le fichier [./icons/index.js](./icons/index.js) pour ajouter une entrée dans l'objet `ICONS`.
La valeur de l'entrée json correspond au nom d'un icon provenant de la librairie `font-awesome`.

---

## Essential commands

### Pour développer en local

> `yarn dev`

### Pour envoyer les modifications de données

> `yarn deploy`

Cette commande génère les fichiers statiques, crée un commit sur sur la branche main puis envoie le tout vers l'origine github
