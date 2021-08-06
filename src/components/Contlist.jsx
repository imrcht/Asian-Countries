import React from "react";

function Contlist(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="flag" role="img" aria-label="Tense Biceps">
            <img src={props.flag} width="100" alt="Flag" />
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>
           <div>
              <b> Capital:</b> {props.capital}
           </div>
           <div>
              <b>Region:</b> {props.region}
           </div>
           <div>
              <b>Sub-region:</b> {props.subregion}
           </div>
           <div>
              <b>Populatoin:</b> {props.population}
           </div>
           <div>
              <b>Borders:</b>
              {props.borders.map((border) => {
                return <span> {border} </span>;
              })}
           </div>
           <div>
              <b> Lang: </b>
              {props.languages.map((language) => {
                return <span> {language.name} </span>;
              })}
           </div>
         </dd>
      </div>
    </dl>
  );
}

export default Contlist;
