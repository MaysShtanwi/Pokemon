import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "./Card";
import styled from "styled-components";
import MyTitle from "./Title";
import MyPokemon from "./Pokemon";
import Image from "next/image";

const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        setCategories(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = async (title) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/${title.toLowerCase()}`
      );
      setPokemon(response.data.pokemon);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <MyTitle> Categories</MyTitle>
      <List>
        {categories.map((category) => (
          <MyCard
            key={category.name}
            width="150px"
            height="60px"
            title={category.name}
            handleClick={() => handleClick(category.name)}
          ></MyCard>
        ))}
      </List>
      <List>
        {pokemon &&
          pokemon.map((poke) => (
            <MyPokemon name={poke.pokemon?.name}></MyPokemon>
          ))}
        {pokemon.length === 0 && (
          <Image src={"/chu.gif"} width={500} height={400}></Image>
        )}
      </List>
    </div>
  );
};

export default Categories;
