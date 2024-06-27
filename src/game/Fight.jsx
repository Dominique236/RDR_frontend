import './Fight.css'
import { FightContext } from '../fight/FightContext';
import Mazo from './Mazo';
import PlayerInfo from './PlayerInfo';
import { AuthContext } from '../auth/AuthContext';

export default function Fight() {
    const { oponente, setOponente } = useContext(FightContext);
    const { nombre } = useContext(AuthContext)
    const [cartas_j, setCartasJ] = useState([]);
    const [cartas_o, setCartasO] = useState([]);
    const [nombre_oponente, setNombreOponente] = useState([]);
    const [jugador_info, setJugador_info] = useState([]); //info del jugador actual
    const [players_info, setPlayers_info] = useState([]); //info de los otros jugadores
    console.log('Rendering Fight page:', { jugador, oponente });

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/cartas/find/${nombre}`)
        .then((response) => {
            setCartasJ(response.data.cartas)
        }).catch((error) => {
            console.log(error);
        });
    
    // oponente = id (jugador) del oponente   
    // axios.get(`${import.meta.env.VITE_BACKEND_URL}/jugadores/find/${nombre}/${oponente}`)
    //     .then((response) => {
    //         setPlayers_info(response.data.oponente)
    //         setJugador_info(response.data.jugador)
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    
    
    return (
        <div className="fight-container">
        <table className='estructura'>
            <tbody>
            <tr className="fila1">
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
                </td>
            </tr>
            <tr className='mazo-container'>
                <Mazo
                    jugador_info={jugador_info}
                    nombre_arcano={jugador_info.nombre_arcano}
                    nombre_jugador={nombre}
                    estrellas={jugador_info.estrellas}
                    vidas={jugador_info.vidas}
                    cartas={cartas}
                    cartas_largo={cartas.length}
                />
            </tr>
            </tbody>
        </table>
        </div>
    );
}
