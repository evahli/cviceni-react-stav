/*
Zadání 1: Převeďte `cislo` na stavovou proměnnou.
Zadání 2: Zařiďte, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku,
  vynulovat nastavovalo na nulu apod.
*/
import { useState } from 'react';

const Pocitadlo = () => {
  const [vypocet, setVypocet] = useState(0);
  
  return (
    <>
      <h3>Počítadlo: {vypocet}</h3>
      <div>
        <button onClick={() => setVypocet(vypocet - 5)}>-5</button>
        <button onClick={() => setVypocet(vypocet -1)}>-1</button>
        <button onClick={() => setVypocet(0)}>vynulovat</button>
        <button onClick={() => setVypocet(vypocet +1)}>+1</button>
        <button onClick={() => setVypocet(vypocet + 5)}>+5</button>
      </div>
    </>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <Pocitadlo />
      <Pocitadlo />
    </>
  );
};
