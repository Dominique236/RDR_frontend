import React, { useContext } from 'react'
import './App.css'
import LogoutButton from '../profile/Logout'
import { AuthContext } from '../auth/AuthContext';

function App() {
  const { nombre } = useContext(AuthContext);

  return (
    <>
      <div className="logout">
        {nombre && <LogoutButton />}
      </div>
      <br></br>
      <div className="welcome">
        <h1>LightsOff</h1>
        <h3>¡Adéntrate en un mundo de estrategia y misterio!</h3>
        <h3>¿Estás listo para desafiar a tus amigos en un emocionante laberinto donde la oscuridad es tu aliada? ¡Prepárate para una experiencia de juego única, donde cada paso cuenta y cada elección importa!</h3>
        <h3>Reúne a tus amigos y prepárate para enfrentarte en un tablero lleno de sorpresas. ¿Serás el último en pie o el más astuto recolector de estrellas? ¡Descúbrelo en Lights Off!</h3>
      </div>
      <br></br>
      <div className="instructions-button">
        <a href='/instructions'>
          <button>Saber más</button>
        </a>
      </div>
    </>
  )
}

export default App;
