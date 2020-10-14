import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import { ETIME } from "constants";
import ReactDOM from "react-dom";
import Modal from "./components/modal";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // Luego de apretar el boton submit, va para /busqueda
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
    modal: false,
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="Form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  // Todo el value se lo manda a busqueda
                  value={this.props.busqueda}
                  placeholder="Busca un Dj"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng" onClick={this.handleClick}>
                  EscuelaDevRock
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            {" "}
            <h4>Aguante DevRock</h4>{" "}
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
