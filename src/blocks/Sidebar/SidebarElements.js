import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100%;
  width: ${(props) => (props.showSidebar ? "300px" : "50px")};
  transition: width 0.5s;
  overflow-y: visible;
`;
