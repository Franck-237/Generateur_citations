let citations = [
    ["Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte." ,"Winston Churchill"],
    ["La seule façon de faire du bon travail est d'aimer ce que vous faites." ,"Steve Jobs"],
    ["N'abandonnez jamais. Tout le monde a envie d'abandonner. Mais ceux qui réussissent ne le font pas.","Randy Pausch"],
    ["Le code est la poésie de l'ère numérique.","Chris Lattner"],
    ["Apprendre à programmer est comme apprendre une nouvelle langue. Il faut du temps et de la pratique pour devenir fluent." ,"John Carmack"],
    ["Si vous pouvez le programmer, vous pouvez le comprendre.","Donald Knuth"],
    ["Le problème avec les logiciels, c'est qu'ils s'usent juste au moment où vous pensez qu'ils sont neufs.","Douglas Adams"],
    ["La complexité est l'ennemi de la bonne conception.","Jeff Atwood"],
    ["Il n'y a pas de problème que la programmation ne puisse pas résoudre (mais il y a beaucoup de programmeurs qui ne peuvent pas résoudre de problème).","Edsger Dijkstra"],
    ["Les bugs sont comme les gremlins - ils se multiplient lorsqu'on les expose à la lumière.","Brian Kernighan"],
    ["Seul, on va plus vite ; ensemble, on va plus loin.","Proverbe africain"],
    ["La meilleure façon de prédire l'avenir est de le créer.","Peter Drucker"],
    ["Le partage est la clé du savoir.","Proverbe arabe"],
    ["L'open source est le développement logiciel à son meilleur.","Linus Torvalds"],
    ["Il n'y a pas de question stupide, seulement des réponses stupides.","Proverbe"],
    ["99% des bogues sont causés par des erreurs entre la chaise et le clavier.","Inconnu"],
    ["Les programmeurs sont comme les artistes : ils aiment leur travail et détestent qu'on le modifie.","Larry Wall"],
    ["La différence entre un bon et un mauvais programmeur est que le bon programmeur écrit du code que même lui peut comprendre.","Dick Brandon"],
    ["L'informatique est une science exacte, avec des résultats inexacts.","Bill Gates"],
    ["Si du premier coup ça ne marche pas, c'est que ce n'est pas du vrai Lisp.","Alan Kay"],
    ["Il y a deux types de personnes dans le monde : ceux qui comprennent le binaire et ceux qui ne le comprennent pas.","Inconnu"],
    ["Le code est comme une blague : si vous avez à l'expliquer, c'est que ce n'est pas une bonne blague.","Steve McConnell"],
    ["L'art de la programmation est l'art d'organiser la complexité.","Niklaus Wirth"]
]
let index = 0;
let nbreAleatoire = 0;

let nouvelle = document.querySelector('.btn');
let citation = document.querySelector('#citation');
let auteur = document.querySelector('#auteur');

function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

nouvelle.addEventListener('click', () => { 
    do { 
        nbreAleatoire = genererNombreEntier(citations.length);
    } while(index == nbreAleatoire);

    citation.textContent =  citations[nbreAleatoire][0];
    auteur.textContent =   citations[nbreAleatoire][1];

    index =  nbreAleatoire;
});