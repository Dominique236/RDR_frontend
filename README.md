# RDR_frontend

### Entrega 3 :sparkles:
Los archivos necesarios para esta entrega se encuentran en sus respectivas carpetas, según su repositorio (backend o frontend). Se encuentra implementada la página conectando ```frontend```: y ```backend```:, de manera que es interactiva y se pueden ver las consultas realizadas de manera visual. 

- ```MockUps```: Los mockups de la vista del usuario se encuentran en Figma. Se puede acceder mediante el siguiente link: https://www.figma.com/design/uoKnuMuD3B2lFFRiNNaiZL/Mockups-Proyecto-Web-Entrega-3?node-id=0-1&t=Le91jWQyVkspVwxI-1
- ```Diagrama ER```: El diagrama ER se mantuvo igual con respecto a la Entrega 2. Por lo tanto, se puede encontrar en la carpeta ```docs``` del repositorio ```RDR_backend```.
- ```Imágenes```: Las imágenes utilizadas en la vista de la página, se pueden encontrar en  ```src/assets/imgs``` en el repositorio ```RDR_frontend```.

#### Endpoints 
Los endpoints utilizados en la vista de la página para esta entrega son los siguientes:

##### Arcanos
- ```GET``` http://localhost:3000/arcanos
Entrega la información de todos los arcanos. Se puede ver visualmente en la página al seleccionar el arcano con el que se quiere jugar. Esto se puede ver en la vista ```/choose```. 
##### Authentication
- ```POST``` http://localhost:3000/authentication/signup
Para registrarse como nuevo usuario. Verifica que el correo y nombre de cada usuario sea único. Esto se puede ver en la vista ```/signup```. 
- ```POST``` http://localhost:3000/authentication/login
Para iniciar sesión luego de registrarse previamente. Esto se puede ver en la vista ```/login```. 
##### Casillas
- ```GET``` http://localhost:3000/casillas/adyacentes/:nombre
Entrega la información del jugador, la casilla en la que se encuentra y las adyacentes (las que puede ver). Esto se puede ver en la vista ```/board```. 
##### Dados
- ```POST``` http://localhost:3000/dados/:nombre
Lanza el dado entregando la cantidad de movimientos que tiene el jugador y respeta las validaciones de la entrega anterior. Esto se puede ver en la vista ```/board```.
##### Esperas
- ```POST``` http://localhost:3000/esperas/:nombre
Crea una sala de espera y un usuarioEspera a partir del nombre del jugador que crea una sala. Esto se puede ver en la vista ```/wait```.
- ```GET``` http://localhost:3000/esperas/:codigo/:nombre
Crea un usuarioEspera y lo añade a la sala de espera ya existente según el código entregado. Esto se puede ver en la vista ```/wait```.
- ```GET``` http://localhost:3000/esperas/:nombre
Crea un usuarioEspera a partir del nombre del jugador y lo agrega a una sala ya existente de manera aleatoria. Si no hay ninguna sala creada, se crea una para agregar al jugador. Esto se puede ver en la vista ```/wait```.
- ```DELETE``` http://localhost:3000/esperas/:nombre
Elimina la sala de espera y el usuarioEspera a partir del nombre del jugador. Esto ocurre en la vista ```/choose```, pero no se puede visualizar, ya que representa que el jugador empezó la partida y abandonó la sala de espera.
##### Jugadores
- ```POST``` http://localhost:3000/jugadores/:nombre/:partida_id/:arcano_id
Crea un jugador nuevo y lo asigna a una partida según el nombre del usuario, el id de la partida y el id del arcano que elige en la vista ```/choose```.
##### Partidas
- ```POST``` http://localhost:3000/partidas/
Crear una partida, según los datos necesarios entregados en el body y crea las casillas correspondientes a ella (tablero). Esto ocurre en la vista ```/choose```, pero se puede visualizar el tablero en ```/board```.
- ```GET``` http://localhost:3000/partidas/:nombre
Obtiene todos los jugadores de una partida, segun el nombre de un usuario de ella. Esto se puede ver en la vista ```/board```.
##### Usuarios
- ```GET``` http://localhost:3000/usuarios
Entrega la información de todos los usuarios. Esto se utiliza en la vista de ```/usercheck``` para mostrar el ranking. 