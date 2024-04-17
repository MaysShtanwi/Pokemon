import React from "react";
import styled from "styled-components";
import MyTitle from "./Title";
import Image from "next/image";

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "200px"};

  &:hover {
    background-color: lightgray;
  }
`;

const CardContent = styled.div`
  color: #333;
`;

const MyCard = ({ width, height, children, title, handleClick, img }) => {
  return (
    <Card width={width} height={height} onClick={handleClick}>
      <CardContent>
        {img && <Image src={img} width={300} height={400}></Image>}
        <MyTitle isSubTitle={true}>{title}</MyTitle>
        {children}
      </CardContent>
    </Card>
  );
};

export default MyCard;
