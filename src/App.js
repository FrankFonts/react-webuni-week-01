import * as React from 'react';
import Recipe from './Recipe';
import './index.css';

const recipes = [
  {
    id: 1,
    name: 'Rántotta',
    ingredients: ['2 tojás', 'egy csipet só'],
    instructions: 'Feltörjük, megsütjük, finom lesz.',
    difficulty: 3,
  },
  {
    id: 2,
    name: 'Vajas kenyér',
    ingredients: ['1 szelet kenyér', '50 gramm vaj'],
    instructions: 'Vajat rákenjük a kenyérre (és nem fordítva).',
    difficulty: 2,
  },
  {
    id: 3,
    name: 'Gombapaprikás',
    ingredients: [
      '400 g laska gomba',
      '1 fej fokhagyma',
      '2 közepes paradicsom',
      '1 paprika',
      '1 csapott evőkanál pirospaprika',
      '2 kanál tejföl',
    ],
    instructions:
      'Mindent aprítunk, a laskát kézzel tépjük csíkokra. Fokhagymát, paradicsomot, paprikát szottyasztjuk, rádobjuk a gombát, kicsit lepirítjuk. Pirospaprikát elkeverjük benne, felöntjük forró vízzel. 10-15 percig közepes lángon főzzük. Ízlés szerint egy adag tejföllel tálaljuk.',
    difficulty: 5,
  },
];

export default function App() {
  return (
    <div>
      <h1>Recipes</h1>

      {recipes.map((recipe) => {
        return <Recipe key={recipe['id']} recipe={recipe} />;
      })}
    </div>
  );
}
