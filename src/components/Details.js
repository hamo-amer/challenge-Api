import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [cocktail, setCocktail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(res => setCocktail(res.drinks[0]))
      .catch(err => console.log(err));
  }, [id]);
  return (
    <div>
      <h1>{cocktail.strDrink}</h1>
    </div>
  );
}

export default Details;
