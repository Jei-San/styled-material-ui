import styled from "styled-components";

export const StyledButton = styled.button`
  opacity: 0;
  display: flex;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
  transform: ${(props) =>
    props.buttonRotation ? "rotate(0deg)" : "rotate(180deg)"};
  &:hover {
    opacity: 1;
  }
`;
