import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const VerticalNavbar = () => {
  return (
    <StyledNavbar>
      <InnerContainer>
        <StyleButton>Logout</StyleButton>
        <div>
          <details>
            <summary>Filter Content</summary>
            <FilterItem>Newest</FilterItem>
            <FilterItem>Latest</FilterItem>
            <FilterItem>Most Popular</FilterItem>
          </details>
        </div>

        <InputField>
          <label htmlFor="site-search">Search the site:</label>
          <StyledInput type="search" id="site-search" name="search"/>
          <StyleButton>Search</StyleButton>
        </InputField>
      </InnerContainer>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column; 
  min-width: 230px;
  background-color: rgba(35, 221, 193, 0.49);
  position: fixed;
  height: 100%;
  // margin: 0px;
  // padding: 0px;
  span {
    cursor: pointer;
    width: fit-content;
    &:hover {
      color: rgba(0,0,0,0.6);
    }
  }
`;

const FilterItem = styled.span`
  display: block;
  cursor: pointer;
  &:hover {
    color: rgba(0,0,0,0.6);
  }
`
const InputField = styled.div`
  display: flex;
  flex-direction: column;
`

const InnerContainer = styled.div`
  // height: 50%;
  // max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  > * {
    margin: 20px 0;
  }
  summary {
    cursor: pointer;
    
  }
`

const StyleButton = styled.button`
margin-top: 5px;
padding: 5px 10px;
border-radius: 5px;
background-color: rgba(0, 59, 209, 0.8);
border: 1px solid rgba(24, 63, 161, 0.92);
color: white;
&:hover{
  background-color:rgba(35, 115, 221, 0.49);
  border: 1px solid rgba(71, 213, 243, 0.79);
  color: black;
  cursor: pointer;
};
`
const StyledInput = styled.input`
border-radius: 5px ;
border: 0.5px solid grey;
`
export default VerticalNavbar;
