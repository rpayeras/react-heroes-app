import React from "react";
import { HeroList } from "../hero/HeroList";
import { getHeroesByPublisher } from "../../selectors/hero";

export const DcScreen = () => {
  const heroes = getHeroesByPublisher("DC Comics");

  return (
    <>
      <h1>DcScreen</h1>
      <HeroList heroes={heroes} />
    </>
  );
};
