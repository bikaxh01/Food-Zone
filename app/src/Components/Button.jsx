import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  height: 200;
  background: #ff4343;
`;

function Button({btn}) {
  return <Buttons>{btn}</Buttons>;
}

export default Button;
