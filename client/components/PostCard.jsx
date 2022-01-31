import React from "react";
import styled from "styled-components";



/**
 * 
 * PostCard Component
 */
const PostCard = (props) => {
  const {key, username, numapplicant, id, title, created_at, clickHandler} = props;
  return (
    // add new relevant properties to props in the component 
    <StyledPostCard onClick={() => {clickHandler(id)}} key={key}>
        <StyledTitle> {title} </StyledTitle>
        {<p>{new Date(created_at).toLocaleDateString(undefined)}</p>}
        {username}
        {<p>applicants: {numapplicant}</p>}
    </StyledPostCard>
  )
};

const StyledPostCard = styled.div`
  width: 200px;
  height: 200px;
  border: 0.25px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;
  background-color: rgba(130, 129, 129, 0.28);
  &:hover {
    border-color: rgba(212, 231, 231, 0.65);
    background-color: rgba(206, 169, 188, 0.28);
  }
`;

const StyledTitle = styled.p`
  font-size: 16pt;
  font-weight: bold;
  font-family: sans-serif;
`

export default PostCard;