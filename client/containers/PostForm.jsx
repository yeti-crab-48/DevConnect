import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// PostForm component 
function PostForm() {
  const navigate =useNavigate();
  const [postFailed, setPostFailed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = {
      title: e.target.title.value,
      body: e.target.body.value,
      contact: e.target.contact.value,
      skills: e.target.skills.value
    };

    fetch('/api/createpost', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(success => success ? navigate('/'): setPostFailed(true))
  }

  return (
    <Page>
      <FormContainer>
        <img 
          className='form-image'
          src="https://i.pinimg.com/originals/87/b1/c1/87b1c12d2c131986c811c99c4c4b57a8.png"
        />
        <StyledForm onSubmit={handleSubmit}>
          <h4>New Listing</h4>
          <div>
            <Header>Title</Header>
            <Input type="text" name="title"></Input>
          </div>
          <div>
            <Header>Skills Required</Header>
            <Input type="text" name="skills"></Input>
          </div>
          <div>
            <Header>Contact Info</Header>
            <Input type="text" name="contact"></Input>
          </div>
          <div>
            <Header>Description</Header>
            <textarea className="body-text-area" name="body" required></textarea>
          </div>
          <button type="submit">POST</button>
          <button 
            style={{ backgroundColor: 'rgb(244,244,244)', color: 'grey'}}
            onClick={()=>navigate('/')}
          >
            BACK TO HOMEPAGE
          </button>
        </StyledForm>
        {postFailed ? <p style={{color: 'red'}}>Failed to submit new listing</p> : null}
      </FormContainer>
    </Page>
  );
}

// Styled components 
const FormContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1.5px solid grey;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
  max-height: 800px;
  max-width: 1000px;

  .form-image {
    border-radius: inherit;
    width: 40%;
  }
`;

const StyledForm = styled.form`
  width: 60%;
  align-self: stretch;
  height: 100%;
  padding: 2em 2em;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  justify-content: space-evenly;

  h4 {
    align-self: center;
    margin: 0px;
    color: rgb(100,100,100);
  }

  button {
    cursor: pointer;
    border-radius: 10px;
    border 1px solid green;
    background-color: rgb(113,180, 87);
    color: white;
    font-size: .75rem;
    padding: 5px 2px;
  }
  
  .body-text-area {
    border: none;
    font-size: 8pt;
    height: 22em; 
    resize: none; 
    overflow-y: auto;
    width: calc(100% - 1em);
    border-bottom: 2px solid lightgrey;
    &:focus {
      outline: none;
      border-bottom: 2px solid teal;
    }
  }
`;

const Header = styled.div`
  font-size: .5rem;
  text-transform: uppercase;
  color: grey;
`;

const Page = styled.div`
  // background-color: rgb(110,110,110);
  background: linear-gradient(0.25turn, #7af0e0, #98ddeb ,#658bc9);
  width: 100%;
  height: 100%;
  font-family: arial;
  display: flex;
  row-gap: 30%;
  justify-content: space-around;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  font-size: 12pt;
  width: calc(100% - 1em);
  border-bottom: 2px solid lightgrey;
  &:focus {
    outline: none;
    border-bottom: 2px solid teal;
  }
`;

export default PostForm;