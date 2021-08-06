import React from "react";
import Contlist from "./components/Contlist";

function createCard(Country) {
  return (
    <Contlist
      key={Country.numericCode}
      name={Country.name}
      capital={Country.capital}
      flag={Country.flag}
      region={Country.region}
      subregion={Country.subregion}
      population={Country.population}
      borders={Country.borders}
      languages={Country.languages}
    />
  );
}

export default createCard;
