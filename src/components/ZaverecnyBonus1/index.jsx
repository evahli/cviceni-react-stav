import "./style.css"
import { useState } from "react"
/*
Zadání 1: Pomocí události `change` na vstupním políčku a vlastnosti `event.target.value` ukládej
  do stavu, co uživatel napsal.
Zadání 2: Mezi tagy `<b></b>` vlož napsaný text.
Zadání 3. V dalším odstavci `<p>` zobraz, kolik má text znaků.
Zadání 4. Poslední odstavec zobraz pouze v případě, že je text kratší než 8 znaků.
*/

export const ZaverecnyBonus1 = () => {
  const [napsano, setNapsano] = useState('')
  const zpracujHeslo = (event) => {
    setNapsano(event.target.value)
  }

  return (
    <div onChange={zpracujHeslo} className='formular'>
      <label>
        Napiš něco: <input />
      </label>
      <p>
        Do políčka výše uživatel napsal: <b>{napsano}</b>
      </p>
      <p>Počet znaků: {napsano.length}</p>
      <p>{napsano.length < 8 ?'Jako heslo by text neobstál.' :''}</p>
    </div>
  )
}
