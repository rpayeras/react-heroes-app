import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/hero";

export const HeroScreen = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const hero = useMemo(() => {
    return getHeroById(id);
  }, [id]);

  if (!hero) return <Navigate to="/" />;

  const {
    superhero,
    publisher,
    alter_ego: alterEgo,
    first_apareance: firstApareance,
    characters,
  } = hero;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/${hero.id}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {alterEgo}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Apareance:</b>
            {firstApareance}
          </li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
