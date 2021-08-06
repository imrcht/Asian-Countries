import React from "react";
import createCard from "./createCard";

export default class FetchAsianCountry extends React.Component {
  state = {
    loading: true,
    Countries: null
  };

  async componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/region/Asia";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ Countries: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.Countries) {
      return <div>didn't get a Country</div>;
    }

    return (
      <dl className="dictionary">{this.state.Countries.map(createCard)}</dl>
    );
  }
}
