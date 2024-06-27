import React from 'react';
import './Card.css';

export default function Card({ jugador, casillas_ad, casilla_ac, onCasillaClick }) {
    return (
        <div className='casillas'>
            <img className='casilla' id='casilla0' src={`./public/assets/imgs/${casilla_ac.tipo}.png`} alt='Casilla 0' onClick={() => onCasillaClick(0, casilla_ac.x, casilla_ac.y, jugador.id)}/>
            {casilla_ac.objeto && (
                <img className='casilla objeto' id={`${casilla_ac.objeto}0`} src={`./public/assets/imgs/${casilla_ac.objeto}.png`} alt='Objeto Casilla 0' onClick={() => onCasillaClick(0, casilla_ac.x, casilla_ac.y, jugador.id)}/>
            )}
            <img className='arcanoId' id='arcanoId0' src={`./public/assets/imgs/${jugador.arcanoId}_casilla.png`} alt='Casilla 0'/>

            <img className='casilla' id='casilla1' src={`./public/assets/imgs/${casillas_ad[0].casilla.tipo}.png`} alt='Casilla 1' onClick={() => onCasillaClick(1, casillas_ad[0].casilla.x, casillas_ad[0].casilla.y, jugador.id)}/>
            {casillas_ad[0].casilla.objeto && (
                <img className='casilla objeto' id={`${casillas_ad[0].casilla.objeto}1`} src={`./public/assets/imgs/${casillas_ad[0].casilla.objeto}.png`} alt='Objeto Casilla 1' onClick={() => onCasillaClick(1, casillas_ad[0].casilla.x, casillas_ad[0].casilla.y, jugador.id)}/>
            )}
            {casillas_ad[0].jugadorEnCasilla && casillas_ad[0].jugadorEnCasilla.arcanoId && (
                <img className='arcanoId' id='arcanoId1' src={`./public/assets/imgs/${casillas_ad[0].jugadorEnCasilla.arcanoId}_casilla.png`} alt='Casilla 0'/>
            )}

            <img className='casilla' id='casilla2' src={`./public/assets/imgs/${casillas_ad[1].casilla.tipo}.png`} alt='Casilla 2' onClick={() => onCasillaClick(2, casillas_ad[1].casilla.x, casillas_ad[1].casilla.y, jugador.id)}/>
            {casillas_ad[1].casilla.objeto && (
                <img className='casilla objeto' id={`${casillas_ad[1].casilla.objeto}2`} src={`./public/assets/imgs/${casillas_ad[1].casilla.objeto}.png`} alt='Objeto Casilla 2' onClick={() => onCasillaClick(2, casillas_ad[1].casilla.x, casillas_ad[1].casilla.y, jugador.id)}/>
            )}
            {casillas_ad[1].jugadorEnCasilla && casillas_ad[1].jugadorEnCasilla.arcanoId && (
                <img className='arcanoId' id='arcanoId2' src={`./public/assets/imgs/${casillas_ad[1].jugadorEnCasilla.arcanoId}_casilla.png`} alt='Casilla 0'/>
            )}

            <img className='casilla' id='casilla3' src={`./public/assets/imgs/${casillas_ad[2].casilla.tipo}.png`} alt='Casilla 3' onClick={() => onCasillaClick(3, casillas_ad[2].casilla.x, casillas_ad[2].casilla.y, jugador.id)}/>
            {casillas_ad[2].casilla.objeto && (
                <img className='casilla objeto' id={`${casillas_ad[2].casilla.objeto}3`} src={`./public/assets/imgs/${casillas_ad[2].casilla.objeto}.png`} alt='Objeto Casilla 3' onClick={() => onCasillaClick(3, casillas_ad[2].casilla.x, casillas_ad[2].casilla.y, jugador.id)}/>
            )}
            {casillas_ad[2].jugadorEnCasilla && casillas_ad[2].jugadorEnCasilla.arcanoId && (
                <img className='arcanoId' id='arcanoId3' src={`./public/assets/imgs/${casillas_ad[2].jugadorEnCasilla.arcanoId}_casilla.png`} alt='Casilla 0'/>
            )}

            <img className='casilla' id='casilla4' src={`./public/assets/imgs/${casillas_ad[3].casilla.tipo}.png`} alt='Casilla 4' onClick={() => onCasillaClick(4, casillas_ad[3].casilla.x, casillas_ad[3].casilla.y, jugador.id)}/>
            {casillas_ad[3].casilla.objeto && (
                <img className='casilla objeto' id={`${casillas_ad[3].casilla.objeto}4`} src={`./public/assets/imgs/${casillas_ad[3].casilla.objeto}.png`} alt='Objeto Casilla 4' onClick={() => onCasillaClick(4, casillas_ad[3].casilla.x, casillas_ad[3].casilla.y, jugador.id)}/>
            )}
            {casillas_ad[3].jugadorEnCasilla && casillas_ad[3].jugadorEnCasilla.arcanoId && (
                <img className='arcanoId' id='arcanoId4' src={`./public/assets/imgs/${casillas_ad[3].jugadorEnCasilla.arcanoId}_casilla.png`} alt='Casilla 0'/>
            )}

            <img className='casilla' id='casilla5' src={`./public/assets/imgs/${casillas_ad[4].casilla.tipo}.png`} alt='Casilla 5' onClick={() => onCasillaClick(5, casillas_ad[4].casilla.x, casillas_ad[4].casilla.y, jugador.id)}/>
            {casillas_ad[4].casilla.objeto && (
                <img className='casilla objeto' id={`${casillas_ad[4].casilla.objeto}5`} src={`./public/assets/imgs/${casillas_ad[4].casilla.objeto}.png`} alt='Objeto Casilla 5' onClick={() => onCasillaClick(5, casillas_ad[4].casilla.x, casillas_ad[4].casilla.y, jugador.id)}/>
            )}
            {casillas_ad[4].jugadorEnCasilla && casillas_ad[4].jugadorEnCasilla.arcanoId && (
                <img className='arcanoId' id='arcanoId5' src={`./public/assets/imgs/${casillas_ad[4].jugadorEnCasilla.arcanoId}_casilla.png`} alt='Casilla 0'/>
            )}

            <img className='casilla' id='casilla6' src={`./public/assets/imgs/${casillas_ad[5].casilla.tipo}.png`} alt='Casilla 6' onClick={() => onCasillaClick(6, casillas_ad[5].casilla.x, casillas_ad[5].casilla.y, jugador.id)}/>
            {casillas_ad[5].casilla.objeto && (
                <img className='casilla objeto' id={`${casillas_ad[5].casilla.objeto}6`} src={`./public/assets/imgs/${casillas_ad[5].casilla.objeto}.png`} alt='Objeto Casilla 6' onClick={() => onCasillaClick(6, casillas_ad[5].casilla.x, casillas_ad[5].casilla.y, jugador.id)}/>
            )}
            {casillas_ad[5].jugadorEnCasilla && casillas_ad[5].jugadorEnCasilla.arcanoId && (
                <img className='arcanoId' id='arcanoId6' src={`./public/assets/imgs/${casillas_ad[5].jugadorEnCasilla.arcanoId}_casilla.png`} alt='Casilla 0'/>
            )}
        </div>
    );
}
