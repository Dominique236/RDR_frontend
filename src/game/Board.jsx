import Card from './Card'
import './Board.css'
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';
import PlayerInfo from './PlayerInfo';
import Mazo from './Mazo';
import { WaitContext } from '../wait/WaitContext';
// import { FightContext } from '../fight/FightContext';

export default function Board() {
    const { nombre } = useContext(AuthContext)
    const [players_info, setPlayers_info] = useState([]); //info de los otros jugadores
    const [jugador_info, setJugador_info] = useState([]); //info del jugador actual
    const [mensajeDado, setMensajeDado] = useState("Mira tus cartas obtenidas!");
    const [jugador, setJugador] = useState(null);
    const [otrosJugadors, setOtrosJugadors] = useState(null);
    const [casillas_ad, setCasillas] = useState(null);
    const [casilla_ac, setCasilla] = useState(null);
    const [mensajeMovimiento, setMensajeMovimiento] = useState([]);
    const { turnos, setTurnos } = useContext(WaitContext);
    const [turno_actual, setTurnoActual] = useState(null);
    const [nombre_turno_actual, setNombreTurnoActual] = useState(null);
    const [ganador, setGanador] = useState(null);
    const [cartas, setCartas] = useState([]);
    const [showEnding, setShowEnding] = useState(false); // Estado para controlar la visibilidad del pop-up de create
    const [actualizar, setActualizar] = useState(true); // Usar un estado para manejar si se debe actualizar o no
    const [showChooseOponente, setShowChooseOponente] = useState(false); // Visibilidad del pop-up de habilidad especial
    const [selectedOponent, setSelectedOponent] = useState("");
    // const { oponente, setOponente } = useContext(FightContext);

    const fetchData = () => {
        // obtenemos la info de todos los jugadores de esta partida
        console.log("Estado ganador:", ganador)
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/partidas/${nombre}`)
            .then((response) => {
                console.log('Respuesta GET partidas(nombre):', response.data);
                setPlayers_info(response.data.jugadores)
                setJugador_info(response.data.jugador)
                setTurnoActual(response.data.turno)
                setNombreTurnoActual(response.data.nombre_turno)
                if (response.data.ganador!=null) {
                    setGanador(response.data.ganador.nombre)
                }

                // Vuelve a setear turnos si un jugador se quedo sin vidas
                if (response.data.cambiar_turno) {
                    const jugadores_vivos = response.data.jugadores_vivos;
                    const nuevos_turnos = response.data.turnos;
                    console.log('jugadores vivos: ', response.data.jugadores_vivos, 'turnos: ', turnos)
                    // Verificar si jugadores_vivos están en turnos_actuales
                    const todosEnTurnos = jugadores_vivos.every(id => turnos.includes(id));
                    if (!todosEnTurnos) {
                        console.log('SET TURNOS 1')
                        setTurnos(nuevos_turnos);
                        setTurnoActual(response.data.cambio_turnoActual)
                        setNombreTurnoActual(response.data.cambio_nombreActual)
                    }
                }

                console.log('-------------------- Ganador:', ganador);
            }).catch((error) => {
                console.log(error);
            });
        // obtenemos las casillas adyacentes
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/casillas/adyacentes/${nombre}`)
            .then((response) => {
                console.log('Respuesta Casillas adyacentes 1:', response.data);
                setCasillas(response.data.casillas_adyacentes)
                setCasilla(response.data.casilla_actual)
                console.log('Variable casillas:', casillas_ad);
                console.log('Respuesta casillas actual:', casilla_ac);
                setJugador(response.data.jugador)
                // hay un jugador en alguna casilla adyacente
                // if (response.data.casillas_adyacentes[0].jugadorEnCasilla != null) {
                //     console.log("COMBATE");
                //     setOponente(response.data.casillas_adyacentes[0].jugadorEnCasilla.id)
                //     window.location.href = `${import.meta.env.VITE_BACKEND_URL}/fight`;
                // }
                // if (response.data.casillas_adyacentes[1].jugadorEnCasilla != null) {
                //     console.log("COMBATE");
                //     setOponente(response.data.casillas_adyacentes[1].jugadorEnCasilla.id)
                //     window.location.href = `${import.meta.env.VITE_BACKEND_URL}/fight`;
                // }
                // if (response.data.casillas_adyacentes[2].jugadorEnCasilla != null) {
                //     console.log("COMBATE");
                //     setOponente(response.data.casillas_adyacentes[2].jugadorEnCasilla.id)
                //     window.location.href = `${import.meta.env.VITE_BACKEND_URL}/fight`;
                // }
                // if (response.data.casillas_adyacentes[3].jugadorEnCasilla != null) {
                //     console.log("COMBATE");
                //     setOponente(response.data.casillas_adyacentes[3].jugadorEnCasilla.id)
                //     window.location.href = `${import.meta.env.VITE_BACKEND_URL}/fight`;
                // }
                // if (response.data.casillas_adyacentes[4].jugadorEnCasilla != null) {
                //     console.log("COMBATE");
                //     setOponente(response.data.casillas_adyacentes[4].jugadorEnCasilla.id)
                //     window.location.href = `${import.meta.env.VITE_BACKEND_URL}/fight`;
                // }
                // if (response.data.casillas_adyacentes[5].jugadorEnCasilla != null) {
                //     console.log("COMBATE");
                //     setOponente(response.data.casillas_adyacentes[5].jugadorEnCasilla.id)
                //     window.location.href = `${import.meta.env.VITE_BACKEND_URL}/fight`;
                // }

            }).catch((error) => {
                console.log(error);
            });
        // obtenemos cartas deljugador actual
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/cartas/find/${nombre}`)
        .then((response) => {
            setCartas(response.data.cartas)
        }).catch((error) => {
            console.log(error);
        });
    };
    
    // Asigna valores a las variables casillas_ad, casilla_ac y players_info cada 3 segundos
    useEffect(() => {
        if (actualizar) {
            console.log("Turnos useEffect: ", turnos)
            fetchData();
            const interval = setInterval(() => {
                fetchData();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [nombre, actualizar]);

    // Mostrar el pop-up cuando el estado de ganador cambia
    useEffect(() => {
        if (ganador != null) {
            // Mostrar pop-up y no actualizar mas info
            setShowEnding(true);
            setActualizar(false);
            console.log("Juego terminado, estado de ending: ", showEnding);
        }
    }, [ganador]);

    const rollTheDice = () => {
        console.log('Rolling the dice!');
        // obtenemos la info de todos los jugadores de esta partida
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/dados/${nombre}`)
            .then((response) => {
                setMensajeDado(response.data.message)
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleCasillaClick = (casillaIndex, casilla_x, casilla_y, id_jugador) => {
        console.log('Casilla clicked:', casillaIndex, 'X: ', casilla_x, "Y: ", casilla_y, "ID: ", id_jugador);
        console.log('Variables para mover. id_jugador: ',id_jugador,'casilla_x: ',casilla_x,'casilla_y: ',casilla_y,'turnos: ',turnos)
        // Aquí puedes manejar la lógica para mover al jugador
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/casillas/mover/${id_jugador}/${casilla_x}/${casilla_y}/${turnos}`)
        .then((response) => {
            console.log('Respuesta POST Movimiento exitoso:', response.data);
            setCasillas(response.data.casillas_adyacentes);
            setCasilla(response.data.casilla_actual);
            console.log('Casillas adyacentes2:', casillas_ad);
            console.log('Respuesta casillas actual2:', casilla_ac);
            setJugador(response.data.jugador);
            setMensajeMovimiento(response.data.message);
            setMensajeDado(`Te puedes mover ${response.data.jugador.dado} casillas`);
            if (response.data.turno != null){
                setTurnoActual(response.data.turno)
                setNombreTurnoActual(response.data.nombre_turno.nombre)
                setTurnos(response.data.turnos_params)
                console.log('SET TURNOS 2')
                console.log('SET TURNOS 2. Dado jugador: ', jugador.dado)
                console.log('SET TURNOS 2. turnos: ', turnos)
                console.log('SET TURNOS 2. turnos params: ', response.data.turnos_params)
            }
            // Revisa si el jugador actual gano
            if (response.data.gano) {
                setGanador(nombre)
            }
            // obtenemos las casillas adyacentes
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/casillas/adyacentes/${nombre}`)
                .then((response) => {
                    console.log('Respuesta Casillas adyacentes2:', response.data);
                    setOtrosJugadors(response.data.jugador)
                }).catch((error) => {
                    console.log(error);
                });
            // Obtenemos la info de todos los jugadores de la partida (solo si ya eligieron arcano)
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/partidas/${nombre}`)
                .then((response) => {
                    console.log('Respuesta Jugadores de la partida:', response.data);
                    setPlayers_info(response.data.jugadores)
                    setJugador_info(response.data.jugador)
                    // Vuelve a setear turnos si un jugador se quedo sin vidas
                    if (response.data.cambiar_turno) {
                        const jugadores_vivos = response.data.jugadores_vivos;
                        const nuevos_turnos = response.data.turnos;
                        console.log('jugadores vivos: ', response.data.jugadores_vivos, 'turnos: ', turnos)
                        // Verificar si jugadores_vivos están en turnos_actuales
                        const todosEnTurnos = jugadores_vivos.every(id => turnos.includes(id));
                        if (!todosEnTurnos) {
                            console.log('SET TURNOS 1')
                            setTurnos(nuevos_turnos);
                            setTurnoActual(response.data.cambio_turnoActual)
                            setNombreTurnoActual(response.data.cambio_nombreActual)
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                });
        }).catch((error) => {
            console.log('Error al mover el jugador:', error);
        });
    };

    const leaveMatch = () => {
        // Eliminamos Jugador (y Partida si este es el ultimo jugador en ella)
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/partidas/${nombre}`)
        .then((response) => {
            console.log('Respuesta eliminado Jugador/Partida:', response.data);
            window.location.href = '/usercheck';
        }).catch((error) => {
            console.log(error);
        });
    };

    const isHabilidadDisponible = (jugador) => {
        console.log("ESTE ES EL JUGADOR: ", jugador);
        if (jugador) {
            if (jugador.polvito >= 3) {
                return true;
            } else {
                return false;
            }
        }
    };

    const habilidadEspecial = () => {
        console.log('Habilidad Especial!!!');
        if (jugador.arcanoId == 1) {
            setSelectedOponent(0);
            aplicarHabilidad();
        } else {
            // mostrar pop-up
            setShowChooseOponente(true);
        }
    };

    const aplicarHabilidad = () => {
        // Aplica la habilidad al jugador seleccionado
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/jugadores/usar/habilidad/${nombre}/${selectedOponent}`)
            .then((response) => {
                setMensajeMovimiento(response.data.message)
                setJugador(response.data.jugador)
                if (jugador.arcanoId == 1) {
                    setMensajeDado(`Te puedes mover ${response.data.jugador.dado} casillas`)
                }
                // Cerrar pop-up
                setShowChooseOponente(false);
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
            <div>
                <table className="estructura-tablero-info-personajes">
                    <tbody>
                        <tr className="fila1">
                            <td className='columna-button-habilidad'>
                                <div className='habilidad-container'>
                                    <div className='dado-movimientos'>
                                        <p>{mensajeDado}</p>
                                    </div>
                                    <div className='mensaje-movimiento'>
                                        <p>{mensajeMovimiento}</p>
                                    </div>
                                    <div className='button-container'>
                                        <button className={`button-habilidad ${isHabilidadDisponible(jugador) ? 'disponible' : ''}`} disabled={!isHabilidadDisponible(jugador)} onClick={habilidadEspecial}>Habilidad Especial</button>
                                    </div>
                                </div>
                            </td>
                            <td className='casillas-columna'>
                                {casillas_ad && jugador ? (
                                    <Card 
                                        jugador={jugador}
                                        casillas_ad={casillas_ad}
                                        casilla_ac={casilla_ac}
                                        onCasillaClick={handleCasillaClick}
                                    />
                                ) : (
                                    <p>Esperando a que se carguen las casillas...</p>
                                )}
                            </td>
                            <td className='info'>
                                {players_info.length > 0 ? (
                                    players_info.map((player, index) => (
                                        <PlayerInfo 
                                            key={index}
                                            nombre={player.nombre}
                                            nombre_arcano={player.nombre_arcano}
                                            estrellas={player.estrellas} 
                                            vidas={player.vidas}
                                        /> 
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3">No hay jugadores disponibles</td>
                                    </tr>
                                )}
                                <tr>
                                    <p>Es el turno de:<br></br>{nombre_turno_actual}</p>
                                </tr>
                                <tr>
                                    <div className='button-container'>
                                        <button className='button-dado' onClick={rollTheDice}>Lanzar dado</button>
                                    </div>
                                </tr>
                            </td>
                        </tr>
                        <tr className='mazo-container'>
                            <Mazo
                                jugador_info={jugador_info}
                                nombre_arcano={jugador_info.nombre_arcano}
                                nombre_jugador={jugador_info.nombre}
                                estrellas={jugador_info.estrellas}
                                vidas={jugador_info.vidas}
                                cartas={cartas}
                                cartas_largo={cartas.length}
                            />
                        </tr>
                    </tbody>
                    <br></br>
                    <br></br>
                    <br></br>
                </table>
                <br></br>
                <br></br>
                 
                {showEnding && 
                    <div className="ending">
                        <div className="ending-content">
                            <h1>¡Game Over!</h1>
                            <div className='estrellas-container'>   
                                <h2>Ganador: { ganador } </h2>
                                <img src="./assets/imgs/estrella.png" className="estrella" alt="Estrella" /><h2>4</h2>
                            </div>
                            
                            <div className='ending-div-grande'>
                                <h2 className='ending-div'>{nombre}</h2>
                                <table>
                                    <tr>
                                        <td>
                                            <div className='estrellas-container'>
                                                <img src="./assets/imgs/estrella.png" className="estrella" alt="Estrella" />
                                                <h2 className='ending-div'>{jugador_info.estrellas}</h2>
                                            </div>
                                        </td>
                                        <td>
                                            <h2 className='ending-div'>Vidas: {jugador.vidas}</h2>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <button onClick={leaveMatch}>Salir de la Partida</button>
                            </div>                      
                        </div>
                    </div>
                    }

                {showChooseOponente && 
                <div className="ending">
                    <div className="modal-content">
                    <h2>Jugadores Disponibles</h2>
                    <p>Selecciona un jugador en el que aplicar tu habilidad especial:</p>
                    <form>
                        {players_info.map((player, index) => (
                        <label key={index}>
                            <input 
                                type="radio" 
                                name="players" 
                                value={player.id_jugador} 
                                onChange={() => setSelectedOponent(player.id_jugador)} 
                            /> 
                            {player.nombre}
                        </label>
                        ))}
                        <br /><br />
                        {selectedOponent && 
                            <button type="button" onClick={aplicarHabilidad}>Aplicar</button>
                        }
                    </form>
                    <div className="habilidad">
                        <p>{ jugador_info.descripcion_habilidad } </p>
                    </div>
                    </div>
                </div>
                }
            </div>        
    );
}
