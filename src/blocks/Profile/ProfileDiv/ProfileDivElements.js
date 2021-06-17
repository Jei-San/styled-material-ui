import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 966px;
  width: 30%;
  margin-left: 1%;
  display: inline-block;
`;

export const ProfilePhoto = styled.div`
  height: 70px;
  width: 70px;
  margin: auto;
  margin-top: 20px;
  background: #b3b3b3;
  border-radius: 50%;
  p {
    position: relative;
    top: 21px;
    left: 30px;
    font-size: 20px;
    color: white;
  }
`;

export const ProfileTitle = styled.div`
  height: 15%;
  width: 60%;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  h1 {
    font-size: 20px;
    color: #024878;
    font-weight: 600;
    margin-bottom: 5px;
  }
  span {
    font-size: 18px;
    opacity: 70%;
  }
  p {
    font-size: 14px;
    opacity: 70%;
  }
`;

export const ProfileLine = styled.div`
  width: 94%;
  margin: auto;
`;

export const ProfButtonDiv = styled.div`
  width: 350px;
  margin: auto;
  margin-top: -10px;
  margin-bottom: 20px;
  p {
    color: #024878;
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

export const ProfInput = styled.div`
  width: 350px;
  margin: auto;
  p {
    color: #024878;
    font-size: 18px;
    margin-bottom: -10px;
  }
`;

export const ProfInputButton = styled.div`
  width: 100%;
  margin: auto;
  height: 450px;
`;
