import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

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
  return(
    <>
      <Form onSubmit={handleSubmit}>
        <Logo src=''></Logo>
        <Fieldset>
          <Legend>Listing Form</Legend>
          <Label>Title:
            <Input type="text" name="title" required/>
          </Label>
          <Label>Skills Required:
            <Input type="text" name="skills" required/>
          </Label>
          <Label>Contact Info:
            <Input type="text" name="contact" required/>
          </Label>
          <Label>Description:
            <Textarea name="body" required></Textarea>
          </Label>
        <Button type="submit">Post</Button>
        </Fieldset>
      </Form>
      {postFailed ? <p style={{color: 'red'}}>FAILED TO SUBMIT POST</p> : null}
    </>
  )
}

const Logo = styled.img`
`

const Legend = styled.legend`
  margin: 0 auto;
`

const Fieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  font-size: 1.5rem;
  width: 50%;
  margin: 0 auto;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`
const Button = styled.button`
  margin-top: 20px;
  align-self: flex-end;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
`
const Textarea = styled.textarea`
  width: 60%;
  height: 15rem;
  resize: none;
  padding: 10px;
`

const Input = styled.input`
  width: 40%;
  padding: 5px;
`


export default PostForm;