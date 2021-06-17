import styled from "styled-components";
import { Button } from "@material-ui/core";

export const ProfileButton = styled(Button)`
  padding: 6px 8px;
  color: #fff;
  width: 355px;
  font-size: 13px;
  font-weight: 500;
  height: 30px;
  border-radius: 5px;
  letter-spacing: 0.02857em;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  -moz-user-select: none;
  background-color: #024878;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  text-transform: none;
  margin-top: 10px;
  &:hover {
    background: grey;
  }
`;
