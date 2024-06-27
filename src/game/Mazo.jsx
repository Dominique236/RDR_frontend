import './Mazo.css'
import Carta from './Carta';

export default function Mazo({ jugador_info, nombre_arcano, nombre_jugador, estrellas, vidas, cartas, cartas_largo }){

  console.log('Rendering Mazo:', { jugador_info });
  return(
    <div className="mazo-div">
      <table className='mazo-table'>
          <tr>
              <td>
                {cartas_largo > 0 ? (
                  [...cartas, ...Array(10 - cartas_largo).fill({})].map((c, index) => (
                    <td key={index}>
                      {c.elementoId !== undefined ? (
                        <Carta 
                          elementoId={c.elementoId}
                          cartaId={c.cartaId}
                          nivel={c.nivel}
                        />
                      ) : (
                        <div className="carta-default-container">
                          <img id='imagen' src={`./public/assets/imgs/default_carta.png`} className="carta-default-arcano"/>
                        </div>
                      )}
                    </td>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No hay un mazo disponible</td>
                  </tr>
                )}
              </td>
              <td className="mazo-player-info-container">
                <div className="mazo-arcano-container">
                  <img src={`./public/assets/imgs/${nombre_arcano}.png`} className="mazo-arcano" />
                </div>
                <div className="mazo-player-details">
                  <div className="mazo-nombre">{nombre_jugador}</div>
                  <div className="mazo-estrellas-container">
                    <img src="./public/assets/imgs/estrella.png" className="mazo-estrella" alt="Estrella" />
                    <span className='mazo-estrellas'>{estrellas}</span>
                  </div>
                  <div className='mazo-vidas'>Vidas: {vidas}</div>
                </div>
              </td>
          </tr>
      </table>
    </div>
  )
}