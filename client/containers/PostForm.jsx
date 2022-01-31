import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" name="title" required/>
        </label><hr/>
        <label>Description:
          <textarea name="body" required></textarea>
        </label><hr/>
        <label>Skills Required:
          <input type="text" name="skills" required/>
        </label><hr/>
        <label>Contact Info:
          <input type="text" name="contact" pattern="[0-9]{10}" required/>
        </label><hr/>
        <button type="submit">Submit</button>
      </form>
      {postFailed ? <p style={{color: 'red'}}>FAILED TO SUBMIT POST</p> : null}
    </>
  )
}

export default PostForm;