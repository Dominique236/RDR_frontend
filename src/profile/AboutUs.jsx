import './AboutUs.css'

export default function UserWelcome() {

    return (
        <>
            <h2>Nosotros</h2>
            <p>Somos alumnos de Ingeniería Civil en la Pontificia Universidad Católica de Chile y este es nuestro proyecto del ramo Tecnologias y Aplicaciones Web.</p>
            
            <table className="about-us-table">
                <tr className="nombres">
                    <th>Domi</th>
                    <th>Rodri</th>
                    <th>Romi</th>   
                </tr>
                <tr>
                    <td className="domi">
                        <p>Soy Dominique Soto alumno de cuarto año.</p>
                        <p>Tengo Major en Computación y Sistemas de </p>
                        <p>Información y Minor en Ingeniería Industrial.</p>
                    </td>
                    <td className="rodri">
                        <p>Soy Rodrigo de la Fuente alumno de cuarto año.</p>
                        <p>Tengo Major en Computación y Sistemas de </p>
                        <p>Información y Minor en Ingeniería Industrial.</p>
                        <p></p>
                    </td>
                    <td className="romi">
                        <p>Soy Romina Benavides alumno de cuarto año.</p>
                        <p>Tengo Major en Computación y Sistemas de </p>
                        <p>Información y Minor en Ingeniería Industrial.</p>
                    </td>
                </tr>
            </table>
            <p>Te invitamos a jugar nuestro juego Lights Off!</p>
            <a href='/'>Volver</a>
        </>
    )
}