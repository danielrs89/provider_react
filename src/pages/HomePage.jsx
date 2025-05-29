import React from 'react'
import NavComponent from '../components/NavComponent'
import loadLogo from '../assets/img/load.png'

const HomePage = () => {
  return (
  <>
  <h1>HomePage</h1>
      <div>
        <a href="#" target="_blank">
          <img src={loadLogo} className="" alt="loadLogo" />
        </a>
      </div>
      <h1>Servicios entre proveedes</h1>
      <p>
        Bienvenido/a aquí encontrás todo los relacionado con la gestión de tus
        negocios.
      </p>
    
  <NavComponent></NavComponent>
  </>

  )
}

export default HomePage