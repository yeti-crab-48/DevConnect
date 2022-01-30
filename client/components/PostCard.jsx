import React from "react";
import styled from "styled-components";



const PostCard = ({key, id, title, createdAt}) => {

  return (
    console.log(title, createdAt), 
    <StyledPostCard key={key}>
        <StyledTitle> {title} </StyledTitle>
        {createdAt}
    </StyledPostCard>
  )
};

const StyledPostCard = styled.div`
width: 150px;
height: 250px;
overflow-y: scroll;
border: 2px solid black;
border-radius: 8px;
`;

const StyledTitle = styled.p`
font-size: 16pt;
font-weight: bold;
`

export default PostCard;