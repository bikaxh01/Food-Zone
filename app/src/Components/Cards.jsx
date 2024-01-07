import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Cardcontainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  color: white;
`;

const Foodcard = styled.div`
 `

function Cards({Data}) {
  return (
    <Cardcontainer>
      {Data?.map((foods) => {
        <Foodcard key={foods.name}>{foods.text}</Foodcard>;
      })}
    </Cardcontainer>
  );
}

export default Cards;
