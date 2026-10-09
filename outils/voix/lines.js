// Injected into the game page by getlines.js: builds the list of speech pieces from the game data.
// Keep it in step with the say() calls in index.html (each piece is a part between two |).
window.__lines = function () {
  const L = new Set(), add = (...t) => t.forEach(x => x.split('|').forEach(p => { const k = vkey(p); if (k) L.add(k); }));
  const FL = '|Flèche de gauche, ou flèche de droite ?', OTHER = '|Essaie de l’autre côté !';
  add('C’est parti !', 'Appuie sur la flèche de droite pour aller plus vite !', 'La flèche du haut, c’est le sifflet !', FL, OTHER,
    'Oh !', 'est sur les rails !', 'Siffle avec la flèche du haut !', 'Bravo !', 'Miam !', 'Merci !', 'C’était à gauche !', 'C’était à droite !',
    'Tout le monde est là ! En route pour la fête !', 'Youpi, c’est la fête !', 'Plus vite !', 'Vroum !', 'Tchou tchou !', 'Doucement…',
    'La flèche du haut !', 'Il fait tout noir !', 'Coucou !', 'Mystère ! Pars en voyage pour le trouver.', 'Coucou ! Tu m’entends ?',
    'a faim !', 'Qu’est-ce qu’il mange ?', 'Qu’est-ce qu’elle mange ?');
  for (const b of BIOMES) add(b.label);
  for (let n = 1; n <= 5; n++) add(NUM[n], `${NUM[n]} amis dans le train !`);
  for (let m = 2; m <= 5; m++) add(`On compte : ${NUM.slice(1, m + 1).join(', ')}.`, NUM.slice(1, m + 1).join(', ') + ' !');
  for (const a of ANIMALS) {
    add(a.n, talk(a), `Où est ${low(a.n)} ?`, `C’est ${low(a.n)} !`, `Non, ça c’est ${low(a.n)}.`);
    const art = a.f ? 'la' : 'le', g = a.f ? 'grande' : 'grand', p = a.f ? 'petite' : 'petit';
    for (const sz of [g, p]) add(`Où est ${art} ${sz} ${a.noun} ?`, `Non, ça c’est ${art} ${sz} ${a.noun}.`);
    if (a.s) add(`Qui fait ${a.s.replace(/ !$/, '')} ?`);
  }
  for (const c of COLORS) add(`veut le ballon ${c.name}.`, `Où est le ballon ${c.name} ?`, `Non, ça c’est le ballon ${c.name}.`);
  for (const k in SHAPES) add(`cherche ${SHAPES[k]}.`, `Où est ${SHAPES[k]} ?`, `Non, ça c’est ${SHAPES[k]}.`);
  for (const food of COUNTABLE) {
    const F = FOODS[food], word = k => k === 1 ? `${F.f ? 'une seule' : 'un seul'} ${F.sg}` : `${NUM[k]} ${F.pl}`;
    for (let n = 1; n <= 5; n++) add(`veut ${word(n)}.`, `Où sont les ${word(n)} ?`, `Non, là il y a ${word(n)}.`);
  }
  for (const f in FOODS) { add(`Non, ça c’est ${FOODS[f].art}.`); if (FOODS[f].love) add(`adore ${FOODS[f].love} !`); }
  return [...L];
};
