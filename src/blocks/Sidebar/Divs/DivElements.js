import styled from "styled-components";

export const AccSummDiv = styled.div`
  display: flex;
  color: #5e5e5e;
  width: 100%;
  height: 80%;
  &:hover {
    background: rgb(245, 245, 245);
    color: rgb(0, 225, 255);
    cursor: pointer;
  }
`;

export const ExButtonDiv = styled.div`
  display: flex;
  height: 31.3%;
  margin: auto;
  position: relative;
  left: ${(props) => (props.buttonRotation ? "12px" : "18px")};
  top: 45px;
`;

export const ProfDisplayDiv = styled.div`
  height: ${(props) => (props.buttonRotation ? "100px" : "100px")};
  width: 100%;
  display: flex;
`;

export const LinkCenterDiv = styled.div`
  font-weight: 700;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: start;
  overflow: hidden;
  &:hover {
    text-decoration: none;
    background: rgb(245, 245, 245);
    color: rgb(0, 225, 255);
    cursor: pointer;
  }
  span {
    position: relative;
    top: 15px;
    left: 15px;
  }
  p {
    margin-left: 40px;
    overflow: ${(props) => (props.buttonRotation ? "hidden" : "hidden")};
  }
`;

export const ProfMainInfo = styled.div`
  width: 100%;
  height: 60px;
  margin: auto;
  margin-left: 10px;
  display: ${(props) => (props.buttonRotation ? "" : "none")};
  transition: 0.5s;
  p {
    margin-top: 9px;
    margin-bottom: -10px;
    overflow: ${(props) => (props.buttonRotation ? "hidden" : "")};
  }
  h1 {
    font-size: 17px;
    overflow: ${(props) => (props.buttonRotation ? "hidden" : "")};
  }
`;

export const ProfMainPicture = styled.div`
  background: #b3b3b3;
  border-radius: 50%;
  margin-top: ${(props) => (props.buttonRotation ? "17px" : "30px")};
  margin-left: ${(props) => (props.buttonRotation ? "20px" : "-13px")};
  height: ${(props) => (props.buttonRotation ? "60px" : "30px")};
  width: ${(props) => (props.buttonRotation ? "100px" : "30px")};
  position: ${(props) => (props.buttonRotation ? "" : "relative")};
  left: ${(props) => (props.buttonRotation ? "" : "24px")};
  z-index: 1;
`;
