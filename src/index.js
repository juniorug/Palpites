import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");
  //  0 <= palpite => 300
  const [palpite, setPalpite] = useState(150);
  //quantos palpites?
  const [totalPalpites, setTotalPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setPalpite(150);
    setTotalPalpites(1);
  };

  const menor = () => {
    setTotalPalpites(totalPalpites + 1);
    setMax(palpite);
    const proxPalpite = Math.floor((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };
  const maior = () => {
    setTotalPalpites(totalPalpites + 1);
    setMin(palpite);
    const proxPalpite = Math.ceil((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  } else if (estado === "RODANDO") {
    return (
      <div className="App">
        <h1>O seu número é {palpite}?</h1>
        <p>
          MIn: {min} / Max: {max}
        </p>
        <button onClick={menor}>Menor</button>
        <button onClick={maior}>Maior</button>
        <button onClick={acertou}>Acertou</button>
      </div>
    );
  } else if (estado === "FIM") {
    return (
      <div>
        <p>
          Parabéns?? Você acertou o numero {palpite}, com {totalPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Reiniciar</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
