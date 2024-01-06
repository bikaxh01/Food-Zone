import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Navigation = styled.div`
  display: flex;
  /* width: 1440px; */
  /* padding: 85px 120px 31px 120px; */
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 54px;
  background-color: #353535;
  padding-bottom: 20px;
`;
const NavComp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200vh;
  color: red;
  input {
    display: flex;
    padding: 11px 157px 10px 15px;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #ff0909;
  }
`;

const Btn = styled.div`
  display: flex;
  gap: 20px;
`;

function Nav() {
  return (
    <Navigation>
      <NavComp>
        <h1>Food-Zone</h1>
        <input type="text" placeholder="Search Food..." />
      </NavComp>
      <Btn>
        <Button btn={"All"} />
        <Button btn={"Breakfast"} />
        <Button btn={"Lunch"} />
        <Button btn={"Dinner"} />
      </Btn>
    </Navigation>
  );
}

export default Nav;
