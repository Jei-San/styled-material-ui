import styled from "styled-components";
import Link from "@material-ui/core/Link";

export const AccLink = styled(Link)`
  color: #5e5e5e;
  &:hover {
    text-decoration: none;
    color: rgb(0, 225, 255);
  }
`;

export const SidebarLink = styled(Link)`
  font-weight: 700;
  width: 100%;
  height: 6%;
  display: flex;
  margin-top: 15px;
  color: #5e5e5e;
  overflow: hidden;
  &:hover {
    text-decoration: none;
  }
`;
