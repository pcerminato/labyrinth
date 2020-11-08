import styled from "styled-components";

export default styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  border: solid 1px #111592;
  border-radius: 5px;
  background-color: #f7f5f5;
  margin: auto;
  padding: 1em;
  height: auto;

  button.help {
    background: none;
    border: none;
    cursor: pointer;
    color: #c6c6c6;
  }

  .level {
    margin-bottom: 10px;
    text-align: center;
  }
`;
