import React from "react";
import { HeroList } from "../hero/HeroList";
import { getHeroesByPublisher } from "../../selectors/hero";

export const MarvelScreen = () => {
  const heroes = getHeroesByPublisher("Marvel Comics");

  return (
    <>
      <h1>MarvelScreen</h1>
      <HeroList heroes={heroes} />
    </>
  );
};
