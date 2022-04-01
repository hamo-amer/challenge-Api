import React, { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";

function List() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(res => setCocktails(res.drinks))
      .catch(err => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingTop: "80px",
        width: "95%",
        margin: "auto",
      }}
    >
      {cocktails.map(cocktail => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
}

export default List;
