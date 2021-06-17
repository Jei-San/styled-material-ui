import { Divider, AccordionSummary } from "@material-ui/core";
import React from "react";
import { CustomAccordion } from "./Accordion/AccordionElements";
import { SidebarLink } from "./Link/LinkElements";
import { SidebarContainer } from "./SidebarElements";
import {
  AccSummDiv,
  ExButtonDiv,
  ProfDisplayDiv,
  LinkCenterDiv,
  ProfMainInfo,
  ProfMainPicture,
} from "./Divs/DivElements";
import { Component } from "react";
import { StyledButton } from "./Button/ButtonElements";
import { CustomDrawer } from "./Drawer/DrawerElements";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { SidebarAccData } from "./DataFiles/SidebarAccData";
import { SidebarData } from "./DataFiles/SidebarData";

class Sidebar extends Component {
  state = { showSidebar: true, buttonRotation: true };

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
      buttonRotation: !this.state.buttonRotation,
    });
  };

  render() {
    return (
      <CustomDrawer variant="permanent" showSidebar={this.state.showSidebar}>
        <p>logo</p>
        <Divider />
        <ProfDisplayDiv>
          <ProfMainPicture
            buttonRotation={this.state.buttonRotation}
          ></ProfMainPicture>
          <ProfMainInfo buttonRotation={this.state.buttonRotation}>
            <p>juan@l3rn.io</p>
            <h1>thepirate.dev</h1>
          </ProfMainInfo>
          <ExButtonDiv buttonRotation={this.state.buttonRotation}>
            <StyledButton
              onClick={this.toggleSidebar}
              buttonRotation={this.state.buttonRotation}
            >
              <ArrowBackIcon fontSize="small"></ArrowBackIcon>
            </StyledButton>
          </ExButtonDiv>
        </ProfDisplayDiv>
        <SidebarContainer showSidebar={this.state.showSidebar}>
          <Divider />
          {SidebarData.map((item) => {
            return (
              <SidebarLink
                href={item.link}
                index={item.index}
                buttonRotation={this.state.buttonRotation}
              >
                <LinkCenterDiv buttonRotation={this.state.buttonRotation}>
                  <span>{item.icon}</span>
                  <p>{item.text}</p>
                </LinkCenterDiv>
              </SidebarLink>
            );
          })}
          {SidebarAccData.map((item) => {
            return (
              <CustomAccordion>
                <AccSummDiv>
                  <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                    {item.icon}
                    {item.title}
                  </AccordionSummary>
                </AccSummDiv>
                {item.acctext}
              </CustomAccordion>
            );
          })}
        </SidebarContainer>
      </CustomDrawer>
    );
  }
}

export default Sidebar;
