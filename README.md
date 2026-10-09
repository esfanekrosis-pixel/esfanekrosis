# Le Train des Animaux

Petit jeu éducatif pour les enfants à partir de 3 ans, dessiné comme un livre d'images (traits de feutre, couleurs au crayon, papier). Un train à vapeur traverse des paysages, s'arrête dans les gares et emmène cinq animaux à la fête.

## Jouer

Ouvre `index.html` dans un navigateur. Tout tient dans ce seul fichier.

## Commandes : uniquement les flèches

| Flèche | Pendant le voyage | En gare | Sur les rails | À la fête |
|---|---|---|---|---|
| → | plus vite | choisir la carte de droite | – | encore un voyage |
| ← | doucement (frein) | choisir la carte de gauche | – | éclater un ballon |
| ↑ | sifflet « tchou tchou » | – | siffler pour pousser l'animal | feu d'artifice |
| ↓ | cloche « ding ding » | – | – | éclater un ballon |

Les autres touches ne font rien. Sur tablette, des flèches dessinées en bas à droite remplacent le clavier, et on peut aussi toucher les cartes. La flèche à utiliser clignote quand l'enfant hésite.

## Ce que l'enfant apprend

À chaque gare, un animal pose une question avec deux cartes, une à gauche et une à droite :

- **Animaux** : « Où est le cochon ? », « Qui fait meuh ? ». Les cris demandés sont seulement ceux des livres d'images (vache, cochon, mouton, poule, cheval, canard, chien, chat, grenouille, hibou, loup, lion). Le mauvais choix est toujours un animal connu, jamais un sosie (pas de chien contre loup).
- **Couleurs** : « Où est le ballon rouge ? »
- **Compter** (jusqu'à 3, puis jusqu'à 5) : « Où sont les trois pommes ? », puis la voix compte « un, deux, trois ». Après une erreur, elle compte aussi la mauvaise carte.
- **Grand et petit** : « Où est le petit chat ? »
- **Formes** (à partir du 2ᵉ voyage) : rond, carré, triangle, étoile, cœur
- **Qui mange quoi** (à partir du 3ᵉ voyage) : seulement les paires évidentes. Le lapin et la carotte, le singe et la banane, le chien et l'os, le chat et le poisson, la vache et l'herbe, la poule et les graines…
- **Gauche, droite, haut, bas**, grâce aux flèches. La voix dit « C'était à gauche ! ».

On ne peut pas perdre. Après une erreur, la voix nomme ce qui a été choisi (« Non, ça c'est le chat ») et la bonne flèche clignote. Chaque bonne réponse ajoute un souvenir sur le wagon : un ballon, une forme, un fruit.

## Rejouabilité

- 6 paysages tirés au hasard : ferme, forêt d'automne, neige, savane, plage, nuit étoilée.
- 40 animaux dessinés en entier, comme dans un album, avec pattes, queue et ombres au crayon. Ils disent leur cri, ou une petite phrase vraie pour ceux qui n'ont pas de cri connu (« J'ai un très long cou ! »). Les animaux pas encore vus sortent plus souvent, et la licorne est rare.
- Un voyage dure 2 à 3 minutes : 5 gares, des tunnels (« Coucou ! »), des ponts avec des poissons, un animal sur les rails à faire partir au sifflet, puis la fête où l'on compte les amis.

## Pour les parents

En haut à droite : l'album (animaux trouvés et nombre de bonnes réponses par thème), le son et le plein écran. L'album est enregistré sur l'appareil.

## La voix

Toutes les phrases sont enregistrées à l'avance dans `voice.js` (voix française « Pierre », Piper) et passent par le son du jeu, comme les bruitages. Elles marchent donc aussi là où le navigateur n'a pas de voix, comme l'app Claude. Il faut garder `voice.js` à côté de `index.html`. Sans lui, le jeu se rabat sur la voix du navigateur.

Si une phrase du jeu change, il faut la réenregistrer : `node outils/voix/getlines.js`, puis `python gen.py` dans `outils/voix/` (les détails sont en tête des fichiers).
