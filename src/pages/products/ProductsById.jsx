import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { ProductContext } from "../../contexts/product.context";

import loadLogo from "../../assets/img/icons/load.png";
import edit from "../../assets/img/icons/edit.png";
import deleteIMG from "../../assets/img/icons/delete.png";
const ProductsById = () => {
  const { id } = useParams();
  const { products, setProducts, error, getProviders , getProductById } =
    useContext(ProductContext);

  useEffect(() => {
    getProviders()
    getProductById(id);
  }, [id]);

  const HTMLGetProductsById = products.map((product, index) => {
    return (
      <article key={index}>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="m-0">{product?.name_product}</h5>

            {/* // Botones de acción    */}
            <div className="d-flex gap-2">
              <Link to={`/proveedores/editar/${product?.id_product}`}>
                <img
                  src={edit}
                  alt="editar"
                  style={{ width: "16px", height: "16px" }}
                />
              </Link>
              <i style={{ cursor: "pointer" }}>
                <img
                  src={deleteIMG}
                  alt="borrar"
                  style={{ width: "16px", height: "16px" }}
                  onClick={() => handleDelete(product?.id_product)}
                />
              </i>
            </div>
          </div>

          <div className="card-body">
            <p className="card-text ">{product?.description_product}</p>
            <p className="card-text">{product?.unit_product} Unidades</p>
            <p className="card-text">{product?.price_product} €/ud</p>

            <Link to={"/ventas"} className="btn btn-primary">
              Ventas
            </Link>
          </div>
        </div>
      </article>
    );
  });

  return (
    <>
      {/* Cabecera retorno menu */}
      <div className="d-flex align-items-center gap-4">
        <Link to={"/"}>
          <img src={loadLogo} alt="loadLogo" />
        </Link>
        <div className="d-flex flex-column justify-content-center">
          <h1>Productos</h1>
        </div>
      </div>
      <br />
      <section>
        {error ? (
          // ESTADO DE ERROR si API falla
          <h2>Error inesperado</h2>
        ) : (
          <>
            <Link
              to={"/productos/crear"}
              type="button"
              className="btn btn-outline-success m-3"
            >
              Añadir
            </Link>
            {/* READ */}
            {HTMLGetProductsById}
          </>
        )}
      </section>
    </>
  );
};

export default ProductsById;
