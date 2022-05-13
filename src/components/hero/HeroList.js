import React from "react";
import { HeroCard } from "./HeroCard";
import PropTypes from "prop-types";

export const HeroList = ({ heroes }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object),
};
