import styled from "styled-components";
import Accordion from "@material-ui/core/Accordion";

export const CustomAccordion = styled(Accordion)`
  box-shadow: none;
  width: 100%;
  overflow: hidden;
  margin-top: 16px;
  &::before {
    background: #fff;
  }
`;
