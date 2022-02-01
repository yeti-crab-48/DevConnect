import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


// VerticalNavbar component
const VerticalNavbar = () => {

  const details = useRef();
  const [filter, setFilter] = useState('newest');

  const handleFilter = (filter) => {
    details.current.removeAttribute('open');
    setFilter(filter);
  }

  useEffect(() => {
    const spans = details.current.querySelectorAll('span');
    spans.forEach(el => {
      if(el.textContent.toLowerCase() === filter) el.classList.add('selected');
      else el.classList.remove('selected');
    })
  }, [filter])

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/register')
    fetch('/api/user/logout')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <StyledNavbar>
      <InnerContainer>
        <div>
          <StyleButton onClick={() => navigate('/form')}>Post Listing</StyleButton>
          <StyleButton onClick={handleLogout}>Logout</StyleButton>
        </div>
        <div>
          <details ref={details}>
            <summary>Filter Content</summary>
            <FilterItem className='selected' onClick={() => handleFilter('newest')}>Newest</FilterItem>
            <FilterItem onClick={() => handleFilter('most popular')}>Most Popular</FilterItem>
            <FilterItem onClick={() => handleFilter('controversial')}>Controversial</FilterItem>
          </details>
        </div>
        <div>
          <InputField>
            <label htmlFor="site-search">Search the site:</label>
            <StyledInput type="search" id="site-search" name="search"/>
            <StyleButton>Search</StyleButton>
          </InputField>
        </div>
      </InnerContainer>
    </StyledNavbar>
  );
};

// Styled components
const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column; 
  min-width: 230px;
  position: fixed;
  height: 100vh;
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
  margin-left: 16px;
  &.selected::before {
    content: '*';
    position: absolute;
    transform: translate(-14px, 3px)
  }
  &:hover {
    color: rgba(0,0,0,0.6);
  }
`;
const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
// max-height: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px; 
  width: 80%;
  margin: 0 auto;
  > * {
    margin: 20px 0;
  }
  summary {
    cursor: pointer;
    
  }
`;

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
`;

const StyledInput = styled.input`
  border-radius: 5px ;
  border: 0.5px solid grey;
`;

export default VerticalNavbar;
