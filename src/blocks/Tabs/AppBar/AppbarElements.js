import { AppBar } from "@material-ui/core";
import styled from "styled-components";

export const CustomAppBar = styled(AppBar)`
  height: 48px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  background: white;
  box-shadow: 0.5px 0.4px 1px 0.01px grey;
  color: rgba(0, 0, 0, 0.87);
  position: static;
  box-sizing: border-box;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
