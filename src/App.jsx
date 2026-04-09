import { useState } from "react";
import "./App.css";
import logo from "./assets/centauro.png";
import ftenis from "./assets/tenis.png";
import fcamisa from "./assets/camisa.png";
import fbola from "./assets/bola.png";

export default function App() {
  const CATEGORIA = [
    { nome: "Tenis" },
    { nome: "Gamer" },
    { nome: "Cozinha" },
  ];
  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [valor, setValor] = useState(1.0); //texto
  const [estoque, setEstoque] = useState(true); //boolean
  const [foto, setFoto] = useState("");
  const [info, setInfo] = useState("");

  const tenis = () => {
    setNome("NIKE");
    setValor(1200.0);
    setEstoque(true);
    setFoto(ftenis);
    setInfo("TENIS GIANNIS IMMORTALITY 3");
  };
  const camisa = () => {
    setNome("PUMA");
    setValor(129.);
    setEstoque(false);
    setFoto(fcamisa);
    setInfo("CAMISA PUMA DRY-FIT");
  };
  const bola = () => {
    setNome("ADIDAS");
    setValor(664.99);
    setEstoque(true);
    setFoto(fbola);
    setInfo("BOLA DE FUTEBOL TRIONDA");
  };

  return (
    <>
      <main>
        <header>
          <img src={logo} alt="Logo centauro"  />
        </header>

        <button onClick={tenis}>Tenis</button>
        <button onClick={camisa}>Camisas</button>
        <button onClick={bola}>Bola</button>

        {/* Exibe as informações do produto apenas se o nome estiver definido */}
        {nome && (
          <div className="div1">
            <img src={foto} alt=""/>
            <h2 id="inf1">{nome}</h2>
            <p id="inf2">{info}</p>
            <p id="inf3">Preço: R${valor.toFixed(2)}</p>

          {/* Exibe o status do estoque usando um emoji */}
            <p>{estoque ? "✅ Disponível" : "❌ Indisponível"}</p>
          </div>
        )}
      </main>
    </>
  );
}
