/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/
import { useState } from 'react';

export const Uloha8 = () => {
  const [mozna, setMozna] = useState('mozna');
  const onClick = () => {
    if (mozna === 'mozna') {
      setMozna('ano');
    } else if (mozna === 'ano') {
      setMozna('ne');
    } else if (mozna === 'ne') {
      setMozna('mozna');
    }
  };
  return (
    <>
      <h3>Prší v Brně: {mozna}</h3>
      <button onClick={onClick}>změnit</button>
    </>
  );
};
