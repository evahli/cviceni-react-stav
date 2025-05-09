import './style.css';
import { useState } from 'react';
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [stav1, setStav1] = useState(0);
  const [stav2, setStav2] = useState(0);
  const handleChange1 = (event) => {
    setStav1(Number(event.target.value));
  };
  const handleChange2 = (event) => {
    setStav2(Number(event.target.value));
  };
  const soucet = stav1 + stav2;
  return (
    <div className="bonus4">
      <input onChange={handleChange1} type="number" defaultValue={stav1} /> +{' '}
      <input onChange={handleChange2} type="number" defaultValue={stav2} /> ={' '}
      <output>{soucet}</output>
    </div>
  );
};
