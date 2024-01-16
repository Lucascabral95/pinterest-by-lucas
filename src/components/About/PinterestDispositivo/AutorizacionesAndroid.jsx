import BodyAbout from "../BodyAbout";

export default function AutorizacionesAndroid() {
    
    return(
        <div>

<BodyAbout 
titulo={"Conceder autorizaciones en Android"}
cuerpo={
    <div>

<p className="cuerpo-texto"> <a href="#" style={{ textDecoration:'underline' }}>La aplicación de Pinterest para Android</a>  requiere autorizaciones. Cuando se haya instalado la aplicación, te pediremos que concedas las autorizaciones necesarias antes de empezar a usarla. Estas autorizaciones te permiten usar la aplicación de Pinterest de una manera más sencilla.</p>
<p className="cuerpo-texto">Dependiendo de las autorizaciones que concedas, la aplicación de Pinterest tendrá acceso a lo siguiente:</p>
<ul style={{ marginLeft:"3%" }}>
  <li> <a href="#" style={{ fontWeight: 600 }}>Cámara:</a>  para que puedas tomar una foto y <a href="#" style={{ textDecoration:'underline' }}>crear Pines</a> , o descubrir ideas inspiradas en cualquier cosa que apuntes con tu cámara y <a href="#" style={{ textDecoration:'underline' }}>Lens de Pinterest</a> .</li>
  <li> <a href="#" style={{ fontWeight: 600 }}>Contactos:</a>  para sugerirte los nombres o las direcciones de correo de personas a las que quizá quieras enviarles Pines o mensajes.</li>
  <li> <a href="#" style={{ fontWeight: 600 }}>Micrófono:</a>  para que puedas usar tu micrófono para grabar audio cuando uses tu cámara para crear Pines.</li>
  <li> <a href="#" style={{ fontWeight: 600 }}>Almacenamiento:</a>  puedes usar tus propias fotos en los Pines, guardar imágenes de Pinterest en tu dispositivo y permitirnos almacenar datos en caché.</li>
  <li> <a href="#" style={{ fontWeight: 600 }}>Ubicación:</a>  de esta manera Pinterest puede proporcionarte una mejor experiencia mostrando los anuncios más relevantes.</li>
</ul>

    </div>
}
/>

        </div>
    )
}