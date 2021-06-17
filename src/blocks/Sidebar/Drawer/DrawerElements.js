import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

export const CustomDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorDockedLeft {
  }
  .MuiDrawer-paperAnchorLeft {
  }
  .MuiDrawer-paper {
    height: 965px;
    width: 100%;
    display: flex;
    position: relative;
    overflow-y: visible;
  }
  .MuiPaper-elevation0 {
    box-shadow: none;
  }
  .MuiPaper-root {
    color: rgba(0, 0, 0, 0.87);
    transition: ${(props) => (props.showSidebar ? ".3s" : ".5s")};
    background-color: #fff;
  }
`;
