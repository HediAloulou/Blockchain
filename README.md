## :moneybag: PROJET DE DONATION SUR BLOCKCHAIN AVEC GANACHE

### :globe_with_meridians: Introduction
<p>Dans le cadre de ce projet, nous avons utilisé Ganache pour simuler un environnement blockchain permettant de faciliter les dons effectués par des organisations en faveur des pays souffrant de famine. Nous avons également développé une interface web pour gérer efficacement ce processus.</p>

### :dart: Objectif du projet

**1. Faciliter les donations internationales :**  
Simplifier et accélérer le processus de dons entre les organisations et les pays dans le besoin.

**2. Assurer la transparence des transactions :**  
Utiliser Ganache pour simuler une blockchain publique, garantissant une traçabilité complète des fonds, depuis leur source jusqu'à leur utilisation.

**3. Renforcer la confiance des donateurs :**  
Offrir une visibilité sur l’utilisation des donations grâce à des transactions immuables et publiques.

**4. Automatiser la gestion des donations :**  
Développer une interface web intuitive pour enregistrer, suivre et gérer les contributions des organisations.

**5. Réduire les coûts administratifs :**  
Éliminer les intermédiaires coûteux grâce à une plateforme décentralisée et sécurisée.

### :computer: Installation

#### Prérequis pour Ganache
##### Vérifiez que Node.js et npm sont installés sur une machine Linux
```bash
node -v
npm -v
```
##### Installation de Ganache 
```bash
npm install -g ganache
```

##### Lancement du Ganache 
```bash
./ganache-2.7.1-linux-x86_64.AppImage
```
##### Lancement du Ganache 
```bash
./ganache-2.7.1-linux-x86_64.AppImage
```

#### Configuration du truffle
```bash
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",   
      port: 7545,          
      network_id: "*"      
    }
  }
};
```
#### Configuration du MetaMask
<h5>On a crée deux compte:
.Le premier compte est le client (donor)
  
.Le deuxieme compte est le serveur</h5>
