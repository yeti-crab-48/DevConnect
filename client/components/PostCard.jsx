import React from "react";
import styled from "styled-components";



/**
 * 
 * PostCard Component
 */
const PostCard = ({key, id, title, createdAt, clickHandler }) => {
  return (
    // add new relevant properties to props in the component 
    <StyledPostCard onClick={() => {clickHandler(id)}} key={key}>
        <StyledTitle> {title} </StyledTitle>
        {id}
        {createdAt}
    </StyledPostCard>
  )
};

const StyledPostCard = styled.div`
  width: 200px;
  height: 200px;
  // overflow-y: scroll;
  border: 2px solid black;
  border-radius: 8px;
  &:hover {
    border-color: blue;
  }
`;

const StyledTitle = styled.p`
  font-size: 16pt;
  font-weight: bold;
`

export default PostCard;