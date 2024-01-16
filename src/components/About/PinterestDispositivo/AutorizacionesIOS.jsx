import BodyAbout from "../BodyAbout";

export default function AutorizacionesIOS() {
    
    return(
        <div>

<BodyAbout 
titulo={"Concede las autorizaciones en iOS"}
cuerpo={
    <div>

<p className="cuerpo-texto">La <a href="#" style={{ textDecoration:'underline' }}>aplicación de Pinterest para iOS</a> requiere autorizaciones. Cuando se haya instalado la aplicación, te pediremos que concedas las autorizaciones necesarias antes de empezar a usarla. Estas autorizaciones te permiten usar la aplicación de Pinterest de una manera más sencilla.</p>
<p className="cuerpo-texto">Puedes controlar los accesos de Pinterest en la configuración de tu dispositivo, luego desplázate hacia abajo y selecciona Pinterest para abrir la configuración de la aplicación.</p>
<p className="cuerpo-texto">Dependiendo de las autorizaciones que concedas, la aplicación de Pinterest tendrá acceso a lo siguiente:</p>
<ul style={{ marginLeft:"3%" }}>
    <li><a href="#" style={{ fontWeight: 600 }}>Ubicación:</a> de esta manera Pinterest puede ofrecerte una mejor experiencia mostrando los anuncios más relevantes.</li>
    <li><a href="#" style={{ fontWeight: 600 }}>Fotos:</a> para que puedas subir fotos y videos desde tu biblioteca de fotos para <a href="#" style={{ textDecoration:'underline' }}>crear Pines</a> .</li>
    <li><a href="#" style={{ fontWeight: 600 }}>Red local:</a> para que puedas conectarte a una red de Internet cercana para usar la aplicación de Pinterest.</li>
    <li><a href="#" style={{ fontWeight: 600 }}>Micrófono:</a> para que puedas usar tu micrófono para grabar audio cuando uses tu cámara para crear Pines.</li>
    <li><a href="#" style={{ fontWeight: 600 }}>Cámara:</a> para que puedas tomar una foto o video y crear Pines o descubrir ideas inspiradas en cualquier cosa que apuntes con tu cámara y <a href="#" style={{ textDecoration:'underline' }}>Lens de Pinterest</a> .</li>
    <li><a href="#" style={{ fontWeight: 600 }}>ri y búsqueda:</a>Si para permitir que Siri aprenda cómo usas Pinterest para hacer sugerencias entre las aplicaciones y permitir que te aparezcan sugerencias y contenido de Pinterest en Pantalla de inicio Búsquedas  Buscar.</li>
    <li><a href="#" style={{ fontWeight: 600 }}>Notificaciones</a>, para que la aplicación pueda enviarte <a href="#" style={{ textDecoration:'underline' }}>notificaciones push</a>  sobre tu actividad en Pinterest</li>
    <li><a href="#" style={{ fontWeight: 600 }}>Datos móviles:</a> para que puedas conectarte a una red móvil cuando no estés cerca de una red de Internet para usar la aplicación de Pinterest.</li>
</ul>

    </div>
}
/>

        </div>
    )
}