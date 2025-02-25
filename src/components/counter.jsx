import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Valeur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
};

export default Counter;

/*
function useState(valeurInitiale) {
    let valeur = valeurInitiale; //On initialise la valeur du state selon le paramètre donné à l'appel de "useState"

    //Ensuite, on déclare une fonction (setter) pour la mettre à jour
    function setValeur(nouvelleValeur) {
      valeur = nouvelleValeur; //On met à jour la valeur du state
      reRenderComponent(); //On demande à React de mettre à jour notre composant
    }
    return [valeur, setValeur]; //On renvoie notre tableau composé du state (valeur) et du setter (setValeur)
  }
*/