import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.scss'

function App() {
  const [active, setActive] = useState(1)
  const [inputSelect, setInputSelect] = useState(false)

  const handleClick = (id) => {
    setActive(id)
  }

  const ampliarInput = () => {
    setInputSelect(true)
  }

  const estilosActive = {
    backgroundColor: "black",
    borderRadius: "20px"
  }

  useEffect(() => {
  }, []); 


  return (
    <div className='container-fluid pinterest-navbar'>
      {/* <h1> Pinterest </h1> */}

      <div className="contenedor-navbar">

        <div className="categorias">
          <Link className="categoria-logo"
            title='Logo'>
            <div className="contenedor-categoria">
              <img src="/img/logo-pinterest.png" alt="Logo de Pinterest" />
            </div>
          </Link>
          <Link className="categoria-inicio" onClick={() => handleClick(1)} title='Inicio'
            style={active === 1 ? estilosActive : null} >
            <div className="contenedor-categoria">
              <p style={{ color: active === 1 ? "white" : "black" }}> Inicio </p>
            </div>
          </Link>
          <Link className="categoria-explorar" onClick={() => handleClick(2)} title='Explorar'
            style={active === 2 ? estilosActive : null}>
            <div className="contenedor-categoria">
              <p style={{ color: active === 2 ? "white" : "black" }}> Explorar</p>
            </div>
          </Link>
          <Link className="categoria-crear" onClick={() => handleClick(3)} title='Crear'
            style={active === 3 ? estilosActive : null}>
            <div className="contenedor-categoria">
              <p style={{ color: active === 3 ? "white" : "black" }}> Crear </p>
            </div>
          </Link>
        </div>

        <div className="buscador form-group" onClick={ampliarInput} >
          <div className="buscador-lupa form-control">
            <svg style={{ display: inputSelect ? "none" : "block" }} className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24" fill="#666666">
              </path>
            </svg>
            <input type="text" name="buscador" className='form-control' id="buscador" placeholder='Buscar' />
          </div>
        </div>

        <div className="opciones">
          <Link className="opciones-notificacion"
            title='Notificiones'
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z" fill="#666666">
                </path>
              </svg>
            </div>
          </Link>

          <Link className="opciones-mensaje"
            title='Mensajes'
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0" fill="#666666">
                </path>
              </svg>
            </div>
          </Link>

          <Link className="opciones-perfil"
            title='Tu perfil'
          >
            <div>
              <img src="/img/spyro.png" alt="Foto de perfil" />
            </div>
          </Link>

          <Link className="opciones-datos"
            title='Tu cuenta y mas opciones'
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path
                  d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" fill="#666666">
                </path>
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default App
