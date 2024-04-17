import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Nav = styled.nav`
  background-color: white;
  color: black;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  gap: 50px;
`;

const SearchContainer = styled.div`
  flex-grow: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
  box-shadow: 0 0 5px 2px lightgrey;
`;

const MyNav = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (searchTerm.trim() === "") {
        onSearch(null);
      } else {
        onSearch(searchTerm.toLowerCase());
      }
    }
  };
  return (
    <Nav>
      <Image width={150} height={50} src="/poke-logo.png" />
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for your pokemon!!"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
      </SearchContainer>
    </Nav>
  );
};

export default MyNav;
