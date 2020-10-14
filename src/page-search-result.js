import React, { Component } from "react";
import ArtistCard from "./components/artist-card.js";
import SearchBar from "./components/search-bar.js";
import { render } from "@testing-library/react";
import SearchResult from "./components/search-result";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    console.log(search, " lo que trae la url");
    this.setState({
      busqueda: search,
    });
  }
  componentWillMount() {}
  componentWillUnmount() {}
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
