import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const ProfTextField = styled(TextField)`
  .MuiFilledInput-underline::after {
    display: none;
  }
  .MuiFilledInput-underline::before {
    display: none;
  }
  element {
  }
  .MuiFilledInput-root {
    position: relative;
    transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    background-color: #e6e6e6;
    border-radius: 6px;
  }
  .MuiInputBase-fullWidth {
    width: 100%;
  }
  .MuiInputBase-root {
    color: rgba(0, 0, 0, 0.87);
    cursor: text;
    display: inline-flex;
    position: relative;
    font-size: 1rem;
    box-sizing: border-box;
    align-items: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;
    margin-top: 2px;
    margin-bottom: -20px;
    margin-left: 3px;
  }
  input {
    color: black;
    padding: 8px 10px;
    font: inherit;
    width: 100%;
    border: 0;
    height: 35px;
    margin: 0;
    display: block;
    background: none;
    box-sizing: content-box;
    animation-name: mui-auto-fill-cancel;
    letter-spacing: inherit;
    animation-duration: 10ms;
    -webkit-tap-highlight-color: transparent;
    cursor: text;
  }
`;
