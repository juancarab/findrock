import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading";
import Error from "./error";
import { render } from "@testing-library/react";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,

    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=ca94a102afc03e8b49e385f292248511&format=json"
    );
  }
  /*componentDidMount() {
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=ca94a102afc03e8b49e385f292248511&format=json"
    );
  }*/
  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    // La respuesta de la API
    const response = await fetch(url);
    const data = await response.json();
    console.log("lo que trae la api");
    // Si tengo cartel de Error, ponerlo en true
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {/* Hacemos aparecer el error */}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[2]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
          <h1>{this.props.busqueda}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
