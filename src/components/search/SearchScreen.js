import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/hero";
import { HeroCard } from "../hero/HeroCard";
import queryString from "query-string";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q: queryUrl = "" } = queryString.parse(location.search);

  const [{ q }, handleInputChange] = useForm({
    q: queryUrl,
  });

  const heroes = useMemo(() => getHeroByName(queryUrl), [queryUrl]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${q}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-4">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a hero..."
              className="form-control"
              name="q"
              autoComplete="off"
              onChange={handleInputChange}
              value={q}
            />
            <button
              className="btn btn-outline-primary mt-1 btn-block"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-8">
          {q === "" ? (
            <div className="alert alert-info">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">Sin resultados: {q}</div>
            )
          )}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
