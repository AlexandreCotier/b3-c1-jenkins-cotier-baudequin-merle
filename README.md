# Calculette
Simple calculatrice en NodeJS développé dans le cadre de l'EPSI, le but étant
de se focaliser sur les tests unitaires.
### Installation et utilisation
Une fois le projet téléchargé, lancez la commande 
```
npm install
```
Pour utiliser la calculatrice entrez la commande
```
npm run calculator
```
Pour lancer les tests unitaires, entrez la commande
```
npm run test
```
## Plan de tests

# Users storys implémentées en BDD

 * L'utilisateur entre 4 en premier chiffre, puis 2 en second chiffre et choisit l'opérateur +, il aura pour résultat 6
 * L'utilisateur entre 4 en premier chiffre, puis 2.1 en second chiffre et choisit l'opérateur +, il aura pour résultat 6.1
 * L'utilisateur entre 4.8 en premier chiffre, puis 2.5 en second chiffre et choisit l'opérateur +, il aura pour résultat 7.3

 * L'utilisateur entre 2 en premier chiffre, puis 4 en second chiffre et choisit l'opérateur *, il aura pour résultat 8
 * L'utilisateur entre 2.2 en premier chiffre, puis 4 en second chiffre et choisit l'opérateur *, il aura pour résultat 8.8
 * L'utilisateur entre 2 en premier chiffre, puis 4.3 en second chiffre et choisit l'opérateur *, il aura pour résultat 8.6

 * L'utilisateur entre 6 en premier chiffre, puis 4 en second chiffre et choisit l'opérateur -, il aura pour résultat 2

 * L'utilisateur entre 6 en premier chiffre, puis 2 en second chiffre et choisit l'opérateur /, il aura pour résultat 3
 * L'utilisateur entre 145.2 en premier chiffre, puis 12.1 en second chiffre et choisit l'opérateur /, il aura pour résultat 12
 * L'utilisateur entre 10 en premier chiffre, puis 3 en second chiffre et choisit l'opérateur /, il aura pour résultat 3.3333333333333335
