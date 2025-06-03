import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loadLogo from "../../assets/img/icons/load.png";
import { ProviderContext } from "../../contexts/provider.context";
import { CategoryContext } from "../../contexts/category.context";

const ProviderCreatePage = () => {
  const navigate = useNavigate();

  const { categoryList } = useContext(CategoryContext);
  const { addProvider, getProviders } = useContext(ProviderContext);

  // Estado local para el formulario
  const [formData, setFormData] = useState({
    name: "",
    cif: "",
    email: "",
    phone: "",
    category: "",
  });

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProvider(formData);
    alert("Proveedor añadido correctamente.");
    getProviders();
    navigate("/proveedores");

    // console.log("Formulario enviado:", formData);
  };

  return (
    <>
      {/* Cabecera retorno menu */}
      <div className="d-flex align-items-center gap-4">
        <Link to={"/"}>
          <img src={loadLogo} alt="loadLogo" />
        </Link>
        <div className="d-flex flex-column justify-content-center">
          <h1>Crear Proveedor</h1>
        </div>
      </div>
      <br />

      <form onSubmit={handleSubmit}>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="m-0">
              <input
                type="text"
                className="form-control"
                placeholder="Daniè"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <input
                type="text"
                className="form-control"
                placeholder="C12344321"
                id="cif"
                value={formData.cif}
                onChange={handleChange}
                required
              />
            </h5>
            <p className="card-text">
              <input
                type="email"
                className="form-control"
                placeholder="info@ayuda.es"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </p>
            <p className="card-text">
              <input
                type="tel"
                className="form-control"
                pattern="[0-9]*"
                maxLength="9"
                placeholder="609 123 321"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </p>
            <div className="card-text">
              <select
                className="form-select"
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option disabled value="">
                  ...
                </option>
                {categoryList.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Crear
        </button>
      </form>
    </>
  );
};

export default ProviderCreatePage;
