import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 50px);
  grid-template-rows: 50px;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  grid-gap: 5px;
`;
