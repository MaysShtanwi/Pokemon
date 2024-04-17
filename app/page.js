"use client";
import { useState } from "react";
import MyNav from "../components/Nav";
import styled from "styled-components";
import MyPokemon from "../components/Pokemon";
import Categories from "../components/Categories";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  min-height: 100vh;
  background-color: #edf3fb;
  gap: 20px;
`;

export default function Home() {
  const [displayPokemon, setDisplayPokemon] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSearch = (searchTerm) => {
    setSelectedPokemon(searchTerm);
    setDisplayPokemon(!!searchTerm);
  };

  return (
    <Main>
      <MyNav onSearch={handleSearch} />
      {displayPokemon && <MyPokemon name={selectedPokemon} />}
      {!displayPokemon && <Categories></Categories>}
    </Main>
  );
}
