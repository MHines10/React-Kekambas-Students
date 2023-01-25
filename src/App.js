import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import KekStudents from './components/KekStudents';

function App() {

  const [kekambas, setKekambas] = useState([]);

  useEffect(() => {
    fetch('https://scratched-juniper-salto.glitch.me/kekambas')
      .then(res => res.json())
      .then(data => setKekambas(data));
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="text-center m-3 mb-5 text-light">Kekambas Students</h1>
        <KekStudents kekambas={kekambas} />
      </div>
    </>
  );
}

export default App;
