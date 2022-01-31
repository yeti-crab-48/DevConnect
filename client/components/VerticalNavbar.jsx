import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const VerticalNavbar = () => {
  return (
    <StyledNavbar>
      <Link to='/register'>Register</Link><br/>
      <Link to='/form'>Create post</Link>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column; 
  width: 200px;
  background-color: darkgrey;
  // margin: 0px;
  // padding: 0px;
`;

export default VerticalNavbar;
