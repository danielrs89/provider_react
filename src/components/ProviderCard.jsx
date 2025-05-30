import React, { useContext } from "react";
import { Link } from "react-router-dom";
import edit from "../assets/img/edit.png";
import deleteIMG from "../assets/img/delete.png";
import mail from "../assets/img/mail.png";
import wasap from "../assets/img/wasap.png";
import { CategoryContext } from "../contexts/category.context";


function ProviderCard(Props) {
    const { categoryList } = useContext(CategoryContext);
    
    const { provider, setProvider } = Props;
    
    const HtmlCategoies = categoryList.map((category, index)=>{
        return(
            <div key={index}>
                <option value={category}>{category}</option>
            </div>
        )
    })

    // ***gestionar el formulario
  const handleSubmit = (e) => {
    // ***evita el comportamiento por defecto de los formularios
    e.preventDefault();
    console.log("Formulario enviado")
    console.log(user)
    
  }
  return (
    <>
    {/* CREATE */}
    <form onSubmit={handleSubmit}>
  <div className="card mb-3">
    <div className="card-header d-flex justify-content-between align-items-center">
      <h5 className="m-0">
        <input type="text" className="form-control" placeholder="Daniè" id="name" />
      </h5>
    </div>

    <div className="card-body">
      <h5 className="card-title">
        <input type="text" className="form-control" placeholder="C12344321" id="cif" />
      </h5>

      <p className="card-text">
        <input type="email" className="form-control" placeholder="info@ayuda.es" id="email" />
      </p>

      <p className="card-text">
        <input type="tel" className="form-control" pattern="[0-9]*" maxlength="9" placeholder="609 123 321"
          id="phone" />
      </p>

      <div className="card-text">
        <select className="form-select" id="category">
          <option selected disabled value="">...</option>
          {HtmlCategoies}
        </select>
      </div>
    </div>
  </div>
  {/* <button onClick={()=>setProviders({})} className="btn btn-primary mt-3" disabled={providerForm.invalid}> */}
  <button  className="btn btn-primary mt-3" >
    Crear
  </button>
</form>
      
      {/* UPDATE */}
      value={provider.name}

      {/* READ */}
      {/* <article>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="m-0">{provider.name}</h5>

            // Botones de acción   
            <div className="d-flex gap-2">
              <i style={{cursor: "pointer"}}>
                <img
                  src={edit}
                  alt="editar"
                  style={{ width: "16px", height: "16px" }}
                />
              </i>
              <i style={{cursor: "pointer"}}>
                <img
                  src={deleteIMG}
                  alt="borrar"
                  style={{ width: "16px", height: "16px" }}
                />
              </i>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title">{ provider.cif }</h5>
            <p className="card-text d-flex justify-content-between align-items-center">
              {provider.email}
              <a href={'mailto:' + provider.email}>
              <img
                src={mail}
                alt="mail"
                style={{ width: "22px", height: "22px" }}
              />
              </a>
            </p>
            <p className="card-text d-flex justify-content-between align-items-center">
              {provider.phone}
              <a href={'https://wa.me/+34' + provider.phone} target="_blank">
              <img
                src={wasap}
                alt="wasap"
                style={{ width: "22px", height: "22px" }}
              />
              </a>
            </p>
            <p className="card-text">{provider.category}</p>
            <Link to={"/productos"} className="btn btn-primary">
              Productos
            </Link>
          </div>
        </div>
      </article> */}
      
    </>
  );
}
// Memoización: evita re-renderizados innecesarios si las props no cambian.
export default React.memo(ProviderCard);
