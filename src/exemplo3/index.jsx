import { useEffect, useState } from "react";

export default function App() {
  
  const [buscar,setBuscar] = useState([]);

  useEffect(() => { 
    const buscarUsuario = async () => {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setBuscar(dados);
    }
  buscarUsuario();
  }, []);//complete o código);

  return (
    <>
      <h1>Usuario</h1>
      <ul>
        {buscar.map(usuario => (
          <li key={usuario.userId}>
          <h2>{usuario.id}</h2>
          <p>{usuario.title}</p>
          <p>{usuario.completed}</p>
</li>
        ))}
      </ul>
    </>
  );
}
