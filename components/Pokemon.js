import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "./Card";
import Modal from "./Modal";

const MyPokemon = ({ name }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const img = data.sprites?.other?.home?.front_default;
  const statsData = data.stats.map((stat) => ({
    name: stat.stat.name.toUpperCase(),
    value: stat.base_stat,
  }));

  return (
    <>
      <MyCard
        width={300}
        height={400}
        title={data.name}
        img={img}
        handleClick={openModal}
      ></MyCard>
      {isModalOpen && (
        <Modal data={data} chartData={statsData} onClose={closeModal}></Modal>
      )}
    </>
  );
};

export default MyPokemon;
