import React from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import Image from "next/image";
import MyTitle from "./Title";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ChartWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Wrapper = styled.div`
  color: black;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border-radius: 10px;
  flex-wrap: wrap;
`;

const Modal = ({ children, onClose, chartData, data }) => {
  const options = {
    chart: {
      id: "basic-bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: chartData.map((stat) => stat.name),
      labels: {
        show: true,
        style: {
          colors: "#000",
          fontSize: "12px",
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      style: {
        colors: ["#000"],
        fontSize: "12px",
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#000",
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      enabled: true,
    },
    colors: ["cornflowerblue"],
  };
  const img = data.sprites?.other?.home?.front_default;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
        <ChartWrapper>
          <InfoWrapper>
            <Image src={img} width={200} height={200}></Image>
            <InfoWrapper>
              <MyTitle>{data.name}</MyTitle>
              <div>
                <MyTitle isSubTitle={true}>Abilities</MyTitle>
                <div style={{ display: "flex", gap: "10px" }}>
                  {data.abilities.map((item) => (
                    <Wrapper>{item?.ability?.name}</Wrapper>
                  ))}
                </div>
              </div>
              <div>
                <MyTitle isSubTitle={true}>Height</MyTitle>
                <Wrapper>{data.height}</Wrapper>
              </div>
              <div>
                <MyTitle isSubTitle={true}>Weight</MyTitle>
                <Wrapper>{data.weight}</Wrapper>
              </div>
              <div>
                <MyTitle isSubTitle={true}>Base Exp</MyTitle>
                <Wrapper>{data.base_experience}</Wrapper>
              </div>
            </InfoWrapper>
          </InfoWrapper>
          <ReactApexChart
            options={options}
            series={[{ data: chartData.map((stat) => stat.value) }]}
            type="bar"
            height={300}
          />
        </ChartWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
