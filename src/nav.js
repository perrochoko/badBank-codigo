import {NavLink} from 'react-router-dom';



function NavBar(){
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">BadBank</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Crea tu cuenta en este Banco!!" to="/createaccount">Crear Cuenta</NavLink>
            <NavLink className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Realiza muchos Depositos aqui!!" to="/deposit">  Depositos  </NavLink>
            <NavLink className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Realiza Retiros, pero no muchos ok!!" to="/withdraw">  Retiros  </NavLink>
            <NavLink className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Revisa tus transacciones aqui!!" to="/alldata">  Historial de Registros  </NavLink>
          </div>
        </div>
      </div>
    </nav> 
    );
};
export default NavBar;
