import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego: alterEgo,
  first_appareance: firstAppareance,
  characters,
}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={`/assets/${id}.jpg`}
              className="card-img-top"
              alt={superhero}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alterEgo}</p>
              {alterEgo !== characters && (
                <p className="text-muted">{characters}</p>
              )}

              <p className="card-text">
                <small className="text-muted"></small>
              </p>
              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: propTypes.string,
  superhero: propTypes.string,
  publisher: propTypes.string,
  alter_ego: propTypes.string,
  first_appareance: propTypes.string,
  characters: propTypes.string,
};
